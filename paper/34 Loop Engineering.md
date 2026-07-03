# Loop Engineering

标题：Loop Engineering（来自Google Addy Osmani的博客）    
链接：[https://addyosmani.com/blog/loop-engineering/](https://addyosmani.com/blog/loop-engineering/)

---

大概的宗旨是：不要直接指挥ai，而是设计一个loop。这个loop应该有确认的、递归式的目标，ai可以一致循环直到目标达成。也就是说，loop，仍然是人类创造的。

这篇博客认为loop engineering需要五个要素：

1. automation
2. worktree：各个agent可以并行。这里是通过git实现的
3. skills：这里的skill更偏向“补全上下文”的作用
4. plugins/connectors
5. sub-agents：这里偏向一个agent用来做题，一个agent用来打分/验证

此外，还需要state和memory。

此时人类主要负责验证。此外，作者提到长期使用loop可能会导致理解退化（由于loop，agent可以快速更新代码，导致人类对代码的理解和实际情况产生偏差）。