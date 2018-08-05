/**
 * Express server
 */

import * as bodyParser from 'body-parser';
import * as compression from 'compression';  // compresses requests
import * as express from 'express';
import * as helmet from 'helmet';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.APP_PORT);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// Primary app routes.
app.get('/', ({}, res) => res.send('Okay!'));

export const start = () => {
  // tslint:disable-next-line:no-console
  app.listen(process.env.APP_PORT, () => console.log(`App is running on ${process.env.APP_PORT}`));
};

export default app;
