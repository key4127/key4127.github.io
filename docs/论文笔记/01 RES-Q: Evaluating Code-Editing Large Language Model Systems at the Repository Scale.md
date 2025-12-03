## RES-Q: Evaluating Code-Editing Large Language Model Systems at the Repository Scale

工作：
1. 构建RES-Q：源于github的代码编辑数据集
2. 用数据集评估
3. 提供了评估入口

每个数据包含
- 自然语言指定需要修改的内容（bug fix/new features等）
- 完整代码库

结论：
1. 限制上下文窗口（8k）：claude 3.5 sonnet、gpt-4o下降，开源模型提升（无法有效利用上下文）
2. 大部分闭源优于开源
3. claude性能强，token使用多；gpt-4o相对性能较好，但token使用量异常低。说明claude早期犯错后期改正，而gpt更擅长在早期做出正确决策。

简评：非常简要的一篇文章，数据集的构建和评测都没有给出很明确的流程（但是给了接口）。实验最后也没有给出对llm（与大型仓库交互）相关能力的评价，感觉只是以仓库数据为基础横向对比了几个模型。