import { DocumentMdharuraIndicatorsInput } from 'api/models/DocumentMdharuraIndicators';
import { DocumentMdharuraInput } from '../../api/models/DocumentMdharura';

export type MdharuraIndicatorsQuery = {
  unitId: string;
  dateStart?: string;
  dateEnd?: string;
  state?: 'live' | 'test';
};

export type MdharuraUnitsQuery = {
  unitId?: string;
  q?: string;
  parent?: string;
  type?: Unit['type'];
  sort?: string;
  page?: number;
  limit?: number;
  state?: 'live' | 'test';
};

export type MdharuraTasksQuery = {
  taskId?: string;
  q?: string;
  sort?: string;
  page?: number;
  key?: string;
  limit?: number;
  state?: 'live' | 'test';
  dateStart?: string;
  dateEnd?: string;
};

export const MDHARURA_INDICATORS = {
  'SURV.IND.EBS01': 'CEBS_SIGNALS_REPORTED',
  'SURV.IND.EBS02': 'CEBS_SIGNALS_VERIFIED',
  'SURV.IND.EBS03': 'CEBS_SIGNALS_VERIFIED_TRUE',
  'SURV.IND.EBS04': 'CEBS_SIGNALS_RISK_ASSESSED',
  'SURV.IND.EBS05': 'CEBS_SIGNALS_RESPONDED',
  'SURV.IND.EBS06': 'CEBS_SIGNALS_TO_BE_ESCALATED',
  'SURV.IND.EBS07': 'CEBS_SIGNALS_ESCALATED',
  'SURV.IND.EBS08': 'HEBS_SIGNALS_REPORTED',
  'SURV.IND.EBS09': 'HEBS_SIGNALS_VERIFIED',
  'SURV.IND.EBS10': 'HEBS_SIGNALS_VERIFIED_TRUE',
  'SURV.IND.EBS11': 'HEBS_SIGNALS_RISK_ASSESSED',
  'SURV.IND.EBS12': 'HEBS_SIGNALS_RESPONDED',
  'SURV.IND.EBS13': 'HEBS_SIGNALS_TO_BE_ESCALATED',
  'SURV.IND.EBS14': 'HEBS_SIGNALS_ESCALATED',
  'SURV.IND.EBS15': 'CHVS_REGISTERED',
  'SURV.IND.EBS16': 'CHVS_REPORTING',
  'SURV.IND.EBS17': 'CHAS_REGISTERED',
  'SURV.IND.EBS18': 'CHAS_VERIFYING',
  'SURV.IND.EBS19': 'HCWS_REGISTERED',
  'SURV.IND.EBS20': 'HCWS_REPORTING',
  'SURV.IND.EBS21': 'SFPS_REGISTERED',
  'SURV.IND.EBS22': 'SFPS_VERIFYING',
};

export type Indicator = {
  name: string;
  code: string;
  value: number;
};

export type User = {
  displayName: string;
  phoneNumber: string;
  status: 'active' | 'blocked';
  suggestions?: string[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type EscalationForm = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  eventType: string;
  dateResponseStarted: Date;
  reason: string;
  reasonOther: string;
  dateEscalated: Date;
  via: 'internet' | 'sms';
};

export type InvestigationForm = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  dateSCDSCInformed: Date;
  dateInvestigationStarted: Date;
  dateEventStarted: Date;
  symptoms: string;
  humansCases: number;
  humansCasesHospitalized: number;
  humansDead: number;
  animalsCases: number;
  animalsDead: number;
  isCauseKnown: string;
  cause: string;
  isLabSamplesCollected: string;
  dateSampleCollected: Date;
  labResults: string;
  dateLabResultsReceived: Date;
  isNewCasedReportedFromInitialArea: string;
  isNewCasedReportedFromNewAreas: string;
  isEventSettingPromotingSpread: string;
  additionalInformation: string;
  riskClassification: string;
  isEventInfectious: string;
  eventCategories: string[];
  systemsAffectedByEvent: string[];
  responseActivities: string[];
  dateSCMOHInformed: Date;
  via: 'internet' | 'sms';
  spot?: Role['spot'];
};

export type ResponseForm = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  eventType: string;
  dateSCMOHInformed: Date;
  dateResponseStarted: Date;
  responseActivities: string[];
  otherResponseActivity: string;
  outcomeOfResponse: string;
  recommendations: string[];
  dateEscalated: Date;
  dateOfReport: Date;
  additionalInformation: string;
  via: 'internet' | 'sms';
  spot?: Role['spot'];
};

export type VerificationForm = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  source: string;
  description: string;
  isMatchingSignal: string;
  updatedSignal: string;
  isReportedBefore: string;
  dateHealthThreatStarted: Date;
  informant: string;
  otherInformant: string;
  additionalInformation: string;
  dateVerified: Date;
  isThreatStillExisting: string;
  threatTo: string;
  dateSCDSCInformed: Date;
  via: 'internet' | 'sms';
  spot?: Role['spot'];
};

export type SummaryForm = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  eventStatus: string;
  escalatedTo: string;
  cause: string;
  via: 'internet' | 'sms';
  spot?: Role['spot'];
};

export type LabForm = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  dateSampleCollected: Date;
  labResults: string;
  dateLabResultsReceived: Date;
  via: 'internet' | 'sms';
  spot?: Role['spot'];
};

export type Role = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  unit: string;
  units?: string[];
  dateLastReported?: { test: Date; live: Date };
  dateLastVerified?: { test: Date; live: Date };
  spot:
    | 'HEBS'
    | 'LEBS'
    | 'CEBS'
    | 'EBS'
    | 'AHA'
    | 'CHA'
    | 'CHV'
    | 'VEBS'
    | 'VET'
    | 'SFP'
    | 'HCW'
    | 'PMEBS'
    | 'PEBS/MEBS'
    | 'CDR'
    | 'VIEWER';
  status: 'active' | 'blocked';
};

