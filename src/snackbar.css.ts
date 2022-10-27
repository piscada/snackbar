import { style } from '@vanilla-extract/css';

export const snackbarContainerClass = style({
  position: 'fixed',
  bottom: '40px',
  right: '20px',
  zIndex: 1,
});

export const typeIcon = style({
  userSelect: 'none',
  cursor: 'default',
  marginRight: '15px',
  display: 'flex',
});

export const closeIcon = style({
  transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  borderRadius: '50%',
  padding: '4px',
  display: 'flex',
});

export default { snackbarContainerClass, typeIcon, closeIcon };
