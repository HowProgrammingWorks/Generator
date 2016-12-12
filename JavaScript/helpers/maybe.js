'use strict';

function Just(value) {
  return {
    toString() {
      return `Just ${value}`;
    },

    then(fn) {
      return fn(value);
    }
  };
}

const Nothing = {
  toString() {
    return 'Nothing';
  },

  then() {
    return Nothing;
  }
};

module.exports = { Just, Nothing };
