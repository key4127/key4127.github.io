---
sidebar_position: 1
---

## Intro to JS

~~被ppt上 not related to java 逗乐了~~  

### 数据类型与运算符

JavaScript有五种基本的数据类型：boolean、number、string、null、undefined。  
数字运算符与其它语言相同，允许用加号进行字符串拼接。  

```JavaScript
"hello" + " world" = "hello world"
```

比较运算符中，等于为 ===，不等为 !== 。双等号和不等号会自动类型转换后比较结果（比如 2 == '2'）。  

### 基本语法

```JavaScript
const greatCommonDivisor = (a, b) => {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const x = 50;
const y = 15;
const gcd = greatCommonDivisor(x, y);
```

### 变量与常量定义

定义变量：  

```Javascript
let myBoolean = true;
let myNumber = 12;
let myString = "Hello World!";
```

``var`` 也可以定义变量，但 ``var`` 定义的变量作用域是全局的（或者在函数内）， ``let`` 的作用域在块内，为避免错误建议用 ``let`` 。   

定义常量：  

```JavaScript
const secondsPerMinute = 60;
```

### Null vs. Undefined

``null`` 可赋值给一个量，代表“no value”； ``undefined`` 代表值未被定义。  

```JavaScript
let variable;   //undefined

variable = null;    //null
```

### Output

使用 ``console.log(变量)`` 可以快速、方便地在控制台得到输出。  

### Alert

使用 ``alert(字符串)`` 会在页面中弹出一个通知。  

![pop-up notification](./img/pop-up%20notification.png)  

### 数组

```JavaScript
//initialize
//可以有不同类型
let pets = ["flower", 42, false, "bird"]

//replace
//从零开始计数
pets[2] = "hamster";

//remove from end
pets.pop();

//add to end
pets.push("rabbit");
```

### 控制流

条件语句：  

```JavaScript
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 16) {
    console.log("Good afternoon!");
} else if (hour < 20) {
    console.log("Good evening!");
} else {
    console.log("Good night!");
}
```

循环：  

```JavaScript
let z = 1;

while (z < 1000) {
    z = z * 2;
    console.log(z);
}
```

```JavaScript
const pets = ["cat", "dog", "guinea pig", "bird"];

for (let i = 0; i < pets.length; i++) {
    const phrase = "I love my " + pets[i];
    console.log(phrase);
}
```

```JavaScript
const pets = ["cat", "dog", "guinea pig", "bird"];

for (const animal of pets) {
    const phrase = "I love my " + animal;
    console.log(phrase);
}
```

### 对象

```JavaScript
const myCar {
    make    : "Ford",
    model   : "Mustang",
    year    : "2005",
    color   : "red"
};

console.log(myCar.model);
console.log(myCar["color"]);
```

```JavaScript
const make = myCar.make;
const model = myCar.model;

//or
const {make, model} = myCar;
```

等于号（===）检查的是引用是否相同，所以任意两个数组（对象等）永远不等。  

```JavaScript
let arr = [1, 2, 3];
let copyArr = [...arr];

let obj = {name: "Bill Gates" };
let copyObj = {...obj};
```

### 函数

关于返回值、参数等部分见前面的介绍。  

这一部分没有过多介绍，只是提到了函数可以用作参数（注意函数和函数的返回值的区别）。  

另外还介绍了一下 ``setInterval()`` 和 ``setTimeout()`` 的区别：  

![interval and timeout](./img/interval%20and%20timeout.png)  

### 类

JavaScript的类在结构体里定义。  

```JavaScript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea = () => {
        return this.width * this.height;
    }
}

const rect = new Rectangle(6, 8);
console.log(rect.getArea());
```