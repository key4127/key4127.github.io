---
sidebar_position: 1
---

这篇笔记包含lecture8-9，Predicate Logic ppt 中的内容。

*对应教材《数理逻辑与集合论》中4、5章的内容。*

## 基础概念

### 谓词

谓词（predicate）描述了个体词（individual）的属性。个体词的范围称作论域（dismain of decourse）。通常用大写字母代表谓词。每个谓词将个体词映射为真或假，它有一个相关的元数（arity），这是一个表示它接受参数个数的自然数。有 $n$ 个参数的谓词称作 $n$元谓词（$n$-ary predicate）。  

例如，在 $STRONGER(Tom, Jerry)$ 里，$Tom$ 和 $Jerry$ 是谓词， $STRONGER$ 是谓词常项，它接受两个参数。  

另外， $P(x_1, ..., x_n)$ 不一定是命题。只有谓词变项（predicate variable） $P$ 和个体变项（individual variable） $x_1, ..., x_n$ 均为常项（constant）的时候，这才是一个命题。  

### 函数

函数（function）将一个个体词映射到另一个个体词。注意函数不是命题。  

例如， $bestfriend(SpongeBob)$ 不是命题，这个函数的结果是 $PatrickStar$ 。但是 $bestfriend(SpongeBob) == PatrickStar$ 是命题。  

||参数|结果|
|:-:|:-:|:-:|
|联结词|命题|命题|
|谓词|个体词|命题|
|函数|个体词|个体词|

### 量词

量词（quantifier）“将关于个体属性的公式转化为对于某种数量个体属性的公式”，分为全称量词（the universal quantifier）和存在量词（existential quantifier）两种。  

全称量词表示某个论域内所有个体都具有相同的属性，例如 $(\forall x)(LIKEJERRY(x))$ ，其中 $x$ 是约束变元（bound variable）， $(LIKEJERRY(x))$ 是辖域（scope）。  

存在量词表示一个命题可以由论域中某个成员满足，例如 $(\exist x)((\forall y)(x \leq y))$ ，其中 $((\forall y)(x \leq y))$ 是 $(\exist x)$ 的辖域。  

注意，以 $(\exist x)P(x) \land Q(x)$ 为例，其中只有 $P(x)$ 是 $(\exist x)$ 的辖域。第二个 $x$ 被称为自由变元（free variable），不受任何量词约束。  

命题不应该包含自由变量。自由变量可以用常量替换，或者用量词转为约束变量。  

根据变元易名规则，变量的名字可以替换。  

以下是量词的其它规则

![quantifier property](./img/quantifier%20property.png)  

要更清晰地了解量词，可以在有限论域中考虑。  

那么，有

$$
(\forall x)P(x) = P(1) \land P(2) \land ... \land P(k)
$$

$$
(\exist x)P(x) = P(1) \lor P(2) \lor ... \lor P(k)
$$

### 合式公式  

项（term）是个体词通过函数生成的表达式。原子公式（原子谓词公式，atomic formula）是一种形如 $P(x_1, ..., x_n)$ 的表达式，其中 $P$ 是谓词，而 $x_1, ..., x_n$ 是项。 

合式公式有以下定义：  

1. 每个原子公式都是WFF。

2. 如果 $A$ 和 $B$ 是WFF，则 $\neg A$ ， $A \land B$ ， $A \lor B$ ， $A \rightarrow B$ 和 $A \leftrightarrow B$ 都是WFF，并且要求没有哪个变量在一个公式中是约束变元但在另一个公式中是自由变元。  

3. 如果 $A$ 是WFF，且 $x$ 在 $A$ 中是自由的，那么 $(\forall x)A$ 和 $(\exist x)A$ 是WFF。

4. 除此之外任何公式都不是WFF。

### 有效性

如果一个公式在任何解释下都为真，则它普遍有效（universally valid）；如果在某些解释下为真，则它是可满足的；如果在所有解释下都为假，则是不可满足的。  

显然  

