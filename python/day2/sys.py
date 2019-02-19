#Authon: devincob

import sys
import os
# print(sys.path)#打印环境变量
print(sys.argv)#脚本名字的绝对路径

os.system("dir")
cmd_res = os.popen("dir").read()
print("-->", cmd_res)
# os.mkdir("new_dir")

_author = 'qiaorui'

def test():
    args = sys.argv
    if len(args) == 1:
        print('hello world!')
    elif len(args) == 2:
        print('hello,%s!'%args[1])
    else:
        print('too many arguments!')
if _author == 'qiaorui':
    test()
print(sys.path)
