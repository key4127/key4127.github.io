"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2291],{9222:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>m,default:()=>x,frontMatter:()=>t,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"CSAPP and SJTU ICS/01 Bits","title":"01 Bits","description":"\u8fd9\u7bc7\u7b14\u8bb0\u5305\u542blecture1-2, 4-5\uff0c\u6240\u6709\u4e0ebits\u76f8\u5173\u7684\u5185\u5bb9\u3002\u5176\u4e2d\u4e8c\u3001\u516b\u3001\u5341\u516d\u8fdb\u5236\u8f6c\u6362\u4ee5\u53caC\u8bed\u8a00\u57fa\u7840\u8df3\u8fc7\u3002","source":"@site/docs/CSAPP and SJTU ICS/01 Bits.md","sourceDirName":"CSAPP and SJTU ICS","slug":"/CSAPP and SJTU ICS/01 Bits","permalink":"/docs/CSAPP and SJTU ICS/01 Bits","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSAPP and SJTU ICS/01 Bits.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"05 Disjoint Sets","permalink":"/docs/CS61B/05 Disjoint Sets"},"next":{"title":"02 Storage","permalink":"/docs/CSAPP and SJTU ICS/02 Storage"}}');var l=a(4848),i=a(8453);const t={sidebar_position:1},m=void 0,c={},r=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u4f4d\u8fd0\u7b97",id:"\u4f4d\u8fd0\u7b97",level:2},{value:"Mask Operations",id:"mask-operations",level:3},{value:"\u6570\u636e\u5b58\u50a8 \u8fd0\u7b97",id:"\u6570\u636e\u5b58\u50a8-\u8fd0\u7b97",level:2},{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:3},{value:"\u8fd0\u7b97",id:"\u8fd0\u7b97",level:3}];function h(s){const e={a:"a",annotation:"annotation",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\u8fd9\u7bc7\u7b14\u8bb0\u5305\u542blecture1-2, 4-5\uff0c\u6240\u6709\u4e0ebits\u76f8\u5173\u7684\u5185\u5bb9\u3002\u5176\u4e2d\u4e8c\u3001\u516b\u3001\u5341\u516d\u8fdb\u5236\u8f6c\u6362\u4ee5\u53caC\u8bed\u8a00\u57fa\u7840\u8df3\u8fc7\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,l.jsx)(e.p,{children:"sjtu\u7684ICS1\u30012\u57fa\u672c\u4e3aCSAPP\u7684\u90e8\u5206\u5185\u5bb9\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u4e2a\u5408\u96c6\u5305\u542bCSAPP\u548c\u4e0a\u6d77\u4ea4\u901a\u5927\u5b66ICS1\u30012\u7684\u7b14\u8bb0\u3002\u7531\u4e8eICS\u57fa\u672c\u4e0a\u8bb2\u89e3\u7684\u662fCSAPP\u5185\u5bb9\uff0c\u4e0d\u5355\u5217\u4e24\u4e2a\u5408\u96c6\u4e86\u3002\u5bf9\u4e8e\u4e24\u95e8\u8bfe\u7a0b\u4e2d\u91cd\u53e0\u7684\u90e8\u5206\uff0c\u7b14\u8bb0\u4f1a\u4e13\u6ce8\u4e8eICS\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u6211\u7684CSAPP\u5e93\uff1a",(0,l.jsx)(e.br,{}),"\n",(0,l.jsx)(e.a,{href:"https://github.com/key4127/CSAPP",children:"https://github.com/key4127/CSAPP"})]}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u7684ICS\u5e93\uff08\u6682\u4e0d\u5f00\u653e\uff09\uff1a"}),"\n",(0,l.jsx)(e.h2,{id:"\u4f4d\u8fd0\u7b97",children:"\u4f4d\u8fd0\u7b97"}),"\n",(0,l.jsx)(e.p,{children:"\u4f4d\u8fd0\u7b97\u7b26\u7684\u4ecb\u7ecd\u8df3\u8fc7\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u5f02\u6216\u7684swap\u51fd\u6570\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-C",children:"int swap(int *x, int *y)\r\n{\r\n    *x = *x ^ *y;\r\n    *y = *x ^ *y; // *x ^ *y ^ *y\r\n    *x = *x ^ *y; // *x ^ *y ^ *x\r\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u6ce8\u610f\u53f3\u79fb\u64cd\u4f5c\u5206\u4e3a\u903b\u8f91\u53f3\u79fb\u548c\u7b97\u6570\u53f3\u79fb\u3002\u8fdb\u884c\u903b\u8f91\u53f3\u79fb\u65f6\uff0c\u9ad8\u4f4d\u7528\u7b26\u53f7\u4f4d\u586b\u5145\u3002\u5373\u6b63\u6570\u7684\u903b\u8f91\u53f3\u79fb\u548c\u7b97\u6570\u53f3\u79fb\u76f8\u540c\uff1b\u5bf9\u4e8e\u8d1f\u6570\uff0c\u4f8b\u5982 ",(0,l.jsx)(e.code,{children:"1000"})," \uff084\u4f4d\uff09\uff0c\u903b\u8f91\u53f3\u79fb\u4e8c\u4f4d\u4e3a ",(0,l.jsx)(e.code,{children:"1110"})," \u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"mask-operations",children:"Mask Operations"}),"\n",(0,l.jsxs)(e.p,{children:["\u901a\u8fc7\u67d0\u4e2a\u4e8c\u8fdb\u5236\u53ef\u4ee5\u5bf9\u539f\u6570\u636e\u8fdb\u884c\u76f8\u5e94\u64cd\u4f5c\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u5341\u516d\u8fdb\u5236 ",(0,l.jsx)(e.code,{children:"0xFF"})," \uff0c",(0,l.jsx)(e.code,{children:"x & 0xFF"})," \u53ef\u4ee5\u63d0\u53d6\u51fax\u7684\u524d\u516b\u4f4d\uff0cx ^ ~0xFF \u53ef\u4ee5\u4fdd\u6301\u524d\u516b\u4f4d\u4e0d\u53d8\u7684\u540c\u65f6\u5bf9\u540e\u9762\u7684\u4f4d\u53d6\u53cd\uff0c x | 0xFF \u53ef\u4ee5\u5c06\u524d\u516b\u4f4d\u7f6e\u4e3a1\uff0c\u540e\u516b\u4f4d\u4e0d\u53d8\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e00\u4e9b\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u5f0f\uff1a"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"\u8fd0\u7b97\u7b26"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"0"}),(0,l.jsx)(e.th,{style:{textAlign:"center"},children:"1"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"&"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u7f6e0"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u4e0d\u53d8"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"|"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u4e0d\u53d8"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u7f6e1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"^"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u4e0d\u53d8"}),(0,l.jsx)(e.td,{style:{textAlign:"center"},children:"\u53d6\u53cd"})]})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"~\uff1a\u53d6\u53cd"}),"\n",(0,l.jsxs)(e.li,{children:["<</>>\uff1a\u4e58/\u9664 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mi,{children:"x"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^x"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6644em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})})]})})})})})]})]})})]})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"mask\u7684\u4f7f\u7528\u793a\u4f8b\uff1abitCount\uff08\u7edf\u8ba11\u7684\u6570\u91cf\uff09\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-C",children:"//There are more readable ways\r\nint bitCount(int x)\r\n{\r\n    int m1 = 0x11 | (0x11 << 8);\r\n    int mask = m1 | (m1 << 16);\r\n\r\n    int s = x & mask;\r\n    s += x >> 1 & mask;\r\n    s += x >> 2 & mask;\r\n    s += x >> 3 & mask;\r\n\r\n    s = s + (s >> 16);\r\n    mask = 0xF | (0xF << 8);\r\n    s = (s & mask) + ((s >> 4) & mask);\r\n    return (s + (s >> 8)) & 0x3F;\r\n}\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6570\u636e\u5b58\u50a8-\u8fd0\u7b97",children:"\u6570\u636e\u5b58\u50a8 \u8fd0\u7b97"}),"\n",(0,l.jsxs)(e.p,{children:["\u6570\u636e\u5b58\u50a8\u90e8\u5206\u4ecb\u7ecd\u4e86\u539f\u7801\u3001\u53cd\u7801\u3001\u8865\u7801\u4ee5\u53caint\u7684signed\u548cunsigned\u7c7b\u578b\u3002\u5bf9\u4e8e ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"n"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"n"})]})})]})," \u4f4d\u65e0\u7b26\u53f7\u6570\uff0c\u6570\u636e\u8303\u56f4\u4ece ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mn,{children:"0"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"0"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"})]})})]})," \u5230 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mi,{children:"n"})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^n - 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7477em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," \uff1b\u5bf9\u4e8e\u6709\u7b26\u53f7\u6570\uff0c\u6570\u636e\u8303\u56f4\u4ece ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"-2^{n - 1}"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"\u2212"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,l.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})})})})})]})]})})]})," \u5230 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"n"}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]})]}),(0,l.jsx)(e.mo,{children:"\u2212"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"2^{n - 1} - 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,l.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2212"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," \uff0c\u5373 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"T"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"})]})]}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"T"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"x"})]})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"|T_{min}| = T_{max} + 1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"min"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"ma"}),(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})]})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"})]})]})]})," \uff0c ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"U"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"a"}),(0,l.jsx)(e.mi,{children:"x"})]})]}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,l.jsxs)(e.msub,{children:[(0,l.jsx)(e.mi,{children:"T"}),(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mi,{children:"i"}),(0,l.jsx)(e.mi,{children:"n"})]})]}),(0,l.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,l.jsx)(e.mo,{children:"\xd7"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"U_{max} = |T_{min}| \\times 2"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"U"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.1514em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(e.span,{className:"mord mtight",children:[(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"ma"}),(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"x"})]})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(e.span,{className:"vlist-r",children:[(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,l.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"min"})})})]})}),(0,l.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,l.jsx)(e.span,{})})})]})})]}),(0,l.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"})]})]})]})," \u3002\u6240\u4ee5\uff0c\u5982\u679c\u5c06\u8865\u7801\u8868\u793a\u7684 ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsx)(e.mi,{children:"x"})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]})," \u8f6c\u4e3a\u65e0\u7b26\u53f7\u6570\uff0c\u5982\u679c ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"\u2265"}),(0,l.jsx)(e.mn,{children:"0"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x \\ge 0"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"\u2265"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"})]})]})]})," \uff0c ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"x"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"ux = x"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"ux"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})]})]})," \uff1b\u5982\u679c ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"<"}),(0,l.jsx)(e.mn,{children:"0"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x < 0"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"<"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"0"})]})]})]})," \uff0c ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"u"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mi,{children:"n"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"ux = x + 2 ^ n"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"ux"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6644em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]})]})]})]})," \u3002"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"conversion",src:a(2882).A+"",width:"793",height:"919"})}),"\n",(0,l.jsx)(e.p,{children:"\u572832\u4f4d\u548c64\u4f4d\u673a\u5668\u4e2d\uff0c\u540c\u6837\u7684\u6570\u636e\u7c7b\u578b\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u6570\u636e\u8303\u56f4\u3002\u6b64\u5916\uff0cC\u8bed\u8a00\u8981\u6c42\u5bf9\u4e8e\u5404\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u6240\u6709\u7f16\u8bd1\u5668\u5fc5\u987b\u80fd\u652f\u6301\u4e00\u5b9a\u8303\u56f4\u7684\u6570\u636e\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"32 ranges",src:a(9471).A+"",width:"1605",height:"985"})}),"\n",(0,l.jsxs)(e.p,{children:["\uff0832\u4f4d\u673a\u5668\u4e2d\uff0c ",(0,l.jsx)(e.code,{children:"char"})," ",(0,l.jsx)(e.code,{children:"short"})," ",(0,l.jsx)(e.code,{children:"long"})," \u5206\u522b\u4e3a1\u5b57\u8282\u30012\u5b57\u8282\u3001\u56db\u5b57\u8282\uff09"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"64 ranges",src:a(8824).A+"",width:"1591",height:"983"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{alt:"guaranteed ranges",src:a(7200).A+"",width:"1594",height:"980"})}),"\n",(0,l.jsx)(e.h3,{id:"\u7c7b\u578b\u8f6c\u6362",children:"\u7c7b\u578b\u8f6c\u6362"}),"\n",(0,l.jsxs)(e.p,{children:["\u5c06\uff08\u540c\u7c7b\u578b\u7684\uff09\u6709\u7b26\u53f7\u6570\u8f6c\u4e3a\u65e0\u7b26\u53f7\u6570\uff0c\u7c7b\u578b\u8f6c\u6362\u65f6\u4e0d\u4f1a\u6539\u53d8\u4f4d\u5b58\u50a8\u7684\u503c\uff0c\u5373\u6b63\u6570\u4e0d\u53d8\uff0c\u8d1f\u6570\u53d8\u4e3a\u6b63\u6570\u3002C\u5c06\u6240\u6709\u6570\u9ed8\u8ba4\u4e3a\u7b26\u53f7\u6570\uff0c\u5728\u6709\u7b26\u53f7\u6570\u548c\u65e0\u7b26\u53f7\u6570\u6df7\u5408\u8fd0\u7b97\u65f6\uff0c\u4f1a\u5148\u5c06\u6709\u7b26\u53f7\u6570\u8f6c\u4e3a\u65e0\u7b26\u53f7\u6570\uff0c\u4f8b\u5982 ",(0,l.jsx)(e.code,{children:"-1 > 0U"})," \u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u5c06\u4f4d\u6570\u8f83\u5c0f\u7684\u6570\u7c7b\u578b\u8f6c\u6362\u5230\u4f4d\u6570\u8f83\u5927\u7684\u6570\u65f6\uff0c\u5bf9\u4e8e\u65e0\u7b26\u53f7\u6570\u548c\u6b63\u6570\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728\u524d\u9762\u88650\u3002\u5bf9\u4e8e\u6709\u7b26\u53f7\u8d1f\u6570\uff0c\u7c7b\u4f3c\u903b\u8f91\u53f3\u79fb\uff0c\u9700\u8981\u5c06\u9ad8\u4f4d\u8865\u4e3a\u7b26\u53f7\u4f4d\uff08\u53731\uff09\u3002\u8fd9\u4e24\u79cd\u8f6c\u6362\u90fd\u4e0d\u4f1a\u5bf9\u6570\u503c\u4ea7\u751f\u5f71\u54cd\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5c06\u4f4d\u6570\u8f83\u5927\u7684\u6570\u8f6c\u4e3a\u4f4d\u6570\u8f83\u5c0f\u7684\u6570\u65f6\uff0c\u4f1a\u76f4\u63a5\u622a\u53d6long\u4e2d\u76f8\u5e94\u7684\u4f4d\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u540c\u65f6\u9700\u8981\u6539\u53d8\u4f4d\u6570\u548c\u7b26\u53f7\uff0c\u5219\u5148\u6539\u53d8\u4f4d\u6570\uff0c\u540e\u5904\u7406\u7b26\u53f7\uff0c\u5373\u5148\u8f6c\u4e3a\u5bf9\u5e94\u4f4d\u6570\u7684\u6570\uff0c\u7136\u540e\u6309\u7167\u9700\u8981\u7684\u7b26\u53f7\u89e3\u7801\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f8b\u5982"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-C",children:"char a = -9;\r\nunsigned short c = a;\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,l.jsx)(e.code,{children:"c"})," \u7684\u503c\u4e3a65536\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u8fd0\u7b97",children:"\u8fd0\u7b97"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd0\u7b97\u90e8\u5206\u4ecb\u7ecd\u4e86\u8ba1\u7b97\u673a\u4e2d\u7684\u8fd0\u7b97\uff08\u52a0\u3001\u51cf\u3001\u4e58\uff09\u3002\u8ba1\u7b97\u65f6\uff0c\u4e0e\u666e\u901a\u7684\u8ba1\u7b97\u76f8\u540c\uff0c\u629b\u5f03\u6ea2\u51fa\u4f4d\u3002"})]})}function x(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},9471:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/32 ranges-2c14d32ab7ef87bdecf270f63849652d.png"},8824:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/64 ranges-00c552d506e7122fa8c191977a0d380d.png"},2882:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/conversion-cde74f180bf0821d999efede737856e7.png"},7200:(s,e,a)=>{a.d(e,{A:()=>n});const n=a.p+"assets/images/guaranteed ranges-70d3bf0a6a476f2ee93c70c39404e6ac.png"},8453:(s,e,a)=>{a.d(e,{R:()=>t,x:()=>m});var n=a(6540);const l={},i=n.createContext(l);function t(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);