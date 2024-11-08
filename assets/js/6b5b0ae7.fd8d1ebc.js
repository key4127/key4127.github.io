"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4759],{5793:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"web.lab/07 JS Cont","title":"07 JS Cont","description":"JS cont: arrow functions, callbacks, map, filter","source":"@site/docs/web.lab/07 JS Cont.md","sourceDirName":"web.lab","slug":"/web.lab/07 JS Cont","permalink":"/docs/web.lab/07 JS Cont","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web.lab/07 JS Cont.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"06 Intro to React","permalink":"/docs/web.lab/06 Intro to React"},"next":{"title":"08 Design","permalink":"/docs/web.lab/08 Design"}}');var a=r(4848),s=r(8453);const c={sidebar_position:1},i=void 0,l={},o=[{value:"JS cont: arrow functions, callbacks, map, filter",id:"js-cont-arrow-functions-callbacks-map-filter",level:2},{value:"\u56de\u987e",id:"\u56de\u987e",level:3},{value:"\u56de\u8c03\u51fd\u6570",id:"\u56de\u8c03\u51fd\u6570",level:3},{value:"map \u548c filter",id:"map-\u548c-filter",level:3},{value:"web\u4e2d\u7684\u56de\u8c03\u51fd\u6570",id:"web\u4e2d\u7684\u56de\u8c03\u51fd\u6570",level:3},{value:"\u6700\u540e",id:"\u6700\u540e",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"js-cont-arrow-functions-callbacks-map-filter",children:"JS cont: arrow functions, callbacks, map, filter"}),"\n",(0,a.jsx)(n.h3,{id:"\u56de\u987e",children:"\u56de\u987e"}),"\n",(0,a.jsx)(n.p,{children:"ppt\u9996\u5148\u56de\u987e\u4e86JS\u4e2d\u7684\u51fd\u6570\uff08\u51fd\u6570\u53ef\u4ee5\u8d4b\u503c\u7ed9\u53d8\u91cf\uff09\u548cfor\u5faa\u73af\uff0c\u5728\u6b64\u7565\u8fc7\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6b64\u5916\u8fd8\u6709\u4e00\u4e2a\u7ec3\u4e60\uff1a\u7f16\u5199\u51fd\u6570\uff0c\u8f93\u5165\u4e00\u4e2a\u6444\u6c0f\u5ea6\u6570\u7ec4\uff0c\u5c06\u5176\u5728\u65b0\u7684\u6570\u7ec4\u4e2d\u8f6c\u5316\u4e3a\u534e\u6c0f\u5ea6\u540e\u8fd4\u56de\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"const arrCtoF = (arrC) => {\r\n    const arrF = [];\r\n    for (let i = 0; i < arrC.length; i++) {\r\n        arrF.push(arrC[i] * 9 / 5 + 32);\r\n    }\r\n    return arrF;\r\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4ece\u8fd9\u6bb5\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff0c\u867d\u7136JS\u7684\u6570\u7ec4\u4e5f\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u4f46\u5176\u4f5c\u7528\u57df\u7b49\u4e0eC++\u6709\u6240\u4e0d\u540c\uff08\u5f85\u8865\u5145\uff09\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u53e6\u5916\uff0c\uff08ppt\u540e\u6587\uff09\u63d0\u5230\u51fd\u6570\u6709\u4e00\u79cd\u7b80\u5316\u5199\u6cd5\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"(inputs) => (output)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c ",(0,a.jsx)(n.code,{children:"(rectangle) => (rectangle.width * rectangle.height)"})," \u662f\u4e00\u4e2a\u8ba1\u7b97\u957f\u65b9\u5f62\u9762\u79ef\u7684\u51fd\u6570\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u56de\u8c03\u51fd\u6570",children:"\u56de\u8c03\u51fd\u6570"}),"\n",(0,a.jsx)(n.p,{children:"\u56de\u8c03\u51fd\u6570\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u51fd\u6570\uff0c\u5b83\u5728\u4f7f\u7528\u65f6\u4f5c\u4e3a\u53c2\u6570\u88ab\u4f20\u9012\u7ed9\u53e6\u4e00\u4e2a\u51fd\u6570\u5e76\u88ab\u8c03\u7528\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["ppt\u7ed9\u51fa\u4e86\u4e00\u4e2a\u521b\u5efa\u5e76\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u7684\u4f8b\u5b50\u3002\u5728\u4e0b\u6587\u4e2d\uff0c ",(0,a.jsx)(n.code,{children:"transformFonc"})," \u662f\u56de\u8c03\u51fd\u6570\uff0c\u7528 ",(0,a.jsx)(n.code,{children:"modifyArray"})," \u4f7f\u7528\u56de\u8c03\u51fd\u6570\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6839\u636eppt\u7684\u8bf4\u660e\uff0c ",(0,a.jsx)(n.code,{children:"modifyArray"})," \u63a5\u53d7\u4e00\u4e2a\u6570\u7ec4\u548c\u56de\u8c03\u51fd\u6570 ",(0,a.jsx)(n.code,{children:"transformFonc"})," \u4f5c\u4e3a\u8f93\u5165\uff0c\u5b83\u53ea\u9700\u8981\u5c06\u56de\u8c03\u51fd\u6570\u4f5c\u7528\u5230\u6570\u7ec4\u4e0a\u5e76\u8fd4\u56de\u7ed3\u679c\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"const modifyArray = (arr, transformFonc) => {\r\n    const newArr = [];\r\n    for (let i = 0; i < arr.length; i++) {\r\n        newArr.push(transformFonc(arr[i]));\r\n    }\r\n    return newArr;\r\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u4e86\u89e3\u56de\u8c03\u51fd\u6570\u57fa\u7840\u4e4b\u540e\uff0cppt\u7ed9\u51fa\u4e00\u4e2a\u7ec3\u4e60\uff1a\u5229\u7528\u4e0a\u6587practice\u7684\u4ee3\u7801\uff0c\u518d\u5206\u522b\u5199\u4e00\u4e2a\u534e\u6c0f\u5ea6\u8f6c\u6444\u6c0f\u5ea6\u548c\u6444\u6c0f\u5ea6\u8f6c\u5f00\u5c14\u6587\u7684\u51fd\u6570\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"const modifyArray = (arr, transformFonc) => {\r\n    const newArr = [];\r\n    for (let i = 0; i < arr.length; i++) {\r\n        newArr.push(transformFonc(arr[i]));\r\n    }\r\n    return newArr;\r\n};\r\n\r\nconst cToF = (tempC) => {\r\n    return tempC * 9 / 5 + 32;\r\n};\r\nconst fToC = (tempF) => {\r\n    return (tempF - 32) * 5 / 9;\r\n};\r\nconst cToK = (tempC) => {\r\n    return tempC + 273.15;\r\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6b64\u5916\uff0cppt\u8fd8\u7ed9\u51fa\u53e6\u4e00\u4e2a\u4f7f\u7528\u56de\u8c03\u51fd\u6570\u7684\u5b9e\u4f8b\uff0c\u89c1",(0,a.jsx)(n.a,{href:"https://docs.google.com/document/d/1FW8EJjRSXsxZ9f-txULaery6RL1H7hYnOBRgIVZf9cM/edit?tab=t.0",children:"weblab.is/callbackshint"}),"\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"map-\u548c-filter",children:"map \u548c filter"}),"\n",(0,a.jsx)(n.p,{children:"map\u548cfilter\u662f\u4e24\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u5b83\u4eec\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u6570\u7ec4\u3002"}),"\n",(0,a.jsx)(n.p,{children:"map\u4f1a\u5c06\u63a5\u6536\u5230\u7684\u51fd\u6570\u4f5c\u7528\u5230\u539f\u6765\u6570\u7ec4\u4e0a\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"const myArray = [1, 2, 3, 4, 5];\r\nconst newArray = myArray.map((num) => (num * 3));\r\n// newArray = [3, 6, 9, 12, 15]\n"})}),"\n",(0,a.jsx)(n.p,{children:"filter\u628a\u63a5\u6536\u5230\u7684\u51fd\u6570\u4f5c\u4e3a\u4e00\u4e2a\u201c\u6d4b\u8bd5\u201d\uff0c\u5c06\u901a\u8fc7\u6d4b\u8bd5\u7684\u5143\u7d20\u7b5b\u9009\u51fa\u6765\u5e76\u5f62\u6210\u4e00\u4e2a\u65b0\u6570\u7ec4\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"let values = [3, -6, 2, 0, -9, 4];\r\nlet positiveValues = values.filter(x => x > 0);\r\n// positiveValues = [3, 2, 4]\n"})}),"\n",(0,a.jsx)(n.p,{children:"ppt\u7ed9map\u548cfilter\u5206\u522b\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7ec3\u4e60\u3002"}),"\n",(0,a.jsx)(n.p,{children:"map\u7ec3\u4e60\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"const rectangles = [\r\n    { width: 1, height: 1 },\r\n    { width: 5, height: 10 },\r\n    { width: 6, height: 6 },\r\n];\r\n\r\nconst areas = rectangles.map((rectangle) => (rectangle.width * rectangle.height));\n"})}),"\n",(0,a.jsx)(n.p,{children:"filter\u7ec3\u4e60\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"const rectangles = [\r\n    { width: 1, height: 1 },\r\n    { width: 5, height: 10 },\r\n    { width: 6, height: 6 },\r\n];\r\n\r\nconst selectedRectangles = rectangles.filter((rectangle) => 2 * (rectangle.width + rectangle.height) > 10);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u53e6\u5916\uff0c\u6ce8\u610f\u56de\u8c03\u51fd\u6570\u4e2d\u7684\u62ec\u53f7\u4e0d\u662f\u5fc5\u987b\u7684\uff08filter\u7684\u4f8b\u5b50\u4e2d\u5c31\u6ca1\u6709\uff09\uff0c\u4f46\u662f\u4f1a\u63d0\u9ad8\u53ef\u8bfb\u6027\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"web\u4e2d\u7684\u56de\u8c03\u51fd\u6570",children:"web\u4e2d\u7684\u56de\u8c03\u51fd\u6570"}),"\n",(0,a.jsxs)(n.p,{children:["ppt\u6700\u540e\u4e3e\u4e86\u4e00\u4e9b\u4f8b\u5b50\uff0c\u4f8b\u5982 ",(0,a.jsx)(n.code,{children:"setInterval"})," \u548cw1\u91cc\u90fd\u7528\u5230\u4e86\u56de\u8c03\u51fd\u6570\uff0c\u8fd8\u4e3e\u4e86\u4e00\u4e2a\u6570\u636e\u5e93\u4f8b\u5b50\uff08\u7565\uff09\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u6700\u540e",children:"\u6700\u540e"}),"\n",(0,a.jsx)(n.p,{children:"ppt\u6700\u540e\u6709\u4e00\u884c\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-JavaScript",children:"const [exists, setExists] = useState(false);\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u4e0d\u662f\u56de\u8c03\u51fd\u6570\uff0c\u800c\u662f\u5bf9\u4e0b\u4e00\u90e8\u5206react\u7684\u5f15\u5165\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var t=r(6540);const a={},s=t.createContext(a);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);