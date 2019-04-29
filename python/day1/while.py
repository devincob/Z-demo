#Authon: devincob

count = 0
# while True:
#     print("count:", count)
#     count = count +1

age = 23
guess_age = int(input("age:"))
while count < 3:
    guess_age = int(input("age:"))
    if guess_age == age:
        print("you get it")
        break
    elif guess_age > age:
        print("think smaller...")
    else:
        print("think bigger...")
    count = count +1 #count 如果靠后则附属于else 就不会每次都+1了
    print(count,"times")
else:
    print("you should tried too many times ...fuck off")