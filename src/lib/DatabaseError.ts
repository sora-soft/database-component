import {ExError} from '@sora-soft/framework';
import {DatabaseErrorCode} from './DatabaseErrorCode.js';

class DatabaseError extends ExError {
  constructor(code: DatabaseErrorCode, message: string) {
    super(code, 'DatabaseError', message);
    Object.setPrototypeOf(this, DatabaseError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export {DatabaseError};
