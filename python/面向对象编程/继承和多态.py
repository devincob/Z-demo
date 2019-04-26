#-*- coding:utf-8 -*-
#Authon: devincob

class Animal(object):
    def run(self):
        print('animal is running...')

class Dog(Animal):
    def run(self):
        print('Dog is running')
class Cat(Animal):
    def run(self):
        print('Cat is running')

dog = Dog()
dog.run()

cat = Cat()
cat.run()