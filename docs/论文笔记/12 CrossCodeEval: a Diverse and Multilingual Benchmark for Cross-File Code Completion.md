## CrossCodeEval: a Diverse and Multilingual Benchmark for Cross-File Code Completion  

多语言benchmark，包括python、java、ts和c#，关注跨文件上下文理解。

工作：
1. 包含四种语言、跨文件的benchmark
2. 评估模型，并验证benchmark的有效性
3. 测试检索方法，证实crosscodeeval可以用作代码检索能力评估

数据集筛选：
1. 筛选日期，避免泄漏；筛选语言、常用训练数据等
2. 只保留源代码文件数在10～50


简评：比较早的多语言benchmark。数据集中限制了仓库的文件数，感觉10～50文件数的规模还是偏小。用了大量篇幅说明ai必须有跨文件上下文才能完成跨文件任务（现在看来很显然），比评估completion更像评估retrieval。