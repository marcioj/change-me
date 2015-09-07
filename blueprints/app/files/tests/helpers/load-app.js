import app from '../../app';

export function loadApp() {
  app({ name: 'dummy' });
  return module('dummy');
}
