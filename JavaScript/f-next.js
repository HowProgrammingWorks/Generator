'use strict';

function* counter(begin, end, delta) {
  let value = begin;
  while (end > value) {
    value += delta;
    const back = yield value;
    if (back) value += back;
    console.log({ back });
  }
}

const c = counter(0, 30, 12);
const val1 = c.next();
const val2 = c.next();
const val3 = c.next(150);
const val4 = c.next();
console.log({ c, val1, val2, val3, val4 });
