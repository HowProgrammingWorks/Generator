/* eslint-disable no-undef */
'use strict';

const BIG_ONE = BigInt(1);
const BIG_ZERO = BigInt(0);

const ids = function* () {
  for (let i = BIG_ONE; ; i++) {
    const base = BIG_ONE << (i << BIG_ONE);
    for (let j = BIG_ZERO; j < BIG_ONE << i; j++) {
      let value = base;
      for (let k = BIG_ZERO; k <= Math.log2(Number(j)); k++) {
        if (j / (BIG_ONE << k) & BIG_ONE) {
          value |= BIG_ONE << (k << BIG_ONE | BIG_ONE);
        }
      }
      yield value.toString(2);
    }
  }
};

module.exports = { ids };
