#Authon: devincob

# for i in range(0, 10):
#     if i < 5:
#         print(i)
#     else:
#         continue # 跳出本次循环 进入下次循环
#     print(i+1, "Times")

for i in range(10):
    print("..........", i)
    for j in range(10):
        print(j)
        if j > 5:
            break