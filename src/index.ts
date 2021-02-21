import 'app/environment';
import 'config';
import app from '@micra/application';

export const handler = app.run();

handler.keepAliveTimeout =
  Number(process.env.PORT) + Number(process.env.KEEP_ALIVE_TIMEOUT);

handler.headersTimeout =
  Number(process.env.PORT) + Number(process.env.HEADERS_TIMEOUT);
