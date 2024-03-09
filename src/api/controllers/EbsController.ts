import { NextFunction, Request, Response } from 'express';
import fetch from 'node-fetch';
import {
  Indicator,
  MDHARURA_INDICATORS,
  TaskPage,
  Unit,
  formatIndicator,
  formatTask,
  MdharuraIndicatorsQueryParams,
} from '../../utils/helpers/mdharura';
import DocumentService from '../services/DocumentService';
import Logger from '../../utils/logger';
import { DocumentMdharuraIndicatorsInput } from '../models/DocumentMdharuraIndicators';
import { encodeQueryString } from '../../utils/helpers';

class EbsController {
  async getMdharuraData(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const mDharuraResponse = await fetch('https://api.m-dharura.health.go.ke/v1/shield/data');

      const headerDate =
        mDharuraResponse.headers && mDharuraResponse.headers.get('date')
          ? mDharuraResponse.headers.get('date')
          : 'no response date';

      Logger.info('mDharura Response Status Code:', res.statusCode);
      Logger.info('Date in Response header:', headerDate);

      const data = await mDharuraResponse.json();

      const taskPage = data['taskPage'] as TaskPage;
      const page = taskPage.page;
      const pages = taskPage.pages;
      let successCount = 0;
      let errorCount = 0;

      if (taskPage.docs.length > 0) {
        for (const doc of taskPage.docs) {
          const ebsDoc = formatTask(doc);

          try {
            await DocumentService.createMdharuraDocument(ebsDoc);
            successCount += 1;
          } catch (error) {
            errorCount += 1;
            Logger.info(error);
          }
        }
      }

      res.status(200).send({
        message: 'Fetched EBS Data succesfully',
        data: {
          docs: {
            total: taskPage.docs.length,
            success: successCount,
            error: errorCount,
          },
        },
        success: true,
      });
    } catch (error) {
      Logger.error(error);
      next(error);
    }
  }

  async getMdharuraAnalytics(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const queryParams: MdharuraIndicatorsQueryParams = {
        unitId: '611a3db72313d40efdec68c5',
      };
      const mDharuraResponse = await fetch(
        'https://api.m-dharura.health.go.ke/v1/shield/analytics' + encodeQueryString(queryParams),
      );

      const headerDate =
        mDharuraResponse.headers && mDharuraResponse.headers.get('date')
          ? mDharuraResponse.headers.get('date')
          : 'no response date';

      Logger.info('mDharura Response Status Code:', res.statusCode);
      Logger.info('Date in Response header:', headerDate);

      const data = await mDharuraResponse.json();

      const unit = data['unit'] as Unit;
      const indicators = data['indicators'].map((indicator: Indicator) => indicator) as Indicator[];

      const indicatorsMap = new Map(
        indicators.map((indicator) => [MDHARURA_INDICATORS[indicator.code] as string, indicator.value]),
      );

      const docs: DocumentMdharuraIndicatorsInput[] = [];
      for (const _indicator of indicators) {
        docs.push({ ...formatIndicator(unit, indicatorsMap), ...{ DATE_START: new Date(), DATE_END: new Date() } });
      }

      await DocumentService.bulkCreateOrUpdateMdharuraIndicatorsDocument(docs);
    } catch (error) {
      Logger.error(error);
      next(error);
    }
  }
}

export default new EbsController();
