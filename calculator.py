import math
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero.")
    return a / b

def square(a):
    return a*a

def power(a,b):
    if b == 0:
        if a == 0:
            raise ValueError("cannot raise 0 by 0")
        else:
            return 1
    return pow(a,b)

def square_root(a):
    if a < 0:
        raise ValueError("cannot find squareroot of a negative number")
    return math.sqrt(a)

def cube_root(a):
    return math.cbrt(a)


def main():
    print("=== Simple Git Practice Calculator ===")

    # 1. Addition Step
    print("\n--- Step 1: Addition ---")
    try:
        num1 = float(input("Enter first number for addition: "))
        num2 = float(input("Enter second number for addition: "))
        print(f"Result: {num1} + {num2} = {add(num1, num2)}")
    except ValueError:
        print("Invalid input! Please enter numbers only.")
        return

    # 2. Subtraction Step
    print("\n--- Step 2: Subtraction ---")
    try:
        num3 = float(input("Enter first number for subtraction: "))
        num4 = float(input("Enter second number for subtraction: "))
        print(f"Result: {num3} - {num4} = {subtract(num3, num4)}")
    except ValueError:
        print("Invalid input! Please enter numbers only.")
        return

if __name__ == "__main__":
    main()
