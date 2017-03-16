'use strict';

function* range(first, second, step = 1) {
  let current;
  let end;

  if (second === undefined) {
    current = 0;
    end = first;
  } else {
    current = first;
    end = second;
  }

  while (
    current < end && step > 0 ||
    current > end && step < 0
  ) {
    yield current;
    current += step;
  }
}

console.log([
  [...range(10)],
  [...range(3, 18)],
  [...range(2, 15, 2)],
  [...range(10, 0, -1)],
]);

/*
for (let x of range(10, Infinity, 3000000000000)) {
  console.dir({ x });
}
*/