---
sidebar_position: 1
---

## 预训练

### 上下文embedding

任何信息都可以转化为token。进一步，token可以用embedding向量表示。

最初，embedding是context-free的，即一个词的不同含义会用同一个向量表示。从LEMo模型开始，预训练与上下文有关。模型将不同层的隐状态组合起来，代表与上下文有关的词语的嵌入向量。除了上下文有关外，ELMo还很深，由数个神经网络组成。

*ELMo架构：Stacked Bi-LSTMs，1B word benchmark*

### 预训练模型

Transformer引入了自监督的注意力机制。采用Transformer架构的模型可以分为三类：encoder-only（理解）、encoder-decoder、decoder-only（生成）。这三类的代表性模型分别是BERT、T5和GPT。

GPT采用的训练方式是，在某个句子中，用前面的单词去预测后面单词的概率。BERT是遮蔽语言模型，在句子中遮蔽15%的词汇，让模型去预测这些词汇。即，GPT的attention的单向的，BERT中的attention是双向的。

对于BERT，具体来说，在句子中，某个词最终的embedding是三个向量之和：token embedding（仅代表含义）、segment embedding（代表词处于哪个句子/文本片段）、position embedding（代表语序信息）。

T5将模型改变为文本输入、文本输出的形式。

预训练模型有三种范式：masked language modeling（BERT）、auto-regressive（GPT）、Seq2Seq（T5）。目前，主流都采用auto-regressive（自回归模型）。

### 语言模型

语言模型就是用前面的token去预测后面的token。  

可以通过perplexity（ppl，困惑度）来衡量模型。ppl是预测下一个token的逆操作，它的值越低，预测正确的概率就越高。

将概率去对数再乘1/N，得到交叉熵，e指数后变为困惑度。即

$$
ppl = e^{cross~entropy}
$$

### 扩增定律

scaling law指规模越大、数据量越大、计算数量越多的模型，体现出的效果越好。

## 后训练

模型获取了相关知识后，将其压缩到参数中，需要某种方式将这些成果呈现出来。这一过程叫做后训练（对齐/适配/微调）。

### 背景

GPT采用的预训练方法为，将最后一个隐藏态的结果放入一个线性输出层，通过softmax函数，将隐藏层结果转换为概率分布。而T5最终得到的不是概率分布，而是token本身。

微调一般有两种方向：一种重泛化性，即使用尽量少的数据完成尽量多的任务；另一种重效率，即用尽量少的资源完成更好的任务。  

### Delta Tuning

Delta Tuning可以仅仅更新非常少的参数，就达到微调所需的效果。Delta Tuning可以分为三类：addition-based methods（增量，在模型中增加一些本不存在的参数）、spacification-based methods（指定模型中哪些参数可调）、reparameterization-based methods（参数高效微调，通过数学变换创造新的参数表达形式）。

*启发式*

Adapter是一种高效微调方式。它在神经网络模型中每一层插入两层小型的神经网络模块，只训练这些模块部分。

Adapter延长了模型的长度，降低效率。Ladder Side Tuning解决这一问题，它将adapter的模块和原来的transformer分开。前向传播时，仍然只使用原来的模型；反向传播时，原来模型的参数被视作常数，不参与计算。

此外，还有一种方法，prefix tuning（PEFT）。这种方式不更新原始参数，而是在整个序列前添加前缀向量，调整前缀来影响输出。此外，也可以在每一层前插入soft prompts。但由于损失比较严重，目前应用不广泛。

### LAURA

LAURA分解矩阵的变化量（而不是矩阵）。对于某个1000×1000的矩阵，LAURA可以将其分为1000×1和1×1000，即$W_0 + \Delta W = W_0 + BA$，用低秩矩阵去模拟满秩矩阵的效果。

*OpenDelta*

### 指令微调

Prompt可以被简单地理解成上文。Prompt Learning（提示学习）通过提供上文的方式，可以将不同种类的任务都转化为语言识别的任务。这种方式逐渐转化为Instruction Tuning（指令微调），从单任务识别转化为了跨任务泛化。  

### RLHF

RLHF指人类反馈强化学习。它首先需要一个大语言模型，进行无监督训练、微调训练。此后，需要准备一些偏序数据，标注告知模型哪种回答更好，通过这些数据训练一个奖励模型。最终，要让模型PPO算法的目标函数值最大。PPO的目标函数由两部分组成，第一部分是分数（需要尽量高），第二部分是偏离值（需要尽量低，模型不能离原有参数太远）。

*3H标准*

*PPO、DPO算法*

此外，还有一种DPO算法，不需要额外的奖励模型，可以让模型自己给自己打分。

由于PPO和DPO的训练难度较高，除部分大公司外，一般不采用RLHF。