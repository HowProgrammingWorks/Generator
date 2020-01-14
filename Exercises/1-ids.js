'use strict';

const digits = ['00', '10', '1'];
const LEADING_ONE = 2;

const inc = num => {
  let i = num.length - 1;
  let add = 1;
  while (i > 0 && add === 1) {
    const newAdd = num[i] & add;
    num[i] ^= add;
    add = newAdd;
    i--;
  }

  if (i === 0 && add === 1) {
    num.push(0);
  }
};

const ids = function* () {
  const num = [LEADING_ONE, 0];
  for (;; inc(num)) {
    yield num.map(d => digits[d]).join('');
  }
};

module.exports = { ids };
