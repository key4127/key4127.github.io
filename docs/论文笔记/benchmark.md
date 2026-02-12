# SWE-bench Goes Live!

工作：
1. benchmark横跨93个仓库，均为2024以来的工作，且均配备了docker环境。
2. 创建了流水线（包括数据获取 + 环境构建？+ 验证？）
3. 评测agent框架和sota models
   
benchmark中任务要求模型可以（需要参考具体内容）：
- 多文件推理
- 环境构建
- reproducible execution
  
环境构建workflow：
1. 识别相关instruction file
2. 选取base image
3. 安装、构建
4. 验证test suite

测试了三种agent框架：OpenHands、SWE-Agent、Agentless  
模型：GPT4.1、GPT-4o、Claude 3.7 Sonnet、Deepseek v3

- 识别PR
- 对每个测试进行多次验证
- 关注star大于1000的python repository（大于60%），issues和PR大于200，fork大于200
  - after 2024.01
  - 必须包含test patch
  - 引入SWE-fixer，去掉包含字符串匹配的内容
- 似乎引入了自动配环境agent
  - 环境需要通过当前的所有测试（测试是如何提取的？）
  - pip等包下载只能下载timestamp之前的内容
- 确认instance正确性
  - F2P（除了新test，refactor似乎不应该有这种内容）
  - P2P
  - framework-specific parser
- 筛选了300左右instance作为lite subset
- instance复杂度：统计了loc、files、以及golden patch的files、hunks和lines

实验：
1. OpenHands：max 60 iterations
2. SWE-Agent：max 100 llm calls 
3. Agentless：去掉了基于回归测试的reranking
   
评测指标：
- resolved rate
- patch applay rate
- localization success rate（是否修改了正确文件，感觉这个指标不是很有价值）
  
实验中重跑了swe-bench with sota agent-llm pair

区分了instance中的swebench和non-swe bench，表现出不同的能力

通过lite subset得出，时间本身和解决能力无关


分析了文件数、patch文件数等等的影响

todo：
1. 确认docker中各个参数的作用
2. 生成P2P
3. 确认是否能将test patch中的内容作为F2P

# SWE-rebench

工作：
1. pipeline
2. 21000 python-based tasks for rl
   
related：
- agent：Moatless Tool