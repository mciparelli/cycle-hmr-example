import Cycle from '@cycle/xstream-run';
import { makeDOMDriver } from '@cycle/dom';
import app from './src';

const drivers = {
  DOM: makeDOMDriver('.app'),
};

Cycle.run(app, drivers);
