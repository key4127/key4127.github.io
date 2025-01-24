---
sidebar_position: 1
---

## Redux

Redux是一种JavaScript中的状态管理库，可以通过集中管理的方式管理应用状态。  

### Redux 基础

Redux 的使用步骤基本分为五步：  

1. 定义 ``reducer`` 函数
2. 使用 ``createStore`` 传入 ``reducer`` 函数，生成  ``store`` 实例对象  
3. 使用 ``store`` 对象的 ``subscribe`` 方法订阅数据变化  
4. 使用 ``store`` 的 ``dispatch`` 方法提交 ``action`` 对象，触发数据变化（Redux中唯一修改数据的方法是提交 ``action`` 对象）  
5. 使用 ``store`` 的 ``getState`` 方法获取最新状态并更新  

## Redux 与 React

### 配置

在React中使用Redux需要Redux Toolkit和react-redux这两个插件。  

```
npm i @reduxjs/toolkit react-redux
```

此外，文件架构模式一般为  

```
src/
  store/
    modules/
      xx.js
      ...
      xx.js
    index.js
```

状态管理部分位于store目录，子store位于modules目录，入口文件index.js组合所有子模块并导出。  

### Redux 使用

``createSlice`` 函数来自Redux Toolkit包，允许直接定义一个状态对象（初始值和相应 ``action`` ）。  

```JavaScript
const counterStore = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  }
})
```

其中， ``reducers`` 包含了修改数据的方法，它们必须是纯函数，可以修改相关内容。  

以下是 counterStore.js 中内容。  

```JavaScript
import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  }
})

const { increment, decrement } = counterStore.actions;
const reducer= counterStore.reducer;

export { increment, decrement };
export default reducer;
```

接下来，在 index.js 中导出。  

```JavaScript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './modules/counterStore'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

export default store;
```

在 ``reducer`` 对象中，有一个需要管理的、名为 ``counter`` 的状态。  

### 为 React 注入 Store

通过react-redux内置的Provider组件，可以通过store参数将创建好的store实例注入到应用中。这一步在根目录的 index.js 中实现。  

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

### 在组件中使用 Store

在组件中使用store中的数据需要一个钩子函数 ``useSelector`` 。  

```JavaScript
import { useSelector } from "react-redux";

function App() {
  const { count } = useSelector(state => state.counter);
  return (
    <div>
      {count}
    </div>
  )
}
```

修改数据需要另一个钩子函数 ``useDispatch`` ，通过 ``dispatch`` 函数来提交action对象。  

```JavaScript
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from "./store/modules/counterStore";

function App() {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      {count}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}
```

其中， ``increment`` （等）方法是action creator，用于生成actions，然后通过 ``dispatch`` 函数来派发。  

调用时可以传递参数。  

```JavaScript
<button onClick={() => dispatch(addToNum(10))}>ADD TO 10</button>
```

参数会进入action的 ``payload`` 属性。  

```JavaScript
reducers: {
    addToNum(state, action) {
      state.count = action.payload;
    }
  }
```

### 异步操作

异步操作的大部分代码与同步操作一致。额外操作是在store部分封装一个函数，在函数内 ``return`` 一个新函数，在新函数中封装异步请求获取数据，并调用同步 ``actionCreater`` 传入异步数据生成action对象。  

封装异步请求需要axios包。  

```
npm i axios
```

以下代码位于 channelStore.js 。

```JavaScript
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannels (state, action) {
      state.channelList = action.payload
    }
  }
})

const { setChannels } = channelStore.actions;

const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels ')
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetchChannelList }

const reducer = channelStore.reducer
export default reducer
```

App.js中内容为  

```JavaScript
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import { fetchChannelList } from "./store/modules/channelStore";

function App() {
  const { channelList } = useSelector(state => state.channel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChannelList())
  }, [dispatch])
  return (
    <div>
      <ul>
        {channelList.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
```

## Redux 调试

可以使用devtools调试。（暂略）