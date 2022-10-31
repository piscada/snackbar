export const snackStyling = {
  '#snackbar-container': {
    position: 'fixed',
    bottom: '40px',
    right: '20px',
    zIndex: 1,
  },
  '.typeIcon': {
    userSelect: 'none',
    cursor: 'default',
    marginRight: '15px',
    display: 'flex',
  },
  '.closeIcon': {
    transition: 'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: '50%',
    padding: '4px',
    display: 'flex',
  },
  '.closeIcon:hover': {
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: '50%',
  },
  '.endContainer': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    marginLeft: 'auto',
  },
  '.counter': {
    fontSize: '10px',
    lineHeight: '10px',
    width: '24px',
    height: '24px',
    marginRight: '8px',
    marginLeft: '8px',
    border: '1px solid white',
    borderRadius: '50%',
    userSelect: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    textAlign: 'center',
    cursor: 'default',
  },
  '.snackbarText': {
    margin: 'auto 0',
    maxWidth: '400px',
    wordBreak: 'break-word',
    verticalAlign: 'middle',
    fontSize: '14px',
    fontWeight: 400,
    color: 'rgb(255, 255, 255)',
  },
  '.snackbarBox': {
    visibility: 'hidden',
    minWidth: '288px',
    transition: 'opacity 0.2s ease-in',
    maxHeight: '400px',
    backgroundColor: ['#333', '#333'],
    marginBottom: '20px',
    color: '#fff',
    borderRadius: ['2px', '4px 4px 4px 4px'],
    padding: '16px',
    boxSizing: 'border-box',
    boxShadow:
      'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px,\n\t\trgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
    width: 'auto',
    opacity: 0.95,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  '.snackbarBox:hover': { opacity: 1 },
  '.snackbarBox.show': { visibility: 'visible' },
  '.snackbarBox.info': { backgroundColor: '#28689c' },
  '.snackbarBox.error': { background: '#d32f2f' },
  '.snackbarBox.warning': { backgroundColor: '#ff9800' },
  '.snackbarBox.success': { backgroundColor: 'rgb(67, 160, 71)' },
  '.snackbarBox .snackbarBox:hover': { boxShadow: '0 0 5px #000' },
  '@-webkit-keyframes slideIn': {
    '0%': { transform: 'translateX(+900px)' },
    '100%': { transform: 'translateX(0)' },
  },
  '@-moz-keyframes slideIn': {
    '0%': { transform: 'translateX(+900px)' },
    '100%': { transform: 'translateX(0)' },
  },
  '@keyframes slideIn': {
    '0%': { transform: 'translateX(+900px)' },
    '100%': { transform: 'translateX(0)' },
  },
  '@-webkit-keyframes slideOut': {
    '0%': { transform: 'translateX(0)' },
    '99%': { transform: 'translateX(+900px)' },
    '100%': {
      overflow: 'hidden',
      maxHeight: '0',
      padding: '0px',
      transform: 'translateX(+900px)',
      display: 'none',
      visibility: 'none',
      marginBottom: '0px',
    },
  },
  '@-moz-keyframes slideOut': {
    '0%': { transform: 'translateX(0)' },
    '99%': { transform: 'translateX(+900px)' },
    '100%': {
      overflow: 'hidden',
      maxHeight: '0',
      padding: '0px',
      transform: 'translateX(+900px)',
      display: 'none',
      visibility: 'none',
      marginBottom: '0px',
    },
  },
  '@keyframes slideOut': {
    '0%': { transform: 'translateX(0)' },
    '99%': { transform: 'translateX(+900px)' },
    '100%': {
      overflow: 'hidden',
      maxHeight: '0',
      padding: '0px',
      transform: 'translateX(+900px)',
      display: 'none',
      visibility: 'none',
      marginBottom: '0px',
    },
  },
};

export const styleString = `#snackbar-container {
	position: fixed;
	bottom: 40px;
	right: 20px;
	z-index: 1;
}

.typeIcon {
	user-select: none;
	cursor: default;
	margin-right: 15px;
	display: flex;
}

.closeIcon {
	transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	border-radius: 50%;
	padding: 4px;
	display: flex;
}

.closeIcon:hover {
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.08);
	border-radius: 50%;
}

.endContainer {
	display: flex;
	align-items: center;
	justify-content: right;
	margin-left: auto;
}

.counter {
	font-size: 10px;
	line-height: 10px;
	width: 24px;
	height: 24px;

	margin-right: 8px;
	margin-left: 8px;
	border: 1px solid white;
	border-radius: 50%;
	user-select: none;

	display: flex;
	justify-content: center;
	align-items: center;

	vertical-align: middle;
	text-align: center;

	cursor: default;
}

.snackbarText {
	margin: auto 0;
	max-width: 400px;
	word-break: break-word;
	vertical-align: middle;
	font-size: 14px;
	font-weight: 400;
	color: rgb(255, 255, 255);
}

.snackbarBox {
	visibility: hidden;
	min-width: 288px;

	transition: opacity 0.2s ease-in;

	max-height: 400px;

	background-color: #333;
	margin-bottom: 20px;
	color: #fff;
	border-radius: 2px;
	padding: 16px;

	box-sizing: border-box;
	border-radius: 4px 4px 4px 4px;

	box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px,
		rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;

	width: auto;
	background-color: #333;
	opacity: 0.95;

	display: flex;
	justify-content: flex-start;
	align-items: center;

}

.snackbarBox:hover {
	opacity: 1;
}

/* Show the snackbar */
.snackbarBox.show {
	visibility: visible;
}

.snackbarBox.info {
	background-color: #28689c;
}

.snackbarBox.error {
	background: #d32f2f;
}

.snackbarBox.warning {
	background-color: #ff9800;
}

.snackbarBox.success {
	background-color: rgb(67, 160, 71);
}

.snackbarBox .snackbarBox:hover {
	box-shadow: 0 0 5px #000;
}

/* Animations to fade the snackbar in and out */

@-webkit-keyframes slideIn {
	0% {
		transform: translateX(+900px);
	}

	100% {
		transform: translateX(0);
	}
}

@-moz-keyframes slideIn {
	0% {
		transform: translateX(+900px);
	}

	100% {
		transform: translateX(0);
	}
}

@keyframes slideIn {
	0% {
		transform: translateX(+900px);
	}

	100% {
		transform: translateX(0);
	}
}

@-webkit-keyframes slideOut {
	0% {
		transform: translateX(0);
	}

	99% {
		transform: translateX(+900px);
	}

	100% {
		overflow: hidden;
		max-height: 0;
		padding: 0px;
		transform: translateX(+900px);
		display: none;
		visibility: none;
		margin-bottom: 0px;
	}
}

@-moz-keyframes slideOut {
	0% {
		transform: translateX(0);
	}

	99% {
		transform: translateX(+900px);
	}

	100% {
		overflow: hidden;
		max-height: 0;
		padding: 0px;
		transform: translateX(+900px);
		display: none;
		visibility: none;
		margin-bottom: 0px;
	}
}

@keyframes slideOut {
	0% {
		transform: translateX(0);
	}

	99% {
		transform: translateX(+900px);
	}

	100% {
		overflow: hidden;
		max-height: 0;
		padding: 0px;
		transform: translateX(+900px);
		display: none;
		visibility: none;
		margin-bottom: 0px;
	}
}`;
