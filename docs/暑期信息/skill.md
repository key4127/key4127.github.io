## skill

每个skill存储在skill library中，包含技能名称、功能描述等。先rag召回技能，逐步阅读metadata、ins、最后的完整内容。

选择合适工具：1. 多维度描述（在skill里说明适合什么情况） 2. 自描述修正

code as skill：没有找到skill，自己生成一段代码。如果多次用到，加入库里

mcp会将所有工具全部注入上下文。

以claude的skills为例：根目录下有一个agents.md文件，里面记录了所有available的skill和对应的描述。skill对应到具体的skill包，可以阅读skill.md获取具体的skill使用方式。

## 相关论文

### OctoBench: Benchmarking Scaffold-Aware Instruction Following in Repository-Grounded Agentic Coding

似乎可以理解为agent benchmark。包含一个详细的执行平台，能够进行轨迹日志记录、指令源对齐和自动化检查清单评分，从而实现细粒度的行为分析。

使用3个llm评判。

应该说就是在swe之外增加了约束检查。

发现：
1. 约束和指令类别相关

### SkillsBench: Benchmarking How Well Agent Skills Work Across Diverse Tasks

1. 只用2-3个技能
2. 技能描述的详细程度会导致能力下降

### ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs

这是23年的paper，很旧了

实现了一个检索api的小模型

### ToolRerank: Adaptive and Hierarchy-Aware Reranking for Tool Retrieval

24年的paper，给了tool检索方案

同样采取了encoder+reranker的格式，区别在中间有一次阈值截断，筛掉相似度低且比较熟悉的工具

### LiveMCPBench: Can Agents Navigate an Ocean of MCP Tools?

25年8月

没啥好说的，字面意义，mcp bench。不仅要考虑挑选正确工具的能力，还要考虑工具组合。

主要问题还是第一步的工具检索错误。

### Tool-to-Agent Retrieval: Bridging Tools and Agents for Scalable LLM Multi-Agent Systems

25年

同样包含一个假设，高层描述不足以解决问题。

大概的逻辑是：工具有对应的owner。将检索到的每个工具对应owner都放在一起做重排

### SkillRouter: Retrieve-and-Rerank Skill Selection for LLM Agents at Scale

skill router：检索+重排序。实现了74%的hit@1

这篇文章的前提是，skill的名称+描述+元数据不足以完成搜索。

设计了一个0.6b的encoder和0.6breranker，训了这个模型来检索。

### Skill Retrieval Augmentation for Agentic AI

原来的问题：
1. 噪声影响
2. 相关性感知问题
3. 需求感知问题

创建了一种skill rag和sra-bench。bench的特点是技能库规模很大。

rag大概分为一次粗排和一次精排。

## 思考

### skill search相关

关于大量skill，目前相关的思路有：

1. 直接筛选+硬编码
2. 训一个小模型（阿里，encoder+reranker）  
     - 这种基于假设：metedata和skill名无法获取足量信息；仅通过名称会选到名不符实/不够好的skill，且**这种选择会实际影响结果**
3. 搞一套复杂的skill系统：类似agentskillos
4. 只暴露一个search skill，让llm自己去做search
5. SRA（从rag演进）：大概可以理解为检索+精排

### skill bench相关

一个skill是否执行成功，可能有以下归因：

- 基模能力不足
  - 本身无法选择正确的工具
  - 无法正确编排任务（工具组合）
- cli
  - 上下文处理机制
  - 环境（无法执行工具等）
  - 输入输出无法处理（例如输出太长影响判断，其实也可以看作上下文的一部分）
- skill
  - skill描述：描述不清
  - skill内容：实际skill并不能完成所期望的机制等
  
在实际执行时，可能有以下的失败模式：

1. 没有正确选择工具：没找到/选错
2. 工具使用方式不正确
   1. 使用错误：可能没有遵循mkd的使用要求
   2. 对象错误：例如，某个search工具搜索了错误的关键词
3. 无法理解正确的工具输出

失败模式可以识别：
1. 端到端检查
2. 是否使用所需工具：需要对提供的总工具进行一些处理
3. 使用方法是否正确
4. 工具是否使用成功
5. 如果234均没问题，可以归因为无法理解正确输出
   
此时只需要将失败模式归因到源头。

todo：skill 输入/如何判断某个skill是需要的