- 如果 $\neg P$ 是不可满足的， $P$ 是普遍有效的。
- 如果 $\neg P$ 不是普遍有效的， $P$ 是可满足的。

## 判定问题

谓词逻辑中的判定问题（decision problem）是指，是否有某种有效的算法可以判定某个问题是不是普遍有效的。结论是，谓词逻辑是不可判定的，但是有限论域中的谓词逻辑是可判定的。  

### 推理演算

![deduction formula](./img/deduction%20formula.png)  

以下面这道题为例介绍推理演算的过程：有 $(\forall x)(P(x)\rightarrow Q(x))$ 、 $(\forall x)(P(x)\rightarrow R(x))$ ，证明 $(\forall x)(P(x) \rightarrow R(x))$ 。  

$$
\begin{align}
&(\forall x)(P(x) \rightarrow Q(x))
\\&P(x)\rightarrow Q(x)
\\&(\forall x)(Q(x) \rightarrow R(x))
\\&Q(x) \rightarrow R(x)
\\&P(x) \rightarrow R(x)
\\&(\forall x)(P(x) \rightarrow R(x))
\end{align}
$$

其中 $(2)$ $(4)$ 到 $(5)$ 为三段论， $(1)$ 到 $(2)$ 和 $(3)$ 到 $(4)$ 为全称量词消去规则， $(5)$ 到 $(6)$ 为全称量词引入规则。此外还有存在量词消去规则和存在量词引入规则。  

存在量词消去规则：$(\exist x)P(x)\implies P(c)$ （$c$ 为常量）  
存在量词引入规则：$P(c)\implies (\exist x)P(x)$  

### 等值

如果在任何解释下， $A$ 和 $B$ 都有相同的真值表，则 $A$ 与 $B$ 是相等的。也可以写成 $A \leftrightarrow B$ 是普遍有效的 /$A = B$ / $A \Leftrightarrow B$ 。

命题逻辑中的某些等式可以直接应用到谓词逻辑中。  

- $\neg \neg (\forall x)P(x) = (\forall x)P(x)$
- $(\forall x)P(x) \rightarrow (\exist x)Q(x) = \neg (\forall x)P(x) \lor (\exist x)Q(x)$

对于与 $\neg$ 有关的公式，有以下两条等式。  

- $\neg (\forall x)P(x) = (\exist x)\neg P(x)$
- $\neg (\exist x)P(x) = (\forall x)\neg P(x)$  

更进一步，有  

$\neg(\forall x)(\forall y)P(x,y) = (\exist x)(\exist y)\neg P(x, y)$  

等等，注意摩根律仍然适用。  

分配律有以下几类等。      

第一类：   

- $(\forall x)(P(x) \lor q) = (\forall x)P(x) \lor q$
- $(\exist x)(P(x) \lor q) = (\exist x)P(x) \lor q$
- $(\forall x)(P(x) \land q) = (\forall x)P(x) \land q$
- $(\exist x)(P(x) \land q) = (\exist x)P(x) \land q$

第二类：  

- $(\forall x)(P(x) \rightarrow q) = (\forall x)P(x) \rightarrow q$
- $(\exist x)(P(x) \rightarrow q) = (\exist x)P(x) \rightarrow q$
- $(\forall x)(q \rightarrow P(x)) = q \rightarrow (\forall x)P(x)$
- $(\exist x)(q \rightarrow P(x)) = q \rightarrow (\exist x)P(x)$

第三类：  

- $(\forall x)(P(x) \land Q(x)) = (\forall x)P(x) \land (\forall x)Q(x)$
- $(\exist x)(P(x) \lor Q(x)) = (\exist x)P(x) \lor (\exist x)Q(x)$

第四类：  

- $(\forall x)(\forall y)(P(x) \lor Q(y)) = (\forall x)P(x) \lor (\forall x)Q(x)$
- $(\exist x)(\exist y)(P(x) \land Q(y)) = (\exist x)P(x) \land (\exist x)Q(x)$

