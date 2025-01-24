---
sidebar_position: 1
---

这篇笔记包含Lecture1-2的内容。  

## 介绍

*（基本与github上的README介绍内容相同）*

CS61A是伯克利CS61系列的第二门课，用Java语言讲解数据结构与算法。整个课程包含3部分：Java介绍、数据结构部分、算法部分。课程大部分代码是开源的，测试平台不开源，需要自己编写测试（课程内教了如何编写测试），只有2016年的CS61B同时开源了代码与测试平台。  

这个笔记只记录个人需要的内容，很多地方会简略说明或者省略。 

CS61B spring2024网页：  
[https://sp24.datastructur.es/](https://sp24.datastructur.es/)

我的github库：  
[https://github.com/key4127/CS61B](https://github.com/key4127/CS61B)

另外，这篇笔记中没有debugger内容，这部分放在下一篇笔记中，和Testing部分一起介绍。  

## Java 基础语法

**Python**

```python
print("hello world")
```

**Java**

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("hello world");
    }
}
```


---

**Python**

```python
x = 0
while x < 10:
    print(x)
    x = x + 1
```

**Java**

```java
public class HelloNumbers {
    public static void main(String[] args) {
        int x = 0;
        while (x < 10) {
            System.out.println(x);
            x = x + 1;
        }
    }
}
```

---

**Python**

```python
def larger(x, y):
    if (x > y):
        return x
    else:
        return y

print(larger(-5, 10))
```

**Java**

```java
public class LargerDemo {
    public static int larger(int x, int y) {
        if (x > y) {
            return x;
        } else {
            return y;
        }
    }

    public static void main(String[] args) {
        System.out.println(larger(-5, 10));
    }
}
```

---

在Java中，所有的代码必须包含在某个类里。可以在类里写一个 ``public static void main(String[] args)`` （即main函数）函数，代码可以通过这里运行。另外，Java用分号和大括号分隔语句，没有缩进要求。最后，作为静态类型语言，Java中所有变量、方法等必须有一个已声明的类型，这个类型不能改变。 

## 面向对象

### 构造函数

**Python**

```python
class Car:
    def __init__(self, m):
        self.model = m
        self.gas = 5
```

**Java**

```Java
public class Car {
    public String model;
    public int gas;

    public Car(String m) {
        model = m;
        gas = 5;
    }
}
```

### 方法

**Python**

```python
class Car:
    def drive(self):
        if gas < 5:
            print("Cannot drive!")
            return
        gas -= 5
        print(self.model + " goes vroom!")
    
    def gasLeft(self):
        return self.gas
    
    def addGas(self, amount):
        self.gas += amount
```

**Java**

```java
public class Car {
    public void drive() {
        if (gas < 5) {
            System.out.println("Cannot drive!");
            return;
        }
        gas -= 5;
        System.out.println(model + " goes vroom!");
    }

    public int gasLeft() {
        return self.gas
    }

    public void addGas(int amount) {
        gas = gas + amount;
    }
}
```

另外，Java中有 ``this`` 关键字，用来指向类中的内容，如 ``this.gas`` 。  

### 创建对象

**Python**

```python
c1 = Car("Honda Civic")
c2 = Car("Model T")
```

**Java**

```java
public static void main(String[] args) {
    Car c1;
    Car c2;

    c1 = new Car("Honda Civic");
    c2 = new Car("Model T");
}
```

### 使用对象

**Python**

```python
···
print(c1.gasLeft())

c1.drive()
print(c1.gasLeft())

c1.addGas(1)
print(c1.gasLeft())

c1.drive() # Cannot drive

print(c2.gasLeft())
```

**Java**

```java
public void static main(String[] args) {
    ···
    System.out.println(c1.gasLeft());

    c1.drive();
    System.out.println(c1.gasLeft());

    c1.addGas(1);
    System.out.println(c1.gasLeft());

    c1.drive(); // Cannot drive

    System.out.print(c2.gasLeft());
}
```

在lecture2的ppt中还有一个 ``Dog`` 类的实现，笔记里不再重复。可以在CS61B主页或我的库中查看相关代码。  