#Authon: devincob
L = [1, 2, -1, 2, 4, 9]
def findMinAndMax(L):
    if not L:
        return  None, None
    else:
        min = max = L[0]
        for value in L:
            if value < min:
                min = value
            elif value > max:
                max = value
        print(min, max)
findMinAndMax(L)