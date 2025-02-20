"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4],{5940:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});const c=JSON.parse('{"id":"Learning Java/06 Inheritance","title":"06 Inheritance","description":"\u7ee7\u627f","source":"@site/docs/Learning Java/06 Inheritance.md","sourceDirName":"Learning Java","slug":"/Learning Java/06 Inheritance","permalink":"/docs/Learning Java/06 Inheritance","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Learning Java/06 Inheritance.md","tags":[],"version":"current","frontMatter":{}}');var i=r(4848),s=r(8453);const a={},l=void 0,t={},d=[{value:"\u7ee7\u627f",id:"\u7ee7\u627f",level:3},{value:"\u8986\u76d6\u548c\u9690\u85cf\u65b9\u6cd5",id:"\u8986\u76d6\u548c\u9690\u85cf\u65b9\u6cd5",level:3},{value:"\u591a\u6001\u6027",id:"\u591a\u6001\u6027",level:3},{value:"Object \u7c7b",id:"object-\u7c7b",level:3},{value:"\u62bd\u8c61\u65b9\u6cd5\u548c\u62bd\u8c61\u7c7b",id:"\u62bd\u8c61\u65b9\u6cd5\u548c\u62bd\u8c61\u7c7b",level:3}];function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"\u7ee7\u627f",children:"\u7ee7\u627f"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u7ee7\u627f\u65f6\uff0c\u884d\u751f\u7c7b\u4f1a\u7ee7\u627f\u57fa\u7c7b\u7684\u6240\u6709\u6210\u5458\u3002\u6784\u9020\u51fd\u6570\u4e0d\u5c5e\u4e8e\u6210\u5458\uff0c\u4e0d\u4f1a\u88ab\u7ee7\u627f\uff0c\u4f46\u53ef\u4ee5\u88ab\u884d\u751f\u7c7b\u8c03\u7528\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6240\u6709\u7c7b\u90fd\u662f ",(0,i.jsx)(n.code,{children:"Object"})," \u7684\u5b50\u7c7b\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u884d\u751f\u7c7b\u4f1a\u7ee7\u627f\u57fa\u7c7b\u7684 ",(0,i.jsx)(n.code,{children:"public"})," \u548c ",(0,i.jsx)(n.code,{children:"protected"})," \u6210\u5458\u3002\u5982\u679c\u4e24\u4e2a\u7c7b\u4f4d\u4e8e\u4e00\u4e2a\u5305\u4e2d\uff0c\u884d\u751f\u7c7b\u4e5f\u4f1a\u7ee7\u627fpackage-private\u6210\u5458\u3002\u7531\u4e8e\u5d4c\u5957\u7c7b\u53ef\u4ee5\u8bbf\u95ee\u5305\u88c5\u7c7b\u7684\u6240\u6709\u6210\u5458\uff0c\u56e0\u6b64\uff0c\u5982\u679c\u67d0\u4e2a\u57fa\u7c7b\u5305\u542b\u4e00\u4e2a\u7ee7\u627f\u4e86\u5b83\u7684\u5d4c\u5957\u7c7b\uff0c\u5219\u8fd9\u4e2a\u884d\u751f\u7c7b\u53ef\u4ee5\u95f4\u63a5\u5730\u8bbf\u95ee\u57fa\u7c7b\u7684\u79c1\u6709\u6210\u5458\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u8c61\u53ef\u4ee5\u663e\u793a\u5730\u201c\u7c7b\u578b\u8f6c\u6362\u201d\u3002\u5728\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c ",(0,i.jsx)(n.code,{children:"obj"})," \u4e8b\u5b9e\u4e0a\u662f\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"MountainBike"})," \u5bf9\u8c61\uff0c\u4f46\u662f\u7f16\u8bd1\u5668\u53ea\u5c06\u5176\u8bc6\u522b\u4e3a ",(0,i.jsx)(n.code,{children:"Object"})," \u5bf9\u8c61\uff0c\u76f4\u63a5\u8d4b\u503c\u4f1a\u62a5\u9519\u3002\u901a\u8fc7\u4e0b\u5217\u8bed\u6cd5\uff0c\u6211\u4eec\u544a\u8bc9\u7f16\u8bd1\u5668 ",(0,i.jsx)(n.code,{children:"obj"})," \u662f ",(0,i.jsx)(n.code,{children:"MountainBike"})," \u5bf9\u8c61\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"Object obj = new MountainBike();\r\nMountainBike myBike = (MountainBike)obj;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Java\u4e0d\u5141\u8bb8\u4e00\u4e2a\u7c7b\u7ee7\u627f\u591a\u4e2a\u7c7b\uff0c\u4f46\u5141\u8bb8\u5b9e\u73b0\u591a\u4e2a\u63a5\u53e3\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u8986\u76d6\u548c\u9690\u85cf\u65b9\u6cd5",children:"\u8986\u76d6\u548c\u9690\u85cf\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u884d\u751f\u7c7b\u53ef\u4ee5\u5b9a\u4e49\u548c\u57fa\u7c7b\u7b7e\u540d\u76f8\u540c\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u57fa\u7c7b\u7684\u65b9\u6cd5\u4f1a\u88ab\u8986\u76d6\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"@Override"})," \u6ce8\u89e3\u544a\u77e5\u7f16\u8bd1\u5668\u8981\u8986\u76d6\u67d0\u4e2a\u65b9\u6cd5\u3002\u5982\u679c\u5b9a\u4e49\u548c\u57fa\u7c7b\u7b7e\u540d\u76f8\u540c\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u5219\u57fa\u7c7b\u7684\u65b9\u6cd5\u88ab\u9690\u85cf\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8986\u76d6\u7684\u65b9\u6cd5\u53ef\u4ee5\u4fee\u6539\u8bbf\u95ee\u6743\uff0c\u4f46\u662f\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e\u88ab\u8986\u76d6\u7684\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u65b9\u6cd5\u6307\u65b9\u6cd5\u5728\u63a5\u53e3\u4e2d\u5b9e\u73b0\u800c\u4e0d\u662f\u7c7b\u4e2d\u5b9e\u73b0\u3002\u4e00\u4e2a\u7c7b\u53ef\u4ee5\u7ee7\u627f\u591a\u4e2a\u63a5\u53e3\u548c\u4e00\u4e2a\u7c7b\uff0c\u5219\u5b83\u4eec\u5b9a\u4e49\u7684\u65b9\u6cd5\u53ef\u80fd\u4ea7\u751f\u51b2\u7a81\uff0c\u6b64\u65f6\u7f16\u8bd1\u5668\u4f1a\u9009\u62e9\u884d\u751f\u7c7b\u7684\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4f18\u5148\u7ea7\u6700\u9ad8\u7684\u4e3a\u57fa\u7c7b\u7684\u5b9e\u4f8b\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'public class Horse {\r\n    public String identifyMyself() {\r\n        return "I am a horse.";\r\n    }\r\n}\r\n\r\npublic interface Flyer {\r\n    default public String identifyMyself() {\r\n        return "I am able to fly.";\r\n    }\r\n}\r\n\r\npublic interface Mythical {\r\n    default public String identifyMyself() {\r\n        return "I am a mythical creature.";\r\n    }\r\n}\r\n\r\npublic class Pegasus extends Horse implements Flyer, Mythical {\r\n    public static void main(String... args) {\r\n        Pegasus myApp = new Pegasus();\r\n        System.out.println(myApp.identifyMyself());\r\n        // I am a horse.\r\n    }\r\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5df2\u7ecf\u88ab\u8986\u76d6\u7684\u65b9\u6cd5\u4f1a\u88ab\u5ffd\u7565\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:'public interface Animal {\r\n    default public String identifyMyself() {\r\n        return "I am an animal.";\r\n    }\r\n}\r\n\r\npublic interface EggLayer extends Animal {\r\n    default public String identifyMyself() {\r\n        return "I am able to lay eggs.";\r\n    }\r\n}\r\n\r\npublic interface FireBreather extends Animal { }\r\n\r\npublic class Dragon implements EggLayer, FireBreather {\r\n    public static void main (String... args) {\r\n        Dragon myApp = new Dragon();\r\n        System.out.println(myApp.identifyMyself());\r\n        // I am able to lay eggs.\r\n    }\r\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5176\u5b83\u60c5\u51b5\u4e0b\u4f1a\u62a5\u9519\u3002\u5982\u679c\u8981\u7ee7\u627f\u4e24\u4e2a\u51b2\u7a81\u7684\u3001\u72ec\u7acb\u7684\u63a5\u53e3\uff0c\u5219\u5fc5\u987b\u5728\u884d\u751f\u7c7b\u4e2d\u8986\u76d6\u76f8\u5173\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u63a5\u53e3\u4e2d\u7684\u9759\u6001\u65b9\u6cd5\u4e0d\u4f1a\u88ab\u7ee7\u627f\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u591a\u6001\u6027",children:"\u591a\u6001\u6027"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u884d\u751f\u7c7b\u4e2d\uff0c\u5b9a\u4e49\u4e0e\u57fa\u7c7b\u4e2d\u540d\u5b57\u76f8\u540c\u7684\u5b57\u6bb5\uff08\u5373\u4f7f\u7c7b\u578b\u4e0d\u540c\uff09\u4f1a\u9690\u85cf\u57fa\u7c7b\u7684\u5b57\u6bb5\u3002\u4e0d\u63a8\u8350\u8fd9\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"super"})," \u5173\u952e\u5b57\u53ef\u4ee5\u8c03\u7528\u57fa\u7c7b\u88ab\u8986\u76d6\u7684\u65b9\u6cd5\u7b49\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"super.printMethod();\r\nsuper(startCadence, startSpeed, startGear); // constructor\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u884d\u751f\u7c7b\u7684\u6784\u9020\u51fd\u6570\u6ca1\u6709\u8c03\u7528\u57fa\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5219Java\u4f1a\u5728\u884d\u751f\u7c7b\u6784\u9020\u51fd\u6570\u7684\u6700\u524d\u9762\u63d2\u5165\u5bf9\u57fa\u7c7b\u65e0\u53c2\u6784\u9020\u51fd\u6570\u7684\u8c03\u7528\u3002\u5982\u679c\u57fa\u7c7b\u6ca1\u6709\u65e0\u53c2\u6784\u9020\u51fd\u6570\uff0c\u5c31\u4f1a\u5bfc\u81f4\u62a5\u9519\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u7528 ",(0,i.jsx)(n.code,{children:"final"})," \u5173\u952e\u5b57\u6807\u8bb0\u65b9\u6cd5\uff0c\u88ab\u6807\u8bb0\u7684\u65b9\u6cd5\u4e0d\u80fd\u88ab\u91cd\u8f7d\u3002\u5982\u679c\u7528 ",(0,i.jsx)(n.code,{children:"final"})," \u5173\u952e\u5b57\u6807\u8bb0\u7c7b\uff0c\u5219\u8fd9\u4e2a\u7c7b\u4e0d\u80fd\u6709\u884d\u751f\u7c7b\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"object-\u7c7b",children:"Object \u7c7b"}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u90e8\u5206\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u65b9\u6cd5\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"String toString();\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"boolean equals();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8986\u76d6\u8fd9\u4e2a\u65b9\u6cd5\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528==\u8fd0\u7b97\u7b26\u3002\u5982\u679c\u8986\u76d6 ",(0,i.jsx)(n.code,{children:"equals()"})," \uff0c\u5fc5\u987b\u8986\u76d6 ",(0,i.jsx)(n.code,{children:"hashCode()"})," \u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"int hashCode()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u51fd\u6570\u8fd4\u56de\u7531\u54c8\u5e0c\u7b97\u6cd5\u751f\u6210\u7684\u5bf9\u8c61\u503c\u3002\u5982\u679c\u4e24\u4e2a\u5bf9\u8c61\u76f8\u7b49\uff0c\u5219\u54c8\u5e0c\u503c\u5fc5\u987b\u76f8\u7b49\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"getClass()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u80fd\u88ab\u8986\u76d6\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u67d0\u4e2a\u7c7b\u5b9e\u73b0\u4e86 ",(0,i.jsx)(n.code,{children:"Cloneable"})," \u63a5\u53e3\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"clone()"})," \u51fd\u6570\u3002\u7b80\u5355\u5730\u5728\u7c7b\u540e\u9762\u6dfb\u52a0 ",(0,i.jsx)(n.code,{children:"implements Cloneable"})," \u5373\u53ef\u3002\u5982\u679c\u7c7b\u4e2d\u5305\u542b\u5f15\u7528\uff0c\u5219\u53ef\u80fd\u9700\u8981\u91cd\u8f7d ",(0,i.jsx)(n.code,{children:"clone"})," \u51fd\u6570\u3002\u91cd\u8f7d\u65f6\u53ea\u80fd\u9009\u62e9\u4e0b\u9762\u4e24\u79cd\u4e4b\u4e00\u7684\u5199\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"public Object clone() throws CloneNotSupportedException\r\nprotected Object clone() throws CloneNotSupportedException\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"finalize()"})," \u65b9\u6cd5\u7528\u4e8e\u56de\u6536\uff0c\u4f46\u662f\u7531\u4e8e\u662f\u5426\u88ab\u8c03\u7528\u548c\u8c03\u7528\u65f6\u673a\u4e0d\u786e\u5b9a\u7b49\u539f\u56e0\uff0c\u4e0d\u5efa\u8bae\u91cd\u8f7d\u8fd9\u4e2a\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u62bd\u8c61\u65b9\u6cd5\u548c\u62bd\u8c61\u7c7b",children:"\u62bd\u8c61\u65b9\u6cd5\u548c\u62bd\u8c61\u7c7b"}),"\n",(0,i.jsxs)(n.p,{children:["\u88ab ",(0,i.jsx)(n.code,{children:"abstract"})," \u5173\u952e\u5b57\u6807\u8bb0\u7684\u65b9\u6cd5\u548c\u7c7b\u79f0\u4e3a\u62bd\u8c61\u65b9\u6cd5\u548c\u62bd\u8c61\u7c7b\u3002\u62bd\u8c61\u65b9\u6cd5\u5373\u58f0\u660e\u4e86\u4f46\u6ca1\u6709\u5b9e\u73b0\u7684\u65b9\u6cd5\u3002\u542b\u6709\u6216\u53ef\u80fd\u542b\u6709\u62bd\u8c61\u65b9\u6cd5\u7684\u7c7b\u79f0\u4e3a\u62bd\u8c61\u7c7b\u3002\u62bd\u8c61\u7c7b\u4e0d\u80fd\u88ab\u5b9e\u4f8b\u5316\uff0c\u4f46\u662f\u53ef\u4ee5\u88ab\u7ee7\u627f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u63a5\u53e3\u4e2d\uff0c\u975e\u9ed8\u8ba4\u65b9\u6cd5\u4e8b\u5b9e\u4e0a\u662f\u9690\u5f0f\u62bd\u8c61\u7684\uff0c\u6240\u4ee5\u6ca1\u6709\u5fc5\u8981\u7528 ",(0,i.jsx)(n.code,{children:"abstract"})," \u5173\u952e\u5b57\u6807\u8bb0\u63a5\u53e3\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u62bd\u8c61\u7c7b\u548c\u63a5\u53e3\u5728\u8bb8\u591a\u5730\u65b9\u76f8\u4f3c\uff0c\u4f46\u4e5f\u6709\u4e0d\u540c\u3002\u4f8b\u5982\uff0c\u63a5\u53e3\u7684\u6240\u6709\u9ed8\u8ba4\u51fd\u6570\u90fd\u4e3a ",(0,i.jsx)(n.code,{children:"public"})," \uff0c\u6240\u6709\u5b57\u6bb5\u90fd\u662f ",(0,i.jsx)(n.code,{children:"public static final"})," \u3002\u5982\u679c\u9700\u8981\u5176\u5b83\u7c7b\u578b\u7684\u5b57\u6bb5\uff0c\u5c31\u4e0d\u80fd\u4f7f\u7528\u63a5\u53e3\u800c\u8981\u4f7f\u7528\u62bd\u8c61\u7c7b\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var c=r(6540);const i={},s=c.createContext(i);function a(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);