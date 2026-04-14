# Attention is All You Need： Transformers八股

## 结构

### Encoder-Decoder

结构图：

- transformers分为encoder（编码器）和decoder（解码器）
- 每个layer有2/3个block，每个block后有一个add&norm（残差连接+层归一化）
- encoder和decoder前侧各有一个不同的embedding + 位置编码
- encoder：multi-head attention + FFN
- decoder：masked multi-head attention + multi-head attention + FFN
- encoder的输出会通过矩阵相乘计算出k、v，进入decoder中每个multi-head attention中
- decoder的layer输出后会经过线性层和softmax，得到最终概率

FFN：
- 由两个线性层组成，之间有一个ReLU激活函数

使用流程：

- 训练：提供原文和翻译。原文进入encoder，翻译进入decoder
- 推理：先将句子放入encoder，得到encoder结果；将输出序列放入decoder做自回归

### Decoder-Only

目前一般模型均为decoder-only；此时multi-head attention的输出是前一层的输出得到的qkv。

## 注意力

$$
attention(Q,K,V) = softmax(\frac{QK^T}{\sqrt{d_k}})V
$$

除以$d_k$的目的是：
- 防止结果太大导致的梯度消失（与梯度爆炸无关）。如果QK相乘的结果过大，softmax会得到很大的概率，导致梯度消失
- 假设Q、K是均值为0、方差为1的独立随机分布，QK相乘的方差为$d_k$。除以$\sqrt{d_k}$会让方差回到1

多头注意力中除以每个头的维度开根，即同样是$\sqrt{d_k}$。

## Embedding

步骤：
- 乘以Embedding矩阵
- 将结果乘以$\sqrt{d_{model}}$

第二步的目的是统一embedding和位置编码的数值范围。

## 位置编码

Transformer采用绝对位置编码（APE）。

$$
PE(pos, 2i) = sin(pos/10000^{2i/d_{model}}) \\
PE(pos, 2i + 1) = cos(pos/10000^{2i/d_{model}})
$$

## 残差连接与层归一化

Transformer采用Post-LN，即先残差后归一化。此时仍然有梯度爆炸的风险，Pre-LN更加稳定。

### 残差连接

$$
x_{l + 1} = x_l + F(x_l)
$$

上式中$F(x_l)$代指注意力块/FFN等的输出。  

残差连接无法防止梯度爆炸（$F(x_l)$梯度过大），但可以防止梯度消失（$x_{l+1}$对$x_l$的梯度至少为1）。

### 层归一化

归一化可以防止梯度爆炸，并部分遏制梯度消失。

Transformer采用Layernorm归一化。