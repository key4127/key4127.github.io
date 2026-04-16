# Focal Loss

论文：Focal Loss for Dense Object Detection: Focal Loss  
arxiv：[]()

---

在分类问题中，如果训练集各个类别的数据不均衡，交叉熵损失会使模型倾向于预测数据更多的类别。Focal loss通过降低数据更多类别的权重解决了这一问题。

（更准确地说，提升了真实情况和训练集数据分布不一致时的性能）

## 二分类问题

在二分类问题中，认为只有y=0和y=1两种情况，则令

$$
p_t = 
\begin{cases}
p,& y = 1 \\
1 - p,& y \not= 1
\end{cases}
$$

（$p_t$为模型对真实类别的预测概率）

有$CE(p, y) = -log(p_t)$。

Focal Loss在基础上乘了两个参数，得到

$$
FL(p, y) = -\alpha_t(1 - p_t)^\gamma log(p_t)
$$

对于$p_t$比较小的情况，focal loss与CE loss相同；$p_t$比较大时，focal loss被减小。其中$\alpha_t$与$\gamma$为可调超参数。

一般只设置一个$\alpha$，负样本的$\alpha$则为$1 - \alpha$。

## 多分类问题

多分类问题中，模型会为每个类别预测一个概率，此时$p_t$为真实分类的概率（如真实索引为1，softmax得到[0.1, 0.7, 0.2]，$p_t$为0.7）。此时focal loss的公式不变，但可以为每个类别设置一个$\alpha$。

## 多标签分类问题

将每个类别视为二分类问题；在每个类别上计算并求平均。