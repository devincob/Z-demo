#-*- coding:utf-8 -*-
#Authon: devincob

# Python内建的filter()函数用于过滤序列。
# 和map()类似，filter()也接收一个函数和一个序列。

# 和map()不同的是，filter()把传入的函数依次作用于每个元素，
# 然后根据返回值是True还是False决定保留还是丢弃该元素。
# 例如，在一个list中，删掉偶数，只保留奇数，可以这么写：
def  is_odd(n):
     return n % 2 == 1

list(filter(is_odd,[1,2,4,5,6,9,10,15]))

L = list(filter(is_odd,[1,2,4,5,6,9,10,15]))
print(L)

def not_empty(s):
    return s and s.strip

list(filter(not_empty, ['A','','b',None,'c']))

S = list(filter(not_empty, ['A','','b',None,'c']))

print(S)


def _odd_iter():
    n = 1
    while True:
        n = n + 2
        yield n


def not_divisible(n):
    return  lambda  x : x % n > 0

def primes():
    yield 2
    it = _odd_iter()
    while True:
        n = next(it)
        yield n
        it = filter(not_divisible(n),it)

for n in primes():
    if n < 1000:
        print(n)
    else:
        break
requested_topping = ['mushrooms', 'extra chess']

if 'mushrooms' in requested_topping:
    print('Adding mushrooms')
if 'extra chess' in requested_topping:
    print('extra chess')
