# Bmk Hacking

标题：Reward Hacking Coding Benchmarks    
链接：[https://cursor.com/cn/blog/reward-hacking-coding-benchmarks](https://cursor.com/cn/blog/reward-hacking-coding-benchmarks)

---

基本上没什么好说的，只是记录一下，除了数据污染之外其他会影响评测的结果：

1. agent的搜索功能，可能会让agent直接搜到正确答案/对应的github页面
2. git仓库没有清理干净，agent可能直接找到之后的正确commit

大概的解决方案是：屏蔽网络+删git。但是单纯屏蔽网络可能会降低评分，因为理论上应该允许ai搜其他内容。结果仍然收敛到应该用不公开bench。

不过有一个比较有趣的地方，这里提到composer和opus*重新评测*（原文：更严格的评测框架，不知道有多严格）之后都会降分，并且相对而言，有越强的模型降得越猛的趋势。不过gpt没有表现出这种趋势，再参照gpt今年2月的blog，或许gpt真的已经不关注这种open source bench了。