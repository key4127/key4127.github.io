"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3410],{1914:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"CS61B/01 Java Basic","title":"01 Java Basic","description":"\u8fd9\u7bc7\u7b14\u8bb0\u5305\u542bLecture1-2\u7684\u5185\u5bb9\u3002","source":"@site/docs/CS61B/01 Java Basic.md","sourceDirName":"CS61B","slug":"/CS61B/01 Java Basic","permalink":"/docs/CS61B/01 Java Basic","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CS61B/01 Java Basic.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"SQL","permalink":"/docs/CS61A/SQL"},"next":{"title":"02 List and Array","permalink":"/docs/CS61B/02 List and Array"}}');var a=e(4848),i=e(8453);const t={sidebar_position:1},c=void 0,l={},d=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"Java \u57fa\u7840\u8bed\u6cd5",id:"java-\u57fa\u7840\u8bed\u6cd5",level:2},{value:"\u9762\u5411\u5bf9\u8c61",id:"\u9762\u5411\u5bf9\u8c61",level:2},{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:3},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:3},{value:"\u521b\u5efa\u5bf9\u8c61",id:"\u521b\u5efa\u5bf9\u8c61",level:3},{value:"\u4f7f\u7528\u5bf9\u8c61",id:"\u4f7f\u7528\u5bf9\u8c61",level:3}];function o(n){const r={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:"\u8fd9\u7bc7\u7b14\u8bb0\u5305\u542bLecture1-2\u7684\u5185\u5bb9\u3002"}),"\n",(0,a.jsx)(r.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.em,{children:"\uff08\u57fa\u672c\u4e0egithub\u4e0a\u7684README\u4ecb\u7ecd\u5185\u5bb9\u76f8\u540c\uff09"})}),"\n",(0,a.jsx)(r.p,{children:"CS61A\u662f\u4f2f\u514b\u5229CS61\u7cfb\u5217\u7684\u7b2c\u4e8c\u95e8\u8bfe\uff0c\u7528Java\u8bed\u8a00\u8bb2\u89e3\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5\u3002\u6574\u4e2a\u8bfe\u7a0b\u5305\u542b3\u90e8\u5206\uff1aJava\u4ecb\u7ecd\u3001\u6570\u636e\u7ed3\u6784\u90e8\u5206\u3001\u7b97\u6cd5\u90e8\u5206\u3002\u8bfe\u7a0b\u5927\u90e8\u5206\u4ee3\u7801\u662f\u5f00\u6e90\u7684\uff0c\u6d4b\u8bd5\u5e73\u53f0\u4e0d\u5f00\u6e90\uff0c\u9700\u8981\u81ea\u5df1\u7f16\u5199\u6d4b\u8bd5\uff08\u8bfe\u7a0b\u5185\u6559\u4e86\u5982\u4f55\u7f16\u5199\u6d4b\u8bd5\uff09\uff0c\u53ea\u67092016\u5e74\u7684CS61B\u540c\u65f6\u5f00\u6e90\u4e86\u4ee3\u7801\u4e0e\u6d4b\u8bd5\u5e73\u53f0\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u8fd9\u4e2a\u7b14\u8bb0\u53ea\u8bb0\u5f55\u4e2a\u4eba\u9700\u8981\u7684\u5185\u5bb9\uff0c\u5f88\u591a\u5730\u65b9\u4f1a\u7b80\u7565\u8bf4\u660e\u6216\u8005\u7701\u7565\u3002"}),"\n",(0,a.jsxs)(r.p,{children:["CS61B spring2024\u7f51\u9875\uff1a",(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"https://sp24.datastructur.es/",children:"https://sp24.datastructur.es/"})]}),"\n",(0,a.jsxs)(r.p,{children:["\u6211\u7684github\u5e93\uff1a",(0,a.jsx)(r.br,{}),"\n",(0,a.jsx)(r.a,{href:"https://github.com/key4127/CS61B",children:"https://github.com/key4127/CS61B"})]}),"\n",(0,a.jsx)(r.p,{children:"\u53e6\u5916\uff0c\u8fd9\u7bc7\u7b14\u8bb0\u4e2d\u6ca1\u6709debugger\u5185\u5bb9\uff0c\u8fd9\u90e8\u5206\u653e\u5728\u4e0b\u4e00\u7bc7\u7b14\u8bb0\u4e2d\uff0c\u548cTesting\u90e8\u5206\u4e00\u8d77\u4ecb\u7ecd\u3002"}),"\n",(0,a.jsx)(r.h2,{id:"java-\u57fa\u7840\u8bed\u6cd5",children:"Java \u57fa\u7840\u8bed\u6cd5"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Python"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:'print("hello world")\n'})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Java"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'public class HelloWorld {\r\n    public static void main(String[] args) {\r\n        System.out.println("hello world");\r\n    }\r\n}\n'})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Python"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"x = 0\r\nwhile x < 10:\r\n    print(x)\r\n    x = x + 1\n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Java"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"public class HelloNumbers {\r\n    public static void main(String[] args) {\r\n        int x = 0;\r\n        while (x < 10) {\r\n            System.out.println(x);\r\n            x = x + 1;\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Python"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"def larger(x, y):\r\n    if (x > y):\r\n        return x\r\n    else:\r\n        return y\r\n\r\nprint(larger(-5, 10))\n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Java"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"public class LargerDemo {\r\n    public static int larger(int x, int y) {\r\n        if (x > y) {\r\n            return x;\r\n        } else {\r\n            return y;\r\n        }\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n        System.out.println(larger(-5, 10));\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsxs)(r.p,{children:["\u5728Java\u4e2d\uff0c\u6240\u6709\u7684\u4ee3\u7801\u5fc5\u987b\u5305\u542b\u5728\u67d0\u4e2a\u7c7b\u91cc\u3002\u53ef\u4ee5\u5728\u7c7b\u91cc\u5199\u4e00\u4e2a ",(0,a.jsx)(r.code,{children:"public static void main(String[] args)"})," \uff08\u5373main\u51fd\u6570\uff09\u51fd\u6570\uff0c\u4ee3\u7801\u53ef\u4ee5\u901a\u8fc7\u8fd9\u91cc\u8fd0\u884c\u3002\u53e6\u5916\uff0cJava\u7528\u5206\u53f7\u548c\u5927\u62ec\u53f7\u5206\u9694\u8bed\u53e5\uff0c\u6ca1\u6709\u7f29\u8fdb\u8981\u6c42\u3002\u6700\u540e\uff0c\u4f5c\u4e3a\u9759\u6001\u7c7b\u578b\u8bed\u8a00\uff0cJava\u4e2d\u6240\u6709\u53d8\u91cf\u3001\u65b9\u6cd5\u7b49\u5fc5\u987b\u6709\u4e00\u4e2a\u5df2\u58f0\u660e\u7684\u7c7b\u578b\uff0c\u8fd9\u4e2a\u7c7b\u578b\u4e0d\u80fd\u6539\u53d8\u3002"]}),"\n",(0,a.jsx)(r.h2,{id:"\u9762\u5411\u5bf9\u8c61",children:"\u9762\u5411\u5bf9\u8c61"}),"\n",(0,a.jsx)(r.h3,{id:"\u6784\u9020\u51fd\u6570",children:"\u6784\u9020\u51fd\u6570"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Python"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"class Car:\r\n    def __init__(self, m):\r\n        self.model = m\r\n        self.gas = 5\n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Java"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-Java",children:"public class Car {\r\n    public String model;\r\n    public int gas;\r\n\r\n    public Car(String m) {\r\n        model = m;\r\n        gas = 5;\r\n    }\r\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Python"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:'class Car:\r\n    def drive(self):\r\n        if gas < 5:\r\n            print("Cannot drive!")\r\n            return\r\n        gas -= 5\r\n        print(self.model + " goes vroom!")\r\n    \r\n    def gasLeft(self):\r\n        return self.gas\r\n    \r\n    def addGas(self, amount):\r\n        self.gas += amount\n'})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Java"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'public class Car {\r\n    public void drive() {\r\n        if (gas < 5) {\r\n            System.out.println("Cannot drive!");\r\n            return;\r\n        }\r\n        gas -= 5;\r\n        System.out.println(model + " goes vroom!");\r\n    }\r\n\r\n    public int gasLeft() {\r\n        return self.gas\r\n    }\r\n\r\n    public void addGas(int amount) {\r\n        gas = gas + amount;\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(r.p,{children:["\u53e6\u5916\uff0cJava\u4e2d\u6709 ",(0,a.jsx)(r.code,{children:"this"})," \u5173\u952e\u5b57\uff0c\u7528\u6765\u6307\u5411\u7c7b\u4e2d\u7684\u5185\u5bb9\uff0c\u5982 ",(0,a.jsx)(r.code,{children:"this.gas"})," \u3002"]}),"\n",(0,a.jsx)(r.h3,{id:"\u521b\u5efa\u5bf9\u8c61",children:"\u521b\u5efa\u5bf9\u8c61"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Python"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:'c1 = Car("Honda Civic")\r\nc2 = Car("Model T")\n'})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Java"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:'public static void main(String[] args) {\r\n    Car c1;\r\n    Car c2;\r\n\r\n    c1 = new Car("Honda Civic");\r\n    c2 = new Car("Model T");\r\n}\n'})}),"\n",(0,a.jsx)(r.h3,{id:"\u4f7f\u7528\u5bf9\u8c61",children:"\u4f7f\u7528\u5bf9\u8c61"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Python"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-python",children:"\xb7\xb7\xb7\r\nprint(c1.gasLeft())\r\n\r\nc1.drive()\r\nprint(c1.gasLeft())\r\n\r\nc1.addGas(1)\r\nprint(c1.gasLeft())\r\n\r\nc1.drive() # Cannot drive\r\n\r\nprint(c2.gasLeft())\n"})}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Java"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-java",children:"public void static main(String[] args) {\r\n    \xb7\xb7\xb7\r\n    System.out.println(c1.gasLeft());\r\n\r\n    c1.drive();\r\n    System.out.println(c1.gasLeft());\r\n\r\n    c1.addGas(1);\r\n    System.out.println(c1.gasLeft());\r\n\r\n    c1.drive(); // Cannot drive\r\n\r\n    System.out.print(c2.gasLeft());\r\n}\n"})}),"\n",(0,a.jsxs)(r.p,{children:["\u5728lecture2\u7684ppt\u4e2d\u8fd8\u6709\u4e00\u4e2a ",(0,a.jsx)(r.code,{children:"Dog"})," \u7c7b\u7684\u5b9e\u73b0\uff0c\u7b14\u8bb0\u91cc\u4e0d\u518d\u91cd\u590d\u3002\u53ef\u4ee5\u5728CS61B\u4e3b\u9875\u6216\u6211\u7684\u5e93\u4e2d\u67e5\u770b\u76f8\u5173\u4ee3\u7801\u3002"]})]})}function h(n={}){const{wrapper:r}={...(0,i.R)(),...n.components};return r?(0,a.jsx)(r,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>t,x:()=>c});var s=e(6540);const a={},i=s.createContext(a);function t(n){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function c(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),s.createElement(i.Provider,{value:r},n.children)}}}]);