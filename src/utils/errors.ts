/**
 * Central error handling
 */

import AppError from '../models/AppError';
import logging from './logging';

export const handleError = async (err: AppError) => {
  return logging.error(err);
};
