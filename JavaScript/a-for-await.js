'use strict';

async function * slowCounter() {
  let counter = 0;
  while (true) {
    counter += 1;
    yield new Promise((resolve) => {
      setTimeout(() => resolve(counter), 1000);
    })
  }
}

async function * fastCounterDown() {
  let counter = 1000000;
  while (true) {
    counter -= 1;
    yield counter;
  }
}

async function* zip (a, b) {
  while (true) {
    const [first, second] = await Promise.all([
      a.next(),
      b.next(),
    ]);
    
    yield [first.value, second.value];
  }
}

async function main () {
  for await (let it of zip(slowCounter(), fastCounterDown())) {
    console.log(it);
  }
}

main();
