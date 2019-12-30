'use strict';

const ids = function* () {
  const free = ['0'];
  const prepared = { has: false, value: '' };

  while (true) {
    if (prepared.has) {
      prepared.has = false;
      yield prepared.value;
    }
    const nextFree = free.shift();
    free.push('01' + nextFree);
    free.push('00' + nextFree);
    prepared.value = '11' + nextFree;
    prepared.has = true;
    yield '10' + nextFree;
  }
};

module.exports = { ids };
