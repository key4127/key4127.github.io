"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[315],{8384:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Web Dev/04 React Router","title":"04 React Router","description":"React Router","source":"@site/docs/Web Dev/04 React Router.md","sourceDirName":"Web Dev","slug":"/Web Dev/04 React Router","permalink":"/docs/Web Dev/04 React Router","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Web Dev/04 React Router.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"03 Redux","permalink":"/docs/Web Dev/03 Redux"},"next":{"title":"01 Intro to Unity","permalink":"/docs/Unity Learn/01 Intro to Unity"}}');var c=n(4848),a=n(8453);const i={},o=void 0,s={},d=[{value:"React Router",id:"react-router",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u57fa\u7840\u4f7f\u7528",id:"\u57fa\u7840\u4f7f\u7528",level:3},{value:"\u62bd\u8c61\u8def\u7531\u6a21\u5757",id:"\u62bd\u8c61\u8def\u7531\u6a21\u5757",level:3},{value:"\u8def\u7531\u5bfc\u822a",id:"\u8def\u7531\u5bfc\u822a",level:3},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",level:3},{value:"404",id:"404",level:3},{value:"\u4e24\u79cd\u8def\u7531\u6a21\u5f0f",id:"\u4e24\u79cd\u8def\u7531\u6a21\u5f0f",level:3}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r.h2,{id:"react-router",children:"React Router"}),"\n",(0,c.jsx)(r.p,{children:"\u4e00\u4e2a\u8def\u5f84\uff08path\uff09\u5bf9\u5e94\u4e00\u4e2a\u7ec4\u4ef6\u3002\u5f53\u6d4f\u89c8\u5668\u8bbf\u95ee\u67d0\u4e2apath\u65f6\uff0c\u5bf9\u5e94\u7684\u7ec4\u4ef6\u4f1a\u88ab\u6e32\u67d3\uff0c\u8fd9\u5c31\u662f\u524d\u7aef\u8def\u7531\u3002"}),"\n",(0,c.jsx)(r.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,c.jsxs)(r.p,{children:["\u914d\u7f6eReact Router\u9700\u8981\u5b89\u88c5 ",(0,c.jsx)(r.code,{children:"react-router-dom"})," \u5305\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{children:"npm i react-router-dom\n"})}),"\n",(0,c.jsx)(r.h3,{id:"\u57fa\u7840\u4f7f\u7528",children:"\u57fa\u7840\u4f7f\u7528"}),"\n",(0,c.jsx)(r.p,{children:"\u914d\u7f6e\u57fa\u7840\u7684\u8def\u7531\uff0c\u9996\u5148\u9700\u8981\u521b\u5efarouter\u5b9e\u4f8b\u5bf9\u8c61\u5e76\u914d\u7f6e\u5bf9\u5e94\u5173\u7cfb\u3002"}),"\n",(0,c.jsx)(r.p,{children:"\uff08App.js\uff09"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"import { createBrowserRouter, RouterProvider } from \"react-router-dom\";\r\n\r\nconst router = createBrowserRouter([\r\n  {\r\n    path: '/login',\r\n    element: <div>LOGIN</div>\r\n  },\r\n  {\r\n    path: '/article',\r\n    element: <div>ARTICLE</div>\r\n  }\r\n])\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u7136\u540e\u5728\u6e32\u67d3\u90e8\u5206\uff0c\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"RouterProvider"})," \u8fdb\u884c\u8def\u7531\u7ed1\u5b9a\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"root.render(\r\n  <RouterProvider router={router}></RouterProvider>\r\n);\n"})}),"\n",(0,c.jsx)(r.p,{children:"\u5f53\u7136\uff0c\u5b9e\u9645\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u6e32\u67d3\u7b80\u5355\u7684div\uff0c\u4e5f\u4e0d\u80fd\u5c06\u8def\u7531\u914d\u7f6e\u653e\u5728\u6839\u6587\u4ef6\u4e2d\u3002"}),"\n",(0,c.jsx)(r.h3,{id:"\u62bd\u8c61\u8def\u7531\u6a21\u5757",children:"\u62bd\u8c61\u8def\u7531\u6a21\u5757"}),"\n",(0,c.jsx)(r.p,{children:"\u5728src\u4e0b\u65b0\u5efapage\u548crouter\u6587\u4ef6\u5939\uff0c\u5728\u6587\u4ef6\u5939\u4e2d\u65b0\u5efa\u76f8\u5173\u6587\u4ef6\uff0c\u914d\u7f6e\u4e0d\u540c\u8def\u7531\u3002"}),"\n",(0,c.jsx)(r.p,{children:"\uff08Router\u6587\u4ef6\u5939\u4e0b\u7684index.js\uff09"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:'import { createBrowserRouter } from "react-router-dom";\r\nimport Login from "../page/login";\r\nimport Article from "../page/article";\r\n\r\nconst router = createBrowserRouter([\r\n  {\r\n    path: \'/login\',\r\n    element: <Login />\r\n  },\r\n  {\r\n    path: \'/article\',\r\n    element: <Article />\r\n  }\r\n])\r\n\r\nexport default router;\n'})}),"\n",(0,c.jsx)(r.h3,{id:"\u8def\u7531\u5bfc\u822a",children:"\u8def\u7531\u5bfc\u822a"}),"\n",(0,c.jsx)(r.p,{children:"\u8def\u7531\u5bfc\u822a\u6307\u591a\u4e2a\u8def\u7531\u4e4b\u95f4\u9700\u8981\u8df3\u8f6c\uff0c\u4e14\u53ef\u80fd\u9700\u8981\u4f20\u9012\u53c2\u6570\u3002\u8def\u7531\u5bfc\u822a\u5206\u4e3a\u58f0\u660e\u5f0f\u5bfc\u822a\u548c\u7f16\u7a0b\u5f0f\u5bfc\u822a\u3002"}),"\n",(0,c.jsxs)(r.p,{children:["\u58f0\u660e\u5f0f\u5bfc\u822a\u6307\u901a\u8fc7 ",(0,c.jsx)(r.code,{children:"<Link />"})," \u7ec4\u4ef6\u63cf\u8ff0\u8981\u8df3\u8f6c\u7684\u76ee\u7684\u5730\uff0c\u901a\u8fc7\u7ec4\u4ef6\u7684 ",(0,c.jsx)(r.code,{children:"to"})," \u5c5e\u6027\u6307\u5b9a\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-HTML",children:'<Link to={"/article"}>click this to article</Link>\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u7f16\u7a0b\u5f0f\u5bfc\u822a\u6307\u901a\u8fc7 ",(0,c.jsx)(r.code,{children:"useNavigate"})," \u5f97\u5230\u5bfc\u822a\u65b9\u6cd5\uff0c\u901a\u8fc7\u8c03\u7528\u65b9\u6cd5\u8fdb\u884c\u8df3\u8f6c\uff0c\u66f4\u52a0\u7075\u6d3b\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"import { useNavigate } from 'react-router-dom';\r\n\r\nfunction Login() {\r\n  const navigate = useNavigate();\r\n  return (\r\n    <div>\r\n      <button onClick={() => navigate('/article')}>CLICK TO ARTICLE</button>\r\n    </div>\r\n  )\r\n}\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u4f20\u53c2\u4e5f\u6709\u4e24\u79cd\u5199\u6cd5\u3002\u7b2c\u4e00\u79cd\u662f ",(0,c.jsx)(r.code,{children:"searchParams"})," \u4f20\u53c2\uff0c\u53d1\u9001\u4e0e\u63a5\u6536\u683c\u5f0f\u5206\u522b\u5982\u4e0b\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"<button onClick={() => navigate('/article?id=1001&name=jack')}>CLICK TO ARTICLE</button>\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"import {useSearchParams} from \"react-router-dom\";\r\n\r\nfunction Article() {\r\n  const [params] = useSearchParams();\r\n  const id = params.get('id');\r\n  return (\r\n    <div>ID: {id}</div>\r\n  )\r\n}\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u5176\u4e2d\u7f51\u5740\u4e0e\u53c2\u6570\u95f4\u7528 ",(0,c.jsx)(r.code,{children:"?"})," \u5206\u9694\uff0c\u5404\u4e2a\u53c2\u6570\u4e4b\u95f4\u7528 ",(0,c.jsx)(r.code,{children:"&"})," \u5206\u9694\u3002"]}),"\n",(0,c.jsxs)(r.p,{children:["\u7b2c\u4e8c\u79cd\u4f20\u53c2\u65b9\u5f0f\u662f ",(0,c.jsx)(r.code,{children:"params"})," \u4f20\u53c2\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"<button onClick={() => navigate('/article/1001')}>CLICK TO ARTICLE</button>\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:'import {useParams} from "react-router-dom";\r\n\r\nfunction Article() {\r\n  const params = useParams();\r\n  let id = params.id;\r\n  return (\r\n    <div>ID: {id}</div>\r\n  )\r\n}\n'})}),"\n",(0,c.jsx)(r.p,{children:"\u6b64\u5916\uff0c\u8981\u6ce8\u610f\u66f4\u6539router\u7684index\u6587\u4ef6\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"{\r\n  path: '/article/:id',\r\n  element: <Article />\r\n}\n"})}),"\n",(0,c.jsxs)(r.p,{children:["\u5982\u679c\u8981\u7ee7\u7eed\u589e\u52a0\u53c2\u6570\uff0c\u53ef\u4ee5\u7ee7\u7eed\u589e\u52a0 ",(0,c.jsx)(r.code,{children:"'/article/:id/:name"})," \u7b49\u7b49\u3002"]}),"\n",(0,c.jsx)(r.h3,{id:"\u5d4c\u5957\u8def\u7531",children:"\u5d4c\u5957\u8def\u7531"}),"\n",(0,c.jsx)(r.p,{children:"\u5d4c\u5957\u8def\u7531\u5141\u8bb8\u5728\u4e00\u4e2a\u8def\u7531\u7ec4\u4ef6\u5185\u90e8\u5b9a\u4e49\u5176\u4ed6\u7684\u8def\u7531\u7ec4\u4ef6\u3002\u8fd9\u79cd\u673a\u5236\u4f7f\u5f97\u591a\u4e2a\u89c6\u56fe\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u9875\u9762\u4e0a\u4ee5\u5c42\u6b21\u7684\u65b9\u5f0f\u5c55\u793a\u3002"}),"\n",(0,c.jsxs)(r.p,{children:["\u5b9e\u73b0\u5d4c\u5957\u8def\u7531\uff0c\u9700\u8981 ",(0,c.jsx)(r.code,{children:"children"})," \u5c5e\u6027\u914d\u7f6e\u8def\u7531\u5d4c\u5957\u5173\u7cfb\uff0c\u518d\u4f7f\u7528 ",(0,c.jsx)(r.code,{children:"<Outlet />"})," \u914d\u7f6e\u6e32\u67d3\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsx)(r.p,{children:"router\u914d\u7f6e\u4e0e\u4e00\u7ea7\u8def\u7531\u6e32\u67d3\u5206\u522b\u5982\u4e0b\u3002"}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"const router = createBrowserRouter([\r\n  {\r\n    path: '/',\r\n    element: <Layout />,\r\n    children: [\r\n      {\r\n        path: 'board',\r\n        element: <Board />\r\n      },\r\n      {\r\n        path: 'about',\r\n        element: <About />\r\n      }\r\n    ]\r\n  }\r\n])\n"})}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:'import {Outlet} from "react-router-dom";\r\n\r\nfunction Layout() {\r\n  return (\r\n    <div>\r\n      LAYOUT\r\n      <Outlet />\r\n    </div>\r\n  )\r\n}\n'})}),"\n",(0,c.jsxs)(r.p,{children:["\u5982\u679c\u8981\u8bbe\u7f6e\u9ed8\u8ba4\u8def\u7531\uff08\u4f8b\u5982 ",(0,c.jsx)(r.code,{children:"board"})," \uff09\uff0c\u53ea\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"{\r\n  index: true,\r\n  element: <Board />\r\n}\n"})}),"\n",(0,c.jsx)(r.h3,{id:"404",children:"404"}),"\n",(0,c.jsxs)(r.p,{children:["\u5b9e\u73b0404\u9700\u8981\u4e24\u6b65\u3002\u9996\u5148\u9700\u8981\u4e00\u4e2a\u7ec4\u4ef6\u4f5c\u4e3a404\u6e32\u67d3\uff0c\u63a5\u4e0b\u6765\u5728\u8def\u7531\u8868\u672b\u5c3e\u914d\u7f6e ",(0,c.jsx)(r.code,{children:"*"})," \u3002"]}),"\n",(0,c.jsx)(r.pre,{children:(0,c.jsx)(r.code,{className:"language-JavaScript",children:"const router = createBrowserRouter([\r\n  {\r\n    path: '/',\r\n    element: <Layout />,\r\n    children: [\r\n      {\r\n        index: true,\r\n        element: <Board />\r\n      },\r\n      {\r\n        path: 'about',\r\n        element: <About />\r\n      }\r\n    ]\r\n  },\r\n  {\r\n    path: '*',\r\n    element: <NotFound />\r\n  }\r\n])\n"})}),"\n",(0,c.jsx)(r.h3,{id:"\u4e24\u79cd\u8def\u7531\u6a21\u5f0f",children:"\u4e24\u79cd\u8def\u7531\u6a21\u5f0f"}),"\n",(0,c.jsxs)(r.p,{children:["Router\u5206\u4e3ahistory\u6a21\u5f0f\u548chash\u6a21\u5f0f\uff0c\u5728React\u4e2d\u5206\u522b\u7531 ",(0,c.jsx)(r.code,{children:"createBrowserRouter"})," \u548c ",(0,c.jsx)(r.code,{children:"createHashRouter"})," \u521b\u5efa\u3002\u4e4b\u524d\u4f7f\u7528\u7684\u4e00\u76f4\u4e3ahistory\u6a21\u5f0f\u3002"]}),"\n",(0,c.jsx)(r.p,{children:(0,c.jsx)(r.img,{alt:"different router",src:n(1656).A+"",width:"1456",height:"285"})}),"\n",(0,c.jsxs)(r.p,{children:["\uff08\u56fe\u6e90\u81ea",(0,c.jsx)(r.a,{href:"https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=205f66d4bbb533ff3883e1a84b439a3c&p=59",children:"\u9ed1\u9a6c\u7a0b\u5e8f\u5458React18\u6559\u7a0b"}),"\uff09"]})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,c.jsx)(r,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},1656:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/different router-902ce92756ade840c3f263209b4819e4.png"},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(6540);const c={},a=t.createContext(c);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);