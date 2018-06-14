'use strict';

function* numbers(start) {
  while (true) {
    yield start++;
  }
}

function* sieve(sequence, prime) {
  for (const number of sequence) {
    if (number % prime !== 0) {
      yield number;
    }
  }
}

function* primes() {
  let sequence = numbers(2);
  let prime;
  while (true) {
    prime = sequence.next().value;
    yield prime;
    sequence = sieve(sequence, prime);
  }
}

function* take(count, sequence) {
  for (let i = 0; i < count; i++) {
    yield sequence.next().value;
  }
}

for (const prime of take(10, primes())) {
  console.log(prime);
}
