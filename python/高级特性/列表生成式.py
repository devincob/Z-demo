#-*- coding:utf-8 -*-
#Authon: devincob

# 列表生成式即List Comprehensions，是Python内置的非常简单却强大的可以用来创建list的生成式。

# 举个例子，要生成list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]可以用list(range(1, 11))：

list = list(range(1,11))
print(list)

# 但如果要生成[1x1, 2x2, 3x3, ..., 10x10]怎么做？方法一是循环：

l = []

for x in range(1,11):
    l.append(x*x)
print(l)



# 但是循环太繁琐，而列表生成式则可以用一行语句代替循环生成上面的list：

lx = [x*x for x in range(1,11)]
print(lx)

# 写列表生成式时，把要生成的元素x * x放到前面，后面跟for循环，
# 就可以把list创建出来，十分有用，多写几次，很快就可以熟悉这种语法。
# for循环后面还可以加上if判断，这样我们就可以筛选出仅偶数的平方：

lc = [x*x for x in range(1,11) if x%2 == 0]
print(lc)
# 还可以使用两层循环，可以生成全排列：
string = [m + n for m in 'ABC' for n in 'XYZ']
print(string)
# ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']

double = [m * n for m in [1,2,3] for n in [4,5,6]]

print(double)
# 三层和三层以上的循环就很少用到了。

# 运用列表生成式，可以写出非常简洁的代码。例如，列出当前目录下的所有文件和目录名，可以通过一行代码实现：

import os # 导入os模块，模块的概念后面讲到
dx = [d for d in os.listdir('.')] # os.listdir可以列出文件和目录
print(dx)
# ['.emacs.d', '.ssh', '.Trash', 'Adlm', 'Applications', 'Desktop', 'Documents', 'Downloads', 'Library', 'Movies', 'Music', 'Pictures', 'Public', 'VirtualBox VMs', 'Workspace', 'XCode']
# for循环其实可以同时使用两个甚至多个变量，比如dict的items()可以同时迭代key和value：
