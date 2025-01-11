"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5018],{2273:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"CSAPP and SJTU ICS/11 IO","title":"11 IO","description":"\u8fd9\u7bc7\u7b14\u8bb0\u4ecb\u7ecdlecture18\u7684\u5185\u5bb9\uff0c\u5373\u7cfb\u7edf\u7ea7I/O\u3002I/O\u6307\u8f6f\u4ef6\u548c\u5916\u754c\u8bbe\u5907\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6d41\u3002\u6807\u51c6I/O\u5e93\u6307\u7528\u6237\u6001\u6216\u66f4\u9ad8\u7ea7\u7684I/O\u51fd\u6570\uff0c\u800cUnix I/O\u6307\u5185\u6838\u6001\u63d0\u4f9b\u7684I/O\u51fd\u6570\u3002","source":"@site/docs/CSAPP and SJTU ICS/11 IO.md","sourceDirName":"CSAPP and SJTU ICS","slug":"/CSAPP and SJTU ICS/11 IO","permalink":"/docs/CSAPP and SJTU ICS/11 IO","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSAPP and SJTU ICS/11 IO.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"10 Signal","permalink":"/docs/CSAPP and SJTU ICS/10 Signal"},"next":{"title":"01 Propositional Logic","permalink":"/docs/SJTU CDM/01 Propositional Logic"}}');var r=s(4848),d=s(8453);const c={sidebar_position:1},t=void 0,l={},o=[{value:"\u6587\u4ef6",id:"\u6587\u4ef6",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u6587\u4ef6\u7c7b\u578b",id:"\u6587\u4ef6\u7c7b\u578b",level:3},{value:"\u6587\u4ef6\u64cd\u4f5c",id:"\u6587\u4ef6\u64cd\u4f5c",level:2},{value:"\u6253\u5f00\u6587\u4ef6",id:"\u6253\u5f00\u6587\u4ef6",level:3},{value:"\u5173\u95ed\u6587\u4ef6",id:"\u5173\u95ed\u6587\u4ef6",level:3},{value:"\u8bfb\u5199\u64cd\u4f5c",id:"\u8bfb\u5199\u64cd\u4f5c",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u8fd9\u7bc7\u7b14\u8bb0\u4ecb\u7ecdlecture18\u7684\u5185\u5bb9\uff0c\u5373\u7cfb\u7edf\u7ea7I/O\u3002I/O\u6307\u8f6f\u4ef6\u548c\u5916\u754c\u8bbe\u5907\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6d41\u3002\u6807\u51c6I/O\u5e93\u6307\u7528\u6237\u6001\u6216\u66f4\u9ad8\u7ea7\u7684I/O\u51fd\u6570\uff0c\u800cUnix I/O\u6307\u5185\u6838\u6001\u63d0\u4f9b\u7684I/O\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6587\u4ef6",children:"\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"Unix\u4e2d\u7684\u6587\u4ef6\u662f\u4e00\u7cfb\u5217\u5b57\u8282\u3002\u6240\u6709I/O\u8bbe\u5907\u90fd\u88ab\u89c6\u4f5c\u6587\u4ef6\uff0c\u4f7f\u5f97Unix\u80fd\u63d0\u4f9b\u4e00\u4e2a\u7b80\u5355\u7684\u5e94\u7528\u7a0b\u5e8f\u63a5\u53e3\u3002\u6240\u6709\u8f93\u5165\u8f93\u51fa\u90fd\u901a\u8fc7\u8bfb\u5199\u76f8\u5e94\u6587\u4ef6\u6765\u8fd0\u884c\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u76ee\u5f55\u7ed3\u6784",children:"\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,r.jsx)(n.p,{children:"Linux\u5185\u6838\u5c06\u6240\u6709\u6587\u4ef6\u7ec4\u7ec7\u5728\u4e00\u4e2a\u5355\u4e00\u7684\u76ee\u5f55\u5c42\u6b21\u7ed3\u6784\u4e2d\uff0c\u4ee5\u6839\u76ee\u5f55\uff08/\uff09\u4e3a\u951a\u70b9\u3002\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u6709\u5f53\u524d\u7684\u5de5\u4f5c\u76ee\u5f55\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u6587\u4ef6\u7c7b\u578b",children:"\u6587\u4ef6\u7c7b\u578b"}),"\n",(0,r.jsx)(n.p,{children:"\u5e38\u89c4\u6587\u4ef6\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u6570\u636e\u3002\u5b83\u5206\u4e3a\u6587\u672c\u6587\u4ef6\uff08\u53ea\u5305\u542bASCII\u6216Unicode\u5b57\u7b26\uff09\u548c\u4e8c\u8fdb\u5236\u6587\u4ef6\uff08\u5176\u4ed6\uff09\u4e24\u7c7b\uff0c\u8fd9\u4e9b\u6587\u4ef6\u4ece\u5185\u6838\u89d2\u5ea6\u4e0a\u770b\u6ca1\u6709\u533a\u522b\u3002\u53e6\u5916\uff0c\u6587\u672c\u6587\u4ef6\u7684\u6bcf\u884c\u4ee5\u6362\u884c\u7b26\u7ed3\u675f\uff08LF\uff09\uff0c\u503c\u4e3a0x0a\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u76ee\u5f55\u662f\u5305\u542b\u4e00\u4e2a\u94fe\u63a5\uff08\u6587\u4ef6\u5165\u53e3\uff09\u6570\u7ec4\u7684\u6587\u4ef6\uff0c\u6bcf\u4e2a\u94fe\u63a5\u5c06\u4e00\u4e2a\u6587\u4ef6\u540d\u6620\u5c04\u5230\u4e00\u4e2a\u6587\u4ef6\u3002\u6bcf\u4e2a\u76ee\u5f55\u81f3\u5c11\u5305\u542b\u4e24\u4e2a\u6587\u4ef6\u5165\u53e3\uff0c\u5206\u522b\u662f ",(0,r.jsx)(n.code,{children:"."})," \u548c ",(0,r.jsx)(n.code,{children:".."})," \u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5957\u63a5\u5b57\uff08socket\uff09\u662f\u4e00\u4e2a\u7528\u4e8e\u901a\u8fc7\u7f51\u7edc\u4e0e\u5176\u5b83\u8fdb\u7a0b\u901a\u4fe1\u7684\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u5916\uff0c\u8fd8\u6709\u547d\u540d\u7ba1\u9053\uff08pipes\uff09\u3001\u7b26\u53f7\u94fe\u63a5\u3001\u5b57\u7b26\u548c\u5757\u8bbe\u5907\u7b49\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u6587\u4ef6\u64cd\u4f5c",children:"\u6587\u4ef6\u64cd\u4f5c"}),"\n",(0,r.jsx)(n.h3,{id:"\u6253\u5f00\u6587\u4ef6",children:"\u6253\u5f00\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u67d0\u4e2a\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u83b7\u53d6I/O\u8bbe\u5907\u65f6\uff0c\u5185\u6838\u4f1a\u6253\u5f00\u76f8\u5173\u6587\u4ef6\u3001\u8fd4\u56de\u63cf\u8ff0\u7b26\uff08\u4e00\u4e2a\u5c0f\u7684\u975e\u8d1f\u6574\u6570\uff0c\u5728\u6587\u4ef6\u7684\u6240\u6709\u540e\u7eed\u64cd\u4f5c\u4e2d\u6807\u8bc6\u8be5\u6587\u4ef6\uff09\u5e76\u8ddf\u8e2a\u8fd9\u4e2a\u6587\u4ef6\u7684\u6240\u6709\u4fe1\u606f\uff08\u4e3a\u6240\u6709\u6253\u5f00\u7684\u6587\u4ef6\u7ef4\u62a4\u4e00\u4e2a\u6587\u4ef6\u4f4d\u7f6ek\uff0c\u521d\u503c\u4e3a0\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e9b\u64cd\u4f5c\uff0c\u5185\u6838\u9700\u8981\u77e5\u9053\u8fd4\u56de\u54ea\u4e2a\u6574\u6570\uff0c\u8fd8\u9700\u8981\u77e5\u9053\u5728\u5b58\u50a8\u6587\u4ef6\u4f4d\u7f6e\uff08cursor\uff09\u3001\u6587\u4ef6\u662f\u5426\u5b58\u5728\u3001\u6587\u4ef6\u5927\u5c0f\u7b49\u4fe1\u606f\u3002\u8fd9\u4e9b\u4fe1\u606f\u5206\u522b\u901a\u8fc7\u8fdb\u7a0bID\u6c60\u3001\u6253\u5f00\u6587\u4ef6\u7684\u6570\u636e\u7ed3\u6784\u3001\u6587\u4ef6\u7cfb\u7edf\u3001\u5143\u6570\u636e\u7b49\u83b7\u5f97\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"kernel ds for files",src:s(2470).A+"",width:"1413",height:"698"})}),"\n",(0,r.jsx)(n.p,{children:"\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u6709\u72ec\u7acb\u7684\u63cf\u8ff0\u7b26\u8868\uff0c\u63cf\u8ff0\u8868\u7684\u6761\u76ee\u7531\u8fdb\u7a0b\u7684\u6253\u5f00\u6587\u4ef6\u63cf\u8ff0\u7b26\u7d22\u5f15\u3002\u6bcf\u4e2a\u63cf\u8ff0\u7b26\u6307\u5411\u6587\u4ef6\u8868\u4e2d\u7684\u4e00\u4e2a\u6761\u76ee\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6587\u4ef6\u8868\u8868\u793a\u6253\u5f00\u6587\u4ef6\u7684\u96c6\u5408\uff0c\u88ab\u6240\u6709\u8fdb\u7a0b\u5171\u4eab\u3002\u6bcf\u4e2a\u6587\u4ef6\u8868\u6761\u76ee\u5305\u542b\u5f53\u524d\u6587\u4ef6\u4f4d\u7f6e\u3001\u6307\u5411\u5b83\u7684\u63cf\u8ff0\u7b26\u6761\u76ee\u7684\u5f15\u7528\u6570\u91cf\u3001\u4e00\u4e2a\u6307\u5411v\u8282\u70b9\u8868\u4e2d\u6761\u76ee\u7684\u6307\u9488\u3002\u5f53\u5f15\u7528\u6570\u91cf\u53d8\u4e3a0\u65f6\uff0c\u5728\u6587\u4ef6\u8868\u4e2d\u5220\u9664\u8fd9\u4e2a\u6761\u76ee\u3002"}),"\n",(0,r.jsx)(n.p,{children:"v\u8282\u70b9\u8868\u4e5f\u7531\u6240\u6709\u8fdb\u7a0b\u5171\u4eab\uff0c\u6bcf\u4e2a\u6761\u76ee\u5305\u542b\u4e00\u4e2a\u6587\u4ef6\u7684\u4e3b\u8981\u4fe1\u606f\u3002\u5b83\u4f4d\u4e8e\u4e3b\u5185\u5b58\u4e2d\uff08\u5143\u6570\u636e\u88ab\u7f13\u5b58\uff09\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5e94\u7528\u7a0b\u5e8f\u83b7\u53d6I/O\u8bbe\u5907\u65f6\uff0c\u5b83\u53ea\u4fdd\u5b58\u63cf\u8ff0\u7b26\u3002\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"seek"})," \u64cd\u4f5c\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u663e\u793a\u8bbe\u7f6e\u5f53\u524d\u6587\u4ef6\u4f4d\u7f6e\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:"// return new file descriptor if OK, -1 on error\r\nint open(char *filename, int flags, mode_t mode);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"flags and modes",src:s(4626).A+"",width:"1323",height:"413"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u591a\u4e2aflags\u548cmode\uff0c\u7528\u7ba1\u9053\u7b26\u8fde\u63a5\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"umask"})," \u51fd\u6570\u53ef\u4ee5\u4e3a\u8fdb\u7a0b\u8bbe\u7f6e\u63a9\u7801\uff0c\u5728\u521b\u5efa\u6587\u4ef6\u65f6\uff0c\u63a9\u7801\u4e2d\u7684\u6743\u9650\u4f1a\u88ab\u5c4f\u853d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:"#define DEF_MODE S_IRUSR | S_IWUSR |\t\\\r\n                 S_IRGRP | S_IWGRP |\t\\\r\n              S_IROTH | S_IWOTH \r\n#define DEF_UMASK S_IWGRP | S_IWOTH\r\n\r\numask(DEF_UMASK);\r\nfd = open (\u201cfoot.txt\u201d, O_CREAT|O_TRUNC|O_WRONLY, DEF_MODE);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8fd9\u91cc ",(0,r.jsx)(n.code,{children:"foot.txt"})," \u6587\u4ef6\u7684\u6743\u9650\u662f ",(0,r.jsx)(n.code,{children:"DEF_MODE & (~DEF_UMASK)"})," \u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5173\u95ed\u6587\u4ef6",children:"\u5173\u95ed\u6587\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u5173\u95ed\u6587\u4ef6\u65f6\uff0c\u5185\u6838\u91ca\u653e\u6253\u5f00\u6587\u4ef6\u65f6\u521b\u5efa\u7684\u7ed3\u6784\uff0c\u5e76\u5c06\u63cf\u8ff0\u7b26\u6062\u590d\u5230\u53ef\u7528\u63cf\u8ff0\u6c60\u3002\u4e0b\u4e00\u4e2a\u6253\u5f00\u7684\u6587\u4ef6\u4f1a\u63a5\u6536\u5230\u6c60\u4e2d\u6700\u5c0f\u7684\u53ef\u7528\u63cf\u8ff0\u7b26\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u7ec8\u6b62\u65f6\uff0c\u5185\u6838\u7684\u9ed8\u8ba4\u52a8\u4f5c\u662f\u5173\u95ed\u6240\u6709\u6253\u5f00\u7684\u6587\u4ef6\u5e76\u91ca\u653e\u5b83\u4eec\u7684\u5185\u5b58\u8d44\u6e90\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:"// return 0 if OK, -1 on error\r\nint close(int fd);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8bfb\u5199\u64cd\u4f5c",children:"\u8bfb\u5199\u64cd\u4f5c"})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},4626:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/flags and modes-63a98f339dbb490a4788f8e5e12f61e1.png"},2470:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/kernel ds for files-c8edfb60f2606027aaff9bdd49ce42b8.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>t});var i=s(6540);const r={},d=i.createContext(r);function c(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);