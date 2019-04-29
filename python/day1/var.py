# -*- coding:utf-8 -*-python 中加入这句话 能识别中文 python3 默认如此

# print("hello world")

gf_name_of_alex ="xiawa"
# print(msg, "111111")
name = input("name:")
age = int(input("age:")) #interger
# print(type(age), type(str(age)))
job = input("job:")
salary = input("salary:")
# f浮点 d 数字 s string
info1 = """
------info1 of %s-----
Name:%s
Age:%d
Job:%s
Salary:%s
""" % (name, name, age, job, salary)
print(info1)

info2 = """
------info2 of {_name}-----
Name:{_name}
Age:{_age}
Job:{_job}
Salary:{_salary}
""" .format(_name=name, _age=age, _job=job, _salary=salary)
print(info2)

info3 = """
------info3 of {0}-----
Name:{0}
Age:{1}
Job:{2}
Salary:{3}
""" .format(name, age, job, salary)
print(info3)

