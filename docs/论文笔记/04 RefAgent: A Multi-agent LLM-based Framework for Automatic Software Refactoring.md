## RefAgent: A Multi-agent LLM-based Framework for Automatic Software Refactoring

工作：
1. 设计了refagent，包含四个agent重构
2. 在8个实际项目中实测
3. 消融实验

RefAgent共分为四个模块
1. 上下文感知
2. 重构代码生成
3. 编译
4. 测试（重构不能改变功能）

以RefGen（一个基于搜索的重构工具）作为基线，计算precision、召回率和f1。这种方式假设RefGen是100%正确的，感觉指标不太合适。  

简评：基本就是讲故事。此外，这个工具只能进行“提高代码质量”的重构，感觉和“跨文件重构”的语境有区别，而且没有考虑api变更适配等情境。此工具只适用Java项目。