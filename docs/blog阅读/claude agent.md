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

## Building agents with Skills: Equipping agents for specialized work

