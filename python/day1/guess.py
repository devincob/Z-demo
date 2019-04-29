#Authon: devincob

age = 23
count = 0
# guess_age = int(input("age:"))


# if guess_age == age:
#     print("yes you get it")
# elif guess_age > age:
#     print("think smaller。。。")
# else:
#     print("think bigger...")

while count < 3:
    guess_age =int(input('age:'))
    if guess_age == age:
        print('you get it')
        break
    elif guess_age > age:
        print('think 1smaller...')
    else:
        print('think bigger...')
    count = count+1
else:
    print('get out off')