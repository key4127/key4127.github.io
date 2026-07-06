## SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering

背景：lm agent被设计与shell、python等交互，但是无法与vscode等界面交互（24年5月的工作，比较早）

工作：  
1. 开发了agent-computer interface，作为agent与计算机之间的中间层（swe-agent）
2. 评估swe-agent能力

swe-agent包含四个组件：检索、文件查看、文件编辑、上下文管理。

实验结果：  
1. 相比rag和只与shell交互，有**非常显著**的性能提升；但**仍然**只完成了swe-bench lite 18%的任务
2. 大多数失败属于incorrect implementations，及实现本身失败。而这里的“incorrect implementations”中，有一部分是“过于具体的实现”，即llm生成的方案通用性不足（论文把下图中的incorrect implementation和overly specific implementation归为一类）
3. agent的流程一般为定位/复现->编辑代码->执行->编辑->执行...
4. 成功快，失败慢。成功的运行成本都更低；也就是说，增强预算很可能无法增强性能。

![](./img/swe-agent.png)

简评：这是24年5月的论文，好像那个时候的cursor还没有agent模式。很多benchmark把这里的swe-agent（和下面的agentless）作为基线之一。（另外，这篇论文正文极其简要，把所有乱七八糟的东西全塞到附录里了，附录有一百多页）