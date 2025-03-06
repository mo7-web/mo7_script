import my_module

print("main__name=", __name__)

if __name__ == "__main__":
    print(my_module.message)
    print(my_module.Hello("1234"))
