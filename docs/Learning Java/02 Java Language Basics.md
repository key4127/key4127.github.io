这章的内容分为十个部分，笔记中逐一介绍。将第五、六合为一部分（操作符），九、十合为一部分（switch），控制流中的 ``yield`` 也放在switch部分中。

### 创建和命名变量

除了variable外，Java中还涉及到一个词field，可译为字段。由于Java中所有代码都以类的方式组织，所以变量的讨论也与类相关。  

此节将变量分为四种，分别是实例变量、类变量、局部变量和参数。实例变量（instance varialbe）又称非静态字段，类变量又称静态字段。教程在这里对词义做了区分，fields仅指代实例变量或类变量，而variables可指代以上所有变量。

### 基本类型

Java有八种基本类型，分别为byte、short、int、long、float、double、boolean、char，其中byte为8位整数，char为16位字符，整数均为有符号整数。基本类型的字段默认值均为对应的0（例如boolean的初值为false），局部变量无默认值。基本类型之外的所有类型为引用类型，引用类型的默认值为null。

int值可以转换为其它类型的整数值，反之不能。  

在整数后加 ``L`` 或 ``l`` （例如 ``1L`` ）可标明这是long类型的整数，否则默认为int类型。类似，浮点数默认为double类型（可用 ``D`` 或 ``d`` 标明），float类型需要用 ``F`` 或 ``f`` 标明。  

Java支持二进制、十进制、十六进制。此外，Java支持在数字之间添加数个下划线，让数字量看起来更直观。  

此外，有一种特殊量类型为Class，代表某个类的信息。例如， ``String.class`` 为一个代表 ``String`` 类的对象。  

### 数组

数组的创建语法为  

```Java
int[] array;
```

创建后要分配定长空间。  

```Java
array = new int[10];
```

可以直接赋值，不需要再特地分配空间。  

```Java
int[] array = {1};
```

可以用 ``length`` 属性得到数组长度。  

```Java
int leng = array.length;
```

``System`` 类提供了 ``arraycopy`` 方法用于复制数组。  

```Java
public static void arraycopy(Object src, int srcPos,
                             Object dest, int destPos, int length)

class ArrayCopyDemo {
    public static void main(String[] args) {
        String[] copyFrom = {
            "Affogato", "Americano", "Cappuccino", "Corretto", "Cortado",
            "Doppio", "Espresso", "Frappucino", "Freddo", "Lungo", "Macchiato",
            "Marocchino", "Ristretto" };

        String[] copyTo = new String[7];
        System.arraycopy(copyFrom, 2, copyTo, 0, 7);
        for (String coffee : copyTo) {
            System.out.print(coffee + " ");
        }
    }
}
```

Java中的数组源自java.util.Array类，还提供了数个其它方法。以下是其中几种（参数省略）。  

```Java
binarySearch() // 查找数组中某个元素的出现位置
equals() // 比较两个数组是否相同
fill() // 用某个值填充整个数组
sort() // 排序
parallelSort() // 并行排序，在多处理器系统中更快
stream() // 创建流
toString() // 转换为字符串，例如{1, 2}会转换为[1, 2]
```

### Var 关键字

从Java SE 10开始，可以用 ``var`` 关键字定义局部变量，不需要注明类型，编译器会自动推测。  

```Java
var message = "Hello world!";
var path = Path.of("debug.log");
var stream = Files.newInputStream(path);
```

注意 ``var`` 只能用于局部变量，且变量必须初始化，否则编译器无法推断类型。  

### 运算符

Java的运算符与C++基本相同，支持自增自减、三目运算符等。 

注意Java的%运算符规则与C++和Python的规则均不同；在Java中，可以认为 $a~MOD~b = (|a|~MOD~|b|) \times sign(a)$ （这里的 $MOD$ 仅指%运算符），即余数的符号与被除数相同。  

除此之外，Java还提供 ``instanceof`` 符号，用法为 ``a instanceof b`` 。如果 ``a`` 是类、子类或接口 ``b`` 的实例则返回 ``true`` ，否则返回 ``false`` 。注意， ``a`` 不能为基本类型，且 ``a`` 、 ``b`` 必须位于同一颗继承树上。如果 ``a`` 为null，则上式一定返回false。  

Java的位运算中，区分有符号右移和无符号右移。有符号右移为>>，无符号右移为>>>。

### Expressions, Statements and Blocks

标题直译过来为表达式、语句和块，与C++基本相同，略。

这里的“块”指被大括号包裹的部分。  

### 控制流

Java的某些控制流（if、else、for、while、do while、break、continue）与C++完全相同，略。  

对于集合和数组，for循环有另一种形式。  

```Java
int[] numbers = {1, 2, 3, 4, 5};
for (int item : numbers) {
    System.out.println(item);
}
```

此外，在Java中， ``break`` 和 ``continue`` 可以带有标签，程序会跳出到对应的位置，而不是仅跳出一层循环。  

```Java
public static void main(String[] args) {
    int[][] arrayOfInts = {
        {  32,   87,    3, 589 },
        {  12, 1076, 2000,   8 },
        { 622,  127,   77, 955 }
    };
    int searchfor = 12;

    int i;
    int j = 0;
    boolean foundIt = false;

search:
    for (i = 0; i < arrayOfInts.length; i++) {
        for (j = 0; j < arrayOfInts[i].length; j++) {
            if (arrayOfInts[i][j] == searchfor) {
                foundIt = true;
                break search;
            }
        }
    }
}
```

这段代码标记了外层for循环为 ``search`` 。在执行结束后， ``i`` 为1， ``j`` 为0。  

### Switch

在Java中，byte、short、int、char四种基本类型与其对应的引用类型、枚举类型和String都可以用于switch。由于允许引用类型，switch的值可能为null，会导致报错。  

从Java14开始，引入了switch表达式。  

```Java
int quarter = ...; // any value

String quarterLabel =
    switch (quarter) {
        case 0  -> "Q1 - Winter";
        case 1  -> "Q2 - Spring";
        case 2  -> "Q3 - Summer";
        case 3  -> "Q3 - Summer";
        default -> "Unknown quarter";
    };

```

在出现更复杂的情况时，可以用大括号包含代码块，并用 ``yield`` 关键字表示返回值。  

```Java
case 0  -> {
    System.out.println("Q1 - Winter");
    yield "Q1 - Winter";
}
```

注意不同于普通的switch，switch要求必须详尽地列出所有可能情况。