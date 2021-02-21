import 'app/environment';
import 'config';
import app from '@micra/application';

export const handler = app.run();

/** Ref.: https://adamcrowder.net/posts/node-express-api-and-aws-alb-502 */
handler.keepAliveTimeout =
  Number(process.env.PORT) + Number(process.env.KEEP_ALIVE_TIMEOUT);

handler.headersTimeout =
  Number(process.env.PORT) + Number(process.env.HEADERS_TIMEOUT);
