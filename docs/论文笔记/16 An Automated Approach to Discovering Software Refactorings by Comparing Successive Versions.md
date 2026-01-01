## An Automated Approach to Discovering Software Refactorings by Comparing Successive Versions

工作：  
1. 新的重构检测方法
2. 新的重构检测数据集
3. 评测

重构检测方法：  
1. 实体识别：将函数等实体一一对应。
2. 对于无法匹配的实体，根据不同类型对应到不同重构，具体类型如下

![kind of refactor](./img/discovery%20refactor.png)

结论：
1. 精确率在94.54%，召回率在88.28%
2. 补丁大小增加，错误率上升

简评：
理论上可以考虑和refactorMiner一起检测爬到的数据是不是重构，还可以关注一下重构类型的分布。但是这里列出的重构类型会太少，且不涉及逻辑的修改。具体的重构识别还要看代码，不确定复杂重构识别能力怎么样。