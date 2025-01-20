---
sidebar_position: 1
---

## React项目配置

### 安装

在项目目录下执行  

```
npx create-react-app project-name
```

项目名称中不能有大写字母。  

由于涉及到版本依赖问题（2025.1.20）实际操作为  

```
npx create-react-app project-name
```

将 ``package.json`` 中的React和ReactDOM版本改为18.2.0，再执行  

```
npm install
```

现在 ``npm run build`` 会报错“Can't resolve 'web-vitals'”，再执行 ``npm install --save-dev web-vitals`` ，就可以正常使用。  

### 结构

根目录的package.json存储了依赖和可以执行的指令。

代码存储在src文件夹中，目前只需要保留App.js和index.js。

```JavaScript
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

index.js是整个项目的入口。这段代码中，首先导入了核心包，再从App.js中导入根组件。最后，将App跟组件渲染到id为root的dom节点上。  

```JavaScript
// App.js

function App() {
  return (
    <div className="App">
      This is APP
    </div>
  );
}

export default App;

```

App.js是一切组件的根基。

## JSX基础

### 识别表达式

JSX中通过大括号识别JavaScript中的表达式。  

```JavaScript
int value = 1;
return (
    <div className="App">
      This is APP
      {'string'}
      {value}
    </div>
  );
```

### 列表渲染

```JavaScript
const list = [
  {id: 1, name: 'C++'},
  {id: 2, name: 'Python'},
  {id: 3, name: 'Java'}
]

function App() {
  return (
    <div className="App">
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}
```

其中， ``map`` 函数会遍历 ``list`` 并返回后面的内容。  

## React基础

### 事件绑定

```JavaScript
function App() {
  const handleClick = (name, e) => {
    console.log('button clicked', name, e);
  }
  return (
    <div className="App">
      <button onClick={(e) => handleClick('jack', e)}>click me</button>
    </div>
  );
}
```

上面的例子中事件参数是 ``e`` ，自定义参数是 ``name`` 。注意形参和实参的顺序保持一致。在时间发生时，会调用相关函数。

### 组件

React中，组件即为首字母大写的函数，内部存放了组件的逻辑和UI。通过函数定义组件中，在 ``App`` 组件的返回部分渲染组件。可以使用自闭和（ ``<Component />`` ）和成对（ ``<Component></Component>`` ）标签两种方式。  

```JavaScript
function Button() {
  return <button>click</button>
}

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}
```

### useState

useState是一个React Hook函数，它允许向组件添加一个状态变量，从而影响组件的渲染结果。  

useState返回值为一个数组，数组的第一个值为状态变量，第二个值为 ``set`` 函数，用于修改状态变量。useState的参数将称为状态变量的初值。  

```JavaScript
import {useState} from "react";

function Button() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>{count}</button>
}

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}
```

在React中，状态变量是只读的，应该始终替换变量而不是更新变量。例如将上文中 ``setCount(count + 1)`` 替换为 ``count++`` ，无法得到正确的渲染结果。如果状态变量是对象，也应该替换一个新的对象。  

### 基础样式控制  

在App.js中导入外部css文件。  

```JavaScript
import './index.css'
```

在外部css文件中编写样式。  

```CSS
.foo{
    color: aqua;
    font-size: 50px;
}
```

### Classnames类名控制：To Do