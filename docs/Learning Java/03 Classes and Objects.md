此节包含九个部分。其中，垃圾回收机制在“创建和使用类”部分中， ``this`` 关键字、类的访问权限、静态成员、常量和字段初始化在“类的进一步说明”部分中，最后一部分和匿名类合为一部分。

### 创建类

基本语法已经在前文中提到，大部分细节（比如类的 ``public`` 属性）在后文中。

对于字段，和C++等一致， ``public`` 表示任何类都可以使用， ``private`` 表示只有这个类本身可以使用。

按照命名规范，类名要以大写字母开始；方法名的第一个词必须是动词。  

```Java
public class MountainBike extends Bicycle {

    public int seatHeight;

    public MountainBike(int startHeight, int startCadence,
                        int startSpeed, int startGear) {
        super(startCadence, startSpeed, startGear);
        seatHeight = startHeight;
    }   
        
    public void setHeight(int newValue) {
        seatHeight = newValue;
    }   
}
```

### 定义方法

基本的定义与C++相同。定义中可能包含异常列表，在以后的笔记中介绍。  

```Java
public double calculateAnswer(double wingSpan, int numberOfEngines,
                              double length, double grossTons) {
    //do the calculation here
}
```

函数的定义中，函数名和参数列表的部分称为函数签名。

Java支持重载函数，也就是说允许出现多个同名但参数列表不同的函数。  

### 构造函数

构造函数的定义与使用基本与C++相同。  

```Java
public Bicycle(int startCadence, int startSpeed, int startGear) {
    gear = startGear;
    cadence = startCadence;
    speed = startSpeed;
}

Bicycle myBike = new Bicycle(30, 0, 8);
```

可以不给类提供构造函数，此时Java会自动生成一个无参的默认构造函数，这个函数会调用超类（也称父类）的无参构造函数。如果超类没有无参构造函数就会导致编译器报错；此时，由于超类有构造函数，Java不会为它生成无参构造函数，因此子类的默认构造函数没有函数可供调用。如果某个类没有确定的超类，则它的超类为Object，这个类有无参构造函数。    

### 调用方法和构造函数

Java允许定义参数数量未知的方法。  

```Java
public Polygon polygonFrom(Point... corners) {
    int numberOfSides = corners.length;
    double squareOfSide1, lengthOfSide1;
    squareOfSide1 = (corners[1].x - corners[0].x)
                     * (corners[1].x - corners[0].x) 
                     + (corners[1].y - corners[0].y)
                     * (corners[1].y - corners[0].y);
    lengthOfSide1 = Math.sqrt(squareOfSide1);
}
```

这里 ``corners`` 的行为类似一个数组。对于这个方法，数组和未知数量（可以为0）的Point都可以作为参数传入。  

方法的参数名可以与字段相同，这种情况下，方法中的参数会隐藏字段。同C++，传入的基本类型参数只在函数域内有效；如果使用引用类型的参数，并且引用指向原来的对象，则这个对象有可能在方法中被改变。  

```Java
public void moveCircle(Circle circle, int deltaX, int deltaY) {
    // code to move origin of circle to x+deltaX, y+deltaY
    circle.setX(circle.getX() + deltaX);
    circle.setY(circle.getY() + deltaY);
        
    // code to assign a new reference to circle
    circle = new Circle(0, 0);
}

moveCircle(myCircle, 23, 56)
```

方法执行结束后， ``myCircle`` 的x、y值会被置为23和56。  

### 创建和使用对象

定义对象并不会创建对象。  

```Java
Point point;
```

这里的变量不指向任何对象。只有用 ``new`` 创建对象之后，这个变量才能使用。  

```Java
point = new Point();
```

文中还提到，创建的对象不一定要赋值给某个变量。  

```Java
int height = new Rectangle().height;
```

Java的垃圾回收机制不需要用户自己回收，而是会自动回收编译器认为不需要的对象。通过给引用赋值null可以手动地丢弃引用。如果某个对象的所有引用都被丢弃，对象就会被回收。  

### 类的进一步说明

方法的返回值可以是类名或接口名。这种情况下，这个类（或子类）的实例，或者实现了接口的类，可以作为返回值。  

Java的 ``this`` 指针在使用上基本与C++相同。  

标记为 ``public`` 的类可以在任何地方使用，而不标记的类被认为是package-private，即这个类只能在它的包里使用。 

