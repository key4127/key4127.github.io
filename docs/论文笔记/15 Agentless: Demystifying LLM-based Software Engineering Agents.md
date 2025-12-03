## Agentless: Demystifying LLM-based Software Engineering Agents

（24年七月发表，同样被很多工作作为基线）

背景：
1. agent工具的设计成本较高
2. agent的决策很大程度依赖之前的决策（agent对决策本身的感知有限），可能会进行大量无意义操作；这些无意义操作又会干扰agent的下一步决策
3. 缺乏自我反思能力，会全盘接受各种反馈

工作：  
1. 设计agentless，无需代理，解决se问题
2. 通过swe-bench lite评估
3. 构建了swe-bench list-s数据集（swe-bench verified是基于同一方向发布的）

结构如下

![](./img/agentless.PNG)

思考：
1. 这份工作构建了swe-bench lite-s，去除了“问题描述含误导性解决方案”。如果要解决实际工程问题，会不会大多数问题描述都是有问题的？能否增强agent的容错性？
2. 如果issue涉及到改变原有方案，可能原来的回归测试无法通过，需要删除一部分。文章里直接用llm筛掉了有影响的回归测试，这种方案会不会有问题

简评：agentless相比许多同时期（或者之前的工作），同时表现出高性能和极低的成本。它的低成本完全不意外。与其说明这篇文章证明了什么，不如说agent在成本方面还有许多问题需要解决；agentless的性价比低并不代表它的能力强，只能说明agent成本太高。对比随后的很多工作，agentless的性能不太够看了，但是性价比方面仍然很优秀。