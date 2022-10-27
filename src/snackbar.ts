import snackStyle from './snackbar.css';

import colorLog from './colorLog';
import { Msg, SnackType } from './snackTypes';

const AUTO_DISMISS: number = 6000;

// Short hand snacks
export const snack = {
  info(msg: Msg, timeout: number = AUTO_DISMISS) {
    snackbar(msg, SnackType.INFO, timeout);
  },
  success(msg: Msg, timeout: number = AUTO_DISMISS) {
    snackbar(msg, SnackType.SUCCESS, timeout);
  },
  warning(msg: Msg, timeout: number = AUTO_DISMISS) {
    snackbar(msg, SnackType.WARNING, timeout);
  },
  error(msg: Msg, timeout: number = AUTO_DISMISS) {
    snackbar(msg, SnackType.ERROR, timeout);
  },
};

/**
 * Snackbar
 * @param {Msg} msg  - Message to display
 * @param {SnackType} type - info, warning, error, success
 * @param {number} timeout - how long to suspend snackbar
 */

// Default snackbar
function snackbar(msg: Msg, type: SnackType = SnackType.INFO, timeout: number = AUTO_DISMISS) {
  msg = forceToStr(msg);

  const baseId = generateID(msg);
  const alreadyUp = getEl(baseId);

  const counterId = baseId + '-counter';
  const endContainerId = baseId + '-container';

  if (!alreadyUp) {
    // Creates new snackbar
    const box = make('div', baseId);

    // Add typeIcon
    const typeIcon = createIcon(type, 'type');
    box.appendChild(typeIcon);

    // Set status-text
    const text = make('span', null, msg, ['snackbarText']);
    box.appendChild(text);

    // Set end-container
    const endContainer = make('div', endContainerId, null, 'endContainer');

    // Set dismiss close-icon
    const closeIcon = createIcon(SnackType.CLOSE, 'close');
    closeIcon.classList.add('closeIcon');

    // Counter
    const counter = make('div', counterId, '1', 'counter');
    counter.style.display = 'none';

    // Mounting DOM
    endContainer.appendChild(closeIcon);
    box.appendChild(endContainer);
    endContainer.prepend(counter);

    // Check if snackBars already up. Reuse parent if so.
    let snackbarContainer;

    // Mo
    if (!isMainContainerUp()) {
      snackbarContainer = make('div', `${snackStyle.snackbarContainerClass}`);
      document.body.appendChild(snackbarContainer);
    } else {
      snackbarContainer = getEl('snackbar-container');
    }

    if (snackbarContainer) snackbarContainer.prepend(box);

    // Adding animation after created
    box.style.animation = 'slideIn 0.5s';
    box.style.animationFillMode = 'forwards';

    // Adding "show" + type class, which can be "info", "error", "warning", "success"
    box.classList.add('snackbarBox', 'show', type);

    // After animation, remove the show class and remove DOM-reference
    const timer = setTimeout(() => {
      close(box);
    }, timeout);

    // If clicking..
    closeIcon.onclick = () => {
      clearTimeout(timer);
      close(box);
    };
  }

  // Snackbar already exist
  else if (alreadyUp) {
    const c = getEl(counterId);

    if (c) {
      if (c.style.display === 'none') c.style.display = 'flex';
      c.textContent = (Number(c.textContent) + 1).toString();
    }
  }

  colorLog(type + ' :: ' + msg, type);
}

function close(box: HTMLElement | null) {
  // Set animation in motion
  if (box) {
    box.style.animation = 'slideOut 0.5s';
    box.style.animationFillMode = 'forwards';

    // Remove from DOM 500ms after..
    setTimeout(() => {
      if (box && box.parentNode) box.parentNode.removeChild(box);
      box = null;
    }, 500);
  }
}

function make(name: string, id: string | null, textContent?: string | null, klass?: string[] | string) {
  const el = document.createElement(name);
  if (id) el.id = id;
  if (textContent) el.textContent = textContent;
  if (klass && klass.length > 0) el.classList.add(klass.toString());
  return el;
}

function getEl(hashStr: string) {
  return document.getElementById(hashStr);
}

function isMainContainerUp() {
  return Boolean(getEl('snackbar-container'));
}

function createIcon(type: SnackType, name: string) {
  const div = document.createElement('div');
  const icon = getIcon(type, name === 'close' ? '20px' : '22px');
  div.innerHTML = icon;
  div.classList.add(`${name}Icon`);
  return div;
}

function getIcon(type: SnackType, size = '24px', fillColor = '#fff') {
  const redAlias = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillColor}" width="${size}" height="${size}"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>`;
  const greenAlias = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillColor}" width="${size}" height="${size}"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
  const debug = '';

  const iconsTypes = {
    [SnackType.SUCCESS]: greenAlias,
    [SnackType.INFO]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillColor}" width="${size}" height="${size}"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>`,
    [SnackType.ERROR]: redAlias,
    [SnackType.CANCEL]: redAlias,
    [SnackType.OK]: greenAlias,
    [SnackType.DEBUG]: debug,
    [SnackType.WARNING]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillColor}" width="${size}" height="${size}"><path d="M0 0h24v24H0z" fill="none"/><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`,
    [SnackType.CLOSE]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${fillColor}" width="${size}" height="${size}"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
  };

  return iconsTypes[type];
}

function generateID(stringId: string) {
  let hash = 0;
  for (let i = 0; i < stringId.length; i++) {
    hash = stringId.charCodeAt(i) + ((hash << 5) - hash); // tslint:disable-line no-bitwise
  }

  // eslint-disable-next-line unicorn/number-literal-case
  const c = (hash & 0x00ffffff).toString(16); // tslint:disable-line no-bitwise

  return 'snack_'.substring(0, 16 - c.length) + c;
}

/**
 * Forces any type into a string
 * @param anyType
 * @returns string
 */
function forceToStr(anyType: any) {
  if (typeof anyType === 'string') return anyType;

  // If error-type
  if (anyType && anyType.stack && anyType.message) {
    return anyType.message + ' ::' + anyType.stack;
  }

  // JSON, array,
  if (typeof anyType === 'object') {
    try {
      return String(JSON.stringify(anyType));
    } catch (e: unknown) {
      return String(JSON.stringify(e));
    }
  }

  return String(anyType);
}

export default snackbar;
