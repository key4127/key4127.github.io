---
sidebar_position: 1
---

## JS cont: arrow functions, callbacks, map, filter

### 回顾

ppt首先回顾了JS中的函数（函数可以赋值给变量）和for循环，在此略过。  

此外还有一个练习：编写函数，输入一个摄氏度数组，将其在新的数组中转化为华氏度后返回。   

```JavaScript
const arrCtoF = (arrC) => {
    const arrF = [];
    for (let i = 0; i < arrC.length; i++) {
        arrF.push(arrC[i] * 9 / 5 + 32);
    }
    return arrF;
};
```

从这段代码可以看出，虽然JS的数组也是引用类型，但其作用域等与C++有所不同（待补充）。  

另外，（ppt后文）提到函数有一种简化写法：  

```JavaScript
(inputs) => (output)
```

例如， ``(rectangle) => (rectangle.width * rectangle.height)`` 是一个计算长方形面积的函数。  

### 回调函数

回调函数是一种特殊的函数，它在使用时作为参数被传递给另一个函数并被调用。  

ppt给出了一个创建并使用回调函数的例子。在下文中， ``transformFonc`` 是回调函数，用 ``modifyArray`` 使用回调函数。  

根据ppt的说明， ``modifyArray`` 接受一个数组和回调函数 ``transformFonc`` 作为输入，它只需要将回调函数作用到数组上并返回结果。  

```JavaScript
const modifyArray = (arr, transformFonc) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(transformFonc(arr[i]));
    }
    return newArr;
};
```

在了解回调函数基础之后，ppt给出一个练习：利用上文practice的代码，再分别写一个华氏度转摄氏度和摄氏度转开尔文的函数。  

```JavaScript
const modifyArray = (arr, transformFonc) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(transformFonc(arr[i]));
    }
    return newArr;
};

const cToF = (tempC) => {
    return tempC * 9 / 5 + 32;
};
const fToC = (tempF) => {
    return (tempF - 32) * 5 / 9;
};
const cToK = (tempC) => {
    return tempC + 273.15;
};
```

此外，ppt还给出另一个使用回调函数的实例，见[weblab.is/callbackshint](https://docs.google.com/document/d/1FW8EJjRSXsxZ9f-txULaery6RL1H7hYnOBRgIVZf9cM/edit?tab=t.0)。

### map 和 filter

map和filter是两个高阶函数，它们接受一个函数作为参数，并返回一个新数组。  

map会将接收到的函数作用到原来数组上：    

```JavaScript
const myArray = [1, 2, 3, 4, 5];
const newArray = myArray.map((num) => (num * 3));
// newArray = [3, 6, 9, 12, 15]
```

filter把接收到的函数作为一个“测试”，将通过测试的元素筛选出来并形成一个新数组：  

```JavaScript
let values = [3, -6, 2, 0, -9, 4];
let positiveValues = values.filter(x => x > 0);
// positiveValues = [3, 2, 4]
```

ppt给map和filter分别提供了一个练习。  

map练习：  

```JavaScript
const rectangles = [
    { width: 1, height: 1 },
    { width: 5, height: 10 },
    { width: 6, height: 6 },
];

const areas = rectangles.map((rectangle) => (rectangle.width * rectangle.height));
```

filter练习：  

```JavaScript
const rectangles = [
    { width: 1, height: 1 },
    { width: 5, height: 10 },
    { width: 6, height: 6 },
];

const selectedRectangles = rectangles.filter((rectangle) => 2 * (rectangle.width + rectangle.height) > 10);
```

另外，注意回调函数中的括号不是必须的（filter的例子中就没有），但是会提高可读性。  

### web中的回调函数

ppt最后举了一些例子，例如 ``setInterval`` 和w1里都用到了回调函数，还举了一个数据库例子（略）。  

### 最后

ppt最后有一行：  

```JavaScript
const [exists, setExists] = useState(false);
```

这不是回调函数，而是对下一部分react的引入。  