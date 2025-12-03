## RepoGraph: Enhancing AI Software Engineering with Repository-Level Code Graph

工作：
1. 提出repograph（插件），利用图表示代码结构，粒度细到每一行
2. 与四个现有框架集成，用swe-bench评估，成功率**相对**提升了38.2%
3. 其它分析

repograph步骤：
1. 通过tree-sitter解析，重点关注函数和类的引用
2. 排除python内置和第三方来源库
3. 构建图：点分为def和ref两种，边分为contain和invoke两种
4. 搜索时，以搜索项为中心k-hop

整个流程被封装成一个工具给agent调用。

以普通rag和agentless作为基线，评估准确率和平均成本，用swe-bench-lite测试。  

结论：  
1. repograph带来的性能提升不依赖成本
2. 程序框架和agent框架相比，有（略微）更优的表现和更低的成本。
3. 正确定位是解决问题的必要不充分条件

简评：逻辑很清晰，不是“炼丹”性质的工作；某种意义上说用很简单的手段达成了不错的效果，并且这个插件带来的效果提升很符合直觉。不过正文给出的成本不包含时间，不确定对于大型代码库效率如何。

（graph相关的工作好像还不少，暂时只看了这一篇）