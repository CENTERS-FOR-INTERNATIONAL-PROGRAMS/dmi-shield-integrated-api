import { MDHARURA_RAW_AGGREGATES_TABLE } from '../../config/ebs';
import { db } from '../../database/config';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DocumentMdharuraIndicatorsAttributes {
  DATE_START: Date;
  DATE_END: Date;
  COUNTY: string;
  SUBCOUNTY: string;
  UNIT_ID: string;
  UNIT_NAME: string;
  UNIT_CREATEDAT: Date;
  UNIT_UPDATEDAT: Date;
  UNIT_CODE: string;
  UNIT_UID: string;
  UNIT_STATE: string;
  UNIT_TYPE: string;

  HEBS_SIGNALS_REPORTED: number;
  HEBS_SIGNALS_VERIFIED: number;
  HEBS_SIGNALS_VERIFIED_TRUE: number;
  HEBS_SIGNALS_RISK_ASSESSED: number;
  HEBS_SIGNALS_RESPONDED: number;
  HEBS_SIGNALS_TO_BE_ESCALATED: number;
  HEBS_SIGNALS_ESCALATED: number;

  CEBS_SIGNALS_REPORTED: number;
  CEBS_SIGNALS_VERIFIED: number;
  CEBS_SIGNALS_VERIFIED_TRUE: number;
  CEBS_SIGNALS_RISK_ASSESSED: number;
  CEBS_SIGNALS_RESPONDED: number;
  CEBS_SIGNALS_TO_BE_ESCALATED: number;
  CEBS_SIGNALS_ESCALATED: number;
  CHVS_REGISTERED: number;
  CHVS_REPORTING: number;
  CHAS_REGISTERED: number;
  CHAS_VERIFYING: number;
  HCWS_REGISTERED: number;
  HCWS_REPORTING: number;
  SFPS_REGISTERED: number;
  SFPS_VERIFYING: number;

  id: number;
}

export type DocumentMdharuraIndicatorsInput = Optional<DocumentMdharuraIndicatorsAttributes, 'id'>;

class DocumentMdharuraIndicators
  extends Model<DocumentMdharuraIndicatorsAttributes>
  implements DocumentMdharuraIndicatorsAttributes
{
  public DATE_START: Date;
  public DATE_END: Date;
  public COUNTY: string;
  public SUBCOUNTY: string;
  public UNIT_ID: string;
  public UNIT_NAME: string;
  public UNIT_CREATEDAT: Date;
  public UNIT_UPDATEDAT: Date;
  public UNIT_CODE: string;
  public UNIT_UID: string;
  public UNIT_STATE: string;
  public UNIT_TYPE: string;
  public HEBS_SIGNALS_REPORTED: number;
  public HEBS_SIGNALS_VERIFIED: number;
  public HEBS_SIGNALS_VERIFIED_TRUE: number;
  public HEBS_SIGNALS_RISK_ASSESSED: number;
  public HEBS_SIGNALS_RESPONDED: number;
  public HEBS_SIGNALS_TO_BE_ESCALATED: number;
  public HEBS_SIGNALS_ESCALATED: number;
  public CEBS_SIGNALS_REPORTED: number;
  public CEBS_SIGNALS_VERIFIED: number;
  public CEBS_SIGNALS_VERIFIED_TRUE: number;
  public CEBS_SIGNALS_RISK_ASSESSED: number;
  public CEBS_SIGNALS_RESPONDED: number;
  public CEBS_SIGNALS_TO_BE_ESCALATED: number;
  public CEBS_SIGNALS_ESCALATED: number;
  public CHVS_REGISTERED: number;
  public CHVS_REPORTING: number;
  public CHAS_REGISTERED: number;
  public CHAS_VERIFYING: number;
  public HCWS_REGISTERED: number;
  public HCWS_REPORTING: number;
  public SFPS_REGISTERED: number;
  public SFPS_VERIFYING: number;

  public id: number;
}

DocumentMdharuraIndicators.init(
  {
    DATE_START: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    DATE_END: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    COUNTY: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SUBCOUNTY: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UNIT_ID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UNIT_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UNIT_CREATEDAT: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UNIT_UPDATEDAT: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    UNIT_CODE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UNIT_UID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UNIT_STATE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    UNIT_TYPE: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    HEBS_SIGNALS_REPORTED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HEBS_SIGNALS_VERIFIED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HEBS_SIGNALS_VERIFIED_TRUE: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HEBS_SIGNALS_RISK_ASSESSED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HEBS_SIGNALS_RESPONDED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HEBS_SIGNALS_TO_BE_ESCALATED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HEBS_SIGNALS_ESCALATED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    CEBS_SIGNALS_REPORTED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CEBS_SIGNALS_VERIFIED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CEBS_SIGNALS_VERIFIED_TRUE: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CEBS_SIGNALS_RISK_ASSESSED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CEBS_SIGNALS_RESPONDED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CEBS_SIGNALS_TO_BE_ESCALATED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CEBS_SIGNALS_ESCALATED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CHVS_REGISTERED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CHVS_REPORTING: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CHAS_REGISTERED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CHAS_VERIFYING: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HCWS_REGISTERED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    HCWS_REPORTING: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SFPS_REGISTERED: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    SFPS_VERIFYING: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: MDHARURA_RAW_AGGREGATES_TABLE,
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    sequelize: db,
    indexes: [
      {
        fields: ['DATE_START'],
      },
      {
        fields: ['DATE_END'],
      },
      {
        fields: ['UNIT_ID'],
      },
      {
        fields: ['COUNTY', 'SUBCOUNTY', 'UNIT_ID'],
      },
      {
        fields: ['COUNTY', 'SUBCOUNTY', 'UNIT_NAME'],
      },
      {
        fields: ['COUNTY', 'SUBCOUNTY'],
      },
      {
        fields: ['UNIT_ID', 'DATE_START', 'DATE_END'],
      },
    ],
  },
);

export default DocumentMdharuraIndicators;
