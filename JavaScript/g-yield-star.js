'use strict';

function* genFn() {
  yield* [10, 20, 30];
  //yield* new Set([10, 20, 30]);
}

const c = genFn();
const val1 = c.next();
const val2 = c.next();
const val3 = c.next();
const val4 = c.next();
console.log({ c, val1, val2, val3, val4 });
