#Authon: devincob

# for i in range(0, 10, 1):
#     print("loop", i)
age_of_oldboy = 34
# continue 是跳出本次循环 进入下次循环
# break是结束整个循环
count = 0
# rang(x) x 相当于js中结构的数组-> [...x]
for i in range(3):
    guess_age = int(input("guess_age"))
    if guess_age == age_of_oldboy:
        print("yes, you get it")
    elif guess_age > age_of_oldboy:
        print("think smaller...")
    else:
        print("think bigger...")
    count = count +1
    if count == 3:
        countine_confirm = input("Do you want to keep guessing?")
        if countine_confirm != "n":
            count = 0
# else:
#     print("you have tried too many times..fuck off")