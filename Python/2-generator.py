def Range(first, second=None, step=1):
	if second is None:
		current = 0
		end = first
	else:
		current = first
		end = second
	while not (current >= end and step > 0
		or current <= end and step < 0):
		yield current
		current += step

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