export type Unit = {
  name: string;
  uid?: string;
  code?: string;
  parent?: Unit;
  dateLastReported?: {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    test: Date;
    live: Date;
  };
  state?: 'test' | 'live';
  units?: string[];
  type:
    | 'Country'
    | 'County'
    | 'Subcounty'
    | 'Ward'
    | 'Health facility'
    | 'Learning institution'
    | 'Community unit'
    | 'Veterinary facility';
  suggestions?: string[];
  _id: string;
  _status: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UnitPage = {
  docs: Unit[];
  total: number;
  limit: number;
  page: number;
  pages: number;
  sort: string;
};

export type TaskPage = {
  docs: Task[];
  total: number;
  limit: number;
  page: number;
  pages: number;
  sort: string;
};

export type Task = {
  _id: string;
  _status: string;
  createdAt: Date;
  updatedAt: Date;
  user: string;
  unit: Unit;
  signalId: string;
  signal: string;
  units?: string[];
  suggestions?: string[];
  pmebs?: {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    reportForm?: {
      _id: string;
      createdAt: Date;
      updatedAt: Date;
      user: string;
      dateDetected: Date;
      description: string;
      source: string;
      unit: string;
      locality: string;
      dateReported: Date;
      via: 'internet' | 'sms';
      spot?: Role['spot'];
    };
    requestForm?: {
      _id: string;
      createdAt: Date;
      updatedAt: Date;
      user: string;
      description: string;
      unit: string;
      locality: string;
      dateReported: Date;
      dateRequested: Date;
      via: 'internet' | 'sms';
      spot?: Role['spot'];
    };
  };
  vebs?: {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    verificationForm?: VerificationForm;
    investigationForm?: InvestigationForm;
    responseForm?: ResponseForm;
    escalationForm?: EscalationForm;
    summaryForm?: SummaryForm;
    labForm?: LabForm;
  };
  cebs?: {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    verificationForm?: VerificationForm;
    investigationForm?: InvestigationForm;
    responseForm?: ResponseForm;
    escalationForm?: EscalationForm;
    summaryForm?: SummaryForm;
    labForm?: LabForm;
  };
  hebs?: {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    verificationForm?: VerificationForm;
    investigationForm?: InvestigationForm;
    responseForm?: ResponseForm;
    escalationForm?: EscalationForm;
    summaryForm?: SummaryForm;
    labForm?: LabForm;
  };
  lebs?: {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    verificationForm?: {
      _id: string;
      createdAt: Date;
      updatedAt: Date;
      user: string;
      description: string;
      isMatchingSignal: string;
      updatedSignal: string;
      dateHealthThreatStarted: Date;
      informant: string;
      otherInformant: string;
      additionalInformation: string;
      dateVerified: Date;
      isStillHappening: string;
      isReportedBefore: string;
      dateSCDSCInformed: Date;

      via: 'internet' | 'sms';
      spot?: Role['spot'];
    };
    investigationForm?: {
      _id: string;
      createdAt: Date;
      updatedAt: Date;
      user: string;
      dateSCDSCInformed: Date;
      dateInvestigationStarted: Date;
      dateEventStarted: Date;
      dateRRTNotified: Date;
      isCovid19WorkingCaseDefinitionMet: string;
      isEventSettingPromotingSpread: string;
      measureHandHygiene: string;
      measureTempScreening: string;
      measurePhysicalDistancing: string;
      measureUseOfMasks: string;
      measureVentilation: string;
      additionalInformation: string;
      riskClassification: string;
      isEventInfectious: string;
      eventCategories: string[];
      systemsAffectedByEvent: string[];
      responseActivities: string[];
      symptoms: string[];
      symptomsOther: string;
      isSamplesCollected: string;
      labResults: string;
      measureSocialDistancing: string;
      via: 'internet' | 'sms';
      spot?: Role['spot'];
    };
    responseForm?: {
      _id: string;
      createdAt: Date;
      updatedAt: Date;
      user: string;
      dateSCMOHInformed: Date;
      dateResponseStarted: Date;
      dateSamplesCollected: Date;
      dateOfTestResults: Date;
      isCovid19WorkingCaseDefinitionMet: string;
      isCIFFilledAndSamplesCollected: string;
      reasonsNoSampleCollectedOther: string;
      responseActivitiesOther: string;
      isHumansQuarantinedFollowedUp: string;
      eventStatus: string;
      responseActivities: string[];
      additionalResponseActivities: string[];
      reasonsNoSampleCollected: string[];

      humansQuarantinedSelf: number;
      humansQuarantinedSchool: number;
      humansQuarantinedInstitutional: number;
      humansIsolationSchool: number;
      humansIsolationHealthFacility: number;
      humansIsolationHome: number;
      humansIsolationInstitutional: number;
      humansDead: number;
      humansPositive: number;
      humansTested: number;
      humansCases: number;
      humansQuarantined: number;
      quarantineTypes: string[];
      isHumansIsolated: string;
      isolationTypes: string[];
      eventStatuses: string[];
      additionalInformation: string;
      via: 'internet' | 'sms';
      spot?: Role['spot'];
    };
    escalationForm?: EscalationForm;
    summaryForm?: SummaryForm;
    labForm?: LabForm;
  };
  status: 'pending' | 'completed';
  state: 'test' | 'live';
  via: 'internet' | 'sms';
  spot?: Role['spot'];
  version: string;
};

export function formatIndicator(
  unit: Unit,
  indicators: Map<string, number>,
): Omit<DocumentMdharuraIndicatorsInput, 'DATE_START' | 'DATE_END'> {
  return {
    UNIT_ID: unit._id,
    UNIT_NAME: unit.name,
    UNIT_CREATEDAT: unit.createdAt,
    UNIT_UPDATEDAT: unit.updatedAt,
    UNIT_CODE: unit.code,
    UNIT_UID: unit.uid,
    UNIT_STATE: unit.state,
    UNIT_TYPE: unit.type,
    COUNTY: unit.parent?.parent?.name,
    SUBCOUNTY: unit.parent?.name,

    HEBS_SIGNALS_REPORTED: indicators.get('HEBS_SIGNALS_REPORTED'),
    HEBS_SIGNALS_VERIFIED: indicators.get('HEBS_SIGNALS_VERIFIED'),
    HEBS_SIGNALS_VERIFIED_TRUE: indicators.get('HEBS_SIGNALS_VERIFIED_TRUE'),
    HEBS_SIGNALS_RISK_ASSESSED: indicators.get('HEBS_SIGNALS_RISK_ASSESSED'),
    HEBS_SIGNALS_RESPONDED: indicators.get('HEBS_SIGNALS_RESPONDED'),
    HEBS_SIGNALS_TO_BE_ESCALATED: indicators.get('HEBS_SIGNALS_TO_BE_ESCALATED'),
    HEBS_SIGNALS_ESCALATED: indicators.get('HEBS_SIGNALS_ESCALATED'),

    CEBS_SIGNALS_REPORTED: indicators.get('CEBS_SIGNALS_REPORTED'),
    CEBS_SIGNALS_VERIFIED: indicators.get('CEBS_SIGNALS_VERIFIED'),
    CEBS_SIGNALS_VERIFIED_TRUE: indicators.get('CEBS_SIGNALS_VERIFIED_TRUE'),
    CEBS_SIGNALS_RISK_ASSESSED: indicators.get('CEBS_SIGNALS_RISK_ASSESSED'),
    CEBS_SIGNALS_RESPONDED: indicators.get('CEBS_SIGNALS_RESPONDED'),
    CEBS_SIGNALS_TO_BE_ESCALATED: indicators.get('CEBS_SIGNALS_TO_BE_ESCALATED'),
    CEBS_SIGNALS_ESCALATED: indicators.get('CEBS_SIGNALS_ESCALATED'),
    CHVS_REGISTERED: indicators.get('CHVS_REGISTERED'),
    CHVS_REPORTING: indicators.get('CHVS_REPORTING'),
    CHAS_REGISTERED: indicators.get('CHAS_REGISTERED'),
    CHAS_VERIFYING: indicators.get('CHAS_VERIFYING'),
    HCWS_REGISTERED: indicators.get('HCWS_REGISTERED'),
    HCWS_REPORTING: indicators.get('HCWS_REPORTING'),
    SFPS_REGISTERED: indicators.get('SFPS_REGISTERED'),
    SFPS_VERIFYING: indicators.get('SFPS_VERIFYING'),
  };
}

export function formatTask(task: Task): DocumentMdharuraInput {
  return {
    _ID: task._id,
    _STATUS: task._status,
    CREATEDAT: task.createdAt,
    UPDATEDAT: task.updatedAt,
    UNIT_ID: task.unit._id,
    UNIT_NAME: task.unit.name,
    UNIT_CREATEDAT: task.unit.createdAt,
    UNIT_UPDATEDAT: task.unit.updatedAt,
    UNIT_CODE: task.unit.code,
    UNIT_UID: task.unit.uid,
    UNIT_STATE: task.unit.state,
    UNIT_TYPE: task.unit.type,
    UNIT_SUGGESTIONS: task.unit.suggestions.join(';'),
    UNIT_UNITS: task.unit.units.join(';'),
    UNIT_DATELASTREPORTED_ID: task.unit.dateLastReported?._id,
    UNIT_DATELASTREPORTED_TEST: task.unit.dateLastReported?.test,
    UNIT_DATELASTREPORTED_LIVE: task.unit.dateLastReported?.live,
    UNIT_DATELASTREPORTED_UPDATEDAT: task.unit.dateLastReported?.updatedAt,
    UNIT_DATELASTREPORTED_CREATEDAT: task.unit.dateLastReported?.createdAt,

    UNIT_PARENT_ID: task.unit.parent?._id,
    UNIT_PARENT_NAME: task.unit.parent?.name,
    UNIT_PARENT_CREATEDAT: task.unit.parent?.createdAt,
    UNIT_PARENT_UPDATEDAT: task.unit.parent?.updatedAt,
    UNIT_PARENT_CODE: task.unit.parent?.code,
    UNIT_PARENT_UID: task.unit.parent?.uid,
    UNIT_PARENT_PARENT: task.unit.parent?._id,
    UNIT_PARENT_STATE: task.unit.parent?.state,
    UNIT_PARENT_TYPE: task.unit.parent?.type,
    UNIT_PARENT_SUGGESTIONS: task.unit.parent?.suggestions?.join(';'),
    UNIT_PARENT_UNITS: task.unit.parent?.units?.join(';'),
    UNIT_PARENT_DATELASTREPORTED_ID: task.unit.parent?.dateLastReported?._id,
    UNIT_PARENT_DATELASTREPORTED_TEST: task.unit.parent?.dateLastReported?.test,
    UNIT_PARENT_DATELASTREPORTED_LIVE: task.unit.parent?.dateLastReported?.live,
    UNIT_PARENT_DATELASTREPORTED_UPDATEDAT: task.unit.parent?.dateLastReported?.updatedAt,
    UNIT_PARENT_DATELASTREPORTED_CREATEDAT: task.unit.parent?.dateLastReported?.createdAt,

    UNIT_PARENT_PARENT_ID: task.unit.parent?.parent?._id,
    UNIT_PARENT_PARENT_NAME: task.unit.parent?.parent?.name,
    UNIT_PARENT_PARENT_CREATEDAT: task.unit.parent?.parent?.createdAt,
    UNIT_PARENT_PARENT_UPDATEDAT: task.unit.parent?.parent?.updatedAt,
    UNIT_PARENT_PARENT_CODE: task.unit.parent?.parent?.code,
    UNIT_PARENT_PARENT_UID: task.unit.parent?.parent?.uid,
    UNIT_PARENT_PARENT_PARENT: task.unit.parent?.parent?._id,
    UNIT_PARENT_PARENT_STATE: task.unit.parent?.parent?.state,
    UNIT_PARENT_PARENT_TYPE: task.unit.parent?.parent?.type,
    UNIT_PARENT_PARENT_SUGGESTIONS: task.unit.parent?.parent?.suggestions?.join(';'),
    UNIT_PARENT_PARENT_UNITS: task.unit.parent?.parent?.units?.join(';'),
    UNIT_PARENT_PARENT_DATELASTREPORTED_ID: task.unit.parent?.parent?.dateLastReported?._id,
    UNIT_PARENT_PARENT_DATELASTREPORTED_TEST: task.unit.parent?.parent?.dateLastReported?.test,
    UNIT_PARENT_PARENT_DATELASTREPORTED_LIVE: task.unit.parent?.parent?.dateLastReported?.live,
    UNIT_PARENT_PARENT_DATELASTREPORTED_UPDATEDAT: task.unit.parent?.parent?.dateLastReported?.updatedAt,
    UNIT_PARENT_PARENT_DATELASTREPORTED_CREATEDAT: task.unit.parent?.parent?.dateLastReported?.createdAt,

    USER: task.user,
    SIGNALID: task.signalId,
    SIGNAL: task.signal,
    SUGGESTIONS: task.suggestions.join(';'),
    UNITS: task.units.join(';'),
    CEBS_ID: task.cebs?._id,
    CEBS_CREATEDAT: task.cebs?.createdAt,
    CEBS_UPDATEDAT: task.cebs?.updatedAt,
    CEBS_VERIFICATIONFORM_ID: task.cebs?.verificationForm?._id,
    CEBS_VERIFICATIONFORM_USER: task.cebs?.verificationForm?.user,
    CEBS_VERIFICATIONFORM_SOURCE: task.cebs?.verificationForm?.source,
    CEBS_VERIFICATIONFORM_DESCRIPTION: task.cebs?.verificationForm?.description,
    CEBS_VERIFICATIONFORM_ISMATCHINGSIGNAL: task.cebs?.verificationForm?.isMatchingSignal,
    CEBS_VERIFICATIONFORM_UPDATEDSIGNAL: task.cebs?.verificationForm?.updatedSignal,
    CEBS_VERIFICATIONFORM_ISREPORTEDBEFORE: task.cebs?.verificationForm?.isReportedBefore,
    CEBS_VERIFICATIONFORM_DATEHEALTHTHREATSTARTED: task.cebs?.verificationForm?.dateHealthThreatStarted,
    CEBS_VERIFICATIONFORM_INFORMANT: task.cebs?.verificationForm?.informant,
    CEBS_VERIFICATIONFORM_OTHERINFORMANT: task.cebs?.verificationForm?.otherInformant,
    CEBS_VERIFICATIONFORM_ADDITIONALINFORMATION: task.cebs?.verificationForm?.additionalInformation,
    CEBS_VERIFICATIONFORM_DATEVERIFIED: task.cebs?.verificationForm?.dateVerified,
    CEBS_VERIFICATIONFORM_ISTHREATSTILLEXISTING: task.cebs?.verificationForm?.isThreatStillExisting,
    CEBS_VERIFICATIONFORM_THREATTO: task.cebs?.verificationForm?.threatTo,
    CEBS_VERIFICATIONFORM_DATESCDSCINFORMED: task.cebs?.verificationForm?.dateSCDSCInformed,
    CEBS_VERIFICATIONFORM_VIA: task.cebs?.verificationForm?.via,
    CEBS_VERIFICATIONFORM_SPOT: task.cebs?.verificationForm?.spot,
    CEBS_VERIFICATIONFORM_CREATEDAT: task.cebs?.verificationForm?.createdAt,
    CEBS_VERIFICATIONFORM_UPDATEDAT: task.cebs?.verificationForm?.updatedAt,
    CEBS_INVESTIGATIONFORM_ID: task.cebs?.investigationForm?._id,
    CEBS_INVESTIGATIONFORM_USER: task.cebs?.investigationForm?.user,
    CEBS_INVESTIGATIONFORM_DATESCDSCINFORMED: task.cebs?.investigationForm?.dateSCDSCInformed,
    CEBS_INVESTIGATIONFORM_DATEEVENTSTARTED: task.cebs?.investigationForm?.dateEventStarted,
    CEBS_INVESTIGATIONFORM_SYMPTOMS: task.cebs?.investigationForm?.symptoms,
    CEBS_INVESTIGATIONFORM_HUMANCASES: task.cebs?.investigationForm?.humansCases,
    CEBS_INVESTIGATIONFORM_HUMANCASESHOSPITALIZED: task.cebs?.investigationForm?.humansCasesHospitalized,
    CEBS_INVESTIGATIONFORM_HUMANSDEAD: task.cebs?.investigationForm?.humansDead,
    CEBS_INVESTIGATIONFORM_ANIMALSCASES: task.cebs?.investigationForm?.animalsCases,
    CEBS_INVESTIGATIONFORM_ANIMALSDEAD: task.cebs?.investigationForm?.animalsDead,
    CEBS_INVESTIGATIONFORM_ISCAUSEKNOWN: task.cebs?.investigationForm?.isCauseKnown,
    CEBS_INVESTIGATIONFORM_CAUSE: task.cebs?.investigationForm?.cause,
    CEBS_INVESTIGATIONFORM_ISLABSAMPLESCOLLECTED: task.cebs?.investigationForm?.isLabSamplesCollected,
    CEBS_INVESTIGATIONFORM_DATESAMPLECOLLECTED: task.cebs?.investigationForm?.dateSampleCollected,
    CEBS_INVESTIGATIONFORM_LABRESULTS: task.cebs?.investigationForm?.labResults,
    CEBS_INVESTIGATIONFORM_DATELABRESULTSRECEIVED: task.cebs?.investigationForm?.dateLabResultsReceived,
    CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMINITIALAREA:
      task.cebs?.investigationForm?.isNewCasedReportedFromInitialArea,
    CEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMNEWAREAS: task.cebs?.investigationForm?.isNewCasedReportedFromNewAreas,
    CEBS_INVESTIGATIONFORM_ADDITIONALINFORMATION: task.cebs?.investigationForm?.additionalInformation,
    CEBS_INVESTIGATIONFORM_RISKCLASSIFICATION: task.cebs?.investigationForm?.riskClassification,
    CEBS_INVESTIGATIONFORM_ISEVENTINFECTIOUS: task.cebs?.investigationForm?.isEventInfectious,
    CEBS_INVESTIGATIONFORM_EVENTCATEGORIES: task.cebs?.investigationForm?.eventCategories.join(';'),
    CEBS_INVESTIGATIONFORM_SYSTEMSAFFECTEDBYEVENT: task.cebs?.investigationForm?.systemsAffectedByEvent.join(';'),
    CEBS_INVESTIGATIONFORM_RESPONSEACTIVITIES: task.cebs?.investigationForm?.responseActivities.join(';'),
    CEBS_INVESTIGATIONFORM_DATESCMOHINFORMED: task.cebs?.investigationForm?.dateSCMOHInformed,
    CEBS_INVESTIGATIONFORM_VIA: task.cebs?.investigationForm?.via,
    CEBS_INVESTIGATIONFORM_SPOT: task.cebs?.investigationForm?.spot,
    CEBS_INVESTIGATIONFORM_CREATEDAT: task.cebs?.investigationForm?.createdAt,
    CEBS_INVESTIGATIONFORM_UPDATEDAT: task.cebs?.investigationForm?.updatedAt,
    CEBS_RESPONSEFORM_ID: task.cebs?.responseForm?._id,
    CEBS_RESPONSEFORM_USER: task.cebs?.responseForm?.user,
    CEBS_RESPONSEFORM_EVENTTYPE: task.cebs?.responseForm?.eventType,
    CEBS_RESPONSEFORM_DATESCMOHINFORMED: task.cebs?.responseForm?.dateSCMOHInformed,
    CEBS_RESPONSEFORM_DATERESPONSESTARTED: task.cebs?.responseForm?.dateResponseStarted,
    CEBS_RESPONSEFORM_RESPONSEACTIVITIES: task.cebs?.responseForm?.responseActivities.join(';'),
    CEBS_RESPONSEFORM_OTHERRESPONSEACTIVITY: task.cebs?.responseForm?.otherResponseActivity,
    CEBS_RESPONSEFORM_OUTCOMEOFRESPONSE: task.cebs?.responseForm?.outcomeOfResponse,
    CEBS_RESPONSEFORM_RECOMMENDATIONS: task.cebs?.responseForm?.recommendations.join(';'),
    CEBS_RESPONSEFORM_DATEESCALATED: task.cebs?.responseForm?.dateEscalated,
    CEBS_RESPONSEFORM_DATEOFREPORT: task.cebs?.responseForm?.dateOfReport,
    CEBS_RESPONSEFORM_ADDITIONALINFORMATION: task.cebs?.responseForm?.additionalInformation,
    CEBS_RESPONSEFORM_VIA: task.cebs?.responseForm?.via,
    CEBS_RESPONSEFORM_SPOT: task.cebs?.responseForm?.spot,
    CEBS_RESPONSEFORM_CREATEDAT: task.cebs?.responseForm?.createdAt,
    CEBS_RESPONSEFORM_UPDATEDAT: task.cebs?.responseForm?.updatedAt,
    CEBS_SUMMARYFORM_ID: task.cebs?.summaryForm?._id,
    CEBS_SUMMARYFORM_USER: task.cebs?.summaryForm?.user,
    CEBS_SUMMARYFORM_EVENTSTATUS: task.cebs?.summaryForm?.eventStatus,
    CEBS_SUMMARYFORM_ESCALATEDTO: task.cebs?.summaryForm?.escalatedTo,
    CEBS_SUMMARYFORM_CAUSE: task.cebs?.summaryForm?.cause,
    CEBS_SUMMARYFORM_VIA: task.cebs?.summaryForm?.via,
    CEBS_SUMMARYFORM_SPOT: task.cebs?.summaryForm?.spot,
    CEBS_SUMMARYFORM_CREATEDAT: task.cebs?.summaryForm?.createdAt,
    CEBS_SUMMARYFORM_UPDATEDAT: task.cebs?.summaryForm?.updatedAt,
    CEBS_ESCALATIONFORM_ID: task.cebs?.escalationForm?._id,
    CEBS_ESCALATIONFORM_USER: task.cebs?.escalationForm?.user,
    CEBS_ESCALATIONFORM_EVENTTYPE: task.cebs?.escalationForm?.eventType,
    CEBS_ESCALATIONFORM_DATERESPONSESTARTED: task.cebs?.escalationForm?.dateResponseStarted,
    CEBS_ESCALATIONFORM_REASON: task.cebs?.escalationForm?.reason,
    CEBS_ESCALATIONFORM_REASONOTHER: task.cebs?.escalationForm?.reasonOther,
    CEBS_ESCALATIONFORM_DATEESCALATED: task.cebs?.escalationForm?.dateEscalated,
    CEBS_ESCALATIONFORM_VIA: task.cebs?.escalationForm?.via,
    CEBS_ESCALATIONFORM_CREATEDAT: task.cebs?.escalationForm?.createdAt,
    CEBS_ESCALATIONFORM_UPDATEDAT: task.cebs?.escalationForm?.updatedAt,

    HEBS_ID: task.hebs?._id,
    HEBS_CREATEDAT: task.hebs?.createdAt,
    HEBS_UPDATEDAT: task.hebs?.updatedAt,
    HEBS_VERIFICATIONFORM_ID: task.hebs?.verificationForm?._id,
    HEBS_VERIFICATIONFORM_USER: task.hebs?.verificationForm?.user,
    HEBS_VERIFICATIONFORM_SOURCE: task.hebs?.verificationForm?.source,
    HEBS_VERIFICATIONFORM_DESCRIPTION: task.hebs?.verificationForm?.description,
    HEBS_VERIFICATIONFORM_ISMATCHINGSIGNAL: task.hebs?.verificationForm?.isMatchingSignal,
    HEBS_VERIFICATIONFORM_UPDATEDSIGNAL: task.hebs?.verificationForm?.updatedSignal,
    HEBS_VERIFICATIONFORM_ISREPORTEDBEFORE: task.hebs?.verificationForm?.isReportedBefore,
    HEBS_VERIFICATIONFORM_DATEHEALTHTHREATSTARTED: task.hebs?.verificationForm?.dateHealthThreatStarted,
    HEBS_VERIFICATIONFORM_INFORMANT: task.hebs?.verificationForm?.informant,
    HEBS_VERIFICATIONFORM_OTHERINFORMANT: task.hebs?.verificationForm?.otherInformant,
    HEBS_VERIFICATIONFORM_ADDITIONALINFORMATION: task.hebs?.verificationForm?.additionalInformation,
    HEBS_VERIFICATIONFORM_DATEVERIFIED: task.hebs?.verificationForm?.dateVerified,
    HEBS_VERIFICATIONFORM_ISTHREATSTILLEXISTING: task.hebs?.verificationForm?.isThreatStillExisting,
    HEBS_VERIFICATIONFORM_THREATTO: task.hebs?.verificationForm?.threatTo,
    HEBS_VERIFICATIONFORM_DATESCDSCINFORMED: task.hebs?.verificationForm?.dateSCDSCInformed,
    HEBS_VERIFICATIONFORM_VIA: task.hebs?.verificationForm?.via,
    HEBS_VERIFICATIONFORM_SPOT: task.hebs?.verificationForm?.spot,
    HEBS_VERIFICATIONFORM_CREATEDAT: task.hebs?.verificationForm?.createdAt,
    HEBS_VERIFICATIONFORM_UPDATEDAT: task.hebs?.verificationForm?.updatedAt,
    HEBS_INVESTIGATIONFORM_ID: task.hebs?.investigationForm?._id,
    HEBS_INVESTIGATIONFORM_USER: task.hebs?.investigationForm?.user,
    HEBS_INVESTIGATIONFORM_DATESCDSCINFORMED: task.hebs?.investigationForm?.dateSCDSCInformed,
    HEBS_INVESTIGATIONFORM_DATEEVENTSTARTED: task.hebs?.investigationForm?.dateEventStarted,
    HEBS_INVESTIGATIONFORM_SYMPTOMS: task.hebs?.investigationForm?.symptoms,
    HEBS_INVESTIGATIONFORM_HUMANCASES: task.hebs?.investigationForm?.humansCases,
    HEBS_INVESTIGATIONFORM_HUMANCASESHOSPITALIZED: task.hebs?.investigationForm?.humansCasesHospitalized,
    HEBS_INVESTIGATIONFORM_HUMANSDEAD: task.hebs?.investigationForm?.humansDead,
    HEBS_INVESTIGATIONFORM_ANIMALSCASES: task.hebs?.investigationForm?.animalsCases,
    HEBS_INVESTIGATIONFORM_ANIMALSDEAD: task.hebs?.investigationForm?.animalsDead,
    HEBS_INVESTIGATIONFORM_ISCAUSEKNOWN: task.hebs?.investigationForm?.isCauseKnown,
    HEBS_INVESTIGATIONFORM_CAUSE: task.hebs?.investigationForm?.cause,
    HEBS_INVESTIGATIONFORM_ISLABSAMPLESCOLLECTED: task.hebs?.investigationForm?.isLabSamplesCollected,
    HEBS_INVESTIGATIONFORM_DATESAMPLECOLLECTED: task.hebs?.investigationForm?.dateSampleCollected,
    HEBS_INVESTIGATIONFORM_LABRESULTS: task.hebs?.investigationForm?.labResults,
    HEBS_INVESTIGATIONFORM_DATELABRESULTSRECEIVED: task.hebs?.investigationForm?.dateLabResultsReceived,
    HEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMINITIALAREA:
      task.hebs?.investigationForm?.isNewCasedReportedFromInitialArea,
    HEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMNEWAREAS: task.hebs?.investigationForm?.isNewCasedReportedFromNewAreas,
    HEBS_INVESTIGATIONFORM_ADDITIONALINFORMATION: task.hebs?.investigationForm?.additionalInformation,
    HEBS_INVESTIGATIONFORM_RISKCLASSIFICATION: task.hebs?.investigationForm?.riskClassification,
    HEBS_INVESTIGATIONFORM_ISEVENTINFECTIOUS: task.hebs?.investigationForm?.isEventInfectious,
    HEBS_INVESTIGATIONFORM_EVENTCATEGORIES: task.hebs?.investigationForm?.eventCategories.join(';'),
    HEBS_INVESTIGATIONFORM_SYSTEMSAFFECTEDBYEVENT: task.hebs?.investigationForm?.systemsAffectedByEvent.join(';'),
    HEBS_INVESTIGATIONFORM_RESPONSEACTIVITIES: task.hebs?.investigationForm?.responseActivities.join(';'),
    HEBS_INVESTIGATIONFORM_DATESCMOHINFORMED: task.hebs?.investigationForm?.dateSCMOHInformed,
    HEBS_INVESTIGATIONFORM_VIA: task.hebs?.investigationForm?.via,
    HEBS_INVESTIGATIONFORM_SPOT: task.hebs?.investigationForm?.spot,
    HEBS_INVESTIGATIONFORM_CREATEDAT: task.hebs?.investigationForm?.createdAt,
    HEBS_INVESTIGATIONFORM_UPDATEDAT: task.hebs?.investigationForm?.updatedAt,
    HEBS_RESPONSEFORM_ID: task.hebs?.responseForm?._id,
    HEBS_RESPONSEFORM_USER: task.hebs?.responseForm?.user,
    HEBS_RESPONSEFORM_EVENTTYPE: task.hebs?.responseForm?.eventType,
    HEBS_RESPONSEFORM_DATESCMOHINFORMED: task.hebs?.responseForm?.dateSCMOHInformed,
    HEBS_RESPONSEFORM_DATERESPONSESTARTED: task.hebs?.responseForm?.dateResponseStarted,
    HEBS_RESPONSEFORM_RESPONSEACTIVITIES: task.hebs?.responseForm?.responseActivities.join(';'),
    HEBS_RESPONSEFORM_OTHERRESPONSEACTIVITY: task.hebs?.responseForm?.otherResponseActivity,
    HEBS_RESPONSEFORM_OUTCOMEOFRESPONSE: task.hebs?.responseForm?.outcomeOfResponse,
    HEBS_RESPONSEFORM_RECOMMENDATIONS: task.hebs?.responseForm?.recommendations.join(';'),
    HEBS_RESPONSEFORM_DATEESCALATED: task.hebs?.responseForm?.dateEscalated,
    HEBS_RESPONSEFORM_DATEOFREPORT: task.hebs?.responseForm?.dateOfReport,
    HEBS_RESPONSEFORM_ADDITIONALINFORMATION: task.hebs?.responseForm?.additionalInformation,
    HEBS_RESPONSEFORM_VIA: task.hebs?.responseForm?.via,
    HEBS_RESPONSEFORM_SPOT: task.hebs?.responseForm?.spot,
    HEBS_RESPONSEFORM_CREATEDAT: task.hebs?.responseForm?.createdAt,
    HEBS_RESPONSEFORM_UPDATEDAT: task.hebs?.responseForm?.updatedAt,
    HEBS_SUMMARYFORM_ID: task.hebs?.summaryForm?._id,
    HEBS_SUMMARYFORM_USER: task.hebs?.summaryForm?.user,
    HEBS_SUMMARYFORM_EVENTSTATUS: task.hebs?.summaryForm?.eventStatus,
    HEBS_SUMMARYFORM_ESCALATEDTO: task.hebs?.summaryForm?.escalatedTo,
    HEBS_SUMMARYFORM_CAUSE: task.hebs?.summaryForm?.cause,
    HEBS_SUMMARYFORM_VIA: task.hebs?.summaryForm?.via,
    HEBS_SUMMARYFORM_SPOT: task.hebs?.summaryForm?.spot,
    HEBS_SUMMARYFORM_CREATEDAT: task.hebs?.summaryForm?.createdAt,
    HEBS_SUMMARYFORM_UPDATEDAT: task.hebs?.summaryForm?.updatedAt,
    HEBS_ESCALATIONFORM_ID: task.hebs?.escalationForm?._id,
    HEBS_ESCALATIONFORM_USER: task.hebs?.escalationForm?.user,
    HEBS_ESCALATIONFORM_EVENTTYPE: task.hebs?.escalationForm?.eventType,
    HEBS_ESCALATIONFORM_DATERESPONSESTARTED: task.hebs?.escalationForm?.dateResponseStarted,
    HEBS_ESCALATIONFORM_REASON: task.hebs?.escalationForm?.reason,
    HEBS_ESCALATIONFORM_REASONOTHER: task.hebs?.escalationForm?.reasonOther,
    HEBS_ESCALATIONFORM_DATEESCALATED: task.hebs?.escalationForm?.dateEscalated,
    HEBS_ESCALATIONFORM_VIA: task.hebs?.escalationForm?.via,
    HEBS_ESCALATIONFORM_CREATEDAT: task.hebs?.escalationForm?.createdAt,
    HEBS_ESCALATIONFORM_UPDATEDAT: task.hebs?.escalationForm?.updatedAt,

    VEBS_ID: task.vebs?._id,
    VEBS_CREATEDAT: task.vebs?.createdAt,
    VEBS_UPDATEDAT: task.vebs?.updatedAt,
    VEBS_VERIFICATIONFORM_ID: task.vebs?.verificationForm?._id,
    VEBS_VERIFICATIONFORM_USER: task.vebs?.verificationForm?.user,
    VEBS_VERIFICATIONFORM_SOURCE: task.vebs?.verificationForm?.source,
    VEBS_VERIFICATIONFORM_DESCRIPTION: task.vebs?.verificationForm?.description,
    VEBS_VERIFICATIONFORM_ISMATCHINGSIGNAL: task.vebs?.verificationForm?.isMatchingSignal,
    VEBS_VERIFICATIONFORM_UPDATEDSIGNAL: task.vebs?.verificationForm?.updatedSignal,
    VEBS_VERIFICATIONFORM_ISREPORTEDBEFORE: task.vebs?.verificationForm?.isReportedBefore,
    VEBS_VERIFICATIONFORM_DATEHEALTHTHREATSTARTED: task.vebs?.verificationForm?.dateHealthThreatStarted,
    VEBS_VERIFICATIONFORM_INFORMANT: task.vebs?.verificationForm?.informant,
    VEBS_VERIFICATIONFORM_OTHERINFORMANT: task.vebs?.verificationForm?.otherInformant,
    VEBS_VERIFICATIONFORM_ADDITIONALINFORMATION: task.vebs?.verificationForm?.additionalInformation,
    VEBS_VERIFICATIONFORM_DATEVERIFIED: task.vebs?.verificationForm?.dateVerified,
    VEBS_VERIFICATIONFORM_ISTHREATSTILLEXISTING: task.vebs?.verificationForm?.isThreatStillExisting,
    VEBS_VERIFICATIONFORM_THREATTO: task.vebs?.verificationForm?.threatTo,
    VEBS_VERIFICATIONFORM_DATESCDSCINFORMED: task.vebs?.verificationForm?.dateSCDSCInformed,
    VEBS_VERIFICATIONFORM_VIA: task.vebs?.verificationForm?.via,
    VEBS_VERIFICATIONFORM_SPOT: task.vebs?.verificationForm?.spot,
    VEBS_VERIFICATIONFORM_CREATEDAT: task.vebs?.verificationForm?.createdAt,
    VEBS_VERIFICATIONFORM_UPDATEDAT: task.vebs?.verificationForm?.updatedAt,
    VEBS_INVESTIGATIONFORM_ID: task.vebs?.investigationForm?._id,
    VEBS_INVESTIGATIONFORM_USER: task.vebs?.investigationForm?.user,
    VEBS_INVESTIGATIONFORM_DATESCDSCINFORMED: task.vebs?.investigationForm?.dateSCDSCInformed,
    VEBS_INVESTIGATIONFORM_DATEEVENTSTARTED: task.vebs?.investigationForm?.dateEventStarted,
    VEBS_INVESTIGATIONFORM_SYMPTOMS: task.vebs?.investigationForm?.symptoms,
    VEBS_INVESTIGATIONFORM_HUMANCASES: task.vebs?.investigationForm?.humansCases,
    VEBS_INVESTIGATIONFORM_HUMANCASESHOSPITALIZED: task.vebs?.investigationForm?.humansCasesHospitalized,
    VEBS_INVESTIGATIONFORM_HUMANSDEAD: task.vebs?.investigationForm?.humansDead,
    VEBS_INVESTIGATIONFORM_ANIMALSCASES: task.vebs?.investigationForm?.animalsCases,
    VEBS_INVESTIGATIONFORM_ANIMALSDEAD: task.vebs?.investigationForm?.animalsDead,
    VEBS_INVESTIGATIONFORM_ISCAUSEKNOWN: task.vebs?.investigationForm?.isCauseKnown,
    VEBS_INVESTIGATIONFORM_CAUSE: task.vebs?.investigationForm?.cause,
    VEBS_INVESTIGATIONFORM_ISLABSAMPLESCOLLECTED: task.vebs?.investigationForm?.isLabSamplesCollected,
    VEBS_INVESTIGATIONFORM_DATESAMPLECOLLECTED: task.vebs?.investigationForm?.dateSampleCollected,
    VEBS_INVESTIGATIONFORM_LABRESULTS: task.vebs?.investigationForm?.labResults,
    VEBS_INVESTIGATIONFORM_DATELABRESULTSRECEIVED: task.vebs?.investigationForm?.dateLabResultsReceived,
    VEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMINITIALAREA:
      task.vebs?.investigationForm?.isNewCasedReportedFromInitialArea,
    VEBS_INVESTIGATIONFORM_ISNEWCASEDREPORTEDFROMNEWAREAS: task.vebs?.investigationForm?.isNewCasedReportedFromNewAreas,
    VEBS_INVESTIGATIONFORM_ADDITIONALINFORMATION: task.vebs?.investigationForm?.additionalInformation,
    VEBS_INVESTIGATIONFORM_RISKCLASSIFICATION: task.vebs?.investigationForm?.riskClassification,
    VEBS_INVESTIGATIONFORM_ISEVENTINFECTIOUS: task.vebs?.investigationForm?.isEventInfectious,
    VEBS_INVESTIGATIONFORM_EVENTCATEGORIES: task.vebs?.investigationForm?.eventCategories.join(';'),
    VEBS_INVESTIGATIONFORM_SYSTEMSAFFECTEDBYEVENT: task.vebs?.investigationForm?.systemsAffectedByEvent.join(';'),
    VEBS_INVESTIGATIONFORM_RESPONSEACTIVITIES: task.vebs?.investigationForm?.responseActivities.join(';'),
    VEBS_INVESTIGATIONFORM_DATESCMOHINFORMED: task.vebs?.investigationForm?.dateSCMOHInformed,
    VEBS_INVESTIGATIONFORM_VIA: task.vebs?.investigationForm?.via,
    VEBS_INVESTIGATIONFORM_SPOT: task.vebs?.investigationForm?.spot,
    VEBS_INVESTIGATIONFORM_CREATEDAT: task.vebs?.investigationForm?.createdAt,
    VEBS_INVESTIGATIONFORM_UPDATEDAT: task.vebs?.investigationForm?.updatedAt,
    VEBS_RESPONSEFORM_ID: task.vebs?.responseForm?._id,
    VEBS_RESPONSEFORM_USER: task.vebs?.responseForm?.user,
    VEBS_RESPONSEFORM_EVENTTYPE: task.vebs?.responseForm?.eventType,
    VEBS_RESPONSEFORM_DATESCMOHINFORMED: task.vebs?.responseForm?.dateSCMOHInformed,
    VEBS_RESPONSEFORM_DATERESPONSESTARTED: task.vebs?.responseForm?.dateResponseStarted,
    VEBS_RESPONSEFORM_RESPONSEACTIVITIES: task.vebs?.responseForm?.responseActivities.join(';'),
    VEBS_RESPONSEFORM_OTHERRESPONSEACTIVITY: task.vebs?.responseForm?.otherResponseActivity,
    VEBS_RESPONSEFORM_OUTCOMEOFRESPONSE: task.vebs?.responseForm?.outcomeOfResponse,
    VEBS_RESPONSEFORM_RECOMMENDATIONS: task.vebs?.responseForm?.recommendations.join(';'),
    VEBS_RESPONSEFORM_DATEESCALATED: task.vebs?.responseForm?.dateEscalated,
    VEBS_RESPONSEFORM_DATEOFREPORT: task.vebs?.responseForm?.dateOfReport,
    VEBS_RESPONSEFORM_ADDITIONALINFORMATION: task.vebs?.responseForm?.additionalInformation,
    VEBS_RESPONSEFORM_VIA: task.vebs?.responseForm?.via,
    VEBS_RESPONSEFORM_SPOT: task.vebs?.responseForm?.spot,
    VEBS_RESPONSEFORM_CREATEDAT: task.vebs?.responseForm?.createdAt,
    VEBS_RESPONSEFORM_UPDATEDAT: task.vebs?.responseForm?.updatedAt,
    VEBS_SUMMARYFORM_ID: task.vebs?.summaryForm?._id,
    VEBS_SUMMARYFORM_USER: task.vebs?.summaryForm?.user,
    VEBS_SUMMARYFORM_EVENTSTATUS: task.vebs?.summaryForm?.eventStatus,
    VEBS_SUMMARYFORM_ESCALATEDTO: task.vebs?.summaryForm?.escalatedTo,
    VEBS_SUMMARYFORM_CAUSE: task.vebs?.summaryForm?.cause,
    VEBS_SUMMARYFORM_VIA: task.vebs?.summaryForm?.via,
    VEBS_SUMMARYFORM_SPOT: task.vebs?.summaryForm?.spot,
    VEBS_SUMMARYFORM_CREATEDAT: task.vebs?.summaryForm?.createdAt,
    VEBS_SUMMARYFORM_UPDATEDAT: task.vebs?.summaryForm?.updatedAt,
    VEBS_ESCALATIONFORM_ID: task.vebs?.escalationForm?._id,
    VEBS_ESCALATIONFORM_USER: task.vebs?.escalationForm?.user,
    VEBS_ESCALATIONFORM_EVENTTYPE: task.vebs?.escalationForm?.eventType,
    VEBS_ESCALATIONFORM_DATERESPONSESTARTED: task.vebs?.escalationForm?.dateResponseStarted,
    VEBS_ESCALATIONFORM_REASON: task.vebs?.escalationForm?.reason,
    VEBS_ESCALATIONFORM_REASONOTHER: task.vebs?.escalationForm?.reasonOther,
    VEBS_ESCALATIONFORM_DATEESCALATED: task.vebs?.escalationForm?.dateEscalated,
    VEBS_ESCALATIONFORM_VIA: task.vebs?.escalationForm?.via,
    VEBS_ESCALATIONFORM_CREATEDAT: task.vebs?.escalationForm?.createdAt,
    VEBS_ESCALATIONFORM_UPDATEDAT: task.vebs?.escalationForm?.updatedAt,

    LEBS_ID: task.lebs?._id,
    LEBS_CREATEDAT: task.lebs?.createdAt,
    LEBS_UPDATEDAT: task.lebs?.updatedAt,
    LEBS_VERIFICATIONFORM_ID: task.lebs?.verificationForm?._id,
    LEBS_VERIFICATIONFORM_USER: task.lebs?.verificationForm?.user,
    LEBS_VERIFICATIONFORM_DESCRIPTION: task.lebs?.verificationForm?.description,
    LEBS_VERIFICATIONFORM_ISMATCHINGSIGNAL: task.lebs?.verificationForm?.isMatchingSignal,
    LEBS_VERIFICATIONFORM_UPDATEDSIGNAL: task.lebs?.verificationForm?.updatedSignal,
    LEBS_VERIFICATIONFORM_ISREPORTEDBEFORE: task.lebs?.verificationForm?.isReportedBefore,
    LEBS_VERIFICATIONFORM_DATEHEALTHTHREATSTARTED: task.lebs?.verificationForm?.dateHealthThreatStarted,
    LEBS_VERIFICATIONFORM_INFORMANT: task.lebs?.verificationForm?.informant,
    LEBS_VERIFICATIONFORM_OTHERINFORMANT: task.lebs?.verificationForm?.otherInformant,
    LEBS_VERIFICATIONFORM_ADDITIONALINFORMATION: task.lebs?.verificationForm?.additionalInformation,
    LEBS_VERIFICATIONFORM_DATEVERIFIED: task.lebs?.verificationForm?.dateVerified,
    LEBS_VERIFICATIONFORM_ISSTILLHAPPENING: task.lebs?.verificationForm?.isStillHappening,
    LEBS_VERIFICATIONFORM_DATESCDSCINFORMED: task.lebs?.verificationForm?.dateSCDSCInformed,
    LEBS_VERIFICATIONFORM_VIA: task.lebs?.verificationForm?.via,
    LEBS_VERIFICATIONFORM_SPOT: task.lebs?.verificationForm?.spot,
    LEBS_VERIFICATIONFORM_CREATEDAT: task.lebs?.verificationForm?.createdAt,
    LEBS_VERIFICATIONFORM_UPDATEDAT: task.lebs?.verificationForm?.updatedAt,
    LEBS_INVESTIGATIONFORM_ID: task.lebs?.investigationForm?._id,
    LEBS_INVESTIGATIONFORM_USER: task.lebs?.investigationForm?.user,
    LEBS_INVESTIGATIONFORM_DATESCDSCINFORMED: task.lebs?.investigationForm?.dateSCDSCInformed,
    LEBS_INVESTIGATIONFORM_DATEINVESTIGATIONSTARTED: task.lebs?.investigationForm?.dateInvestigationStarted,
    LEBS_INVESTIGATIONFORM_DATEEVENTSTARTED: task.lebs?.investigationForm?.dateEventStarted,
    LEBS_INVESTIGATIONFORM_DATERRTNOTIFIED: task.lebs?.investigationForm?.dateRRTNotified,
    LEBS_INVESTIGATIONFORM_ISCOVID19WORKINGCASEDEFINITIONMET:
      task.lebs?.investigationForm?.isCovid19WorkingCaseDefinitionMet,
    LEBS_INVESTIGATIONFORM_ISEVENTSETTINGPROMOTINGSPREAD: task.lebs?.investigationForm?.isEventSettingPromotingSpread,
    LEBS_INVESTIGATIONFORM_MEASUREHANDHYGIENE: task.lebs?.investigationForm?.measureHandHygiene,
    LEBS_INVESTIGATIONFORM_MEASURETEMPSCREENING: task.lebs?.investigationForm?.measureTempScreening,
    LEBS_INVESTIGATIONFORM_MEASUREPHYSICALDISTANCING: task.lebs?.investigationForm?.measurePhysicalDistancing,
    LEBS_INVESTIGATIONFORM_MEASURESOCIALDISTANCING: task.lebs?.investigationForm?.measureSocialDistancing,
    LEBS_INVESTIGATIONFORM_MEASUREUSEOFMASKS: task.lebs?.investigationForm?.measureUseOfMasks,
    LEBS_INVESTIGATIONFORM_MEASUREVENTILATION: task.lebs?.investigationForm?.measureVentilation,
    LEBS_INVESTIGATIONFORM_SYMPTOMS: task.lebs?.investigationForm?.symptoms.join(';'),
    LEBS_INVESTIGATIONFORM_SYMPTOMSOTHER: task.lebs?.investigationForm?.symptomsOther,
    LEBS_INVESTIGATIONFORM_ISSAMPLESCOLLECTED: task.lebs?.investigationForm?.isSamplesCollected,
    LEBS_INVESTIGATIONFORM_LABRESULTS: task.lebs?.investigationForm?.labResults,
    LEBS_INVESTIGATIONFORM_ADDITIONALINFORMATION: task.lebs?.investigationForm?.additionalInformation,
    LEBS_INVESTIGATIONFORM_RISKCLASSIFICATION: task.lebs?.investigationForm?.riskClassification,
    LEBS_INVESTIGATIONFORM_ISEVENTINFECTIOUS: task.lebs?.investigationForm?.isEventInfectious,
    LEBS_INVESTIGATIONFORM_EVENTCATEGORIES: task.lebs?.investigationForm?.eventCategories.join(';'),
    LEBS_INVESTIGATIONFORM_SYSTEMSAFFECTEDBYEVENT: task.lebs?.investigationForm?.systemsAffectedByEvent.join(';'),
    LEBS_INVESTIGATIONFORM_RESPONSEACTIVITIES: task.lebs?.investigationForm?.responseActivities.join(';'),
    LEBS_INVESTIGATIONFORM_VIA: task.lebs?.investigationForm?.via,
    LEBS_INVESTIGATIONFORM_SPOT: task.lebs?.investigationForm?.spot,
    LEBS_INVESTIGATIONFORM_CREATEDAT: task.lebs?.investigationForm?.createdAt,
    LEBS_INVESTIGATIONFORM_UPDATEDAT: task.lebs?.investigationForm?.updatedAt,
    LEBS_RESPONSEFORM_ID: task.lebs?.responseForm?._id,
    LEBS_RESPONSEFORM_USER: task.lebs?.responseForm?.user,
    LEBS_RESPONSEFORM_DATESCMOHINFORMED: task.lebs?.responseForm?.dateSCMOHInformed,
    LEBS_RESPONSEFORM_DATERESPONSESTARTED: task.lebs?.responseForm?.dateResponseStarted,
    LEBS_RESPONSEFORM_DATESAMPLESCOLLECTED: task.lebs?.responseForm?.dateSamplesCollected,
    LEBS_RESPONSEFORM_DATEOFTESTRESULTS: task.lebs?.responseForm?.dateOfTestResults,
    LEBS_RESPONSEFORM_ISCOVID19WORKINGCASEDEFINITIONMET: task.lebs?.responseForm?.isCovid19WorkingCaseDefinitionMet,
    LEBS_RESPONSEFORM_ISCIFFILLEDANDSAMPLESCOLLECTED: task.lebs?.responseForm?.isCIFFilledAndSamplesCollected,
    LEBS_RESPONSEFORM_REASONSNOSAMPLECOLLECTEDOTHER: task.lebs?.responseForm?.reasonsNoSampleCollectedOther,
    LEBS_RESPONSEFORM_REASONSNOSAMPLECOLLECTED: task.lebs?.responseForm?.reasonsNoSampleCollected.join(';'),
    LEBS_RESPONSEFORM_RESPONSEACTIVITIES: task.lebs?.responseForm?.responseActivities.join(';'),
    LEBS_RESPONSEFORM_RESPONSEACTIVITIESOTHER: task.lebs?.responseForm?.responseActivitiesOther,
    LEBS_RESPONSEFORM_ADDITIONALRESPONSEACTIVITIES: task.lebs?.responseForm?.additionalResponseActivities.join(';'),
    LEBS_RESPONSEFORM_ISHUMANSQUARANTINEDFOLLOWEDUP: task.lebs?.responseForm?.isHumansQuarantinedFollowedUp,
    LEBS_RESPONSEFORM_EVENTSTATUSES: task.lebs?.responseForm?.eventStatuses.join(';'),
    LEBS_RESPONSEFORM_EVENTSTATUS: task.lebs?.responseForm?.eventStatus,
    LEBS_RESPONSEFORM_HUMANSQUARANTINEDSELF: task.lebs?.responseForm?.humansQuarantinedSelf,
    LEBS_RESPONSEFORM_HUMANSQUARANTINEDSCHOOL: task.lebs?.responseForm?.humansQuarantinedSchool,
    LEBS_RESPONSEFORM_HUMANSQUARANTINEDINSTITUTIONAL: task.lebs?.responseForm?.humansQuarantinedInstitutional,
    LEBS_RESPONSEFORM_HUMANSISOLATIONSCHOOL: task.lebs?.responseForm?.humansIsolationSchool,
    LEBS_RESPONSEFORM_HUMANSISOLATIONHEALTHFACILITY: task.lebs?.responseForm?.humansIsolationHealthFacility,
    LEBS_RESPONSEFORM_HUMANSISOLATIONHOME: task.lebs?.responseForm?.humansIsolationHome,
    LEBS_RESPONSEFORM_HUMANSISOLATIONINSTITUTIONAL: task.lebs?.responseForm?.humansIsolationInstitutional,
    LEBS_RESPONSEFORM_HUMANSDEAD: task.lebs?.responseForm?.humansDead,
    LEBS_RESPONSEFORM_HUMANSPOSITIVE: task.lebs?.responseForm?.humansPositive,
    LEBS_RESPONSEFORM_HUMANSTESTED: task.lebs?.responseForm?.humansTested,
    LEBS_RESPONSEFORM_HUMANSCASES: task.lebs?.responseForm?.humansCases,
    LEBS_RESPONSEFORM_HUMANSQUARANTINED: task.lebs?.responseForm?.humansQuarantined,
    LEBS_RESPONSEFORM_QUARANTINETYPES: task.lebs?.responseForm?.quarantineTypes.join(';'),
    LEBS_RESPONSEFORM_ISHUMANSISOLATED: task.lebs?.responseForm?.isHumansIsolated,
    LEBS_RESPONSEFORM_ISOLATIONTYPES: task.lebs?.responseForm?.isolationTypes.join(';'),
    LEBS_RESPONSEFORM_ADDITIONALINFORMATION: task.lebs?.responseForm?.additionalInformation,
    LEBS_RESPONSEFORM_VIA: task.lebs?.responseForm?.via,
    LEBS_RESPONSEFORM_SPOT: task.lebs?.responseForm?.spot,
    LEBS_RESPONSEFORM_CREATEDAT: task.lebs?.responseForm?.createdAt,
    LEBS_RESPONSEFORM_UPDATEDAT: task.lebs?.responseForm?.updatedAt,
    LEBS_SUMMARYFORM_ID: task.lebs?.summaryForm?._id,
    LEBS_SUMMARYFORM_USER: task.lebs?.summaryForm?.user,
    LEBS_SUMMARYFORM_EVENTSTATUS: task.lebs?.summaryForm?.eventStatus,
    LEBS_SUMMARYFORM_ESCALATEDTO: task.lebs?.summaryForm?.escalatedTo,
    LEBS_SUMMARYFORM_CAUSE: task.lebs?.summaryForm?.cause,
    LEBS_SUMMARYFORM_VIA: task.lebs?.summaryForm?.via,
    LEBS_SUMMARYFORM_SPOT: task.lebs?.summaryForm?.spot,
    LEBS_SUMMARYFORM_CREATEDAT: task.lebs?.summaryForm?.createdAt,
    LEBS_SUMMARYFORM_UPDATEDAT: task.lebs?.summaryForm?.updatedAt,
    LEBS_ESCALATIONFORM_ID: task.lebs?.escalationForm?._id,
    LEBS_ESCALATIONFORM_USER: task.lebs?.escalationForm?.user,
    LEBS_ESCALATIONFORM_EVENTTYPE: task.lebs?.escalationForm?.eventType,
    LEBS_ESCALATIONFORM_DATERESPONSESTARTED: task.lebs?.escalationForm?.dateResponseStarted,
    LEBS_ESCALATIONFORM_REASON: task.lebs?.escalationForm?.reason,
    LEBS_ESCALATIONFORM_REASONOTHER: task.lebs?.escalationForm?.reasonOther,
    LEBS_ESCALATIONFORM_DATEESCALATED: task.lebs?.escalationForm?.dateEscalated,
    LEBS_ESCALATIONFORM_VIA: task.lebs?.escalationForm?.via,
    LEBS_ESCALATIONFORM_CREATEDAT: task.lebs?.escalationForm?.createdAt,
    LEBS_ESCALATIONFORM_UPDATEDAT: task.lebs?.escalationForm?.updatedAt,

    PMEBS_ID: task.pmebs?._id,
    PMEBS_CREATEDAT: task.pmebs?.createdAt,
    PMEBS_UPDATEDAT: task.pmebs?.updatedAt,
    PMEBS_REPORTFORM_ID: task.pmebs?.reportForm?._id,
    PMEBS_REPORTFORM_USER: task.pmebs?.reportForm?.user,
    PMEBS_REPORTFORM_DATEDETECTED: task.pmebs?.reportForm?.dateDetected,
    PMEBS_REPORTFORM_DESCRIPTION: task.pmebs?.reportForm?.description,
    PMEBS_REPORTFORM_SOURCE: task.pmebs?.reportForm?.source,
    PMEBS_REPORTFORM_UNIT: task.pmebs?.reportForm?.unit,
    PMEBS_REPORTFORM_LOCALITY: task.pmebs?.reportForm?.locality,
    PMEBS_REPORTFORM_DATEREPORTED: task.pmebs?.reportForm?.dateReported,
    PMEBS_REPORTFORM_VIA: task.pmebs?.reportForm?.via,
    PMEBS_REPORTFORM_CREATEDAT: task.pmebs?.reportForm?.createdAt,
    PMEBS_REPORTFORM_UPDATEDAT: task.pmebs?.reportForm?.updatedAt,
    PMEBS_REQUESTFORM_ID: task.pmebs?.requestForm?._id,
    PMEBS_REQUESTFORM_USER: task.pmebs?.requestForm?.user,
    PMEBS_REQUESTFORM_DESCRIPTION: task.pmebs?.requestForm?.description,
    PMEBS_REQUESTFORM_UNIT: task.pmebs?.requestForm?.unit,
    PMEBS_REQUESTFORM_LOCALITY: task.pmebs?.requestForm?.locality,
    PMEBS_REQUESTFORM_DATEREPORTED: task.pmebs?.requestForm?.dateReported,
    PMEBS_REQUESTFORM_DATEREQUESTED: task.pmebs?.requestForm?.dateRequested,
    PMEBS_REQUESTFORM_VIA: task.pmebs?.requestForm?.via,
    PMEBS_REQUESTFORM_CREATEDAT: task.pmebs?.requestForm?.createdAt,
    PMEBS_REQUESTFORM_UPDATEDAT: task.pmebs?.requestForm?.updatedAt,
  };
}
