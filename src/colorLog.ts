/* eslint-disable no-console */
/* tslint:disable:no-console */

import { SnackType } from './types';

const success = Function.prototype.bind.call(console.log, console, `%c %s`, `color: Green`);
const info = Function.prototype.bind.call(console.log, console, `%c %s`, `color: DodgerBlue`);
const warning = Function.prototype.bind.call(console.log, console, `%c %s`, `color: Orange`);
const error = Function.prototype.bind.call(console.log, console, `%c %s`, `color: Red`);
const debug = Function.prototype.bind.call(console.log, console, `%c %s`, `color: #257559`);

/* tslint:enable:no-console */

// Aliases
const cancel = error;
const ok = success;

const colorLog = (msg: string, color: SnackType) => {
  switch (color) {
    case 'ok':
    case 'success':
      return success(msg);
    case 'info':
      return info(msg);
    case 'error':
    case 'cancel':
      return error(msg);
    case 'debug':
      return debug(msg);
    case 'warning':
      return warning(msg);
    default:
      return info(msg);
  }
};

export { success, info, warning, error, debug, cancel, ok };

export default colorLog;
