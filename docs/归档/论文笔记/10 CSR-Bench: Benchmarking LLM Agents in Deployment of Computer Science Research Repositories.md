## CSR-Bench: Benchmarking LLM Agents in Deployment of Computer Science Research Repositories

工作：
1. 推出csr-bench以评估模型部署能力，并评测模型
2. 推出csr-agents框架
3. 设计标准化测试，保证csr-bench结果可复现

数据集来源各个顶会相关的GitHub仓库  
智能体设计如图，总而言之就是加上rag和网络搜索增加成功率

![](./img/csr-bench.png)  

结论：
1. step1（script drafter agent，最初尝试生成部署命令）的成功率接近0，rag、web search等都会帮助提升成功率  


简评：本质上是部署benchmark和（没什么特别的）agent，但是讲成了“部署agent”->“简化复现代码流程”->“简化cs研究”的故事。完成度有限，只关注了自身agent各个模块带来的成功率影响，甚至没有各个模型能力的横向对比图。模型能力对比、rl等都没涉及，只能说拓宽了一个新的领域，给新工作留了很多空间