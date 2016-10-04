'use strict';

const { Just, Nothing } = require('./maybe');
const doMonad = require('./do-notation');

Just(5).then(x => (
  Just(x + 3)
).then(x => (
  Just(x * 4)
)).then(console.log));

doMonad(function* () {
  let a = yield Just(5);
  let b = yield Just(3);
  let c = yield Just(4);
  console.log((a + b) * c);
});
