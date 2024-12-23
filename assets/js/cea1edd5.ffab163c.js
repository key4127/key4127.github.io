"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1371],{4943:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"CSAPP and SJTU ICS/10 Signal","title":"10 Signal","description":"\u8fd9\u7bc7\u7b14\u8bb0\u4ecb\u7ecdlecture16\u300117\u4e2d\u7684\u5185\u5bb9\u3002","source":"@site/docs/CSAPP and SJTU ICS/10 Signal.md","sourceDirName":"CSAPP and SJTU ICS","slug":"/CSAPP and SJTU ICS/10 Signal","permalink":"/docs/CSAPP and SJTU ICS/10 Signal","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSAPP and SJTU ICS/10 Signal.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"09 Processes","permalink":"/docs/CSAPP and SJTU ICS/09 Processes"},"next":{"title":"01 Propositional Logic","permalink":"/docs/SJTU CDM/01 Propositional Logic"}}');var r=s(4848),d=s(8453);const c={sidebar_position:1},l=void 0,o={},a=[{value:"\u8fdb\u7a0b\u7ec4",id:"\u8fdb\u7a0b\u7ec4",level:3},{value:"\u4fe1\u53f7",id:"\u4fe1\u53f7",level:2},{value:"\u53d1\u9001\u4fe1\u53f7",id:"\u53d1\u9001\u4fe1\u53f7",level:3},{value:"\u63a5\u6536\u4fe1\u53f7",id:"\u63a5\u6536\u4fe1\u53f7",level:3}];function t(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u8fd9\u7bc7\u7b14\u8bb0\u4ecb\u7ecdlecture16\u300117\u4e2d\u7684\u5185\u5bb9\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u8fdb\u7a0b\u7ec4",children:"\u8fdb\u7a0b\u7ec4"}),"\n",(0,r.jsx)(n.p,{children:"\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u5c5e\u4e8e\u4e14\u4ec5\u5c5e\u4e8e\u4e00\u4e2a\u8fdb\u7a0b\u7ec4\u3002\u8fdb\u7a0b\u7ec4\u7f16\u53f7\u7531\u4e00\u4e2a\u6b63\u6574\u6570\uff08process group ID\uff09\u6807\u8bb0\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b50\u8fdb\u7a0b\u4e0e\u7236\u8fdb\u7a0b\u6709\u76f8\u540c\u7684\u8fdb\u7a0b\u7ec4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:"// return process group PID\r\npid_t getpgrp(void);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getpgrp()"})," \u51fd\u6570\u83b7\u53d6\u8fdb\u7a0b\u7684\u8fdb\u7a0b\u7ec4PID\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:"// return 0 on success, -1 on error\r\npid_t setpgid(pid_t pid, pid_t pgid);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"setpgid()"})," \u51fd\u6570\u66f4\u6539 ",(0,r.jsx)(n.code,{children:"pid"})," \u8fdb\u7a0b\u7684\u8fdb\u7a0b\u7ec4PID\u4e3a ",(0,r.jsx)(n.code,{children:"pgid"})," \u3002\u5982\u679c ",(0,r.jsx)(n.code,{children:"pid"})," \u4e3a0\uff0c\u5219\u4f7f\u7528\u5f53\u524d\u8fdb\u7a0b\u7684PID\uff1b\u5982\u679c ",(0,r.jsx)(n.code,{children:"pgid"})," \u4e3a0\uff0c\u5219\u7531 ",(0,r.jsx)(n.code,{children:"pid"})," \u6307\u5b9a\u7684\u8fdb\u7a0bPID\u4e3a ",(0,r.jsx)(n.code,{children:"pgid"})," \u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f5c\u4e1a\uff08job\uff09\u662funix shell\u4f7f\u7528\u7684\u62bd\u8c61\uff0c\u7528\u4e8e\u8868\u793a\u8fdb\u7a0b\uff0c\u4f5c\u4e3a\u8bc4\u4f30\u5355\u4e2a\u547d\u4ee4\u884c\u7684\u7ed3\u679c\u800c\u521b\u5efa\u7684\u8fdb\u7a0b\u3002\u4efb\u4f55\u65f6\u5019\u6700\u591a\u6709\u4e00\u4e2a\u524d\u53f0\u4f5c\u4e1a\u548c\u96f6\u6216\u591a\u4e2a\u540e\u53f0\u4f5c\u4e1a\u3002shell\u4f1a\u4e3a\u6bcf\u4e2a\u4f5c\u4e1a\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684\u8fdb\u7a0b\u7ec4\uff08\u8fdb\u7a0b\u7ec4ID\u901a\u5e38\u53d6\u81ea\u4f5c\u4e1a\u4e2d\u4e00\u4e2a\u7236\u8fdb\u7a0b\uff09\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"process group",src:s(7690).A+"",width:"1526",height:"821"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4fe1\u53f7",children:"\u4fe1\u53f7"}),"\n",(0,r.jsx)(n.p,{children:"\u4fe1\u53f7\u662f\u4e00\u79cd\u6d88\u606f\uff0c\u901a\u77e5\u64cd\u4f5c\u7cfb\u7edf\u67d0\u79cd\u7c7b\u578b\u7684\u4e8b\u4ef6\u53d1\u751f\u3002\u8fd9\u91cc\u7684\u7c7b\u578b\u5bf9\u5e94\u67d0\u79cd\u7cfb\u7edf\u4e8b\u4ef6\u3002\u7cfb\u7edf\u4e8b\u4ef6\u5206\u4e3a\u786c\u4ef6\u4e8b\u4ef6\u548c\u8f6f\u4ef6\u4e8b\u4ef6\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"signal",src:s(2394).A+"",width:"1553",height:"1003"})}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u5c06\u4fe1\u53f7\u4f20\u9012\u7ed9\u76ee\u6807\u8fdb\u7a0b\uff0c\u9700\u8981\u53d1\u9001\u4fe1\u53f7\u3001\u63a5\u53d7\u4fe1\u53f7\u4e24\u4e2a\u6b65\u9aa4\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u66f4\u65b0\u76ee\u6807\u8fdb\u7a0b\u4e0a\u4e0b\u6587\u4e2d\u7684\u67d0\u4e9bstate\uff0c\u5185\u6838\u5411\u76ee\u6807\u8fdb\u7a0b\u53d1\u9001\u4fe1\u53f7\u3002\u6709\u4e24\u79cd\u60c5\u51b5\u4f1a\u5bfc\u81f4\u53d1\u9001\u4fe1\u53f7\uff1a\u5185\u6838\u68c0\u6d4b\u5230\u7cfb\u7edf\u4e8b\u4ef6\uff0c\u6216\u8fdb\u7a0b\u8c03\u7528\u4e86\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"kill"})," \u51fd\u6570\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:"// pid - receiver process, sig - signal\r\n// 0 if OK, -1 on error\r\nint kill(pid_t pid, int sig);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5185\u6838\u4f1a\u8feb\u4f7f\u76ee\u6807\u8fdb\u7a0b\u5bf9\u4fe1\u53f7\u505a\u51fa\u53cd\u5e94\u3002\u8fdb\u7a0b\u53ef\u4ee5\u5ffd\u7565\u4fe1\u53f7\u3001\u7ec8\u6b62\uff0c\u6216\u8005\u901a\u8fc7\u4e00\u4e2a\u7528\u6237\u7ea7\u522b\u7684\u540d\u4e3a\u4fe1\u53f7\u5904\u7406\u5668\u7684\u7a0b\u5e8f\u6355\u83b7\u4fe1\u53f7\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5f85\u5904\u7406\u4fe1\u53f7\uff08pending signal\uff09\u6307\u5df2\u53d1\u9001\u4f46\u5c1a\u672a\u63a5\u6536\u7684\u4fe1\u53f7\u3002\u4efb\u4f55\u65f6\u5019\uff0c\u6bcf\u4e2a\u7c7b\u578b\u6700\u591a\u53ea\u6709\u4e00\u4e2a\u5f85\u5904\u7406\u4fe1\u53f7\u3002\u5982\u679c\u67d0\u4e2a\u8fdb\u7a0b\u5df2\u7ecf\u6709\u4e86\u7c7b\u578bk\u7684\u5f85\u5904\u7406\u4fe1\u53f7\uff0c\u63a5\u4e0b\u6765\u53d1\u9001\u5230\u8fdb\u7a0b\u7684\u7c7b\u578bk\u4fe1\u53f7\u4f1a\u88ab\u7b80\u5355\u5730\u4e22\u5f03\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fdb\u7a0b\u53ef\u4ee5\u9009\u62e9\u6027\u5730\u963b\u6b62\u67d0\u4e9b\u4fe1\u53f7\u3002\u88ab\u963b\u6b62\u7684\u4fe1\u53f7\u53ef\u4ee5\u53d1\u9001\u5230\u76ee\u6807\u8fdb\u7a0b\uff0c\u4f46\u5728\u963b\u585e\u89e3\u9664\u4e4b\u524d\uff0c\u8fd9\u4e9b\u5f85\u5904\u7406\u4fe1\u53f7\u4e0d\u4f1a\u88ab\u63a5\u53d7\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u4e8e\u6bcf\u4e2a\u8fdb\u7a0b\uff0c\u5185\u6838\u5728\u5f85\u5904\u7406\u4f4d\u5411\u91cf\uff08pending bit vector\uff09\u4e2d\u7ef4\u62a4\u5f85\u5904\u7406\u4fe1\u53f7\uff0c\u5728\u963b\u585e\u4f4d\u5411\u91cf\uff08blocked bit vector\uff09\u4e2d\u7ef4\u62a4\u963b\u585e\u4fe1\u53f7\u3002\u5728\u53d1\u9001\u7c7b\u578bk\u7684\u4fe1\u53f7\u65f6\uff0c\u5185\u6838\u8bbe\u7f6e\u7c7b\u578bk\u7684\u4f4d\uff1b\u5728\u63a5\u53d7\u7c7b\u578bk\u7684\u4fe1\u53f7\u65f6\uff0c\u5185\u6838\u6e05\u9664\u7c7b\u578bk\u7684\u4f4d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u53d1\u9001\u4fe1\u53f7",children:"\u53d1\u9001\u4fe1\u53f7"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e ",(0,r.jsx)(n.code,{children:"kill()"})," \u51fd\u6570\uff0c\u5982\u679c ",(0,r.jsx)(n.code,{children:"pid"})," \u5927\u4e8e0\uff0c\u51fd\u6570\u5411 ",(0,r.jsx)(n.code,{children:"pid"})," \u8fdb\u7a0b\u53d1\u9001\u4fe1\u53f7\uff1b\u5426\u5219\uff0c\u5411\u8fdb\u7a0b\u7ec4 ",(0,r.jsx)(n.code,{children:"abs(pid)"})," \u53d1\u9001\u4fe1\u53f7\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:'int main()\r\n{\r\n    pid_t pid;\r\n\r\n    /* child sleeps until SIGKILL signal received */\r\n    if ((pid = Fork()) == 0) {\r\n        Pause(); /* wait for a signal to arrive */\r\n        printf("control should never reach here!\\n");\r\n        exit(0);\r\n    }\r\n\r\n    /* parent sends a SIGKILL signal to a child */\r\n    Kill(pid, SIGKILL);\r\n    exit(0);\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"kill()"})," \u53ef\u4ee5\u5411\u8fdb\u7a0b\u7ec4\u53d1\u9001\u4fe1\u53f7\u3002\u5c06\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"pid"})," \u6539\u4e3a ",(0,r.jsx)(n.code,{children:"-pid"})," \uff0c\u4f1a\u5c06\u4fe1\u53f7\u53d1\u9001\u5230PID\u8fdb\u7a0b\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u8fdb\u7a0b\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9664\u4e86 ",(0,r.jsx)(n.code,{children:"kill()"})," \u4e4b\u5916\uff0c\u8fd8\u6709\u5176\u5b83\u65b9\u5f0f\u53d1\u9001\u4fe1\u53f7\uff0c\u5982 ",(0,r.jsx)(n.code,{children:"alarm()"})," \u51fd\u6570\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:"// return the remaining secs of last alarm, or 0 if no previous alarm\r\nunsigned int alarm(unsigned int secs);\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"alarm()"})," \u51fd\u6570\u5b89\u6392\u5185\u6838\u5728 ",(0,r.jsx)(n.code,{children:"secs"})," \u79d2\u540e\u5411\u8c03\u7528\u8fdb\u7a0b\u53d1\u9001SIGALRM\u4fe1\u53f7\u3002\u5982\u679c ",(0,r.jsx)(n.code,{children:"secs"})," \u4e3a0\uff0c\u5219\u4e0d\u4ea7\u751f\u65b0\u7684\u95f9\u949f\u3002\u8fd9\u4e2a\u51fd\u6570\u4f1a\u53d6\u6d88\u4efb\u4f55\u5f85\u5904\u7406\u95f9\u949f\uff0c\u8fd4\u56de\u5f85\u5904\u7406\u95f9\u949f\u7684\u5269\u4f59\u79d2\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd8\u53ef\u4ee5\u901a\u8fc7\u952e\u76d8\u53d1\u9001\u4fe1\u53f7\u3002CTRL-c\u4f1a\u8ba9\u5185\u6838\u5411shell\u53d1\u9001SIGINT\u4fe1\u53f7\u3002shell\u63a5\u6536\u8fd9\u4e2a\u4fe1\u53f7\uff0c\u7136\u540e\u5411\u524d\u53f0\u6240\u6709\u8fdb\u7a0b\u7ec4\u4e2d\u7684\u6240\u6709\u8fdb\u7a0b\u53d1\u9001SIGINT\uff0c\u9ed8\u8ba4\u7ec8\u6b62\u524d\u53f0\u4f5c\u4e1a\u3002CTRL-z\u4f1a\u8ba9\u5185\u6838\u5411shell\u53d1\u9001SIGTSTP\u4fe1\u53f7\uff0cshell\u63a5\u6536\u5e76\u5411\u524d\u53f0\u6240\u6709\u8fdb\u7a0b\u7ec4\u53d1SIGTSTP\uff0c\u9ed8\u8ba4\u505c\u6b62\uff08\u6302\u8d77\uff09\u524d\u53f0\u4f5c\u4e1a\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u63a5\u6536\u4fe1\u53f7",children:"\u63a5\u6536\u4fe1\u53f7"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u6536\u4fe1\u53f7\u7684\u5148\u51b3\u6761\u4ef6\u662f\u5185\u6838\u51c6\u5907\u5c06\u63a7\u5236\u4ea4\u7ed9\u8fdb\u7a0b\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u6536\u4fe1\u53f7\u65f6\uff0c\u5185\u6838\u68c0\u67e5\u68c0\u67e5\u672a\u963b\u585e\u7684\u5f85\u5904\u7406\u4fe1\u53f7\u96c6\u5408\u3002\u5982\u679c\u8fd9\u4e2a\u96c6\u5408\u4e3a\u7a7a\uff0c\u5185\u6838\u5c06\u63a7\u5236\u6743\u4ea4\u7ed9\u8fdb\u7a0b\u7684\u4e0b\u4e00\u4e2a\u6307\u4ee4\uff1b\u5982\u679c\u96c6\u5408\u975e\u7a7a\uff0c\u5185\u6838\u9009\u62e9\u96c6\u5408\u4e2d\u67d0\u4e2a\u4fe1\u53f7k\uff08\u901a\u5e38\u4e3a\u6700\u5c0fk\uff09\u5e76\u5f3a\u5236\u8fdb\u7a0b\u63a5\u6536\u4fe1\u53f7k\u3002\u4fe1\u53f7\u7684\u63a5\u6536\u89e6\u53d1\u8fdb\u7a0b\u7684\u67d0\u4e9b\u52a8\u4f5c\u3002\u8fdb\u7a0b\u5b8c\u6210\u52a8\u4f5c\u540e\uff0c\u63a7\u5236\u5230\u8fbe\u8fdb\u7a0b\u7684\u4e0b\u4e00\u4e2a\u6307\u4ee4\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u6bcf\u4e2a\u4fe1\u53f7\u7c7b\u578b\u90fd\u6709\u4e00\u4e2a\u9884\u5b9a\u4e49\u7684\u9ed8\u8ba4\u52a8\u4f5c\uff0c\u4f8b\u5982\u7ec8\u6b62\u3001\u505c\u6b62\u3001\u88ab\u5ffd\u7565\u7b49\u7b49\u3002SIGKILL\u4fe1\u53f7\u7684\u9ed8\u8ba4\u52a8\u4f5c\u662f\u7ec8\u6b62\u8fdb\u7a0b\uff0cSIGCHLD\u4fe1\u53f7\u7684\u9ed8\u8ba4\u52a8\u4f5c\u662f\u5ffd\u7565\u4fe1\u53f7\u3002\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"signal()"})," \u51fd\u6570\uff0c\u8fdb\u7a0b\u53ef\u4ee5\u6539\u53d8\u4fe1\u53f7\u7684\u9ed8\u8ba4\u52a8\u4f5c\u3002SIGKILL\u548cSIGCHLD\u7684\u9ed8\u8ba4\u52a8\u4f5c\u65e0\u6cd5\u6539\u53d8\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-C",children:"typedef void handler_t(int);\r\nhandler_t *signal(int signum, handler_t *handler);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c ",(0,r.jsx)(n.code,{children:"handler"})," \u4e3aSIG_IGN\uff0c ",(0,r.jsx)(n.code,{children:"signum"})," \u7c7b\u578b\u7684\u4fe1\u53f7\u4f1a\u88ab\u5ffd\u7565\uff1b\u5982\u679c ",(0,r.jsx)(n.code,{children:"handler"})," \u4e3aSIG_DFL\uff0c ",(0,r.jsx)(n.code,{children:"signum"})," \u7c7b\u578b\u7684\u4fe1\u53f7\u6062\u590d\u5230\u9ed8\u8ba4\u4fe1\u53f7\uff1b\u5426\u5219\u5c06 ",(0,r.jsx)(n.code,{children:"signum"})," \u7c7b\u578b\u7684\u4fe1\u53f7\u6539\u53d8\u4e3a ",(0,r.jsx)(n.code,{children:"handler"})," \u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},7690:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/process group-99b93d769609be97fb2b896ca5afe5cc.png"},2394:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/signal-c78ccb82b9a588f576164ea435b807a1.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(6540);const r={},d=i.createContext(r);function c(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);