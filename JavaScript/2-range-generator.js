'use strict';

function* range(first, second, step = 1) {
  let current, end;

  if (second === undefined) {
    current = 0;
    end = first;
  } else {
    current = first;
    end = second;
  }

  if (step > 0) {
    while (current < end) {
      yield current;
      current += step;
    }
  } else {
    while (current > end) {
      yield current;
      current += step;
    }
  }
}

console.log([
  [...range(10)],
  [...range(3, 18)],
  [...range(2, 15, 2)],
  [...range(10, 0, -1)],
]);
