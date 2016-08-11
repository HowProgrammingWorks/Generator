'use strict';

function* sleep(interval) {
  let start = new Date();
  while (new Date() - start < interval) {
    yield;
  }
}

function* produce() {
  yield* sleep(500);
  return Math.random();
}

function* consume() {
  let count = 0;
  let sum = 0;
  while (true) {
    let data = yield* produce();
    count++;
    sum += data;
    console.log(`Got data: ${data}\n` +
                `Count:    ${count}\n` +
                `Sum:      ${sum}\n` +
                `Average:  ${sum / count}\n`);
  }
}

function* anotherTask() {
  while (true) {
    yield* sleep(1000);
    console.log('Hello!\n');
  }
}

let consumer = consume();
let task = anotherTask();

function step() {
  consumer.next();
  task.next();

  setImmediate(step);
}

step();
