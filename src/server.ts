import compression from 'compression';
import cors from 'cors';
import * as swaggerUi from 'swagger-ui-express';
import routesV1 from './api/routes/v1';
import MorganMiddleware from './api/middlewares/morgan';
import express, { urlencoded, Application, Request, Response, NextFunction } from 'express';
import { isCelebrateError } from 'celebrate';
import { serializeError, ErrorObject } from 'serialize-error';
import morganBody from 'morgan-body';

import AppConfig from './config/appConfig';
import { specs } from './utils/swagger';
import appConfig from './config/appConfig';

export function createServer(): Application {
  const app = express();
  const corsOption = {
    origin: '*',
    credentials: true,
  };

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors(corsOption));
  app.use(compression());
  app.use(MorganMiddleware);
  app.use(`/api/${AppConfig.app.apiVersion}`, routesV1);

  if (AppConfig.app.isDevelopment) {
    app.use(`/docs/${AppConfig.app.apiVersion}`, swaggerUi.serve, swaggerUi.setup(specs));
  }

  //   app.use(errorHandler);

  configExpressNotFoundError(app);

  configExpressError(app);

  app.use(urlencoded({ extended: false }));

  morganBody(app, { maxBodyLength: appConfig.app.morganBodyMaxBodyLength });

  return app;
}

export function configExpressNotFoundError(app: Application): void {
  app.use((req, res, next) => {
    const error: DefaultError = new Error('URL not found');

    error.code = '404';
    error.status = 404;

    next(error);
  });
}

export function configExpressError(app: Application): void {
  app.use((error: DefaultError, req: Request, res: Response, next: NextFunction) => {
    const { name, stack, status, code, message } = error;

    const serializedError: ErrorObject & {
      status?: number;
    } = serializeError({ name, stack, status, code, message });

    serializedError.code = serializedError.code || '500';

    delete serializedError.status;

    if (isCelebrateError(error)) serializedError.message = error.details.entries().next().value[1].details[0].message;

    if (AppConfig.app.isDevelopment == false) delete serializedError.stack;

    res.status(error.status || 500).json({ error: serializedError });

    next();
  });
}
