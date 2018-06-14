'use strict';

function* sleep(interval) {
  const start = new Date();
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
    const data = yield;
    count++;
    sum += data;
    console.log(
      `Got data: ${data}\n` +
      `Count:    ${count}\n` +
      `Sum:      ${sum}\n` +
      `Average:  ${sum / count}\n`
    );
  }
}

const consumer = consume();
const producer = produce(consumer);
consumer.next();

const step = () => {
  producer.next();
  setImmediate(step);
};

step();
