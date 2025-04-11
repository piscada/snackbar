export enum SnackType {
  SUCCESS = 'success',
  INFO = 'info',
  ERROR = 'error',
  CANCEL = 'cancel',
  OK = 'ok',
  DEBUG = 'debug',
  WARNING = 'warning',
  CLOSE = 'close',
}

export type Msg = string | null | number | boolean | object | any[];
