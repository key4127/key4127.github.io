"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4441],{2809:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>i,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"CSAPP and SJTU ICS/04 jmp","title":"04 jmp","description":"\u8fd9\u7bc7\u7b14\u8bb0\u5305\u542blectre8\u7684\u5185\u5bb9\uff0c\u4ecb\u7ecd\u4e86jmp\u6307\u4ee4\u3002","source":"@site/docs/CSAPP and SJTU ICS/04 jmp.md","sourceDirName":"CSAPP and SJTU ICS","slug":"/CSAPP and SJTU ICS/04 jmp","permalink":"/docs/CSAPP and SJTU ICS/04 jmp","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CSAPP and SJTU ICS/04 jmp.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"03 Basic Assembly","permalink":"/docs/CSAPP and SJTU ICS/03 Basic Assembly"},"next":{"title":"01 Propositional Logic","permalink":"/docs/SJTU CDM/01 Propositional Logic"}}');var s=r(4848),d=r(8453);const c={sidebar_position:1},i=void 0,a={},o=[{value:"\u6761\u4ef6\u7801",id:"\u6761\u4ef6\u7801",level:2},{value:"EFLAGS\u5bc4\u5b58\u5668",id:"eflags\u5bc4\u5b58\u5668",level:3},{value:"\u8bbe\u7f6e\u4e0e\u8bfb\u53d6\u6761\u4ef6\u7801",id:"\u8bbe\u7f6e\u4e0e\u8bfb\u53d6\u6761\u4ef6\u7801",level:3},{value:"jmp",id:"jmp",level:2},{value:"If-else",id:"if-else",level:3},{value:"Switch",id:"switch",level:3},{value:"Do-while",id:"do-while",level:3},{value:"While",id:"while",level:3},{value:"For",id:"for",level:3}];function t(n){const e={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u8fd9\u7bc7\u7b14\u8bb0\u5305\u542blectre8\u7684\u5185\u5bb9\uff0c\u4ecb\u7ecd\u4e86jmp\u6307\u4ee4\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6761\u4ef6\u7801",children:"\u6761\u4ef6\u7801"}),"\n",(0,s.jsx)(e.h3,{id:"eflags\u5bc4\u5b58\u5668",children:"EFLAGS\u5bc4\u5b58\u5668"}),"\n",(0,s.jsx)(e.p,{children:"\u8fd9\u4e2a\u5bc4\u5b58\u5668\u7528\u4e8e\u5b58\u50a8\u76f8\u5e94\u63a7\u5236\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"CF\uff08Carry Flag\uff09\uff1a\u5728\u65e0\u7b26\u53f7\u8fd0\u7b97\u4e2d\uff0c\u7ed3\u679c\u8d85\u51fa\u4e86\u8fd0\u7b97\u8303\u56f4\u7f6e1\uff0c\u53cd\u4e4b\u7f6e0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"OF\uff08Overflow Flag\uff09\uff1a\u5728\u6709\u7b26\u53f7\u8fd0\u7b97\u4e2d\u53d1\u751f\u6ea2\u51fa\uff0c\u7f6e1\uff0c\u53cd\u4e4b\u7f6e0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"ZF\uff08Zero Flag\uff09\uff1a\u5982\u679c\u7ed3\u679c\u4e3a0\u7f6e\u4e3a1\uff0c\u53cd\u4e4b\u7f6e0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"SF\uff08Sign Flag\uff09\uff1a\u4e0e\u7b26\u53f7\u4f4d\u76f8\u540c\uff0c\u5373\u6b63\u6570\u4e3a0\uff0c\u8d1f\u6570\u4e3a1\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u8bbe\u7f6e\u4e0e\u8bfb\u53d6\u6761\u4ef6\u7801",children:"\u8bbe\u7f6e\u4e0e\u8bfb\u53d6\u6761\u4ef6\u7801"}),"\n",(0,s.jsx)(e.p,{children:"\u5404\u79cd\u7b97\u6570\u64cd\u4f5c\u4f1a\u9690\u5f0f\u8bbe\u7f6e\u6761\u4ef6\u7801\u3002\u5728\u52a0\u6cd5\u8fd0\u7b97\u65f6\uff0c\u56db\u79cd\u6761\u4ef6\u7801\u90fd\u4f1a\u5bf9\u5e94\u8bbe\u7f6e\u3002\u5f02\u6216\u6307\u4ee4\u4f1a\u5c06CF\u548cOF\u8bbe\u4e3a0\uff0c\u79fb\u4f4d\u64cd\u4f5c\u4f1a\u5c06CF\u8bbe\u7f6e\u4e3a\u6700\u540e\u79fb\u51fa\u7684\u4f4d\u3001OF\u8bbe\u7f6e\u4e3a0\uff0clea\u5bf9\u6761\u4ef6\u7801\u6ca1\u6709\u5f71\u54cd\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u6761\u4ef6\u7801\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6bd4\u8f83\u6765\u663e\u793a\u8bbe\u7f6e\u3002\u5bf9\u4e8e\u6307\u4ee4 ",(0,s.jsx)(e.code,{children:"cmp a, b"})," \uff0c\u7c7b\u4f3c\u4e8e\u8ba1\u7b97 ",(0,s.jsx)(e.code,{children:"b - a"})," \u4f46\u4e0d\u8fdb\u884c\u5b58\u50a8\u3002\u5982\u679c\u6700\u9ad8\u6709\u6548\u4f4d\u8fdb\u4f4d\uff0c\u8bbe\u7f6eCF\uff1b\u5982\u679c ",(0,s.jsx)(e.code,{children:"a == b"})," \uff0c\u8bbe\u7f6eZF\uff1b\u5982\u679c ",(0,s.jsx)(e.code,{children:"a > b"})," \uff0c\u8bbe\u7f6eSF\uff1b\u5982\u679c\u51fa\u73b0\u6ea2\u51fa\uff0c\u5373 ",(0,s.jsx)(e.code,{children:"(a > 0 && b < 0 && (a - b) < 0) || (a < 0 && b > 0 && (a - b) > 0)"})," \uff0c\u8bbe\u7f6eOF\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"test"})," \u6307\u4ee4\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u6761\u4ef6\u7801\uff0c\u76f8\u5f53\u4e8e\u8ba1\u7b97 ",(0,s.jsx)(e.code,{children:"a & b"})," \u3002\u540c\u6837\u5730\uff0c\u5982\u679c ",(0,s.jsx)(e.code,{children:"a & b == 0"})," \uff0cZF\u7f6e\u4e3a1\uff1b\u5982\u679c ",(0,s.jsx)(e.code,{children:"a & b < 0"})," \uff0cSF\u7f6e\u4e3a1\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6761\u4ef6\u7801\u65e0\u6cd5\u76f4\u63a5\u8bfb\u53d6\u3002\u8981\u8bfb\u53d6\u6761\u4ef6\u7801\uff0c\u9700\u8981\u57fa\u4e8e\u6761\u4ef6\u7801\u5411\u5bc4\u5b58\u5668\u6216\u5185\u5b58\u4e2d\u8bbe\u7f6e\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"accessing conditional codes",src:r(5344).A+"",width:"1479",height:"940"})}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\u76ee\u6807\u4f4d\u7f6e\u5fc5\u987b\u662f\u5355\u5b57\u8282\u5bc4\u5b58\u5668\u6216\u5355\u5b57\u8282\u5185\u5b58\u3002\u5982\u679c\u8981\u5c06\u6761\u4ef6\u7801\u5b58\u50a8\u572832/64\u4f4d\u7684\u4f4d\u7f6e\uff0c\u5fc5\u987b\u5c06\u76ee\u6807\u4f4d\u7f6e\u7684\u9ad8\u4f4d\u7f6e0\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-x86asm",children:"cmpq   %rsi, %rdi\r\nsetl   %al\r\nmovzbl %al, %eax\n"})}),"\n",(0,s.jsx)(e.h2,{id:"jmp",children:"jmp"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-x86asm",children:"    movq $0, %rax\r\n    jmp  .L1\r\n    movq (%rax), %rdx\r\n.L1:\r\n    popq %rdx\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"jmp"})," \u4e3a\u65e0\u6761\u4ef6\u8df3\u8f6c\u6307\u4ee4\uff0c\u9664\u6b64\u4e4b\u5916\u8fd8\u6709\u8bb8\u591a\u6709\u6761\u4ef6\u8df3\u8f6c\u6307\u4ee4\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u6b64\u5916\uff0c ",(0,s.jsx)(e.code,{children:"jmp"})," \u5206\u4e3a\u76f4\u63a5\u8df3\u8f6c\u548c\u95f4\u63a5\u8df3\u8f6c\u3002\u76f4\u63a5\u8df3\u8f6c\u4e3a ",(0,s.jsx)(e.code,{children:"jmp label"})," \uff0c\u5982 ",(0,s.jsx)(e.code,{children:"jmp .L1"})," \uff1b\u95f4\u63a5\u8df3\u8f6c\u4e3a ",(0,s.jsx)(e.code,{children:"jmp *operand"})," \uff0c\u5982 ",(0,s.jsx)(e.code,{children:"jmp *%rax"})," \u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"if-else",children:"If-else"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8eC\u8bed\u8a00\u4e2d\u7684\u5206\u652f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"if (test-expr) {\r\n    statement1;\r\n}\r\nelse {\r\n    statement2;\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u5199\u6210"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"    t = test-expr;\r\n    if (t) goto expt_t;\r\n    statement2;\r\nexpr_t:\r\n    statement1;\r\ndone:\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0e ",(0,s.jsx)(e.code,{children:"jmp"})," \u7b49\u7684\u903b\u8f91\u7c7b\u4f3c\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u6bd4\u5982"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"long absdiff(long x, long y)\r\n{\r\n    long result;\r\n    if (x < y) {\r\n        result = y - x;\r\n    } else {\r\n        result = x - y;\r\n    }\r\n    return result;\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u8f6c\u4e3a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"long absdiff(long x, long y)\r\n{\r\n    long rval = y - x;\r\n    long eval = x - y;\r\n    long ntest = x >= y;\r\n    if (ntest) {\r\n        rval = eval;\r\n    }\r\n    return rval;\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5f97\u5230\u6c47\u7f16"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-x86asm",children:"absdiff:\r\n    movq   %rsi, %rax\r\n    subq   %rdi, %rax\r\n    movq   %rdi, %rdx\r\n    subq   %rsi, %rdx\r\n    cmpq   %rsi, %rdi\r\n    comvge %rdx, %rax\r\n    ret\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\u5224\u65ad\u6761\u4ef6\u8981\u80fd\u5199\u6210\u5355\u884c\u6307\u4ee4\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4e2d ",(0,s.jsx)(e.code,{children:"comvge"})," \u4e3aconditional move\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"conditional move",src:r(4957).A+"",width:"1704",height:"998"})}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8econditional move\uff0c\u8981\u6c42\u6e90\u548c\u76ee\u6807\u90fd\u662f16/32/64\u4f4d\uff0c\u6e90\u53ef\u4ee5\u662f\u5bc4\u5b58\u5668\u6216\u5185\u5b58\uff0c\u4f46\u76ee\u6807\u4f4d\u7f6e\u5fc5\u987b\u662f\u5bc4\u5b58\u5668\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u53e6\u5916\uff0c\u8fd9\u79cd\u64cd\u4f5c\u8981\u6c42\u6ca1\u6709\u201c\u526f\u4f5c\u7528\u201d\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"int cread(int *xp)\r\n{\r\n    return xp ? *xp : 0;\r\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5bf9\u4e8e\u8fd9\u6bb5\u4ee3\u7801\uff0c",(0,s.jsx)(e.code,{children:"xp"})," \u7684\u503c\u5b58\u5728\u4e0d\u4ee3\u8868 ",(0,s.jsx)(e.code,{children:"*xp"})," \u7684\u503c\u5b58\u5728\uff0c\u76f4\u63a5\u4f7f\u7528\u6761\u4ef6\u79fb\u52a8\u6307\u4ee4\u53ef\u80fd\u4ea7\u751f\u672a\u5b9a\u4e49\u884c\u4e3a\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"switch",children:"Switch"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"switch(op) {\r\n    case val_0:\r\n        block0;\r\n    case val_1:\r\n        block1;\r\n        ...\r\n    case val_n;\r\n        blockn;\r\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"switch"})," \u8bed\u53e5\uff08\u5e76\u4e14 ",(0,s.jsx)(e.code,{children:"case"})," \u8f83\u591a\uff09\u65f6\uff0c\u7f16\u8bd1\u5668\u4f1a\u524d\u5904\u7406 ",(0,s.jsx)(e.code,{children:"case"})," \u5bf9\u5e94\u7684\u503c\uff0c\u5c06\u6700\u5c0f ",(0,s.jsx)(e.code,{children:"case"})," \u7f6e\u4e3a0\u5e76\u5bf9\u5e94\u4fee\u6539\u5176\u5b83 ",(0,s.jsx)(e.code,{children:"case"})," \uff0c\u7136\u540e\u751f\u6210\u4e00\u4e2a\u8df3\u8f6c\u8868\u3002\u8df3\u8f6c\u8868\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u5b58\u50a8\u5bf9\u5e94 ",(0,s.jsx)(e.code,{children:"case"})," \u4ee3\u7801\u7684\u9996\u5730\u5740\u3002\u8df3\u8f6c\u8868\u662f\u201c\u8fde\u7eed\u201d\u7684\uff0c\u5982\u679c\u5176\u4e2d\u67d0\u4e2a\u4f4d\u7f6e\u6ca1\u6709\u5bf9\u5e94\u7684 ",(0,s.jsx)(e.code,{children:"case"})," \uff0c\u8df3\u8f6c\u8868\u7684\u5185\u5bb9\u4f1a\u88ab\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(e.code,{children:"default"})," \u800c\u4e0d\u662f\u76f4\u63a5\u8df3\u8fc7\u8fd9\u4e2a\u4f4d\u7f6e\u3002\u8fd9\u79cd\u8bbe\u8ba1\u4f7f\u5f97\u53ef\u4ee5\u76f4\u63a5 ",(0,s.jsx)(e.code,{children:"jmp *(jtab + 8 * x)"})," \u5230\u8fbe\u5bf9\u5e94\u4ee3\u7801\u7d22\u5f15\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"void switch_eg(long x, long n, long *dest)\r\n{\r\n    long val = x;\r\n    switch(n) {\r\n        case 100:\r\n            val *= 13;\r\n            break;\r\n        case 102:\r\n            x += 10;\r\n        case 103:\r\n            val += 11;\r\n            break;\r\n        case 104:\r\n        case 106:\r\n            val *= val;\r\n            break;\r\n        default val = 0;\r\n    }\r\n    *dest = val;\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f1a\u88ab\u8f6c\u5316\u4e3a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"void switch_eg(long x, long n, long *dest)\r\n{\r\n    static void *jt[7] = {\r\n        &&loc_A,\r\n        &&loc_def,\r\n        &&loc_B,\r\n        &&loc_C,\r\n        &&loc_D,\r\n        &&loc_def,\r\n        &&loc_D\r\n    };\r\n\r\n    unsigned long index = n - 100;\r\n    long val;\r\n    if (index > 6) {\r\n        goto loc_def;\r\n    }\r\n    goto *jt[index];\r\n\r\nloc_A:\r\n    val = x * 13;\r\n    goto done;\r\nloc_B:\r\n    x = x + 10;\r\nloc_C:\r\n    val = x + 11;\r\n    goto done;\r\nloc_D:\r\n    val = x * x;\r\n    goto done;\r\nloc_def:\r\n    val = 0;\r\ndone:\r\n    *dest = val;\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7136\u540e\uff0c\u6c47\u7f16\u4e2d\u4f1a\u751f\u6210\u8df3\u8f6c\u8868"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-x86asm",children:".section .rodata\r\n.align 8\r\n.L4\r\n    .quad .L3 \r\n    .quad .L8\r\n    .quad .L5\r\n    .quad .L6\r\n    .quad .L7\r\n    .quad .L8\r\n    .quad .L7\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u53ca\u51fd\u6570\u4f53"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-x86asm",children:"switch_eq:\r\n    subq   $100, %rsi\r\n    cmpl   $6, %rsi\r\n    ja     .L8\r\n    jmp    *.L4(, %rsi, 8)\r\n.L3:\r\n    leaq   (%rdi, %rdi, 2), %rax\r\n    leaq   (%rdi, %rax, 4), %rdi\r\n    jmp    .L2\r\n.L5:\r\n    addq\t$10, %rdi\r\n.L6:\r\n    addq\t$11, %rdi\r\n    jmp\t.L2\r\n.L7:\r\n    imulq \t%rdi, %rdi\r\n    jmp\t.L2\r\n.L8:\r\n    movl\t$0, %edi\r\n.L2\r\n    movq\t%rdi, (%rdx)\r\n    ret\n"})}),"\n",(0,s.jsx)(e.h3,{id:"do-while",children:"Do-while"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"do\r\n    body;\r\nwhile (test-expr);\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u8f6c\u5316\u4e3a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"loop:\r\n    body;\r\n    t = test-expr;\r\n    if (t)\r\n        goto loop;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"long fact_do(long n)\r\n{\r\n    long result = 1;\r\n    do {\r\n        result *= n;\r\n        n = n - 1;\r\n    } while (n > 1);\r\n    return result;\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u53ef\u4ee5\u5199\u6210"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"long fact_do(long n)\r\n{\r\n    long result = 1;\r\nloop:\r\n    result *= n;\r\n    n = n - 1;\r\n    if (n > 1)\r\n        goto loop;\r\n    return result;\r\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8f6c\u4e3a\u6c47\u7f16"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-x86asm",children:"fact_do:\r\n    movl   $1, %rax\r\n.L2:\r\n    imulq  %rdi, %rax\r\n    subq   $1, %rdi\r\n    cmpq   $1, %rdi\r\n    jg     .L2\r\n    ret\n"})}),"\n",(0,s.jsx)(e.h3,{id:"while",children:"While"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"while (test-expr)\r\n    body;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"    goto test;\r\nloop:\r\n    body;\r\ntest:\r\n    t = test-expr;\r\n    if (t)\r\n        goto loop;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7c7b\u4f3c\u5730\uff0c\u4e3e\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"long fact_while(long n)\r\n{\r\n    long result = 1;\r\n    while (n > 1) {\r\n        result *= n;\r\n        n = n - 1;\r\n    }\r\n    return result;\r\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"long fact_while(long n)\r\n{\r\n    long result = 1;\r\n    goto test;\r\nloop:\r\n    result *= n;\r\n    n = n - 1;\r\ntest:\r\n    if (n > 1)\r\n        goto loop;\r\n    return result;\r\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-x86asm",children:"fact_while:\r\n    movq   $1, %rax\r\n    jmp    .L5\r\n.L6:\r\n    imulq  %rdi, %rax\r\n    subq   $1, %rdi\r\n.L5:\r\n    cmpq   $1, %rdi\r\n    jg     .L6\r\n    ret\n"})}),"\n",(0,s.jsx)(e.h3,{id:"for",children:"For"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"for (init-expr; test-expr; update-expr)\r\n    body;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-C",children:"init-expr\r\nwhile(test-expr) {\r\n    body;\r\n    update-expr;\r\n}\n"})})]})}function x(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(t,{...n})}):t(n)}},5344:(n,e,r)=>{r.d(e,{A:()=>l});const l=r.p+"assets/images/accessing conditional codes-7b1619525f07dbb36f642feb37e87a7d.png"},4957:(n,e,r)=>{r.d(e,{A:()=>l});const l=r.p+"assets/images/conditional move-061e484f0852084dab3817deeecd7725.png"},8453:(n,e,r)=>{r.d(e,{R:()=>c,x:()=>i});var l=r(6540);const s={},d=l.createContext(s);function c(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);