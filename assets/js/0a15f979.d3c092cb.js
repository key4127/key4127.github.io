"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7063],{8094:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"CS61A/02 Container","title":"02 Container","description":"\u8fd9\u7bc7\u7b14\u8bb0\u5305\u542b\u7b2c\u4e94\u5468\u3001\u7b2c\u516d\u5468Mutability\u7684\u5185\u5bb9\uff0c\u53e6\u5916\u4e5f\u5305\u542bTuples\u3002\u7b2c\u516d\u5468Trees\u7684\u5185\u5bb9\u88ab\u6211\u89c6\u4f5c\u5bf9\u5217\u8868\u548c\u9012\u5f52\u7684\u7ec3\u4e60\uff0c\u7565\u8fc7\u3002","source":"@site/docs/CS61A/02 Container.md","sourceDirName":"CS61A","slug":"/CS61A/02 Container","permalink":"/docs/CS61A/02 Container","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CS61A/02 Container.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"01 Python Basic","permalink":"/docs/CS61A/01 Python Basic"},"next":{"title":"05 Scheme","permalink":"/docs/CS61A/05 Scheme"}}');var l=r(4848),i=r(8453);const t={sidebar_position:2},a=void 0,c={},d=[{value:"\u5217\u8868",id:"\u5217\u8868",level:2},{value:"range",id:"range",level:3},{value:"\u5217\u8868\u63a8\u5bfc\u5f0f",id:"\u5217\u8868\u63a8\u5bfc\u5f0f",level:3},{value:"\u5207\u7247",id:"\u5207\u7247",level:3},{value:"aggregation",id:"aggregation",level:3},{value:"\u5b57\u5178",id:"\u5b57\u5178",level:2},{value:"\u5143\u7ec4",id:"\u5143\u7ec4",level:2}];function o(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\u8fd9\u7bc7\u7b14\u8bb0\u5305\u542b\u7b2c\u4e94\u5468\u3001\u7b2c\u516d\u5468Mutability\u7684\u5185\u5bb9\uff0c\u53e6\u5916\u4e5f\u5305\u542bTuples\u3002\u7b2c\u516d\u5468Trees\u7684\u5185\u5bb9\u88ab\u6211\u89c6\u4f5c\u5bf9\u5217\u8868\u548c\u9012\u5f52\u7684\u7ec3\u4e60\uff0c\u7565\u8fc7\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5217\u8868",children:"\u5217\u8868"}),"\n",(0,l.jsx)(e.p,{children:"python\u4e2d\u7684\u5217\u8868\u5141\u8bb8\u4ee5\u4e0b\u64cd\u4f5c\u7b49"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> l = list(range(3))\r\n>>> l\r\n[0, 1, 2]\r\n\r\n>>> l.append(3)\r\n>>> l\r\n[0, 1, 2, 3]\r\n\r\n>>> l = l + [4]\r\n>>> l\r\n[0, 1, 2, 3, 4]\r\n\r\n>>> 1 in l\r\nTrue\r\n>>> 5 in l\r\n>>> False\r\n\r\n>>> len(l)\r\n5\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u53e6\u5916\uff0c\u4e0e\u5176\u5b83\u5bf9\u8c61\u76f8\u540c\uff0c ",(0,l.jsx)(e.code,{children:"A is B"})," \u4ee3\u8868A\u3001B\u4e3a\u76f8\u540c\u5bf9\u8c61\uff0c ",(0,l.jsx)(e.code,{children:"A == B"})," \u4ee3\u8868 A\u3001B\u7684\u503c\u76f8\u540c\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"range",children:"range"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> list(range(-2, 2))\r\n>>> [-2, -1, 0, 1]\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> list(range(4))\r\n>>> [0, 1, 2, 3]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5217\u8868\u63a8\u5bfc\u5f0f",children:"\u5217\u8868\u63a8\u5bfc\u5f0f"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> xs = range(5)\r\n>>> ys = [x * x - 2 * x + 1 for x in xs]\r\n>>> list(xs)\r\n[0, 1, 2, 3, 4]\r\n>>> ys\r\n[1, 0, 1, 4, 9]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5207\u7247",children:"\u5207\u7247"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:'def double_eights(s):\r\n    """\r\n    Return whether two consecutive items of list s are 8.\r\n    """\r\n    for i in range(len(s) - 1):\r\n        if s[i] == 8 and s[i + 1] == 8:\r\n            return True\r\n    return False\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:"def double_eights(s):\r\n    if s[:2] == [8, 8]:\r\n        return True\r\n    elif len(s) < 2:\r\n        return False\r\n    else:\r\n        return double_eights(s[1:])\n"})}),"\n",(0,l.jsxs)(e.p,{children:["python\u4e2d\u5207\u7247\u7684\u8bed\u6cd5\u4e3a ",(0,l.jsx)(e.code,{children:"list[start:stop:step]"})," \u3002\u5982\u679c ",(0,l.jsx)(e.code,{children:"start"})," \u6216 ",(0,l.jsx)(e.code,{children:"stop"})," \u4e3a\u8d1f\u6570\uff0c\u5219\u4ece\u540e\u5411\u524d\u6570\uff1b\u5982\u679c ",(0,l.jsx)(e.code,{children:"step"})," \u4e3a\u8d1f\u6570\uff0c\u5219\u53cd\u5411\u5207\u7247\u3002\u82e5\u5192\u53f7\u4e0d\u8db3\u7701\u7565 ",(0,l.jsx)(e.code,{children:"step"})," \u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> l = [1, 2, 3, 4, 5]\r\n\r\n>>> l[-3:]\r\n[3, 4, 5]\r\n\r\n>>> l[:3]\r\n[1, 2, 3]\r\n\r\n>>> l[::2]\r\n[1, 3, 5]\r\n\r\n>>> l[::-1]\r\n[5, 4, 3, 2, 1]\n"})}),"\n",(0,l.jsx)(e.h3,{id:"aggregation",children:"aggregation"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"sum"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> l = [1, 2, 3, 4, 5]\r\n>>> sum(l)\r\n15\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"max"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> l = [1, 2, 3, 4, 5]\r\n>>> max(l)\r\n5\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"all"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> l = [1, 2, 3, 4, 5]\r\n>>> all(l)\r\nTrue\r\n\r\n>>> l = [True, 0]\r\n>>> all(l)\r\nFalse\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5b57\u5178",children:"\u5b57\u5178"}),"\n",(0,l.jsx)(e.p,{children:"Python\u4e2d\u7684\u5b57\u5178\u5b58\u50a8\u952e\u503c\u5bf9\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> d = {'key1': 1, 'key2': 2}\r\n\r\n>>> d['key3'] = 3\r\n>>> d['key1'] = 0\r\n>>> d\r\n{'key1': 0, 'key2': 2, 'key3': 3}\r\n\r\n>>> del d['key1']\r\n>>> d.pop('key2')\r\n>>> d\r\n{'key3': 3}\r\n\r\n# \u68c0\u67e5\u952e\u503c\r\n>>> 'key1' in d\r\nFalse\r\n>>> 'key3' in d\r\nTrue\r\n\r\n>>> squares = {x: x ** 2 for x in range(3)}\r\n>>> squares\r\n{0: 0, 1: 1, 2: 4}\r\n\r\n>>> len(squares)\r\n3\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u5143\u7ec4",children:"\u5143\u7ec4"}),"\n",(0,l.jsx)(e.p,{children:"\u5143\u7ec4\uff08\u663e\u793a\u5730\uff09\u4e0e\u94fe\u8868\u6709\u5f88\u591a\u76f8\u4f3c\u4e4b\u5904\uff0c\u4f46\u662f\u5143\u7ec4\u4e0d\u53ef\u53d8\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u5b57\u5178\u952e\u503c\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:">>> t = (1, 2, 3)\r\n>>> t[0]\r\n1\r\n\r\n>>> len(t)\r\n3\n"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>a});var s=r(6540);const l={},i=s.createContext(l);function t(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);