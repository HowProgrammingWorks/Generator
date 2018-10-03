'use strict';

const { Just } = require('./helpers/maybe');

const doMonad = require('./helpers/do-notation');

Just(5).then(x => (
  Just(x + 3)
).then(x => (
  Just(x * 4)
)).then(console.log));

doMonad(function* () {
  const a = yield Just(5);
  const b = yield Just(3);
  const c = yield Just(4);
  console.log((a + b) * c);
});
