Record即数据类，是一种不可以改变的类，从Java SE 14引入。  

```java
public record Point(int x, int y) {}
```

通过这一行代码，定义了一个含有两个元素的数据类，并且隐式地实现了 ``toString()`` 、 ``equals()`` 和 ``hashCode`` 方法，实现了序列化接口。这些实现也可以被自定义实现覆盖。  

在数据类中，不允许定义实例字段、字段初始化段、实例初始化段。  

编译器会自动为记录生成一个规范构造函数，将参数传给记录。在需要验证记录（对某些参数抛出异常）或为可变对象创建防御性副本（避免记录状态被外部代码修改）的情况下，需要自定义构造函数。在紧凑规范构造函数中，不需要直接赋值（在函数前编译器就完成了赋值），但是可以修改。  

```java
public Range {
    // set negative start and end to 0
    // by reassigning the compact constructor's
    // implicit parameters
    if (start < 0)
        start = 0;
    if (end < 0)
        end = 0;
}
```

这是紧凑的规范参数形式，也可以不省略参数进行赋值。  

```java
public Range(int start, int end)
```

尽管编译器会调用规范构造函数，但是仍然可以定义任意构造函数。要求自定义构造函数必须调用规范构造函数，并且调用前不允许其它操作。  



编译器会自动生成访问器，方法名为记录的元素名。可以自定义访问器。   

```java
public List<String> cities() {
    return List.copyOf(cities);
}
```

上面的代码中就创建了防御性副本。  

序列化内容暂略。