下标列出了成员的标识符与含义。  

|Modifier|Class|Package|Subclass|World|
|:-:|:-:|:-:|:-:|:-:|
|public|Y|Y|Y|Y|
|protected|Y|Y|Y|N|
|no modifier|Y|Y|N|N|
|private|Y|N|N|N|

教程中的建议是，尽量对权限进行最严格的限制。  

用 ``static`` 标识的成员为静态成员，整个类共享。静态方法只能调用静态方法和使用静态成员。同时用 ``static`` 和 ``final`` 标记的为静态常量成员，用于定义常量。  

```Java
static final double PI = 3.1415926;
```

初始化静态资源时，可以自定义函数，也可以使用静态初始化块，它会在类加载时（任何对象创建前）执行并且只执行一次。一个类可以有多个静态代码块，会按顺序依次执行。  

```Java
static {
    // whatever code is needed for initialization goes here
}
```

除了静态初始化块，还有实例初始化块，在每个构造函数执行前执行一次。  

```Java
{
    // whatever code is needed for initialization goes here
}
```

此外，还可以用 ``final`` 标记初始化方法（这个关键字标记的函数不能被子类覆盖）。这种设计可以避免子类覆盖了某些父类必要的初始化内容。

### 嵌套类

嵌套类指在类中定义类。嵌套类分为内部类（没有 ``static`` 关键字）和静态嵌套类（有 ``static`` 关键字）。内部类有封闭类中所有内容的访问权（即使是 ``private`` 成员），而静态嵌套类无法直接访问封闭类中的其它成员。嵌套类中的成员可以和封闭类成员重名，会遮蔽封闭类成员。  

事实上，静态嵌套类是顶级类，它的行为和其它顶级类相同。

内部类总是与外部类的实例相关联，所以它不能有静态成员。如果要实例化一个内部类，需要先创建外部类对象，再创建内部类对象。内部类的标识符与含义与其它成员（例如方法）相同。

有两种额外的内部类，局部类和匿名类。

局部类指定义在某个块中的类。某种意义上局部类和内部类相似，它们都需要与外部类的实例关联，所以不能定义接口和静态成员，但允许定义常量。局部类可以访问局部“常量”（指 ``final`` 修饰的局部变量）或者实际上为 ``final`` （未更改过）的局部变量。  

如果需要一个只使用一次的局部类，则可以使用匿名类。  

```Java
HelloWorld frenchGreeting = new HelloWorld() {
    String name = "tout le monde";
    public void greet() {
        greetSomeone("tout le monde");
    }
    public void greetSomeone(String someone) {
        name = someone;
        System.out.println("Salut " + name);
    }
};
```

匿名类和局部类有相同的访问权限。

（虽然先前的教程没有提到任何序列化内容）教程强烈不建议序列号内部类。  

如果需要一个类多次使用，则需要局部类，否则需要匿名类。如果需要更广泛的使用，且不需要访问局部变量等，使用嵌套类，再选择普通的内部类或静态嵌套类。其它情况下（不需要创建类），使用lambda函数。

### 枚举类型

在教程中，枚举的定义是类。在下列代码中，这个列表中的内容被认为是枚举的实例。  

```Java
public enum DayOfWeek {
    // enum constants are listed here:
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
```

和类一致，枚举类型可以有构造函数。在上面的代码中，编译器事实上为每个常量创建了一个无参构造函数。  

```Java
public enum DayOfWeek {
    MONDAY("MON"), TUESDAY("TUE"), WEDNESDAY("WED"), THURSDAY("THU"), FRIDAY("FRI"), SATURDAY("SAT"), SUNDAY("SUN");
    
    private final String abbreviation;
    
    DayOfWeek(String abbreviation) {
        this.abbreviation = abbreviation;
    }
    
    public String getAbbreviation() {
        return abbreviation;
    }
}
```

此外，所有枚举类型都有一些隐式方法。 ``name()`` 函数返回枚举类型的名字， ``ordinal()`` 函数返回某个枚举变量位于列表中的位置（从0开始）， ``values()`` 函数返回包含所有枚举变量的数组， ``valueOf`` 通过名字返回一个具体的枚举实例。此外，枚举类型实现了 ``comparable`` 接口，可以排序。  

（像先前的教程没有提及过序列化一样，抽象函数也没有提到过）枚举类型不允许继承，但允许定义抽象函数，要求为每个类型提供对应的实现。