---
sidebar_position: 1
---

## React 基础

### 表单受控绑定

首先通过属性绑定React状态，然后绑定 ``onChange`` 事件修改React状态。  

```JavaScript
function App() {
  const [value, setValue] = useState('');
  return (
    <div>
      value={value}
      <input onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}
```

### 获取DOM

DOM是HTML的编程接口，提供用于操作HTML文档的API。  

获取React DOM需要两步。第一步是用 ``useRef`` 函数生成 ``ref`` 对象，与DOM标签绑定；第二步是在DOM可用时，通过 ``ref.current`` 获取DOM。在渲染完毕后，DOM生成。  

```JavaScript
import {useRef} from "react";

function App() {
  const inputRef = useRef(null);
  const showDown = () => {
    console.log(inputRef.current);
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={showDown}>DOM</button>
    </div>
  )
}
```

## 组件通信

组件通信指组件之间的数据传递。  

### 父传子

将信息从父组件传到子组件，首先要在子组件标签绑定属性，然后让子组件通过 ``props`` 参数接收数据。 ``props`` 中包含了父组件传递的所有参数。  

```JavaScript
function Son(props) {
  return (
    <div>
      {props.name}
    </div>
  )
}

function App() {
  const name = 'this is App component.';
  return (
    <div>
      <Son name={name}/>
    </div>
  )
}
```

``props`` 可以传递任意类型的数据，包括JSX（用大括号包裹）。  

```JavaScript
function Son(props) {
  return (
    <div>
      {props.jxs}
    </div>
  )
}

function App() {
  return (
    <div>
      <Son jxs={<p>this is JSX.</p>}/>
    </div>
  )
}
```

另外， ``props`` 是只读对象，子组件无法修改父组件。

### 嵌套标签

父组件会自动将嵌套在子组件标签中的内容传递给子组件 ``props`` 属性中的 ``children`` 。  

```JavaScript
function Son(props) {
  return (
    <div>
      this is Son component, and It gets {props.children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Son>
        <span>deliver sth</span>
      </Son>
    </div>
  )
}
```

网页内容为“this is Son component, and It gets deliver sth”，由text和span两部分元素组成。  

### 子传父

首先，需要一个函数用来改变父组件的数据。然后将这个函数传给子组件，如果子组件调用了这个函数，就间接地改变了父组件。如果改变的是状态数据，父组件的显示就会发生变化。  

```JavaScript
import {useState} from "react";

function Son(props) {
  return (
    <div>
      <button onClick={props.func}>{props.name}</button>
    </div>
  )
}

function App() {
  const [name, setName] = useState("App");
  const getMsg = () => {
    setName("son");
  }
  return (
    <div>
      <Son func={getMsg} name={name}></Son>
    </div>
  )
}
```

### 兄弟组件

在兄弟组件间传递信息时，先通过子传父，再父传子。  

```JavaScript
import {useState} from "react";

function A(props) {
  return (
    <div>
      <button onClick={props.func}>Button A</button>
    </div>
  )
}

function B(props) {
  return (
    <div>
      {props.name}
    </div>
  )
}

function App() {
  const [name, setName] = useState("origin name");
  const changeName = () => {
    setName("new name");
  }
  return (
    <div>
      <div>
        <A func={changeName}/>
      </div>
      <B name={name}/>
    </div>
  )
}
```

### 跨层传递

实现顶层组件到底层组件跨层传递时，先使用 ``createContext`` 方法创建一个上下文对象，在顶层组件中通过 ``Provider`` 组件提供数据，在底层组件中通过 ``useContext`` 函数获取数据。  

```JavaScript
import { createContext, useContext } from "react";

const ctx = createContext();

function A(props) {
  return (
    <div>
      <B />
    </div>
  )
}

function B(props) {
  const msg = useContext(ctx);
  return (
    <div>
      {msg}
    </div>
  )
}

function App() {
  return (
    <div>
      <ctx.Provider value={"this is new B component."}>
        <A />
      </ctx.Provider>
    </div>
  )
}
```

无论多少层嵌套，只要是顶层至底层，就可以使用这套机制。  

## useEffect

``useEffect`` 是一个React Hook函数，用于创建不是由事件而是由渲染引起的操作（例如渲染结束，向服务器发送请求）。

### 基础使用

``useEffect`` 有两个参数，第一个参数是要执行的操作，第二个参数是一个依赖项数组。  

```JavaScript
import { useState, useEffect } from 'react';

const URL = "http://geek.itheima.net/v1_0/channels";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL);
      const jsonRes = await res.json();
      console.log(jsonRes);
      setList(jsonRes.data.channels);
    }
    getList()
  }, [])
  return (
    <div>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
```

没有依赖项时，函数在组件初始渲染和组件更新时执行；为空数组时，只在初始渲染时执行一次；其它情况，在初始渲染和特定组件更新时执行。  

```JavaScript
// 依赖count（状态变量）
useEffect(() => {
  // 待执行函数
}, [count])
```

### 清除副作用

``useEffect`` 中执行的操作被称为副作用，可能需要在组件卸载时将其清除。清除的逻辑写在 ``useEffect`` 中的 ``return`` 部分中。清除部分有许多执行时机，最常见的是组件卸载时。  

```JavaScript
function Son() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
      console.log(time);
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, [time])
  return (
    <div>
      TIME: {time}
    </div>
  )
}

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Son />}
      <button onClick={() => setShow(false)}>CLICK</button>
    </div>
  )
}
```

## Hook 函数

Hook函数是以 ``use`` 开头的函数（如前文中的 ``useState`` 、 ``useEffect`` ），可以实现逻辑的封装和复用。

### 自定义 Hook 函数  

```JavaScript
function useToggle() {
  const [value, setValue] = useState(true);
  const toggle = () => setValue(!value);
  return {
    value,
    toggle
  }
}

function App() {
  const {value, toggle} = useToggle();
  return (
    <div>
      {value && <div>this is div</div>}
      <button onClick={toggle}>toggle</button>
    </div>
  )
}
```

JavaScript中 ``return`` 的部分会被封装为闭包，可以记住函数的作用域。  

### 使用规则

Hook函数只能在组件中或其它自定义Hook函数中调用。  

此外，Hook函数只能在组件顶层调用，不能嵌套在 ``if`` 、 ``for`` 或其它函数中。