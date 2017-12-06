// import another component
import {Store} from './node_modules/pave';
import console from './utils/console';

window.console = console;

const store = new Store({cache: {foo: 123}});

const handler = (prev, delta) => {
  // The first argument, `prev` in this case, is the previous state of the
  // cache. The second argument, `delta`, is the change that was applied to
  // `prev` to acheive the current cache state.
  console.log('prev: ', prev);
  console.log('delta: ', delta);
  console.log('foo changed!');
  console.log(store);
};

var timeoutID;

function delayedAlert() {
  timeoutID = setTimeout(slowAlert, 2000);
}

function slowAlert() {
  store.update({foo: {$set: 456}}); // The handler above will fire.
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}


store.watch(['foo'], handler);
delayedAlert();