#-*- coding:utf-8 -*-
#Authon: devincob

# Python的functools模块提供了很多有用的功能，
# 其中一个就是偏函数（Partial function）。
# 要注意，这里的偏函数和数学意义上的偏函数不一样。


# 在介绍函数参数的时候，我们讲到，通过设定参数的默认值，
# 可以降低函数调用的难度。而偏函数也可以做到这一点。举例如下：
#
# int()函数可以把字符串转换为整数，当仅传入字符串时，int()函数默认按十进制转换：

number = int('12345')

print(number)

# 但int()函数还提供额外的base参数，
# 默认值为10。如果传入base参数，就可以做N进制的转换：
eight = int('12345', base=8)
print(eight)
sixteen = int('1234', base=16)
print(sixteen)

# 假设要转换大量的二进制字符串，
# 每次都传入int(x, base=2)非常麻烦，
# 于是，我们想到，可以定义一个int2()的函数，默认把base=2传进去：
def intx(x, base=2):
    return int(x, base)

print(intx('100000'))
print(intx('1010101'))

# functools.partial就是帮助我们创建一个偏函数的，
# 不需要我们自己定义int2()，可以直接使用下面的代码创建一个新的函数int2：

import functools

int2 = functools.partial(int, base =2)

print(int2('1000000'))

print(int2('1010101'))

# 所以，简单总结functools.partial的作用就是，
# 把一个函数的某些参数给固定住（也就是设置默认值），
# 返回一个新的函数，调用这个新函数会更简单。
#
# 注意到上面的新的int2函数，仅仅是把base参数重新设定默认值为2，
# 但也可以在函数调用时传入其他值：
ten = int2('1000000',base =10)

print(ten)

int2 = functools.partial(int, base =2)
int('10010')
#相当于：
kw = {'base':2}
int('10010', **kw)

max2 =functools.partial(max, 10)

max2(5,6,7)

args = (10,5,6,7)

max = max(*args)

print(max)