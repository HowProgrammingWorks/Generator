'use strict';

const ids = function* (i = 0) {
  for (;;++i) {
    const left = 4 << i * 2;
    for (let j = 0; j < 2 << i; j++) {
      let res = 0;
      for (let k = 0; k < i + 1; k++) {
        res += (j & (1 << k)) << (k + 1);
      }
      yield (left + res).toString(2);
    }
  }
};

module.exports = { ids };
