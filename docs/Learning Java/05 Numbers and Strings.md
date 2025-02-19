原教程包含五个部分。，讨论基本类型的数字和相应的包装类、以及字符串。  

### 数字

对于每个基本类型，Java都提供了一种包装类，将其包装为一个对象。所有数字包装类都是 ``Number`` 的子类。  

在需要对象（操作数字集合）、使用常量、和类的方法时，可以使用包装类。包装类提供类型转换和比较的方法等等。  

```Java
byte byteValue()
int compareTo(Byte anotherByte)
static Integer decode(String s)
static int parseInt(String s) // decimal only
String toString()
static Integer valueOf(String s)
```

注意 ``parseXxx`` 返回基本类型， ``valueOf`` 返回对象。

在输出数字时，可以使用 ``printf`` 函数或 ``format`` 函数，使用细节与C的 ``printf`` 类似。  

```Java
import java.util.Calendar;
import java.util.Locale;

public class TestFormat {
    
    public static void main(String[] args) {
      long n = 461012;
      System.out.format("%d%n", n);      //  -->  "461012"
      System.out.format("%08d%n", n);    //  -->  "00461012"
      System.out.format("%+8d%n", n);    //  -->  " +461012"
      System.out.format("%,8d%n", n);    // -->  " 461,012"
      System.out.format("%+,8d%n%n", n); //  -->  "+461,012"
      
      double pi = Math.PI;

      System.out.format("%f%n", pi);       // -->  "3.141593"
      System.out.format("%.3f%n", pi);     // -->  "3.142"
      System.out.format("%10.3f%n", pi);   // -->  "     3.142"
      System.out.format("%-10.3f%n", pi);  // -->  "3.142"
      System.out.format(Locale.FRANCE,
                        "%-10.4f%n%n", pi); // -->  "3,1416"

      Calendar c = Calendar.getInstance();
      System.out.format("%tB %te, %tY%n", c, c, c); // -->  "May 29, 2006"

      System.out.format("%tl:%tM %tp%n", c, c, c);  // -->  "2:34 am"

      System.out.format("%tD%n", c);    // -->  "05/29/06"
    }
}
```

（具体见 [String.format()](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/io/PrintStream.html#format(java.lang.String,java.lang.Object...))）

还可以用 ``DecimalFormat`` 类调整输出。  

```Java
import java.text.*;

public class DecimalFormatDemo {

   static public void customFormat(String pattern, double value ) {
      DecimalFormat myFormatter = new DecimalFormat(pattern);
      String output = myFormatter.format(value);
      System.out.println(value + "  " + pattern + "  " + output);
   }

   static public void main(String[] args) {

      customFormat("###,###.###", 123456.789); // 123,456.789
      customFormat("###.##", 123456.789); // 123456.79
      customFormat("000000.000", 123.78); // 000123.780
      customFormat("$###,###.###", 12345.67); // $12,345.67  
   }
}
```

Java中的 ``java.lang.Math`` 库支持数种操作。库中包含 ``Math.E`` 和 ``Math.PI`` 两个常量， ``abs`` 、 ``sqrt`` 、 ``pow`` 、 ``min`` 、 ``max`` 、各种三角函数等。  

``Math.random()`` 会产生一个0.0到1.0（不包括1.0）之间的伪随机数。可以对应放大并类型转换来生成随机数。要生成更复杂的随机数，需要 ``java.util.Random`` 库。

### 字符

char的包装类为 ``Character`` ，这个类是不可变的。  

```Java
Character ch = new Character('a');
```

以下是一些常用方法。  

```Java
boolean isDigit(char ch)
boolean isUpperClass(char ch)
char toUpperClass(char ch)
String toString(char ch)
```

在这个包装类中，仅支持char类型的函数不能接受补充字符（超过0xFFFF），而int类型支持所有Unicode字符。

### 字符串

``String`` 类是不可变的。类中的某些方法支持改变字符串，这些方法事实上删除了原来的字符串并重新创建了新字符串。  

``String`` 类中的 ``length()`` 函数返回字符串长度。类似 ``printf`` ，``String.format()`` 也提供格式化字符串的功能。  

```Java
String fs;
fs = String.format("The value of the float " +
                   "variable is %f, while " +
                   "the value of the " + 
                   "integer variable is %d, " +
                   " and the string is %s",
                   floatVar, intVar, stringVar);
System.out.println(fs);
```

可以通过 ``String.valueOf`` 将数字转为字符串（也可以用 ``Number.toString`` ）。  

``String`` 类提供了大量的函数，提供截取字串、比较、查询等各种功能。具体见 [String](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/String.html) 。  

### StringBuilder 类

``StringBuilder`` 类的行为和 ``String`` 类相似，但是这个类是可变的。除非这个类提供了更好的性能，否则尽量使用 ``String`` 类。  

``StringBuilder`` 类提供插入和添加字符的功能。  

```Java
append(primitive type or object)
delete(int start, int end) // start to end - 1
insert(int offset, element)
replace(int start, int end, String s)
reverse()
toString()
```

以下是一个使用了 ``StringBuilder`` 类的实例。

```Java
public class StringBuilderDemo {
    public static void main(String[] args) {
        String palindrome = "Dot saw I was Tod";
         
        StringBuilder sb = new StringBuilder(palindrome);
        
        sb.reverse();  // reverse it
        
        System.out.println(sb);
    }
}
```

这个使用了 ``StringBuilder`` 的类可以更方便地实现翻转字符串的功能。  

``StringBuffer`` 类与 ``StringBuilder`` 类基本一致，但 ``StringBuffer`` 是线程安全的。  

### 自动装箱与拆箱

自动装箱指Java编译器将基本类型转换成包装类；如果将包装类转换为基本类型，就叫做拆箱。  

当一个基本类型被作为包装类参数传入方法，或为包装类赋值时，就会发生自动装箱。相反，如果包装类作为基本类型参数或为基本类型赋值，就会发生拆箱。