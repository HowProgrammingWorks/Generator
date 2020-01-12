'use strict';

const ids = function* () {
  let base = '1';
  let rank = -1;
  while (true) {
    if (rank === -1) {
      base = `1${'0'.repeat(base.length + 1)}`;
      rank = base.length - 2;
      yield base;
    }
    if (base[rank] === '0') {
      base = `${base.slice(0, rank)}1${'0'.repeat(base.length - rank - 1)}`;
      rank = base.length - 2;
      yield base;
    } else {
      rank -= 2;
    }
  }
};

module.exports = { ids };
