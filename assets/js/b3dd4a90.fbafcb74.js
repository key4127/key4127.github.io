"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5184],{4714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"Web Dev/09 SQL","title":"09 SQL","description":"SQL","source":"@site/docs/Web Dev/09 SQL.md","sourceDirName":"Web Dev","slug":"/Web Dev/09 SQL","permalink":"/docs/Web Dev/09 SQL","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Web Dev/09 SQL.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"08 Spring Boot","permalink":"/docs/Web Dev/08 Spring Boot"},"next":{"title":"10 JDBC","permalink":"/docs/Web Dev/10 JDBC"}}');var s=t(4848),r=t(8453);const d={},c=void 0,i={},a=[{value:"SQL",id:"sql",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:3},{value:"\u6761\u4ef6",id:"\u6761\u4ef6",level:3},{value:"\u805a\u5408\u51fd\u6570",id:"\u805a\u5408\u51fd\u6570",level:3},{value:"DDL",id:"ddl",level:3},{value:"DML",id:"dml",level:3},{value:"DQL",id:"dql",level:3}];function h(e){const n={a:"a",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"sql",children:"SQL"}),"\n",(0,s.jsx)(n.p,{children:"SQL\u662fStructured Query Language\u7684\u7f29\u5199\uff0c\u662f\u64cd\u4f5c\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684\u7f16\u7a0b\u8bed\u8a00\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u7684\u914d\u7f6e\u4ee5MySQL\u4e3a\u4f8b\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.a,{href:"https://dev.mysql.com/downloads/file/?id=476233",children:"https://dev.mysql.com/downloads/file/?id=476233"}),"\u4e0b\u8f7d\u5b89\u88c5\u5305\u5e76\u89e3\u538b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0emaven\u7c7b\u4f3c\uff0c\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff08\u7cfb\u7edf\u53d8\u91cf+path\u53d8\u91cf\uff09\u3002\u914d\u7f6e\u540e\u547d\u4ee4\u884c\u8f93\u5165 ",(0,s.jsx)(n.code,{children:"mysql"})," \uff0c\u63d0\u793a\u65e0\u6cd5\u8fde\u63a5\u6570\u636e\u5e93\u5219\u914d\u7f6e\u6210\u529f\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u4e0b\u6765\u8fdb\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\uff0c\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u6267\u884c ",(0,s.jsx)(n.code,{children:"mysqld --initialize-insecure"})," \uff0c\u5b8c\u6210\u540e\u6267\u884c ",(0,s.jsx)(n.code,{children:"mysqld -install"}),"\uff0c\u6ce8\u518cMySQL\u670d\u52a1\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u518c\u6210\u529f\u540e\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"net start mysql"})," \u542f\u52a8MySQL\u670d\u52a1\u3002\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"net stop mysql"})," \u53ef\u4ee5\u7ec8\u6b62\u670d\u52a1\u3002\u7136\u540e\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"mysqladmin -u root password xxx"})," \uff08xxx\u4e3a\u5bc6\u7801\uff09\u4fee\u6539\u5bc6\u7801\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u914d\u7f6e\u6210\u529f\u540e\uff0c\u7528 ",(0,s.jsx)(n.code,{children:"mysql -uroot -pxxx"})," \u767b\u5f55\u3002\u8fd9\u6761\u547d\u4ee4\u4e2d\uff0c\u8fd8\u6709\u4e24\u4e2a\u53ef\u9009\u53c2\u6570\uff0c\u5206\u522b\u4e3a\u6570\u636e\u5e93\u670d\u52a1\u5668IP\u5730\u5740 ",(0,s.jsx)(n.code,{children:"-h"})," \u548c\u7aef\u53e3\u53f7 ",(0,s.jsx)(n.code,{children:"-P"})," \u3002MySQL\u7684\u9ed8\u8ba4\u7aef\u53e3\u53f7\u4e3a3306\u3002\u8f93\u5165 ",(0,s.jsx)(n.code,{children:"exit"})," \u53ef\u4ee5\u9000\u51faMySQL\u3002\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"mysql -uroot -p"})," \u767b\u5f55\u65f6\uff0c\u4f1a\u63d0\u793a\u8f93\u5165\u5bc6\u7801\uff0c\u7ec8\u7aef\u4e0a\u4f1a\u51fa\u73b0\u661f\u53f7\u800c\u4e0d\u662f\u5bc6\u7801\u5185\u5bb9\uff0c\u76f8\u5bf9\u800c\u8a00\u66f4\u5b89\u5168\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.p,{children:["SQL\u4e2d\u7684\u6574\u6570\u6709tinyint\u3001smallint\u3001mediumint\u3001int\u548cbigint\u4e94\u79cd\u7c7b\u578b\uff0c\u6d6e\u70b9\u6570\u6709float\u548cdouble\uff0c\u8fd8\u6709\u7cbe\u5ea6\u66f4\u9ad8\u7684decimal\u3002 ",(0,s.jsx)(n.code,{children:"float(5, 2)"})," \u8868\u793a\u6574\u4e2a\u6570\u5b57\u957f\u5ea65\uff0c\u5c0f\u6570\u90e8\u52062\uff0c\u53e6\u5916\u4e24\u79cd\u6d6e\u70b9\u6570\u540c\u7406\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5b57\u7b26\u4e32\u6709char\u548cvarchar\u4e24\u79cd\uff0c\u7528 ",(0,s.jsx)(n.code,{children:"char(10)"})," \u6216 ",(0,s.jsx)(n.code,{children:"varchar(10)"})," \u6765\u6307\u5b9a\u957f\u5ea6\u6216\u6700\u5927\u957f\u5ea6\u3002char\u4e3a\u56fa\u5b9a\u957f\u5ea6\uff0c\u6027\u80fd\u66f4\u4f18\uff0c\u6d6a\u8d39\u7a7a\u95f4\u66f4\u5927\uff0cvarchar\u53cd\u4e4b\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u4e0d\u540c\u957f\u5ea6\u7684\u4e8c\u8fdb\u5236\u6570\u636e\uff08blob\uff09\u548c\u6587\u672c\u6570\u636e\uff08text\uff09\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u65e5\u671f\u7c7b\u578b\u4e2d\uff0cdate\u3001time\u3001year\u5206\u522b\u8868\u793a\u65e5\u671f\uff08\u5e74\u6708\u65e5\uff09\u3001\u65f6\u95f4\u548c\u5e74\u4efd\u3002datatime\u6df7\u5408\u65e5\u671f\u548c\u65f6\u95f4\u503c\uff0c\u8303\u56f4\u4ece1000\u5e74\u81f39999\u5e74\u3002timestamp\u540c\u6837\u6df7\u5408\u65e5\u671f\u548c\u65f6\u95f4\uff08\u65f6\u95f4\u6233\uff09\uff0c\u4f46\u65f6\u95f4\u8303\u56f4\u8f83\u5c0f\uff0c\u53ea\u4ece1970\u5e74\u52302038\u5e74\u3002\u548c\u5b57\u7b26\u4e32\u4e00\u6837\uff0c\u65e5\u671f\u7c7b\u578b\u4f7f\u7528\u65f6\u4e5f\u8981\u5305\u88f9\u5728\u5f15\u53f7\u4e2d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9009\u62e9\u6570\u636e\u7c7b\u578b\u65f6\uff0c\u8981\u5728\u6ee1\u8db3\u4e1a\u52a1\u9700\u6c42\u7684\u524d\u63d0\u4e0b\u9009\u62e9\u5360\u7528\u78c1\u76d8\u7a7a\u95f4\u5c3d\u91cf\u5c0f\u7684\u6570\u636e\u7c7b\u578b\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6761\u4ef6",children:"\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u5728SQL\u4e2d\u6709\u4ee5\u4e0b\u51e0\u79cd\u6bd4\u8f83\u8fd0\u7b97\u7b26\u548c\u903b\u8f91\u8fd0\u7b97\u7b26\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u6bd4\u8f83\u8fd0\u7b97\u7b26\u540d\u79f0"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u529f\u80fd"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:">"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u5927\u4e8e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:">="}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u5927\u4e8e\u7b49\u4e8e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u5c0f\u4e8e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<="}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u5c0f\u4e8e\u7b49\u4e8e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"="}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u7b49\u4e8e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"<> \u6216 !="}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u4e0d\u7b49\u4e8e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"between ... and ..."}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u5728 ... \u548c ...\u4e4b\u95f4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"in(...)"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u5728\u5217\u8868\u4e2d"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"like \u5360\u4f4d\u7b26"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u6a21\u7cca\u5339\u914d\uff08_\u5339\u914d\u5355\u4e2a\u5b57\u7b26\uff0c%\u5339\u914d\u4efb\u610f\u5b57\u7b26\uff09"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"is null"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u4e3a\u7a7a"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"is not null"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u975e\u7a7a"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"between ... and ..."})," \u4e2d\uff0c\u5305\u62ec\u8fb9\u754c\u503c\u3002\u6a21\u7cca\u5339\u914d\u4e2d\uff0c\u7528\u5f15\u53f7\u5305\u62ec\u5185\u5bb9\uff0c\u4e14\u53ef\u4ee5\u5305\u62ec\u5177\u4f53\u5b57\u7b26\u3002"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u903b\u8f91\u8fd0\u7b97\u7b26\u540d\u79f0"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u529f\u80fd"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"and \u6216 &&"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u4e0e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"or \u6216 ||"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u6216"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"not \u6216 !"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u975e"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u8fd9\u4e9b\u8fd0\u7b97\u7b26\u548c\u503c\u53ef\u4ee5\u7ec4\u6210\u6761\u4ef6\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u805a\u5408\u51fd\u6570",children:"\u805a\u5408\u51fd\u6570"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u805a\u5408\u51fd\u6570\uff0c\u53ef\u4ee5\u5f97\u5230\u67d0\u4e00\u5b57\u6bb5\u7684\u7edf\u8ba1\u503c\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u805a\u5408\u51fd\u6570\u540d\u79f0"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"\u529f\u80fd"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"count"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u7edf\u8ba1\u6570\u91cf"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"max"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u5927\u503c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"min"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u6700\u5c0f\u503c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"avg"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u5e73\u5747\u503c"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"sum"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u6c42\u548c"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"ddl",children:"DDL"}),"\n",(0,s.jsx)(n.p,{children:"\u6570\u636e\u5e93\u64cd\u4f5c\u6709\u4ee5\u4e0b\u8bed\u6cd5\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"show databases; -- \u67e5\u8be2\u6240\u6709\u6570\u636e\u5e93\r\nselect database(); -- \u67e5\u8be2\u5f53\u524d\u6570\u636e\u5e93\r\nuse database_name; -- \u4f7f\u7528\u6570\u636e\u5e93\r\ncreate database [if not exists] database_name [default charset utf8mb4]; -- \u521b\u5efa\u6570\u636e\u5e93\r\ndrop database [if exists] database_name; -- \u5220\u9664\u6570\u636e\u5e93\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u65b9\u62ec\u53f7\u4e2d\u5185\u5bb9\u4e3a\u53ef\u9009\u9879\uff08\u53bb\u6389\u65b9\u62ec\u53f7\uff09\uff0c ",(0,s.jsx)(n.code,{children:"database_name"})," \u66ff\u6362\u4e3a\u5bf9\u5e94\u6570\u636e\u5e93\u540d\u3002\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u670d\u52a1\u5668\u4e2d\uff0c\u6570\u636e\u5e93\u7684\u540d\u5b57\u4e0d\u53ef\u4ee5\u76f8\u540c\u3002\u6b64\u5916\uff0c\u4e0a\u6587\u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"database"})," \u53ef\u4ee5\u66ff\u6362\u4e3a ",(0,s.jsx)(n.code,{children:"schema"})," \u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u8868\u7684\u8bed\u6cd5\u4e3a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"create table table_name(\r\n    field1 field_type [constraint] [comment field1_comments]\r\n    ...\r\n)[comment table_comments];\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7ea6\u675f\u6709\u4e94\u79cd\uff0c\u5206\u522b\u662f\u975e\u7a7a\u7ea6\u675f\uff08 ",(0,s.jsx)(n.code,{children:"not null"})," \uff09\u3001\u552f\u4e00\u7ea6\u675f\uff08 ",(0,s.jsx)(n.code,{children:"unique"})," \uff09\u3001\u4e3b\u952e\u7ea6\u675f\uff08 ",(0,s.jsx)(n.code,{children:"primary key"})," \uff09\u3001\u9ed8\u8ba4\u7ea6\u675f\uff08 ",(0,s.jsx)(n.code,{children:"default"})," \uff09\u548c\u5916\u952e\u7ea6\u675f\uff08 ",(0,s.jsx)(n.code,{children:"foreign key"})," \uff09\u3002\u4e3b\u952e\u7ea6\u675f\u4ee3\u8868\u540c\u65f6\u552f\u4e00\u548c\u975e\u7a7a\uff0c\u9ed8\u8ba4\u7ea6\u675f\u53ef\u4ee5\u6307\u5b9a\u9ed8\u8ba4\u503c\uff0c\u5916\u952e\u7ea6\u675f\u53ef\u4ee5\u8ba9\u4e24\u5f20\u8868\u7684\u6570\u636e\u5efa\u7acb\u8fde\u63a5\u3002\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"auto_increment"})," \u53ef\u4ee5\u8ba9\u5176\u81ea\u52a8\u589e\u957f\uff0c\u6bcf\u6b21\u589e\u957f\u7684\u503c\u662f\u4e0a\u4e00\u4e2a\u52a0\u4e00\u3002\u4e00\u4e2a\u5b57\u6bb5\u53ef\u4ee5\u5b58\u5728\u591a\u4e2a\u7ea6\u675f\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8868\u7ed3\u6784\u64cd\u4f5c\u6709\u4e0b\u5217\u8bed\u6cd5\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"show tables; -- \u5f53\u524d\u6570\u636e\u5e93\u6240\u6709\u8868\r\ndesc table_name; -- \u67e5\u8be2\u8868\u7ed3\u6784\uff08\u5b57\u6bb5\u540d\u3001\u7c7b\u578b\u3001\u7ea6\u675f\u7b49\uff09\r\nshow create table name; -- \u67e5\u8be2\u5efa\u8868\u8bed\u53e5\r\n\r\nalter table table_name add field_name field_type [comment] [constraint]; -- \u6dfb\u52a0\u5b57\u6bb5\r\nalter table table_name modify field_name field_type; -- \u4fee\u6539\u5b57\u6bb5\u7c7b\u578b\r\nalter table table_name change old_name new_name field_type [comment] [constraint]; -- \u4fee\u6539\u5b57\u6bb5\u540d\u548c\u7c7b\u578b\r\nalter table table_name drop column field_name; -- \u5220\u9664\u5b57\u6bb5\r\nalter table old_name rename to new_name; -- \u4fee\u6539\u8868\u540d\r\n\r\ndrop table [if exists] table_name; -- \u5220\u9664\u8868\n"})}),"\n",(0,s.jsx)(n.h3,{id:"dml",children:"DML"}),"\n",(0,s.jsx)(n.p,{children:"DML\u662fData Manipulation Language\u7684\u7f29\u5199\uff0c\u5904\u7406\u6570\u636e\u7684\u589e\u5220\u6539\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u52a0\u6570\u636e\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"insert into table_name (field1, field2) values (value1, value2); -- \u6307\u5b9a\u5b57\u6bb5\u6dfb\u52a0\u6570\u636e\r\ninsert into table_name values (value1, value2); -- \u5168\u90e8\u5b57\u6bb5\u6dfb\u52a0\u6570\u636e\r\ninsert into table_name (field1, field2) values (value11, value12), (value21, value22); -- \u6307\u5b9a\u5b57\u6bb5\u6279\u91cf\u6dfb\u52a0\u6570\u636e\r\ninsert into table_name values (value11, value12), (value21, value22); -- \u5168\u90e8\u5b57\u6bb5\u6dfb\u52a0\u6570\u636e\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f\u5c0f\u62ec\u53f7\u4e0d\u7701\u7565\u3002\u53e6\u5916\uff0c\u5b57\u6bb5\u540d\u8981\u4e0e\u503c\u4e00\u4e00\u5bf9\u5e94\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\u6570\u636e\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"update table_name set filed1 = value1, filed2 = value2 [where condition];\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6ca1\u6709\u6761\u4ef6\uff0c\u4f1a\u4fee\u6539\u6240\u6709\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5220\u9664\u6570\u636e\u8bed\u6cd5\u5982\u4e0b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"delete from table_name [where condition];\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u770b\u5230\uff0c\u65e0\u6cd5\u7528 ",(0,s.jsx)(n.code,{children:"delete"})," \u5220\u9664\u67d0\u4e2a\u5b57\u6bb5\u7684\u503c\u3002\u5982\u679c\u5220\u9664\uff0c\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"update"})," \u8bed\u53e5\u5c06\u8be5\u503c\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"NULL"})," \u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"dql",children:"DQL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u6b64\u7bc7\u7b14\u8bb0\u4e2d\u7684\u67e5\u8be2\u5747\u4e3a\u5355\u8868\u67e5\u8be2\u3002"})}),"\n",(0,s.jsx)(n.p,{children:"DQL\u6307Data Query Language\u3002\u5b8c\u6574\u7684DQL\u8bed\u53e5\u4e3a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select field \r\nfrom table_name\r\nwhere condition\r\ngroup by group_field\r\nhaving condition\r\norder by order_condition\r\nlimit parameters;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e2a\u8bed\u53e5\u4ece\u4e0a\u5230\u4e0b\u53ef\u4ee5\u5206\u4e3a\u4e94\u90e8\u5206\uff0c\u5206\u522b\u662f\u57fa\u672c\u67e5\u8be2\u3001\u6761\u4ef6\u67e5\u8be2\u3001\u5206\u7ec4\u67e5\u8be2\u3001\u6392\u5e8f\u67e5\u8be2\u3001\u5206\u9875\u67e5\u8be2\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u57fa\u672c\u67e5\u8be2\u7684\u5185\u5bb9\u5982\u4e0b\uff08\u6ce8\u610f\u8fd9\u91cc\u662f\u5355\u8868\u67e5\u8be2\uff09\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:"select field1 [as name1], field2 [as name2] from table_name; -- \u67e5\u8be2\u591a\u4e2a\u5b57\u6bb5\r\nselect * from table_name; -- \u67e5\u8be2\u6240\u6709\u5b57\u6bb5\r\nselect distinct field1, field2 from table_name; -- \u53bb\u9664\u91cd\u590d\u9879\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\uff0c\u57fa\u672c\u4e0d\u4f7f\u7528*\uff08\u4e0d\u76f4\u89c2\uff09\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u57fa\u672c\u67e5\u8be2\u540e\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"where condition"})," \u5373\u6784\u6210\u6761\u4ef6\u67e5\u8be2\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5206\u7ec4\u67e5\u8be2\u4e2d\uff0c ",(0,s.jsx)(n.code,{children:"where"})," \u4e0e ",(0,s.jsx)(n.code,{children:"having"})," \u540e\u90fd\u662f\u6761\u4ef6\uff0c\u4f46 ",(0,s.jsx)(n.code,{children:"where"})," \u4e0d\u80fd\u64cd\u4f5c\u805a\u5408\u51fd\u6570\uff0c ",(0,s.jsx)(n.code,{children:"having"})," \u5219\u53ef\u4ee5\u3002\u6b64\u5916\uff0c\u6267\u884c\u987a\u5e8f\u4e3a ",(0,s.jsx)(n.code,{children:"where"})," > \u805a\u5408\u51fd\u6570 > ",(0,s.jsx)(n.code,{children:"having"})," \uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"select job, count(job) from emp where entry_date <= '2015-01-01' group by job"})," \uff08\u53bb\u6389\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u884c\u3001\u5206\u7ec4\u3001\u6bcf\u7ec4\u7ed9\u51fa\u6570\u636e\uff09\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6392\u5e8f\u9ed8\u8ba4\u4e3a\u5347\u5e8f\u3002 ",(0,s.jsx)(n.code,{children:"asc"})," \u4ee3\u8868\u5347\u5e8f\uff0c ",(0,s.jsx)(n.code,{children:"desc"})," \u4ee3\u8868\u964d\u5e8f\u3002\u591a\u5b57\u6bb5\u65f6\uff0c\u53ea\u6709\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u76f8\u540c\uff0c\u624d\u4f1a\u7ee7\u7eed\u6392\u5e8f\uff0c\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"... order by age desc, score asc"})," \u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5206\u9875\u67e5\u8be2\u4e2d\uff0c\u5173\u952e\u5b57\u540e\u9762\u6709\u4e24\u4e2a\u53c2\u6570\uff0c\u5373 ",(0,s.jsx)(n.code,{children:"limit m, n"})," \u3002 ",(0,s.jsx)(n.code,{children:"n"})," \u8868\u793a\u6bcf\u9875\u6709 ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"n"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"n"})]})})]})," \u4e2a\u6570\u636e\uff0c ",(0,s.jsx)(n.code,{children:"m"})," \u8868\u793a\u67e5\u8be2\u7b2c ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsx)(n.mrow,{children:(0,s.jsx)(n.mi,{children:"m"})}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"m"})]})})}),(0,s.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",children:"m"})]})})]})," \u9875\uff08\u4ece0\u5f00\u59cb\uff09\u3002\u5f53 ",(0,s.jsx)(n.code,{children:"m"})," \u4e3a0\u65f6\uff0c\u53ef\u4ee5\u5199\u4f5c ",(0,s.jsx)(n.code,{children:"limit n"})," \u3002"]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var l=t(6540);const s={},r=l.createContext(s);function d(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);