# Think-Anywhere

论文：Think Anywhere in Code Generation    
arxiv：[https://arxiv.org/abs/2603.29957](https://arxiv.org/abs/2603.29957)

---

summary：think-anywhere允许llm在任何token位置开始reasoning，绝对提升9.3pt、提升效率、减少了输出token总量

直觉上，如果采用thinking forward，会要求模型必须一次性把所有东西都想好，相对带来了更高的时延，应该也会影响上下文相互的注意力等等。  
这里的framework让model在生成code之间可以thinking数次，然后直接把code拼接出来。  

sft和rl的过程暂略   

semantic-aware initialization：本质上是因为预训练（准确地说，是embedding的训练）成本太高没法重跑。后训练那点数据量不够让llm理解新token。解决方案是不要随机初始化新token embedding从零开始，而是将其取为两部分的平均
- 语义部分：取think any where三个token向量平均值
- 结构部分：对前后两个token，分别取对应的模式切换token im_start或im_end

*分不清词向量和词表……基础打得不好是这样的*

熵分析：在模型希望触发thinkanywhere的位置，如果强行禁用思考，这个位置的熵会显著提高（遇到不确定的位置才需要思考）

ast：在赋值位置触发think的概率最高（75%，远高于第二名return的12%）

想法：第一眼看到以为是关于coding agent的，实则并非
- 只测了mbpp livecodebench等。论文的说法是倾向于提升模型**原生的推理能力**。考虑到一般coding scaffold的多轮交互，这种策略的效果未知，或许可以自己试试
- 感觉这种方案很有趣。不过如果真的在每个token之后都可能thinking，从产品角度来看不太合适。可以跑个实验，看看能不能只允许llm在*一段*话后才能thinking
- 直接拼接code这种做法不知道会不会导致能力下降（想了一下，似乎也还好，单轮对话理论上不需要*非常*复杂的推理）；不过toc角度，应该也没什么别的做法，不可能撤回生成到一半的code
- 目前的设计应该会影响其它语言的性能，不过对coding的影响应该相对较低
- 从ast分析来看，如果不考虑语料偏移等问题的话，感觉scaling law训出的llm可以反向让人推理出许多“人类行为”的内部逻辑