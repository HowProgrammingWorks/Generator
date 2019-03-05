'use strict';

function* genFn() {
  try {
    yield 10;
  } catch (err) {
    console.error('intercepted', err);
  }
  try {
    yield 20;
  } catch (err) {
    console.error('intercepted', err);
  }
  try {
    yield 30;
  } catch (err) {
    console.error('intercepted', err);
  }
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
