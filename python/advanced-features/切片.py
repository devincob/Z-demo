# -*- coding:utf-8 -*-
# Authon: devincob

L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']

print([L[0], L[1], L[2]])

# 取前N个元素，也就是索引为0-(N-1)的元素，可以用循环：


r = []
n = 4
for i in range(n):
    r.append(L[i])
print(r)

L[0:2]

print(L[0:2])

L[1:3]

print(L[1:3])

print(L[:])

d = {'a':1, 'b':2,'c':3}
for key in d:
    print(key)


for i, value in enumerate(['A', 'B', 'C']):
    print(i, value)


for x, y in [(1, 1), (2, 4), (3, 9), (4, 16)]:
    print(x, y)

list(range(1, 11))
print(list(range(1, 11)))

L = []

for x in range(1, 11):
    L.append(x*x)
print(L)

LX = [x*x for x in range(1, 11)]

print(LX)

SECONED = [M+N for M in 'ABC' for N in 'XYZ']
print(SECONED)

upToLow = ['hello', 'World', 'IBM', 'WELL', 'coME','aPPle']

print([s.lower() for s in upToLow])

d ={'x': 'A', 'y': 'B', 'z': 'C'}

dx2 =[k + '=' + v for k, v in d.items()]

print(dx2)