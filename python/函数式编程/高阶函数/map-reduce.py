#-*- coding:utf-8 -*-
#Authon: devincob

# Python 内建了map()和reduce()

# map()函数接收两个参数，一个是函数，一个是Iterable，map将传入的函数一次作用到序列的每个元素，并把结果作为新的Iterable返回
# 我们有一个函数 f(x)=x²，要把这个函数作用在一个list [1, 2, 3, 4, 5, 6, 7, 8, 9]上，就可以用map()实现如下：

# 现在用python实现

def f(x):
    return x * x

print(list(map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])))
# map()传入的第一个参数是f，即函数对象本身。由于结果r是一个Iterator，Iterator是惰性序列，因此通过list()函数让它把整个序列都计算出来并返回一个list。

# 你可能会想，不需要map()函数，写一个循环，也可以计算出结果：
L = []

for n in [1,2,3,4,5,6,7,8,9]:
    L.append(f(n))

print(L)
# 的确可以，但是，从上面的循环代码，能一眼看明白“把f(x)作用在
# list的每一个元素并把结果生成一个新的list”吗？

# 所以，map()作为高阶函数，事实上它把运算规则抽象了，
# 因此，我们不但可以计算简单的f(x)=x2，还可以计算任意复杂的函数，比如，把这个list所有数字转为字符串：

lists = list(map(str,[1,2,3,4,5,6,7,8,9]))
print(lists)
# reduce的用法

# reduce把一个函数作用在一个序列[x1,x2,x3,...]上
# 这个函数必须接收两个参数，
# reduce把结果继续和序列的下一个元素做累积计算，其效果就是：

# reduce(f,[x1,x2,x3,x4]) = f(f(f(x1,x2),x3),x4)

# 比方一个序列求和，就可以用reduce实现

from functools import reduce
def add(x,y):
    return x+y

reduce(add,[1,2,5,7,9])

print(reduce(add,[1,3,5,7,9]))
# 当然求和运算可以直接用Python内建函数sum()，没必要动用reduce。

# 但是如果要把序列[1, 3, 5, 7, 9]变换成整数13579，reduce就可以派上用场：
def fn(x,y):
    return x*10+y

reduce(fn, [1,3,5,7,9])
print(reduce(fn, [1,3,5,7,9]))


def fnx(x, y):
    return x*10+y

def char2num(s):
    digits = {'0':0, '1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}
    return digits[s]

print(reduce(fnx,map(char2num,'13579')))

DIGITS = {'0':0, '1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}
def str2int(s):
    def fx(x, y):
        return x*10+y
    def charnum(s):
        return DIGITS[s]
    return  reduce(fx, map(charnum,s))

# 还可以用lambda函数进一步简化成：
DIGITS1 = {'0':0, '1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}

def char1(s):
    return DIGITS[s]

def str(s):
    return reduce(lambda x,y:x*10+y,map(char1,s))
# 也就是说，假设Python没有提供int()函数，你完全可以自己写一个把字符串转化为整数的函数，而且只需要几行代码！
#
# lambda函数的用法在后面介绍。

def lowercase(name):
    return name.lower()
def uppercase(name):
    return name.upper()
def capitalize(name):
    return name.capitalize()
def title(name):
    return name.title()


L1 = ['adam', 'LISA', 'barT']
L2 = list(map(title, L1))# 把每个单词的第一个字母转化为大写，其余小写
L3 = list(map(uppercase, L1))# 把所有字符中的小写字母转换成大写字母

L4 = list(map(lowercase, L1))# 把所有字符中的大写字母转换成小写字母
L5 = list(map(capitalize, L1)) # 把第一个字母转化为大写字母，其余小写
print(L2)
print(L3)

print(L4)
print(L5)


def prod(L):
    sum = 0
    for x in L:
        sum = sum*x
    return sum
print('3*5*79=',prod([3,5,79]))
if prod([3,5,79]) == 945:
    print('测试成功')
else:
    print('测试失败')