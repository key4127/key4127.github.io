## An Empirical Study on the Code Refactoring Capability of Large Language Models

评测了startcoder的重构能力（考虑到数据污染等原因，只评测了这一个模型）
工作：
1. 评估startcoder
2. 提供了评估框架
3. 比较不同prompt的影响

数据集构建：
1. 选择20-mad数据集，排除提交次数少、生命周期短、提交历史少的项目
2. 过滤starcoder训练数据
3. 过滤重构较少的项目

结论：
1. startcoder的代码质量比人类开发者略高；但人类在解耦合等方面做得更好
2. 人类更擅长处理更复杂、上下文相关的任务
3. one-shot和cot带来显著提升，zero-shot不明显

简评：论文结论是，llm擅长解决“实现级别”的代码质量问题（空catch、魔法数字等），人类更擅长解决复杂问题。这是比较显然的，因为简单的质量问题往往都有固定模式。接下来，一方面可以考虑增强llm处理简单问题的可靠性，考虑将其作为一个类似checkstyle的插件使用；另一方面，也可以考虑增强llm重构复杂问题的能力，我觉得后者更有价值。