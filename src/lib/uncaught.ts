/**
 * Uncaught Errors
 * ------------------
 * Uncaught errors are forwarded to our error handling.
 *
 */

import AppError from '../models/AppError';
import logging from '../utils/logging';

process.on('unhandledRejection', (err: AppError) => {
  throw err;
});

process.on('uncaughtException', (err: AppError) => {
  logging.error(err);
  if (err.isOperational !== true) { process.exit(1); }
});
