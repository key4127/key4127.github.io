# Meta-Harness

论文：Meta-Harness: End-to-End Optimization of Model Harnesses    
arxiv：[https://arxiv.org/abs/2603.28052](https://arxiv.org/abs/2603.28052)

---

*似乎很火*

summary：
1. 证实了harness对性能有重大影响
2. 设计流量meta-harness，一个自进化harness系统

具体地说，这篇文章为harness设计了一个reward函数，这种情况下meta-harness优化的目标就是得到“reward最高的harness代码”。每个harness会贡献一个目录，包含源码、评分和轨迹。

使用的base agent为claude code。注意到claude code实际上是黑盒。meta-harness实际在操控cc去写harness代码。

想法：
1. 也就是说，轨迹可以同时用于改进harness和model。之前没怎么想过这个  
2. 之前看loop engineering，大概是“人类只需要设计loop”；不过更准确地说，是人类指挥model设计loop。这样看来真正由人类设计的是reward。

*看了一眼源码，原来是用harbor启动的……*