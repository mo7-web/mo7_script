import my_module

print("__name__=", __name__)


if __name__ == "__main__":
    print(my_module.message)

print(my_module.Hello("1234"))
