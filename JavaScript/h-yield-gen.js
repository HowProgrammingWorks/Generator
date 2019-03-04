'use strict';

function* gen1() {
  yield 10;
  yield 20;
  yield 30;
}

function* gen2() {
  yield 40;
  yield 50;
  yield 60;
}

function* genFn() {
  yield* gen1();
  yield* gen2();
}

console.log('[...genFn()] =', [...genFn()]);
