import Logger from './core/Logger';
import { port } from './config';
import app from './app';

// starts the express server browser
app
  .listen(port, () => {
    Logger.info(`server running on port : ${port}`);
  })
  .on('error', (e: any) => Logger.error(e));
