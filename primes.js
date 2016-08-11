'use strict';

function* numbers(start) {
  while (true) {
    yield start++;
  }
}

function* sieve(sequence, prime) {
  for (let number of sequence) {
    if (number % prime !== 0) {
      yield number;
    }
  }
}

function* primes() {
  var sequence = numbers(2);
  while (true) {
    let prime = sequence.next().value;
    yield prime;
    sequence = sieve(sequence, prime);
  }
}

function* take(count, sequence) {
  for (let i = 0; i < count; i++) {
    yield sequence.next().value;
  }
}

for (var prime of take(10, primes())) {
  console.log(prime);
}
