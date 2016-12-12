'use strict';

const doMonad = require('./helpers/do-notation');

class Just {
  constructor(value) {
    this.value = value;
  }

  then(fn) {
    let result = fn(this.value);
    if (result instanceof Just ||
        result === Nothing) {
      return result;
    } else {
      return new Just(result);
    }
  }

  catch() {
    return this;
  }
}

const Nothing = {
  then() {
    return Nothing;
  },

  catch(callback) {
    callback();
    return this;
  }
};

doMonad(function* () {
  let a = yield new Just(5);
  let b = yield new Just(3);
  let c = yield new Just(4);
  console.log((a + b) * c);
}).catch(() => {
  console.log('At least one value is not present');
});
