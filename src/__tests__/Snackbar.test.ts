import { snackbar } from '../index';

test('snackbar string', () => {
  expect(() => snackbar('hello there')).not.toThrow();
});
test('snackbar number', () => {
  expect(() => snackbar(123123)).not.toThrow();
  expect(() => snackbar(1.234)).not.toThrow();
  expect(() => snackbar(123123e5)).not.toThrow();
});

test('snackbar object', () => {
  expect(() => snackbar({})).not.toThrow();
});

test('snackbar messy array object', () => {
  expect(() => snackbar(['asdf', 123123, { 1: '123', jj: [{ key: 'value' }] }])).not.toThrow();
});

test('snackbar String-array', () => {
  expect(() => snackbar(['yo', 'hello', 'flow'])).not.toThrow();
});

test('snackbar null', () => {
  expect(() => snackbar(null)).not.toThrow();
});

test('snackbar Error', () => {
  expect(() => snackbar(new Error('crap'))).not.toThrow();
});
