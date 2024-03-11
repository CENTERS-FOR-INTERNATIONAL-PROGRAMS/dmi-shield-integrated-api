import * as dotenv from 'dotenv';
dotenv.config();

import { Server } from 'net';
import { createServer } from './server';
import mediatorConfig, { urn } from './assets/mediatorConfig/mediator.json';

import utils from 'openhim-mediator-utils';
import Logger from './utils/logger';
import AppConfig from './config/appConfig';
import { OPENHIM_CORE_API_URL, OPENHIM_PASSWORD, OPENHIM_TRUST_SELF_SIGNED, OPENHIM_USERNAME } from './config/openhim';

const PORT = AppConfig.app.port;
const openhimConfig = {
  username: OPENHIM_USERNAME,
  password: OPENHIM_PASSWORD,
  apiURL: OPENHIM_CORE_API_URL,
  trustSelfSigned: OPENHIM_TRUST_SELF_SIGNED,
  urn,
};

export function setUpMediator(): void {
  utils.registerMediator(openhimConfig, mediatorConfig, (err: Error | null) => {
    if (err) {
      Logger.error(err);
      throw new Error(`Failed to register mediator. Check your Config. ${err}`);
    }

    Logger.info('Successfully registered mediator!');

    utils.fetchConfig(openhimConfig, (err: Error | null, initialConfig: any) => {
      if (err) {
        throw new Error(`Failed to fetch initial config. ${err}`);
      }
      Logger.info('Initial Config: ', JSON.stringify(initialConfig));

      const emitter = utils.activateHeartbeat(openhimConfig);

      emitter.on('error', (err: Error) => {
        Logger.error(`Heartbeat failed: ${err}`);
      });

      emitter.on('config', (newConfig: any) => {
        Logger.debug('Received updated config:', JSON.stringify(newConfig));
      });
    });
  });
}

function startServer(): Server {
  const app = createServer();
  // mediatorSetup();
  setUpMediator();

  return app.listen(PORT, () => {
    Logger.debug(`App ${AppConfig.app.name} with api version ${AppConfig.app.apiVersion} is starting`);
    Logger.debug(`App is listening on port ${PORT}`);
  });
}

startServer();
