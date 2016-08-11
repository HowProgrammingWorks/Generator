'use strict';

class Range {
  constructor(first, second, step = 1) {
    if (second === undefined) {
      this.start = 0;
      this.end = first;
    } else {
      this.start = first;
      this.end = second;
    }

    if (step === 0) {
      throw new Error('illegal step');
    }

    this.step = step;
  }

  [Symbol.iterator]() {
    const { start, end, step } = this;
    let current = start;
    return {
      next() {
        if (current === undefined) {
          return { value: undefined, done: true };
        }

        if (current >= end && step > 0 ||
            current <= end && step < 0) {
          let value = current;
          current = undefined;
          return { value, done: true };
        }

        let value = current;
        current += step;
        return { value, done: false };
      }
    };
  }
}

console.log([
  [...new Range(10)],
  [...new Range(3, 18)],
  [...new Range(2, 15, 2)],
  [...new Range(10, 0, -1)],
]);
