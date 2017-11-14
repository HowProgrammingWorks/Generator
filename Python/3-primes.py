import math

def primes(n):
	number = 0
	count = 0
	while count < n:
		while True:
			if is_prime(number):
				yield number
				count += 1
				number += 1
				break
			number += 1

def is_prime(number):
    if number > 1:
        if number == 2:
            return True
        if number % 2 == 0:
            return False
        for current in range(3, int(math.sqrt(number) + 1), 2):
            if number % current == 0: 
                return False
        return True
    return False

for i in primes(10):
	print(i)
