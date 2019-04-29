#Authon: devincob

import  getpass

_usename = "qiaorui"

_password = "123456"
username = input("username")

password = input("password")

if _usename == username and _password == password:
    print("welcome user {name} login ...".format(name=username))
else:
    print("invalid username or password")

print(username, password)
