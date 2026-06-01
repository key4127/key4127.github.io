# AXPO

论文：Agent Explorative Policy Optimization for Multimodal Agentic Reasoning  
arxiv：[https://arxiv.org/abs/2605.28774](https://arxiv.org/abs/2605.28774)

---

summary：针对 agent 工具调用训练中的 Thinking-Acting Gap，通过重采样工具调用轨迹改善策略优化信号

*要看agent就离不开rl……还是得系统地学一下*

问题：
1. 在rl训练时需要有tool的rollout，才能让llm学到tool的使用方式。这要求轨迹包含**成功的**thinking + acting。但是thinking过程对model是相对可控的，但工具调用相对不可控；此外，在经过预训练和sft后，llm thinking能力会显著高于acting的能力。acting失败会导致整个轨迹失败->正确的thinking可能被弃用，这会导致rl训练中llm倾向于不使用工具。
2. 实验发现，对于包含了tool且最终fail的rollout，如果把thinking相关的内容留下让llm继续生成轨迹，model可以生成很多样的tool call。也就是说可以把thinking固定然后再探索

所以结论就是，与其从头开始采样，不如把thinking固定  

核心：prefix-fixed resampling  
- 出现包含tool-call但fail的roolout时，找到tool call前的token，从这个位置开始重新生成数条轨迹
- axpo会拿出原来生成轨迹预算的25%用于重跑

重跑前提：
1. 对这个rl数据，组内的所有轨迹全部失败
2. 在预算额度下，选择模型最**不确定**的样本

不确定性的计算方法：
1. 列出所有轨迹中tool call部分的概率分布
2. 获取每个轨迹的**所选token**所代表的概率
3. 计算概率均值
4. 选择均值最低的数条样本

reward计算思路：reward对后续生成的token和prefix分别计算，避免成功/失败的轨迹导致prefix部分梯度冲突
- 对后续动作，计算组内的advantage。通过mask保证后面的采样不会影响prefix部分的reward
- recovery reward：一组轨迹中只要有一个成功，就设置recovery reward为1。这个信号只更新prefix部分的token

*具体的公式什么的得以后再补*

想法：rl学的太少了，现在看这种论文没什么taste
- 不知道现在有没有skill训练相关的，如果有的话必须看一看
- 总体上来说，感觉现在的model和harness结合得不是特别好。一般的逻辑是llm的能力有问题，所以需要用harness来提升/维护；某些harness的内容又被认为是很好的实践，导致llm的训练会向这个方向靠拢。总感觉逻辑有点怪？不过可能毕竟llm还是要投身业界的产品，可能产品就是会有这种问题
- 整体包含一个前提，真的需要工具。不过感觉对于coding来说tool还是非常非常必要的，实际用coding agent的时候每条轨迹都有tool call
- 图里显示base调用tool的倾向非常高，高到接近85%。如果base训得够好（或者说来源实际的优质数据），那thinking-acting gap确实是需要解决的问题