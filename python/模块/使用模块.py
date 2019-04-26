#-*- coding:utf-8 -*-
# #Authon: devincob
# Python本身就内置了很多非常有用的模块，只要安装完毕就可以立马使用
#  以sys 模块为例子写一个hello的模块

'a text module'
__author__ = 'devincob'

import sys
def test():
    args =sys.argv
    if len(args)==1:
        print('hello world')
    elif len(args) ==2:
        print('hello,%s' % args[1])
    else:
        print('too many arguments')

if __name__ == '__main__':
    test()
# 第1行和第2行是标准注释，第1行注释可以让这个hello.py文件直接在Unix/Linux/Mac上运行，第2行注释表示.py文件本身使用标准UTF-8编码；

# 第4行是一个字符串，表示模块的文档注释，任何模块代码的第一个字符串都被视为模块的文档注释；

# 第6行使用__author__变量把作者写进去，这样当你公开源代码后别人就可以瞻仰你的大名；

# 以上就是Python模块的标准文件模板，当然也可以全部删掉不写，但是，按标准办事肯定没错。

# 后面开始就是真正的代码部分。

# 你可能注意到了，使用sys模块的第一步，就是导入该模块：

# 作用域
# 在一个模块中，我们可能会定义很多函数和变量，但有的函数和变量我们希望给别人使用，有的函数和变量我们希望仅仅在模块内部使用。在Python中，是通过_前缀来实现的。

# 正常的函数和变量名是公开的（public），可以被直接引用，比如：abc，x123，PI等；

# 类似__xxx__这样的变量是特殊变量，可以被直接引用，但是有特殊用途，比如上面的__author__，__name__就是特殊变量，hello模块定义的文档注释也可以用特殊变量__doc__访问，我们自己的变量一般不要用这种变量名；

# 类似_xxx和__xxx这样的函数或变量就是非公开的（private），不应该被直接引用，比如_abc，__abc等；

# 之所以我们说，private函数和变量“不应该”被直接引用，而不是“不能”被直接引用，是因为Python并没有一种方法可以完全限制访问private函数或变量，但是，从编程习惯上不应该引用private函数或变量。

# private函数或变量不应该被别人引用，那它们有什么用呢？请看例子：

def _private_1(name):
    return 'hello, %s'% name
def _private_2(name):
    return 'hi, %s' % name
def greeting(name):
    if len(name)>3:
        return _private_1(name)
    else:
        return _private_2(name)

# 我们在模块里公开greeting()函数，
# 而把内部逻辑用private函数隐藏起来了，
# 这样，调用greeting()函数不用关心内部的private函数细节，
# 这也是一种非常有用的代码封装和抽象的方法，即：

# 外部不需要引用的函数全部定义成private，
# 只有外部需要引用的函数才定义为public。
