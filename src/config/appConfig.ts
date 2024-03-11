const AppConfig = {
  app: {
    name: process.env.APP_NAME || 'Shield',
    server: process.env.SERVER || 'localhost',
    isDevelopment: ['development', 'dev', 'local'].includes(<string>process.env.SERVER),
    port: parseInt(<string>process.env.PORT, 10) || 3000,
    apiVersion: process.env.API_VERSION || 'v1',
    secret: process.env.SECRET || 'j!89nKO5as&Js',
    morganBodyMaxBodyLength: parseInt(<string>process.env.MORGAN_BODY_MAX_BODY_LENGTH, 10) || 10000,
  },
  db: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(<string>process.env.DB_PORT, 10) || 5432,
    dialect: process.env.DB_DIALECT || 'mssql',
    timezone: process.env.DB_TIMEZONE || 'Africa/Nairobi',
    isLogging: process.env.DB_LOG === 'true',
  },
};

export default Object.freeze(AppConfig);
