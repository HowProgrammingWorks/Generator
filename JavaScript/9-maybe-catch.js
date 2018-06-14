'use strict';

const doMonad = require('./helpers/do-notation');

const Nothing = {
  then() {
    return Nothing;
  },

  catch(callback) {
    callback();
    return this;
  }
};

class Just {
  constructor(value) {
    this.value = value;
  }

  then(fn) {
    const result = fn(this.value);
    if (result instanceof Just || result === Nothing) {
      return result;
    }
    return new Just(result);
  }

  catch() {
    return this;
  }
}

doMonad(function* () {
  const a = yield new Just(5);
  const b = yield new Just(3);
  const c = yield new Just(4);
  console.log((a + b) * c);
}).catch(() => {
  console.log('At least one value is not present');
});
