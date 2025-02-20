### 继承

在继承时，衍生类会继承基类的所有成员。构造函数不属于成员，不会被继承，但可以被衍生类调用。  

所有类都是 ``Object`` 的子类。

衍生类会继承基类的 ``public`` 和 ``protected`` 成员。如果两个类位于一个包中，衍生类也会继承package-private成员。由于嵌套类可以访问包装类的所有成员，因此，如果某个基类包含一个继承了它的嵌套类，则这个衍生类可以间接地访问基类的私有成员。 

对象可以显示地“类型转换”。在下面的例子中， ``obj`` 事实上是一个 ``MountainBike`` 对象，但是编译器只将其识别为 ``Object`` 对象，直接赋值会报错。通过下列语法，我们告诉编译器 ``obj`` 是 ``MountainBike`` 对象。  

```Java
Object obj = new MountainBike();
MountainBike myBike = (MountainBike)obj;
```

Java不允许一个类继承多个类，但允许实现多个接口。  

### 覆盖和隐藏方法

在衍生类可以定义和基类签名相同的实例方法，这种情况下基类的方法会被覆盖。可以使用 ``@Override`` 注解告知编译器要覆盖某个方法。如果定义和基类签名相同的静态方法，则基类的方法被隐藏。  

覆盖的方法可以修改访问权，但是必须大于等于被覆盖的方法。  

默认方法指方法在接口中实现而不是类中实现。一个类可以继承多个接口和一个类，则它们定义的方法可能产生冲突，此时编译器会选择衍生类的方法。

优先级最高的为基类的实例方法。  

```Java
public class Horse {
    public String identifyMyself() {
        return "I am a horse.";
    }
}

public interface Flyer {
    default public String identifyMyself() {
        return "I am able to fly.";
    }
}

public interface Mythical {
    default public String identifyMyself() {
        return "I am a mythical creature.";
    }
}

public class Pegasus extends Horse implements Flyer, Mythical {
    public static void main(String... args) {
        Pegasus myApp = new Pegasus();
        System.out.println(myApp.identifyMyself());
        // I am a horse.
    }
}
```

已经被覆盖的方法会被忽略。  

```Java
public interface Animal {
    default public String identifyMyself() {
        return "I am an animal.";
    }
}

public interface EggLayer extends Animal {
    default public String identifyMyself() {
        return "I am able to lay eggs.";
    }
}

public interface FireBreather extends Animal { }

public class Dragon implements EggLayer, FireBreather {
    public static void main (String... args) {
        Dragon myApp = new Dragon();
        System.out.println(myApp.identifyMyself());
        // I am able to lay eggs.
    }
}
```

在其它情况下会报错。如果要继承两个冲突的、独立的接口，则必须在衍生类中覆盖相关方法。

接口中的静态方法不会被继承。  

### 多态性

在衍生类中，定义与基类中名字相同的字段（即使类型不同）会隐藏基类的字段。不推荐这种方式。  

通过 ``super`` 关键字可以调用基类被覆盖的方法等。  

```Java
super.printMethod();
super(startCadence, startSpeed, startGear); // constructor
```

