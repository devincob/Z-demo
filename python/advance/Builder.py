#Authon: devincob

L = [x*x for x in range(10)]
print(L)

g = (x*x for x in range(10))

print(g)


def fib (max):
    n, a, b = 0, 0, 1
    while n < max:
        print(b)
        a, b = b, a+b
        n = n + 1
        return 'done'