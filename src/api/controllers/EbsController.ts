import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import {
  Indicator,
  MDHARURA_INDICATORS,
  TaskPage,
  Unit,
  UnitPage,
  formatIndicator,
  formatTask,
  MdharuraIndicatorsQuery,
  MdharuraUnitsQuery,
  MdharuraTasksQuery,
} from '../../utils/helpers/mdharura';
import DocumentService from '../services/DocumentService';
import Logger from '../../utils/logger';
import { DocumentMdharuraIndicatorsInput } from '../models/DocumentMdharuraIndicators';
import { encodeQueryString } from '../../utils/helpers';
import { getDates } from '../../utils/helpers/date';
import moment from 'moment';

const CHUNK_SIZE = 20;
const UNITS_LIMIT = 50;
const TASKS_LIMIT = 50;

class EbsController {
  constructor() {
    this.getMdharuraAnalytics = this.getMdharuraAnalytics.bind(this);
    this.getMdharuraData = this.getMdharuraData.bind(this);
    this.getSubcountyUnits = this.getSubcountyUnits.bind(this);
  }

  async getMdharuraData(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      Logger.info('Mediator: [mDharura Channel] Fetching mDharura data');

      const taskPage = await this.getMdharuraTasks({
        page: 1,
        limit: TASKS_LIMIT,
        state: 'live',
        dateStart: moment().startOf('day').subtract(7, 'days').toISOString(),
        dateEnd: moment().endOf('day').toISOString(),
      });
      let page = taskPage.page;
      const pages = taskPage.pages;

      let total = taskPage.docs.length;

      Logger.info('Mediator: [mDharura Channel] Processing mDharura data');

      const docs = taskPage.docs.map(formatTask);
      await DocumentService.bulkCreateOrUpdateMdharuraDocument(docs);

      page = page + 1;
      while (page <= pages) {
        const taskPage = await this.getMdharuraTasks({
          page: page,
          limit: TASKS_LIMIT,
          state: 'live',
          dateStart: moment().startOf('day').subtract(7, 'days').toISOString(),
          dateEnd: moment().endOf('day').toISOString(),
        });

        const docs = taskPage.docs.map(formatTask);
        await DocumentService.bulkCreateOrUpdateMdharuraDocument(docs);

        total = total + taskPage.page;
        page = taskPage.page + 1;
      }

      Logger.info('Mediator: [mDharura Channel] Saved mDharura data');

      res.status(200).send({
        message: 'Fetched mDharura data succesfully',
        data: {
          docs: {
            total: taskPage.docs.length,
          },
        },
        success: true,
      });
    } catch (error) {
      Logger.warn('Mediator: [mDharura Channel] An error occured');
      Logger.error(error);
      next(error);
    }
  }

  async getMdharuraAnalytics(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      Logger.info('Mediator: [mDharura Analytics Channel] Fetching mDharura analytics');

      const dateStart = moment().startOf('day');
      const dateEnd = moment().endOf('day');

      const subcounties: Unit[] = [];
      const units: Unit[] = [];

      Logger.info('Mediator: [mDharura Analytics Channel] Fetching Subcounties');

      const unitPage = await this.getMdharuraUnits({ page: 1, type: 'Subcounty', state: 'live', limit: UNITS_LIMIT });
      subcounties.push(...unitPage.docs);

      let page = unitPage.page;
      const pages = unitPage.pages;

      page = page + 1;
      while (page <= pages) {
        const unitPage = await this.getMdharuraUnits({
          page: page,
          type: 'Subcounty',
          state: 'live',
          limit: UNITS_LIMIT,
        });
        subcounties.push(...unitPage.docs);
        page = unitPage.page + 1;
      }

      let subcountyChunk = [];

      Logger.info('Mediator: [mDharura Analytics Channel] Fetching Community units, Health facilities');

      for await (const subcounty of subcounties) {
        subcountyChunk.push(subcounty);
        if (subcountyChunk.length >= CHUNK_SIZE) {
          const communityUnitsTask = subcountyChunk.map((unit: Unit) =>
            this.getSubcountyUnits({ subcounty: unit, type: 'Community unit' }),
          );
          const healthFacilityTask = subcountyChunk.map((unit: Unit) =>
            this.getSubcountyUnits({ subcounty: unit, type: 'Health facility' }),
          );
          const subcountyUnits = (await Promise.all([...communityUnitsTask, ...healthFacilityTask])).flat();
          units.push(...subcountyUnits);

          subcountyChunk.length = 0;
        }
      }

      const communityUnitsTask = subcountyChunk.map((unit: Unit) =>
        this.getSubcountyUnits({ subcounty: unit, type: 'Community unit' }),
      );
      const healthFacilityTask = subcountyChunk.map((unit: Unit) =>
        this.getSubcountyUnits({ subcounty: unit, type: 'Health facility' }),
      );

      const subcountyUnits = (await Promise.all([...communityUnitsTask, ...healthFacilityTask])).flat();
      units.push(...subcountyUnits);

      Logger.info(`Mediator: [mDharura Analytics Channel] Fetching Unit Indicators, Units: ${units.length}`);

      let unitsChunk = [];
      for await (const unit of units.slice(0, 50)) {
        unitsChunk.push(unit);

        if (unitsChunk.length >= CHUNK_SIZE) {
          const indicatorTask = unitsChunk.map((unit: Unit) =>
            this.getMdharuraIndicators(
              {
                unitId: unit._id,
                dateStart: dateStart.toISOString(),
                dateEnd: dateEnd.toISOString(),
                state: 'live',
              },
              { returnDate: true },
            ),
          );

          const indicatorLast7DaysTask = getDates(dateStart.subtract(7, 'days'), dateEnd.subtract(1, 'days')).flatMap(
            (date: Date) =>
              unitsChunk.map((unit: Unit) =>
                this.getMdharuraIndicators(
                  {
                    unitId: unit._id,
                    dateStart: moment(date).startOf('day').toISOString(),
                    dateEnd: moment(date).endOf('day').toISOString(),
                    state: 'live',
                  },
                  { returnDate: true },
                ),
              ),
          );

          const docs: DocumentMdharuraIndicatorsInput[] = (
            await Promise.all([...indicatorTask, ...indicatorLast7DaysTask])
          ).flatMap(([unit, indicators, dateStart, dateEnd]) => {
            const indicatorsMap = new Map(
              indicators.map((indicator) => [MDHARURA_INDICATORS[indicator.code] as string, indicator.value]),
            );

            return {
              ...formatIndicator(unit, indicatorsMap),
              ...{ DATE_START: dateStart, DATE_END: dateEnd },
            };
          });

          await DocumentService.bulkCreateOrUpdateMdharuraIndicatorsDocument(docs);

          unitsChunk.length = 0;
        }

        Logger.info(`Mediator: [mDharura Analytics Channel] Processing Unit Indicators, Unit: ${unit.name}`);
      }

      const indicatorTask = unitsChunk.map((unit: Unit) =>
        this.getMdharuraIndicators(
          {
            unitId: unit._id,
            dateStart: dateStart.toISOString(),
            dateEnd: dateEnd.toISOString(),
            state: 'live',
          },
          { returnDate: true },
        ),
      );

      const indicatorLast7DaysTask = getDates(dateStart.subtract(7, 'days'), dateEnd.subtract(1, 'days')).flatMap(
        (date: Date) =>
          unitsChunk.map((unit: Unit) =>
            this.getMdharuraIndicators(
              {
                unitId: unit._id,
                dateStart: moment(date).startOf('day').toISOString(),
                dateEnd: moment(date).endOf('day').toISOString(),
                state: 'live',
              },
              { returnDate: true },
            ),
          ),
      );

      const docs: DocumentMdharuraIndicatorsInput[] = (
        await Promise.all([...indicatorTask, ...indicatorLast7DaysTask])
      ).flatMap(([unit, indicators, dateStart, dateEnd]) => {
        const indicatorsMap = new Map(
          indicators.map((indicator) => [MDHARURA_INDICATORS[indicator.code] as string, indicator.value]),
        );

        return {
          ...formatIndicator(unit, indicatorsMap),
          ...{ DATE_START: dateStart, DATE_END: dateEnd },
        };
      });

      await DocumentService.bulkCreateOrUpdateMdharuraIndicatorsDocument(docs);

      Logger.info(`Mediator: [mDharura Analytics Channel] Fetched Unit Indicators, Units: ${units.length}`);

      res.status(200).send({
        message: 'Fetched Mdharura Indicators succesfully',
        data: {
          docs: {
            total: units.length,
          },
        },
        success: true,
      });
    } catch (error) {
      Logger.warn('Mediator: [mDharura Analytics Channel] An error occured');
      Logger.error(error);
      next(error);
    }
  }

  async getSubcountyUnits({
    subcounty,
    type,
  }: {
    subcounty: Unit;
    type: 'Community unit' | 'Health facility';
  }): Promise<Unit[]> {
    const units: Unit[] = [];

    const unitPage = await this.getMdharuraUnits({
      page: 1,
      type: type,
      parent: subcounty._id,
      state: 'live',
      limit: UNITS_LIMIT,
    });
    units.push(...unitPage.docs);

    let page = unitPage.page;
    let pages = unitPage.pages;
    while (page <= pages) {
      const unitPage = await this.getMdharuraUnits({
        page: page,
        parent: subcounty._id,
        type: type,
        state: 'live',
        limit: UNITS_LIMIT,
      });

      units.push(...unitPage.docs);

      page = page + 1;
    }

    return units;
  }

  async getMdharuraTasks(query: MdharuraTasksQuery): Promise<TaskPage> {
    const mDharuraResponse = await fetch(
      'https://api.m-dharura.health.go.ke/v1/shield/data' + encodeQueryString(query),
    );

    const data = await mDharuraResponse.json();
    return data['taskPage'] as TaskPage;
  }

  async getMdharuraUnits(query: MdharuraUnitsQuery): Promise<UnitPage> {
    const mDharuraResponse = await fetch(
      'https://api.m-dharura.health.go.ke/v1/shield/unit' + encodeQueryString(query),
    );

    const data = await mDharuraResponse.json();
    return data['unitPage'] as UnitPage;
  }

  async getMdharuraIndicators(
    query: MdharuraIndicatorsQuery,
    options: { returnDate?: boolean } = { returnDate: false },
  ): Promise<[Unit, Indicator[]] | [Unit, Indicator[], Date, Date]> {
    const { returnDate } = options;
    const mDharuraResponse = await fetch(
      'https://api.m-dharura.health.go.ke/v1/shield/analytics' + encodeQueryString(query),
    );

    const data = await mDharuraResponse.json();
    const unit = data['unit'] as Unit;
    const indicators = data['indicators'].map((indicator: Indicator) => indicator) as Indicator[];

    if (returnDate) {
      return [unit, indicators, moment(query.dateStart).toDate(), moment(query.dateEnd).toDate()];
    }
    return [unit, indicators];
  }
}

export default new EbsController();
