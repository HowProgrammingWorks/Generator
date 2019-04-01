'use strict';

function* counter(begin, end, delta) {
  let value = begin;
  while (end > value + delta) {
    value += delta;
    yield value;
  }
}

const c = counter(0, 30, 12);
const val1 = c.next();
const val2 = c.next();
const val3 = c.next();
const val4 = c.next();
console.log({ c, val1, val2, val3, val4 });
