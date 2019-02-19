#Authon: devincob

L = list(range(1, 12))
print(L)

LL = []

for x in  range(1,11):
    LL.append(x*x)
print(LL)

LLL = [x*x for x in range(1,11)]
print(LLL)

LLLL = [x*x for x in range(1, 11) if x%5 == 0]
print(LLLL)

double = [m+n for m in 'abc' for n in 'ABC']
print(double)

A = [1, 2, 3]
B = [4, 5, 6]
number = [m+n for m in B for n in A]
print(number)

D = {'name': 'devin', 'age': '20', 'sex': 'male'}
for key, value in D.items():
    print(key, '=', value)

C = {'x': 'A', 'y': 'B'}
CC = [k + '='+ v for k, v in D.items()]

EE = ['Hello', 'World']
EEE = [s.lower() for s in EE]
print(EEE)
