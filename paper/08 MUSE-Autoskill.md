# MUSE-Autoskill

论文：MUSE-Autoskill: Self-Evolving Agents vis Skill Creation, Memory, Management, and Evaluation  
arxiv：[https://arxiv.org/abs/2605.27366](https://arxiv.org/abs/2605.27366)

---

summary：设计了一套包含skill的、比较完整的agent框架：
- 完整的创建、管理、修订skill的系统
- 上下文管理

一般的agent可以视为plan + action + observation；可以同样用这个视角看待skill。

- plan: choose skill/create skill  
- action: excute skill
- observation: analyze result and refind skill

这篇文章的skill格式相对完整：
- skill.md
- 相关代码
- tests
- memory机制

skill生命周期：create + memory + manage + evaluation + refine

create：采用测试驱动模式，但测试和skill都是一个agent在写   
manage：系统支持skill的修复、合并和剪枝。修复在create时触发；合并在skill写完通过验证时触发；剪枝周期性维护，删除失败率高/长时间未使用的
memory：每个skill带有一个memory文件，保存笔记、经验积累、使用观察等。

每个memory都是markdown文件，由数条同样格式的memory组成。分为skill memroy、短期和长期。短期是会话内的，长期跨会话。注意memory不等于完整的轨迹信息等，可能从概念上更类似于人类的短期记忆。

此外还提到了上下文管理机制；基本上可以理解为，一个长轮轨迹中包含单点压缩和局部压缩。第一轮交互和近n轮交互会永久保留。

skill选择方式参考了，先从catalog（包含name和描述）选取候选skill，然后用read_skill技能读取。

想法：感觉概念有点宏大，有讲故事成分
- 给了一套把skill纳入harness的方案；但是似乎只是提出了一个大概的框架。可能skill管理的部分相对而言novel一些
- 整个还是围绕着skill本身的优化，没有关注model
- memory长度是否有限制，是否会污染上下文
- 同样涉及了外部skill的管理。对外部skill也会执行改进/合并，但不太会剪枝（可能通过memory做软剪枝）
- 长期记忆似乎不太会自动维护。只在写入时做了“尽量简短”的这种要求和软限制，直觉上有爆炸的可能。不过具体会不会爆炸可能要看看真实产品的blog等等