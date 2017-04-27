class Range:
	
	def __init__(self, first, second=None, step=1):
		if second is None:
			self.start = 0
			self.current = 0
			self.end = first
			self.step = step
		else:
			self.start = first
			self.current = first
			self.end = second
			self.step = step

	def __iter__(self):
		return self

	def __next__(self):
		result = self.current
		if (result >= self.end and self.step > 0
		 or result <= self.end and self.step < 0):
			raise StopIteration
		else:
			self.current += self.step
			return result

def print_space(str):
	print("{}".format(str), end=' ')

for i in Range(10):
	print_space(i)
print()
for i in Range(3, 18):
	print_space(i)
print()
for i in Range(2, 15, 2):
	print_space(i)
print()
for i in Range(10, 0, -1):
	print_space(i)
