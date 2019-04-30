#-*- coding:utf-8 -*-
#Authon: devincob

L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
# 取前3个元素，应该怎么做？
# 取前N个元素，也就是索引为0-(N-1)的元素，可以用循环：
r = []
n = 3
for i in range(n):
    r.append(L[i])
print(r)
# 对这种经常取指定索引范围的操作，用循环十分繁琐，因此，Python提供了切片（Slice）操作符，能大大简化这种操作。

# 对应上面的问题，取前3个元素，用一行代码就可以完成切片：

print(L[0:3])
# L[0:3]表示，从索引0开始取，直到索引3为止，但不包括索引3。即索引0，1，2，正好是3个元素。

# 如果第一个索引是0，还可以省略：

print(L[:3])
# 也可以从索引1开始，取出2个元素出来：

print(L[1:3])
# 类似的，既然Python支持L[-1]取倒数第一个元素，那么它同样支持倒数切片，试试：

print(L[-2:])

print(L[-2:-1])
# 记住倒数第一个元素的索引是-1。

# 切片操作十分有用。我们先创建一个0-99的数列：

X = list(range(10))
print(X)
# 可以通过切片轻松取出某一段数列。比如前3个数：

print(X[:3])
# 后3个数：
print(X[-3:])

# 第三个到第七个数

print(X[3:8])

# 每5个取一个

print(X[::5])
# 前8个数，每两个取一个：
print(X[:8:2])

# 甚至什么都不写，只写[:]就可以原样复制一个list：
M = X[:]
print(M)

# tuple也是一种list，唯一区别是tuple不可变。因此，tuple也可以用切片操作，只是操作的结果仍是tuple：
T = (0, 1, 2, 3, 4, 5)
TC = (0, 1, 2, 3, 4, 5)[:3]

print(TC)
# 字符串'xxx'也可以看成是一种list，每个元素就是一个字符。因此，字符串也可以用切片操作，只是操作结果仍是字符串：

string =  'ABCDEFG'
stringC = string[:3]
print(stringC)
'ABC'
stringG = 'ABCDEFG'[::2]
print(stringG)
'ACEG'

# 在很多编程语言中，针对字符串提供了很多各种截取函数（例如，substring），其实目的就是对字符串切片。
# Python没有针对字符串的截取函数，只需要切片一个操作就可以完成，非常简单。









