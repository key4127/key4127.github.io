"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7869],{6753:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"Bookstore/1 React Basic","title":"1 React Basic","description":"React\u9879\u76ee\u914d\u7f6e","source":"@site/docs/Bookstore/1 React Basic.md","sourceDirName":"Bookstore","slug":"/Bookstore/1 React Basic","permalink":"/docs/Bookstore/1 React Basic","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Bookstore/1 React Basic.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Bookstore","permalink":"/docs/category/bookstore"},"next":{"title":"2 React Cont","permalink":"/docs/Bookstore/2 React Cont"}}');var c=r(4848),t=r(8453);const a={sidebar_position:1},i=void 0,o={},l=[{value:"React\u9879\u76ee\u914d\u7f6e",id:"react\u9879\u76ee\u914d\u7f6e",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:3},{value:"JSX\u57fa\u7840",id:"jsx\u57fa\u7840",level:2},{value:"\u8bc6\u522b\u8868\u8fbe\u5f0f",id:"\u8bc6\u522b\u8868\u8fbe\u5f0f",level:3},{value:"\u5217\u8868\u6e32\u67d3",id:"\u5217\u8868\u6e32\u67d3",level:3},{value:"React\u57fa\u7840",id:"react\u57fa\u7840",level:2},{value:"\u4e8b\u4ef6\u7ed1\u5b9a",id:"\u4e8b\u4ef6\u7ed1\u5b9a",level:3},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:3},{value:"useState",id:"usestate",level:3},{value:"\u57fa\u7840\u6837\u5f0f\u63a7\u5236",id:"\u57fa\u7840\u6837\u5f0f\u63a7\u5236",level:3},{value:"Classnames\u7c7b\u540d\u63a7\u5236\uff1aTo Do",id:"classnames\u7c7b\u540d\u63a7\u5236to-do",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"react\u9879\u76ee\u914d\u7f6e",children:"React\u9879\u76ee\u914d\u7f6e"}),"\n",(0,c.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9879\u76ee\u76ee\u5f55\u4e0b\u6267\u884c"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"npx create-react-app project-name\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u9879\u76ee\u540d\u79f0\u4e2d\u4e0d\u80fd\u6709\u5927\u5199\u5b57\u6bcd\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u7531\u4e8e\u6d89\u53ca\u5230\u7248\u672c\u4f9d\u8d56\u95ee\u9898\uff082025.1.20\uff09\u5b9e\u9645\u64cd\u4f5c\u4e3a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"npx create-react-app project-name\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5c06 ",(0,c.jsx)(n.code,{children:"package.json"})," \u4e2d\u7684React\u548cReactDOM\u7248\u672c\u6539\u4e3a18.2.0\uff0c\u518d\u6267\u884c"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"npm install\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u73b0\u5728 ",(0,c.jsx)(n.code,{children:"npm run build"})," \u4f1a\u62a5\u9519\u201cCan't resolve 'web-vitals'\u201d\uff0c\u518d\u6267\u884c ",(0,c.jsx)(n.code,{children:"npm install --save-dev web-vitals"})," \uff0c\u5c31\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,c.jsx)(n.p,{children:"\u6839\u76ee\u5f55\u7684package.json\u5b58\u50a8\u4e86\u4f9d\u8d56\u548c\u53ef\u4ee5\u6267\u884c\u7684\u6307\u4ee4\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4ee3\u7801\u5b58\u50a8\u5728src\u6587\u4ef6\u5939\u4e2d\uff0c\u76ee\u524d\u53ea\u9700\u8981\u4fdd\u7559App.js\u548cindex.js\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:"// index.js\r\n\r\nimport React from 'react';\r\nimport ReactDOM from 'react-dom/client';\r\nimport App from './App';\r\n\r\nconst root = ReactDOM.createRoot(document.getElementById('root'));\r\nroot.render(<App />);\n"})}),"\n",(0,c.jsx)(n.p,{children:"index.js\u662f\u6574\u4e2a\u9879\u76ee\u7684\u5165\u53e3\u3002\u8fd9\u6bb5\u4ee3\u7801\u4e2d\uff0c\u9996\u5148\u5bfc\u5165\u4e86\u6838\u5fc3\u5305\uff0c\u518d\u4eceApp.js\u4e2d\u5bfc\u5165\u6839\u7ec4\u4ef6\u3002\u6700\u540e\uff0c\u5c06App\u8ddf\u7ec4\u4ef6\u6e32\u67d3\u5230id\u4e3aroot\u7684dom\u8282\u70b9\u4e0a\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:'// App.js\r\n\r\nfunction App() {\r\n  return (\r\n    <div className="App">\r\n      This is APP\r\n    </div>\r\n  );\r\n}\r\n\r\nexport default App;\r\n\n'})}),"\n",(0,c.jsx)(n.p,{children:"App.js\u662f\u4e00\u5207\u7ec4\u4ef6\u7684\u6839\u57fa\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"jsx\u57fa\u7840",children:"JSX\u57fa\u7840"}),"\n",(0,c.jsx)(n.h3,{id:"\u8bc6\u522b\u8868\u8fbe\u5f0f",children:"\u8bc6\u522b\u8868\u8fbe\u5f0f"}),"\n",(0,c.jsx)(n.p,{children:"JSX\u4e2d\u901a\u8fc7\u5927\u62ec\u53f7\u8bc6\u522bJavaScript\u4e2d\u7684\u8868\u8fbe\u5f0f\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:"int value = 1;\r\nreturn (\r\n    <div className=\"App\">\r\n      This is APP\r\n      {'string'}\r\n      {value}\r\n    </div>\r\n  );\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u5217\u8868\u6e32\u67d3",children:"\u5217\u8868\u6e32\u67d3"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:"const list = [\r\n  {id: 1, name: 'C++'},\r\n  {id: 2, name: 'Python'},\r\n  {id: 3, name: 'Java'}\r\n]\r\n\r\nfunction App() {\r\n  return (\r\n    <div className=\"App\">\r\n      <ul>\r\n        {list.map(item => <li key={item.id}>{item.name}</li>)}\r\n      </ul>\r\n    </div>\r\n  );\r\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5176\u4e2d\uff0c ",(0,c.jsx)(n.code,{children:"map"})," \u51fd\u6570\u4f1a\u904d\u5386 ",(0,c.jsx)(n.code,{children:"list"})," \u5e76\u8fd4\u56de\u540e\u9762\u7684\u5185\u5bb9\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"react\u57fa\u7840",children:"React\u57fa\u7840"}),"\n",(0,c.jsx)(n.h3,{id:"\u4e8b\u4ef6\u7ed1\u5b9a",children:"\u4e8b\u4ef6\u7ed1\u5b9a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:"function App() {\r\n  const handleClick = (name, e) => {\r\n    console.log('button clicked', name, e);\r\n  }\r\n  return (\r\n    <div className=\"App\">\r\n      <button onClick={(e) => handleClick('jack', e)}>click me</button>\r\n    </div>\r\n  );\r\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u4e8b\u4ef6\u53c2\u6570\u662f ",(0,c.jsx)(n.code,{children:"e"})," \uff0c\u81ea\u5b9a\u4e49\u53c2\u6570\u662f ",(0,c.jsx)(n.code,{children:"name"})," \u3002\u6ce8\u610f\u5f62\u53c2\u548c\u5b9e\u53c2\u7684\u987a\u5e8f\u4fdd\u6301\u4e00\u81f4\u3002\u5728\u65f6\u95f4\u53d1\u751f\u65f6\uff0c\u4f1a\u8c03\u7528\u76f8\u5173\u51fd\u6570\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u7ec4\u4ef6",children:"\u7ec4\u4ef6"}),"\n",(0,c.jsxs)(n.p,{children:["React\u4e2d\uff0c\u7ec4\u4ef6\u5373\u4e3a\u9996\u5b57\u6bcd\u5927\u5199\u7684\u51fd\u6570\uff0c\u5185\u90e8\u5b58\u653e\u4e86\u7ec4\u4ef6\u7684\u903b\u8f91\u548cUI\u3002\u901a\u8fc7\u51fd\u6570\u5b9a\u4e49\u7ec4\u4ef6\u4e2d\uff0c\u5728 ",(0,c.jsx)(n.code,{children:"App"})," \u7ec4\u4ef6\u7684\u8fd4\u56de\u90e8\u5206\u6e32\u67d3\u7ec4\u4ef6\u3002\u53ef\u4ee5\u4f7f\u7528\u81ea\u95ed\u548c\uff08 ",(0,c.jsx)(n.code,{children:"<Component />"})," \uff09\u548c\u6210\u5bf9\uff08 ",(0,c.jsx)(n.code,{children:"<Component></Component>"})," \uff09\u6807\u7b7e\u4e24\u79cd\u65b9\u5f0f\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:'function Button() {\r\n  return <button>click</button>\r\n}\r\n\r\nfunction App() {\r\n  return (\r\n    <div className="App">\r\n      <Button />\r\n    </div>\r\n  );\r\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"usestate",children:"useState"}),"\n",(0,c.jsx)(n.p,{children:"useState\u662f\u4e00\u4e2aReact Hook\u51fd\u6570\uff0c\u5b83\u5141\u8bb8\u5411\u7ec4\u4ef6\u6dfb\u52a0\u4e00\u4e2a\u72b6\u6001\u53d8\u91cf\uff0c\u4ece\u800c\u5f71\u54cd\u7ec4\u4ef6\u7684\u6e32\u67d3\u7ed3\u679c\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["useState\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u503c\u4e3a\u72b6\u6001\u53d8\u91cf\uff0c\u7b2c\u4e8c\u4e2a\u503c\u4e3a ",(0,c.jsx)(n.code,{children:"set"})," \u51fd\u6570\uff0c\u7528\u4e8e\u4fee\u6539\u72b6\u6001\u53d8\u91cf\u3002useState\u7684\u53c2\u6570\u5c06\u79f0\u4e3a\u72b6\u6001\u53d8\u91cf\u7684\u521d\u503c\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:'import {useState} from "react";\r\n\r\nfunction Button() {\r\n  const [count, setCount] = useState(0);\r\n  const handleClick = () => {\r\n    setCount(count + 1);\r\n  }\r\n  return <button onClick={handleClick}>{count}</button>\r\n}\r\n\r\nfunction App() {\r\n  return (\r\n    <div className="App">\r\n      <Button />\r\n    </div>\r\n  );\r\n}\n'})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728React\u4e2d\uff0c\u72b6\u6001\u53d8\u91cf\u662f\u53ea\u8bfb\u7684\uff0c\u5e94\u8be5\u59cb\u7ec8\u66ff\u6362\u53d8\u91cf\u800c\u4e0d\u662f\u66f4\u65b0\u53d8\u91cf\u3002\u4f8b\u5982\u5c06\u4e0a\u6587\u4e2d ",(0,c.jsx)(n.code,{children:"setCount(count + 1)"})," \u66ff\u6362\u4e3a ",(0,c.jsx)(n.code,{children:"count++"})," \uff0c\u65e0\u6cd5\u5f97\u5230\u6b63\u786e\u7684\u6e32\u67d3\u7ed3\u679c\u3002\u5982\u679c\u72b6\u6001\u53d8\u91cf\u662f\u5bf9\u8c61\uff0c\u4e5f\u5e94\u8be5\u66ff\u6362\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u57fa\u7840\u6837\u5f0f\u63a7\u5236",children:"\u57fa\u7840\u6837\u5f0f\u63a7\u5236"}),"\n",(0,c.jsx)(n.p,{children:"\u5728App.js\u4e2d\u5bfc\u5165\u5916\u90e8css\u6587\u4ef6\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-JavaScript",children:"import './index.css'\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u5916\u90e8css\u6587\u4ef6\u4e2d\u7f16\u5199\u6837\u5f0f\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-CSS",children:".foo{\r\n    color: aqua;\r\n    font-size: 50px;\r\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"classnames\u7c7b\u540d\u63a7\u5236to-do",children:"Classnames\u7c7b\u540d\u63a7\u5236\uff1aTo Do"})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(6540);const c={},t=s.createContext(c);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);