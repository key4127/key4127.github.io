"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7287],{4152:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"Web Dev/03 Redux","title":"03 Redux","description":"Redux","source":"@site/docs/Web Dev/03 Redux.md","sourceDirName":"Web Dev","slug":"/Web Dev/03 Redux","permalink":"/docs/Web Dev/03 Redux","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Web Dev/03 Redux.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"02 React Cont","permalink":"/docs/Web Dev/02 React Cont"}}');var c=n(4848),s=n(8453);const o={sidebar_position:1},d=void 0,i={},a=[{value:"Redux",id:"redux",level:2},{value:"Redux \u57fa\u7840",id:"redux-\u57fa\u7840",level:3},{value:"Redux \u4e0e React",id:"redux-\u4e0e-react",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"Redux \u4f7f\u7528",id:"redux-\u4f7f\u7528",level:3},{value:"\u4e3a React \u6ce8\u5165 Store",id:"\u4e3a-react-\u6ce8\u5165-store",level:3},{value:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Store",id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528-store",level:3},{value:"\u5f02\u6b65\u64cd\u4f5c",id:"\u5f02\u6b65\u64cd\u4f5c",level:3},{value:"Redux \u8c03\u8bd5",id:"redux-\u8c03\u8bd5",level:2}];function l(e){const r={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h2,{id:"redux",children:"Redux"}),"\n",(0,c.jsx)(r.p,{children:"Redux\u662f\u4e00\u79cdJavaScript\u4e2d\u7684\u72b6\u6001\u7ba1\u7406\u5e93\uff0c\u53ef\u4ee5\u901a\u8fc7\u96c6\u4e2d\u7ba1\u7406\u7684\u65b9\u5f0f\u7ba1\u7406\u5e94\u7528\u72b6\u6001\u3002"}),"\n",(0,c.jsx)(r.h3,{id:"redux-\u57fa\u7840",children:"Redux \u57fa\u7840"}),"\n",(0,c.jsx)(r.p,{children:"Redux \u7684\u4f7f\u7528\u6b65\u9aa4\u57fa\u672c\u5206\u4e3a\u4e94\u6b65\uff1a"}),"\n",(0,c.jsxs)(r.ol,{children:["\n",(0,c.jsxs)(r.li,{children:["\u5b9a\u4e49 ",(0,c.jsx)(r.code,{children:"reducer"})," \u51fd\u6570"]}),"\n",(0,c.jsxs)(r.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"createStore"})," \u4f20\u5165 ",(0,c.jsx)(r.code,{children:"reducer"})," \u51fd\u6570\uff0c\u751f\u6210  ",(0,c.jsx)(r.code,{children:"store"})," \u5b9e\u4f8b\u5bf9\u8c61"]}),"\n",(0,c.jsxs)(r.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"store"})," \u5bf9\u8c61\u7684 ",(0,c.jsx)(r.code,{children:"subscribe"})," \u65b9\u6cd5\u8ba2\u9605\u6570\u636e\u53d8\u5316"]}),"\n",(0,c.jsxs)(r.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"store"})," \u7684 ",(0,c.jsx)(r.code,{children:"dispatch"})," \u65b9\u6cd5\u63d0\u4ea4 ",(0,c.jsx)(r.code,{children:"action"})," \u5bf9\u8c61\uff0c\u89e6\u53d1\u6570\u636e\u53d8\u5316\uff08Redux\u4e2d\u552f\u4e00\u4fee\u6539\u6570\u636e\u7684\u65b9\u6cd5\u662f\u63d0\u4ea4 ",(0,c.jsx)(r.code,{children:"action"})," \u5bf9\u8c61\uff09"]}),"\n",(0,c.jsxs)(r.li,{children:["\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"store"})," \u7684 ",(0,c.jsx)(r.code,{children:"getState"})," \u65b9\u6cd5\u83b7\u53d6\u6700\u65b0\u72b6\u6001\u5e76\u66f4\u65b0"]}),"\n"]}),"\n",(0,c.jsx)(r.h2,{id:"redux-\u4e0e-react",children:"Redux \u4e0e React"}),"\n",(0,c.jsx)(r.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,c.jsx)(r.p,{children:"\u5728React\u4e2d\u4f7f\u7528Redux\u9700\u8981Redux Toolkit\u548creact-redux\u8fd9\u4e24\u4e2a\u63d2\u4ef6\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{children:"npm i @reduxjs/toolkit react-redux\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u6b64\u5916\uff0c\u6587\u4ef6\u67b6\u6784\u6a21\u5f0f\u4e00\u822c\u4e3a"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{children:"src/\r\n  store/\r\n    modules/\r\n      xx.js\r\n      ...\r\n      xx.js\r\n    index.js\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u72b6\u6001\u7ba1\u7406\u90e8\u5206\u4f4d\u4e8estore\u76ee\u5f55\uff0c\u5b50store\u4f4d\u4e8emodules\u76ee\u5f55\uff0c\u5165\u53e3\u6587\u4ef6index.js\u7ec4\u5408\u6240\u6709\u5b50\u6a21\u5757\u5e76\u5bfc\u51fa\u3002"}),"\n",(0,c.jsx)(r.h3,{id:"redux-\u4f7f\u7528",children:"Redux \u4f7f\u7528"}),"\n",(0,c.jsxs)(r.p,{children:[(0,c.jsx)(r.code,{children:"createSlice"})," \u51fd\u6570\u6765\u81eaRedux Toolkit\u5305\uff0c\u5141\u8bb8\u76f4\u63a5\u5b9a\u4e49\u4e00\u4e2a\u72b6\u6001\u5bf9\u8c61\uff08\u521d\u59cb\u503c\u548c\u76f8\u5e94 ",(0,c.jsx)(r.code,{children:"action"})," \uff09\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"const counterStore = createSlice({\r\n  name: 'counter',\r\n  initialState: {\r\n    count: 0\r\n  },\r\n  reducers: {\r\n    increment(state) {\r\n      state.count++;\r\n    },\r\n    decrement(state) {\r\n      state.count--;\r\n    }\r\n  }\r\n})\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u5176\u4e2d\uff0c ",(0,c.jsx)(r.code,{children:"reducers"})," \u5305\u542b\u4e86\u4fee\u6539\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u5b83\u4eec\u5fc5\u987b\u662f\u7eaf\u51fd\u6570\uff0c\u53ef\u4ee5\u4fee\u6539\u76f8\u5173\u5185\u5bb9\u3002"]}),"\n",(0,c.jsx)(r.p,{children:"\u4ee5\u4e0b\u662f counterStore.js \u4e2d\u5185\u5bb9\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"import { createSlice } from \"@reduxjs/toolkit\";\r\n\r\nconst counterStore = createSlice({\r\n  name: 'counter',\r\n  initialState: {\r\n    count: 0\r\n  },\r\n  reducers: {\r\n    increment(state) {\r\n      state.count++;\r\n    },\r\n    decrement(state) {\r\n      state.count--;\r\n    }\r\n  }\r\n})\r\n\r\nconst { increment, decrement } = counterStore.actions;\r\nconst reducer= counterStore.reducer;\r\n\r\nexport { increment, decrement };\r\nexport default reducer;\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u63a5\u4e0b\u6765\uff0c\u5728 index.js \u4e2d\u5bfc\u51fa\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"import { configureStore } from \"@reduxjs/toolkit\";\r\nimport counterReducer from './modules/counterStore'\r\n\r\nconst store = configureStore({\r\n  reducer: {\r\n    counter: counterReducer\r\n  }\r\n})\r\n\r\nexport default store;\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u5728 ",(0,c.jsx)(r.code,{children:"reducer"})," \u5bf9\u8c61\u4e2d\uff0c\u6709\u4e00\u4e2a\u9700\u8981\u7ba1\u7406\u7684\u3001\u540d\u4e3a ",(0,c.jsx)(r.code,{children:"counter"})," \u7684\u72b6\u6001\u3002"]}),"\n",(0,c.jsx)(r.h3,{id:"\u4e3a-react-\u6ce8\u5165-store",children:"\u4e3a React \u6ce8\u5165 Store"}),"\n",(0,c.jsx)(r.p,{children:"\u901a\u8fc7react-redux\u5185\u7f6e\u7684Provider\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7store\u53c2\u6570\u5c06\u521b\u5efa\u597d\u7684store\u5b9e\u4f8b\u6ce8\u5165\u5230\u5e94\u7528\u4e2d\u3002\u8fd9\u4e00\u6b65\u5728\u6839\u76ee\u5f55\u7684 index.js \u4e2d\u5b9e\u73b0\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"import React from 'react';\r\nimport ReactDOM from 'react-dom/client';\r\nimport App from './App';\r\nimport store from \"./store\";\r\nimport {Provider} from \"react-redux\";\r\n\r\nconst root = ReactDOM.createRoot(document.getElementById('root'));\r\nroot.render(\r\n  <Provider store={store}>\r\n    <App />\r\n  </Provider>\r\n);\n"})}),"\n",(0,c.jsx)(r.h3,{id:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528-store",children:"\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Store"}),"\n",(0,c.jsxs)(r.p,{children:["\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528store\u4e2d\u7684\u6570\u636e\u9700\u8981\u4e00\u4e2a\u94a9\u5b50\u51fd\u6570 ",(0,c.jsx)(r.code,{children:"useSelector"})," \u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:'import { useSelector } from "react-redux";\r\n\r\nfunction App() {\r\n  const { count } = useSelector(state => state.counter);\r\n  return (\r\n    <div>\r\n      {count}\r\n    </div>\r\n  )\r\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u4fee\u6539\u6570\u636e\u9700\u8981\u53e6\u4e00\u4e2a\u94a9\u5b50\u51fd\u6570 ",(0,c.jsx)(r.code,{children:"useDispatch"})," \uff0c\u901a\u8fc7 ",(0,c.jsx)(r.code,{children:"dispatch"})," \u51fd\u6570\u6765\u63d0\u4ea4action\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:'import { useDispatch, useSelector } from "react-redux";\r\nimport {increment, decrement} from "./store/modules/counterStore";\r\n\r\nfunction App() {\r\n  const { count } = useSelector(state => state.counter);\r\n  const dispatch = useDispatch();\r\n  return (\r\n    <div>\r\n      <button onClick={() => dispatch(increment())}>+</button>\r\n      {count}\r\n      <button onClick={() => dispatch(decrement())}>-</button>\r\n    </div>\r\n  )\r\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u5176\u4e2d\uff0c ",(0,c.jsx)(r.code,{children:"increment"})," \uff08\u7b49\uff09\u65b9\u6cd5\u662faction creator\uff0c\u7528\u4e8e\u751f\u6210actions\uff0c\u7136\u540e\u901a\u8fc7 ",(0,c.jsx)(r.code,{children:"dispatch"})," \u51fd\u6570\u6765\u6d3e\u53d1\u3002"]}),"\n",(0,c.jsx)(r.p,{children:"\u8c03\u7528\u65f6\u53ef\u4ee5\u4f20\u9012\u53c2\u6570\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"<button onClick={() => dispatch(addToNum(10))}>ADD TO 10</button>\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u53c2\u6570\u4f1a\u8fdb\u5165action\u7684 ",(0,c.jsx)(r.code,{children:"payload"})," \u5c5e\u6027\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"reducers: {\r\n    addToNum(state, action) {\r\n      state.count = action.payload;\r\n    }\r\n  }\n"})}),"\n",(0,c.jsx)(r.h3,{id:"\u5f02\u6b65\u64cd\u4f5c",children:"\u5f02\u6b65\u64cd\u4f5c"}),"\n",(0,c.jsxs)(r.p,{children:["\u5f02\u6b65\u64cd\u4f5c\u7684\u5927\u90e8\u5206\u4ee3\u7801\u4e0e\u540c\u6b65\u64cd\u4f5c\u4e00\u81f4\u3002\u989d\u5916\u64cd\u4f5c\u662f\u5728store\u90e8\u5206\u5c01\u88c5\u4e00\u4e2a\u51fd\u6570\uff0c\u5728\u51fd\u6570\u5185 ",(0,c.jsx)(r.code,{children:"return"})," \u4e00\u4e2a\u65b0\u51fd\u6570\uff0c\u5728\u65b0\u51fd\u6570\u4e2d\u5c01\u88c5\u5f02\u6b65\u8bf7\u6c42\u83b7\u53d6\u6570\u636e\uff0c\u5e76\u8c03\u7528\u540c\u6b65 ",(0,c.jsx)(r.code,{children:"actionCreater"})," \u4f20\u5165\u5f02\u6b65\u6570\u636e\u751f\u6210action\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(r.p,{children:"\u5c01\u88c5\u5f02\u6b65\u8bf7\u6c42\u9700\u8981axios\u5305\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{children:"npm i axios\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u4ee5\u4e0b\u4ee3\u7801\u4f4d\u4e8e channelStore.js \u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"import { createSlice } from \"@reduxjs/toolkit\";\r\nimport axios from 'axios';\r\n\r\nconst channelStore = createSlice({\r\n  name: 'channel',\r\n  initialState: {\r\n    channelList: []\r\n  },\r\n  reducers: {\r\n    setChannels (state, action) {\r\n      state.channelList = action.payload\r\n    }\r\n  }\r\n})\r\n\r\nconst { setChannels } = channelStore.actions;\r\n\r\nconst fetchChannelList = () => {\r\n  return async (dispatch) => {\r\n    const res = await axios.get('http://geek.itheima.net/v1_0/channels ')\r\n    dispatch(setChannels(res.data.data.channels))\r\n  }\r\n}\r\n\r\nexport { fetchChannelList }\r\n\r\nconst reducer = channelStore.reducer\r\nexport default reducer\n"})}),"\n",(0,c.jsx)(r.p,{children:"App.js\u4e2d\u5185\u5bb9\u4e3a"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:'import { useDispatch, useSelector } from "react-redux";\r\nimport {useEffect} from "react";\r\nimport { fetchChannelList } from "./store/modules/channelStore";\r\n\r\nfunction App() {\r\n  const { channelList } = useSelector(state => state.channel);\r\n  const dispatch = useDispatch();\r\n  useEffect(() => {\r\n    dispatch(fetchChannelList())\r\n  }, [dispatch])\r\n  return (\r\n    <div>\r\n      <ul>\r\n        {channelList.map(item => <li key={item.id}>{item.name}</li>)}\r\n      </ul>\r\n    </div>\r\n  )\r\n}\n'})}),"\n",(0,c.jsx)(r.h2,{id:"redux-\u8c03\u8bd5",children:"Redux \u8c03\u8bd5"}),"\n",(0,c.jsx)(r.p,{children:"\u53ef\u4ee5\u4f7f\u7528devtools\u8c03\u8bd5\u3002\uff08\u6682\u7565\uff09"})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>d});var t=n(6540);const c={},s=t.createContext(c);function o(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);