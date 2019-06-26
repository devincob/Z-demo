#-*- coding:utf-8 -*-
#Authon: devincob


# 在Class内部，可以有属性和方法，而外部代码可以通过直接调用实例变量的方法来操作数据，
# 这样，就隐藏了内部的复杂逻辑。
#
# 但是，从前面Student类的定义来看，外部代码还是可以自由地修改一个实例的
# name、score属性：
class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score

bart = Student('Bart Simpson', 59)
print(bart.score)

bart.score = 99
print(bart.score)
# 如果要让内部属性不被外部访问，可以把属性的名称前加上两个下划线__，
# 在Python中，实例的变量名如果以__开头，
# 就变成了一个私有变量（private），只有内部可以访问，外部不能访问，
# 所以，我们把Student类改一改：

# class Student(object):
#
#     def __init__(self, name, score):
#         self.__name = name
#         self.__score = score
#
#     def print_score(self):
#         print('%s: %s' % (self.__name, self.__score))
# #
# bart = Student('bart simpson', 59)
# print(bart._name)

# 这样就确保了外部代码不能随意修改对象内部的状态，
# 这样通过访问限制的保护，代码更加健壮。

# 但是如果外部代码要获取name和score怎么办？
# 可以给Student类增加get_name和get_score这样的方法：

class Student(object):

    def get_name(self):
        return self.__name
    def get_score(self):
        return self.__score
# 如果又要允许外部代码修改score怎么办？可以再给Student类增加set_score方法：

# print(bart.get_name())
bart = Student('devincob', 19)

print(bart.__name)
print(bart.__score)
# class Student(object):
#     def set_score(self, score):
#         self.__score = score
