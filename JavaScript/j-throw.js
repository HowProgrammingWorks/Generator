'use strict';

function* genFn() {
  yield 10;
  yield 20;
  yield 30;
}

try {
  const g = genFn();
  const val1 = g.next();
  const val2 = g.next();
  const val3 = g.next();
  const val4 = g.throw('Error message');
  console.log({ val1, val2, val3, val4 });
} catch (err) {
  console.error(err);
}

try {
  const g = genFn();
  const val1 = g.next();
  const val2 = g.throw('Error message 1');
  const val3 = g.next();
  const val4 = g.throw('Error message 2');
  console.log({ val1, val2, val3, val4 });
} catch (err) {
  console.error(err);
}
