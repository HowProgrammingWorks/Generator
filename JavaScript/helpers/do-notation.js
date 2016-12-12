'use strict';

module.exports = (generator) => {
  let sequence = generator();
  return step();

  function step(value) {
    let result = sequence.next(value);
    if (result.done) {
      return result.value;
    }
    return result.value.then(step);
  }
};
