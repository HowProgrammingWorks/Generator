'use strict';

function* sleep(interval) {
  let start = new Date();
  while (new Date() - start < interval) {
    yield;
  }
}

function* produce(consumer) {
  while (true) {
    yield* sleep(500);
    consumer.next(Math.random());
  }
}

function* consume() {
  let count = 0;
  let sum = 0;
  while (true) {
    let data = yield;
    count++;
    sum += data;
    console.log(`Got data: ${data}\n` +
                `Count:    ${count}\n` +
                `Sum:      ${sum}\n` +
                `Average:  ${sum / count}\n`);
  }
}

let consumer = consume();
let producer = produce(consumer);
consumer.next();

function step() {
  producer.next();
  setImmediate(step);
}

step();
