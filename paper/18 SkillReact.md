# SkillReact

论文：When Safe Skills Collide: Measuring Compositional Risk in Agent Skill Ecosystems    
arxiv：[https://arxiv.org/abs/2603.29493](https://arxiv.org/abs/2603.29493)

---

*虽然把skillreact作为标题，但我认为这个不是重点*

同一个agent使用不同skill可能导致安全问题；例如skill a有阅读权限，skill b没有阅读权限但有网络发送权限。agent可能将通过skill a阅读的内容通过skill b发送。具体地，这篇文章定义了八种能力；如果agent可以接触到的skill同时包含了某些能力（例如文件读取+网络发送），就会导致风险。  

文章设计了skillreact，可以规模化探测这些风险。
- 正则过滤
- llm judge + expert judge
- 测试agent是否会**真正**执行风险操作

agent是否会真正执行这些操作，取决于具体模型，强模型一般不会做高风险操作

想法：一般读agent/skill相关内容时，总会有agent都是coding agent的预设
- 感觉还是整个skill系统没有规模的管理体系导致的，harness应该可以设计一些思路防止这种问题。目前文章提出的有：
    - install-time checking
    - 训基模，忽略
    - 环境隔离（相对靠谱的）；除了一般的沙箱等隔离，还有两种我比较喜欢的方案  
        1. harness监控不同技能，如果agent尝试将skill a的结果发给skill b，触发用户确认；我最开始看到这篇文章的想法是，如果agent已经使用了skill a，harness负责将其它skill禁用
        2. 单调能力衰减（ChainCaps）：将权限与**数据**绑定而不是与skill绑定。skill的权限是数据和skill的交集而不是并集。不过感觉这个有点泛泛而谈了，或许成本会比较大