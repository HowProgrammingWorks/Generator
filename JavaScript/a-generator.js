'use strict';

// Generator function

function* genFn(x) {
  return x * 2;
}

console.log('genFn(5) =', genFn(5));
console.log('genFn(5).next() =', genFn(5).next());
console.log('genFn(5).next().value =', genFn(5).next().value);

// Generator class method

class Multiplier {
  constructor(k) {
    this.value = k;
  }
  * genMethod(a) {
    this.value = a * this.value;
    return a * this.value;
  }
}

const m1 = new Multiplier(2);
console.log('m1.genMethod(5).next() =', m1.genMethod(5).next());

// Generator object field

const m2 = {
  value: 2,
  * genMethod(a) {
    this.value = a * this.value;
    return this.value;
  }
};

console.log('m2.genMethod(5).next() =', m2.genMethod(5).next());
