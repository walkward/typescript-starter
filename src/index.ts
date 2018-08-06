/**
 * App entrypoint
 */

import * as dotenv from 'dotenv';
import dotenv from 'dotenv';
import * as app from './app';

// Loading environment variables
dotenv.config();

// Start app server
app.start();
