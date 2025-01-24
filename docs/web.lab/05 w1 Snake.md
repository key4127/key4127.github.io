---
sidebar_position: 1
---

## W1: snake

### 说明

感觉w1只能算作对JavaScript的一个练习，完成w1不代表对这个游戏有了多少了解（？）。~~没看视频不知道有没有讲解~~  
所以这篇博客内容分为两部分：  

* ppt内容说明
* 源代码分析

### 相关说明

在step2用到了前几节课中提到的mdn文档。  
原文档：[https://developer.mozilla.org/en-US/docs/Learn](https://developer.mozilla.org/en-US/docs/Learn)  
中文版：[https://developer.mozilla.org/zh-CN/docs/Learn](https://developer.mozilla.org/zh-CN/docs/Learn)  

### ppt内容说明

w1与w0在同一个库中，并且使用方法相同。  

### step 0

上一篇博客提到了，在JavaScript中可以直接调用 ``setInterval`` 函数，重复执行某一函数。  
第一个参数是要重复执行的函数，第二个参数是间隔多少毫秒执行一次。  

```JavaScript
setInterval(main, 1000 / SNAKE_SPEED);
```

再将 ``.js`` 文件链接到html，在 ``<head></head>`` 中包含  

```JavaScript
<script src="game.js" defer></script>
```

多行可以链接多个JavaScript文件。  

### step 1

在屏幕上绘制出蛇，让蛇自动向下移动。  
代码的逻辑是创建 ``snakeBody`` 数组，数组的数据类型是包含两个坐标的对象。  

```JavaScript
const snakeBody [
 { x: 11, y: 11},
 { x: 11, y: 10},
 { x: 11, y: 9},
];
```

再创建一个 ``updateSnake`` 函数，在 ``update`` 函数中调用 ``updateSnake`` ，再在 ``main`` 函数中调用 ``update`` 。  
数组的数据类型是 ``const`` 但仍然可以改变内容，因为 ``const`` 只检查引用的值。  

```JavaScript
snakeBody.pop();

//...用于快速复制数组中的内容
//这句话让newHead等于snakeBody的第一个元素
const newHead = {...snakeBody[0]};

newHead.x += 0;
newHead.y += 1;

//在数组开头添加元素
snakeBody.unshift(newHead);
```

### step 2

这一步的目的是让蛇能根据键盘操作移动。  

读取键盘需要 ``keyboard input event listener`` 。  
（参考 [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)）  

![keyboard event](./img/keyboard%20event.png)  

使用方法是

```JavaScript
window.addEventListener('keydown', function);
```

当触发 ``keydown`` 事件后，执行函数 ``function`` 。  

注意键盘只能操纵蛇左右转弯。  

关键部分代码如下（其它见ppt）：

```JavaScript
//inputDirection存储当前方向
//三个等号
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp' && inputDirection.x !== 0) {
        inputDirection = { x: 0, y: -1};
    } else if (event.key === 'ArrowDown' && inputDirection.x !== 0) {
        inputDirection = { x: 0, y: 1};
    } else if (event.key === 'ArrowLeft' && inputDirection.y !== 0) {
        inputDirection = { x: -1, y: 0};
    } else if (event.key === 'ArrowRight' && inputDirection.y !== 0) {
        inputDirection = { x: 1, y: 0};
    }
});
```

### step 3

实现 ``food`` 。

先将food初始化（用一个坐标来表示）。

```JavaScript
let food = {x: 4, y: 16};
```

完成 ``updateFood`` 函数后， ``food`` 会像 ``snake`` 一样定期更新并绘制。　　

```JavaScript
const updateFood = () => {
    if (onSnake(food)) {
        growSnake();
        food = getNewFoodPosition();
    }
};
```

### step 4

当蛇撞到边界或自己时，更新 ``isGameOver`` 为 ``true`` 。   
（这里ppt似乎有错误，初始化应该是 ``let isGameOver = false`` 而不是 ``let gameOver = false`` 。  

```JavaScript
const checkGameOver = () => {
    return snakeOutOfBounds() || snakeIntersectSelf();
};
```

用 ``clearInterval`` 终止循环。  

```JavaScript
let gameLoop = setInterval(main, 1000 / SNAKE_SPEED);

const main = () => {
    update();
    draw();
    if (isGameOver) {
        alert("Game Over");
        clearInterval(gameLoop);
    }
}
```

### challenge

在 ``input.js`` 中增加对R键的处理，按下R时执行 ``resetGame()`` 。  

```JavaScript
const resetGame = () => {
    clearInterval(gameLoop);

    resetSnake();
    resetDirection();

    gameLoop = setInterval(main, 1000 / SNAKE_SPEED);
}
```

### 源代码分析（to do）