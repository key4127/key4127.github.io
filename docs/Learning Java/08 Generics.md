### 泛型介绍

泛型允许类和接口成为类定义时的参数。泛型提供更安全的类型检查、减少了强制类型转换，并且使程序员可以实现通用算法。  

例子如下：  

```Java
/**
 * Generic version of the Box class.
 * @param <T> the type of the value being boxed
 */
public class Box<T> {
    // T stands for "Type"
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}
```

```Java
Box<Integer> integerBox = new Box<Integer>();
```

在Java SE 7即以后，如果编译器能确定类型，那上述的实例化可以省略。  

```Java
Box<Integer> integerBox = new Box<>();
```