其中，对于第一、二类，要求 $x$ 与 $q$ 无关。  

### 前束范式

如果某个公式由一系列量词和关联的变量连接并在最后接着一个自由的部分（母式/基式，matrix），则这个公式是前束范式（PNF，prenex normal form）。任何谓词逻辑中的公式都有对应的前束范式表示。  

把一个公式转为PNF需要以下几步：  

1. 消去箭头。  

2. 将 $\neg$ 移到内侧。  

3. 将量词移到左侧。  

4. 改变约束变元的名称，不相干的变元不要重复。  

5. 再次将所有量词移到左侧。  

以 $\neg ((\forall x)(\exist y)P(a,x,y) \rightarrow (\exist x)(\neg (\forall y)Q(y,b)\rightarrow R(x)))$ 为例。  

$$
\begin{align*}
&\neg ((\forall x)(\exist y)P(a,x,y) \rightarrow (\exist x)(\neg (\forall y)Q(y,b)\rightarrow R(x)))
\\=&\neg(\neg (\forall x)(\exist y)P(a,x,y) \lor (\exist x)(\neg\neg (\forall y)Q(y,b) \lor R(x)))
\\=&(\forall x)(\exist y)P(a,x,y) \land (\forall x)((\exist y)\neg Q(y,b) \land \neg R(x))
\\=&(\forall x)((\exist y)P(a,x,y)\land (\exist y)\neg Q(y,b)\land \neg R(x))
\\=&(\forall x)((\exist y)P(a,x,y)\land (\exist z)\neg Q(z,b)\land \neg R(x))
\\=&(\forall x)(\exist y)(\exist z)(P(a,x,y) \land \neg Q(z,b) \land \neg R(x))
\end{align*}
$$

### Skolem标准形

只有全称量词的前束范式是Skolem标准形。每个公式 $A$ 都可以转化为对应的Skolem标准形 $B$ ，并且如果 $B$ 是不可满足的， $A$ 也是不可满足的。  

从PNF转换到Skolem标准形时，对于 $(\exist u)$ ，如果它在某个全称量词的论域内（例如 $(\forall x)(\forall y)$），则去掉 $(\exist u)$ 并将所有 $y$ 替换为 $f(x,y)$ ；如果不在任何全称量词论域内，则同样去掉 $(\exist u)$ 将所有 $u$ 替换为常量 $c$ 。  

例如  

$$
(\exist x)(\forall y)(\forall z)(\exist u)(\forall v)(\exist w)P(x,y,z,u,v,w)
$$

的Skolem标准形是  

$$
(\forall y)(\forall z)(\forall v)P(a,y,z,f(y,z),v,g(y,z,v))
$$

### 归结推理法

使用归结推理法时，要先将公式转为Skolem标准形。在标准形中 $A \land B$ 情况下，$A$ 、 $B$ 为子句集。挑出其中的子句集后进行归结推理。  

例如，对于这道题  

$$
\begin{align*}
&A1 = (\exist x)(P(x) \land (\forall y)(D(y) \rightarrow L(x,y)))
\\&A2 = (\forall x)(P(x) \rightarrow (\forall y)(Q(y) \rightarrow \neg L(x,y)))
\\&B = (\forall x)(D(x) \rightarrow \neg Q(x))
\end{align*}
$$

要证明 $A1 \land A2 \implies B$ 。  

证明 $A1 \land A2 \implies B$ ，也就是证明 $A1 \land A2 \land \neg B$ 为矛盾式。其中 $\neg B = (\exist x)(D(x) \land Q(x))$ 。  

则  

$$
\begin{align*}
&A1 = (\forall y)(P(a) \land (\neg D(y) \lor L(a,y)))
\\&A2 = (\forall x)(\forall y)(\neg P(x) \lor \neg Q(y) \lor \neg L(x,y))
\\&\neg B = D(b) \land Q(b)  
\end{align*}
$$

所以  

![resolution reasoning](./img/resolution%20reasoning.png)