'use strict';

module.exports = generator => {
  const sequence = generator();

  const step = value => {
    const result = sequence.next(value);
    if (result.done) return result.value;
    return result.value.then(step);
  };

  return step();
};
