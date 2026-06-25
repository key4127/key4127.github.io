## Common workflow patterns for AI agents—and when to use them

将agent分为三种：顺序、并行、evaluator-optimizer。这篇博客强调的是多个agent的工作流模式，而不是workflow和agent的异同。

- 顺序
- 并行：子任务相互无依赖关系
- evaluator-optimizer：标准清晰，且首次尝试难以达到要求
  - 生成API文档
  - 生成SQL查询
  
## Building multi-agent systems: When and how to use them

主要关于orchestrator-subagent模式。

适合multi agent的情形：
1. 上下文污染影响性能
2. 任务可以并行
3. 需要专业化subagent

此外还介绍了verification subagent。这个子agent负责验证是否生成了所需的输出。这种方式可能导致early victory。需要向subagent说明如何运行详细、完整的测试。

实践：按独立的上下文拆分subagent，而不是按问题拆分。例如，不要将bug fix和测试编写分为两个subagent。重点是**智能体是否需要频繁共享大量上下文**。

衍生思考：或许可以有一个类似F1的指标，计算出到底应该给agent提供多少上下文

## Demystifying evals for AI agents

项目初期内部快速迭代，上线后需要系统评估。智能体评估通常组合使用三种评分器：基于代码的、基于模型的和人工的。

另一种评估思路：检测llm是否选择了合适的工具。

## Writing effective tools for agents — with agents

这篇还是基于mcp时代的：大概两点

1. 创建的工具要为agent服务（例如read logs不如search logs，上下文有限）
2. 过多工具可能带来负面效果，要考虑工具功能重叠。可以添加命名空间，但前缀/后缀可能有影响

## Effective context engineering for AI agents

*采用“即时”方法构建的代理，不是预先处理所有相关数据，而是维护轻量级的标识符（文件路径、存储的查询、网页链接等），并在运行时使用这些引用，通过工具动态地将数据加载到上下文中。Anthropic 的代理式编码解决方案 Claude Code 就使用这种方法来对大型数据库执行复杂的数据分析。模型可以编写有针对性的查询、存储结果，并利用 Bash 命令（如 head 和 tail）来分析大量数据，而无需将完整的数据对象加载到上下文中。*

感觉这里已经很类似skill的概念了。

让agent自己导航事实上是一种渐进式披露。

提到了：
- skill类似
- subagent（大量探索但只返回工作摘要）
- memory工具：note-taking，有点像之前的a-mem

## Equipping agents for the real world with Agent Skills

基本只是介绍了skill的概念，而且没有提到有很多skill时如何处理

## Introducing advanced tool use on the Claude Developer Platform

用一个search tool来解决工具太多的问题。

## Effective harnesses for long-running agents

失败模式：
1. 一次干太多事
2. 过早宣布任务完成

列出一份详细的需求（或许可以需求 to test to code）

大概的harness：由两个agent组成，一个agent负责维护检查需求，一个code agent负责完成每个需求

## Harness design for long-running application development

需求生成+代码生成+评估

上下文焦虑（为什么会产生这种东西，会和训练相关吗）

## Scaling Managed Agents: Decoupling the brain from the hands

harness=基模+会话管理+工具沙箱

## Building agents with Skills: Equipping agents for specialized work