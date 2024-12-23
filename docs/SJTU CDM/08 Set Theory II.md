---
sidebar_position: 1
---

这篇笔记介绍lecture13，承接上一篇的内容继续介绍集合论。  

## 罗素悖论

直观的集合表述被称为朴素集合论。在朴素集合论中，对于**任意**谓词 $P$ ， $\{x|P(x)\}$ 都代表一个集合。朴素集合论会导致罗素悖论出现。  

按照集合论公理，可以定义一个谓词 $P(x): x \notin x$ ，则有 $S = \{x|P(x)\}$ 。如果 $S \isin S$ ，则根据朴素集合论 $P(S)$ 为真，则 $S \notin S$ 。同样，如果 $S  \notin S$ ，则 $P(S)$ 为真，则 $S \isin S$ ，即 $S \isin S \Leftrightarrow S \notin S$ 。这就是罗素悖论。  

为了解决这个问题，需要建立集合论公理系统。  

## 集合论公理系统

集合论公理系统共有十条公理。  

注意在集合论公理系统中，研究的所有对象都是集合。以下的 $x$ 、 $y$ 等均为集合。

### 集合论公理

1. 外延公理（axiom of extensionality）  
$(\forall x)(\forall y)(x = y \leftrightarrow (\forall z)(z \isin x \leftrightarrow z \isin y))$  
两个集合相等的充要条件是它们恰好具有同样的元素。

2. 空集合存在公理（axiom of the empty set）  
$(\exist x)(\forall y)(y \notin x)$  
存在空集 $\varnothing$ 。

3. 无序对集合存在公理（axiom of pairing）  
$(\forall x)(\forall y)(\exist z)(\forall u)(u \isin z \leftrightarrow ((u = x) \lor (u = y)))$  
对任意的集合 $x$ 和 $y$ ，存在一个集合 $z$ ，它的元素恰好为 $x$ 和 $y$ 。

4. 并集合公理（axiom of union）  
$(\forall x)(\exist y)(\forall z)(z \isin y \leftrightarrow (\exist u)(z \isin u \land u \isin x))$  
对任意的集合 $x$ ，存在一个集合 $y$ ，它的元素恰好为 $x$ 的元素的元素。

5. 子集公理模式（分离公理模式，axiom of schema）  
$(\forall x)(\exist y)(\forall z)(z \isin y \leftrightarrow (z \isin x \land P(z)))$  
对于任何的谓词公式 $P(z)$ ，对任意的结合 $x$ ，存在一个集合 $y$ ，它的元素 $z$ 恰好是 $x$ 的元素又使 $P(z)$ 为真。

6. 幂集合公理（axiom of power set）  
$(\forall x)(\exist y)(\forall z)(z \in y \leftrightarrow (\forall u)(u \in z \rightarrow u \in x))$  
对任意的集合 $x$ ，存在一个集合 $y$ ，它的元素恰好是 $x$ 的子集。

7. 正则公理（axiom of regularity）  
$(\forall x)(x \not = \varnothing \rightarrow (\exist y)(y \in x \land (y \cap x = \varnothing)))$  
对任意的非空集合$x$ ，存在 $x$ 的一个元素，它和 $x$ 不相交。

8. 无穷公理（axiom of infinity）  
$(\exist x)(\varnothing \in x \land (\forall y)(y \in x) \rightarrow (y \cup \{y\} \in x))$  
存在一个由所有自然数组成的集合。

9. 替换公理模式（axiom of replacement）  
$(\forall x)(\exist y)(P(x,y) \land (\forall z)(P(x,y)\rightarrow z = y)) \rightarrow (\forall t)(\exist s)(\forall u)(u \in s \rightarrow (\exist z)(z \in t \land P(x,y)))$  
对于任意的谓词公式 $P(x,y)$ ，如果对任意的 $x$ 存在唯一的 $y$ 使得 $P(x,y)$ 为真，那么对所有的集合 $t$ 就存在一个集合 $s$ ，使 $s$ 中的元素 $y$ 恰好是 $t$ 中元素 $x$ 所对应的那些 $y$ 。

10. 选择公理（axiom of choice）  
$(\forall Relation R)(\exist Function F)(F \subseteq R \land dom(R) = dom(F))$  
对任意的关系 $R$ ，存在一个函数 $F$ ， $F$ 是 $R$ 的子集，而且 $F$ 和 $R$ 的定义域相等。

罗素悖论可以被子集公理模式和正则公理排除。

### 子集公理模式

子集公理模式表明，对于任意谓词 $P$ 都可以构建一个使 $P$ 为真的新集合。但是，要求新集合中的元素必须都在某个已知集合中出现。也就是说，在集合论公理系统中，已有集合 $A$ 和谓词 $P$ ，集合 $\{x|x \in A \land P(x)\}$ 是有效的。

更进一步地，对于集合 $A$ 和谓词 $x \in B$ ，有 $A_0 = \{x|x \in A \land x \in B\} = A \cap B$ 。对于集合 $A$ 和谓词 $x \not \in B$ ，有 $A_0 = \{x| \in A \land x \not \in B\} = A - B$ 。对于非空集合 $A$ 和谓词 $(\forall y)y \in A \rightarrow x \in y$ ，有 $A_1 \in A$ ，则有 $A_0 = \{x|x\in A_1 \land (\forall y)y \in A \rightarrow x \in y\} = \cap A$ 。

罗素悖论所构建出的集合缺少了前置的已知集合。

### 正则公理

正则公理表明，所有非空集合 $x$ 都包含一个元素 $y$ 使得 $x$ 和 $y$ 是离散集合，即 $x \cap y = \varnothing$ 。

如果集合 $A \in A$ ，则 $A_0 = \{A\}$ ，那么 $A$ 与 $A_0$ 是离散的。但是 $A \in A$ ，且 $A \in A_0$ ，所以 $A \cap A_0 \not = \varnothing$ ，与正则公理矛盾。所以对于任意集合 $A$ ， $A \not \in A$ 。

如果为罗素悖论的集合构建一个包含所有集合的前置已知集合 $U$ ，就可以使 $S = \{x|x \in U \land x \not \in x\}$ 。但在这种定义下 $U \in U$ ，而由于正则公理 $U \not \in U$ ，所以包含所有集合的集合在集合论公理系统下不存在。

## 基数

集合的基数是集合包含的元素的个数。如果 $A$ 是一个集合，则 $A$ 的基数写作 $|A|$ 或 $card(A)$ 。有限集合的基数是一个确定的数。  

### 基数与集合运算

根据集合运算的性质，可以得到下面这些结论。  

- $|A_1 \cup A_2| \le |A_1| + |A_2|$  
- $|A_1 \cap A_2| \le min(|A_1|, |A_2|)$  
- $|A_1 - A_2| \ge |A_1| - |A_2|$  
- $|A_1 \oplus A_2| = |A_1| + |A_2| - 2|A_1 \cap A_2|$  
- $|A_1 \cup A_2| = |A_1| + |A_2| - |A_1 \cap A_2|$ 

### 容斥定理

![inclusion and exclusion](./img/inclusion%20and%20exclusion.png)  

### 无限集合的基数

令 $|N| = \aleph_0$ 。

对于集合 $A$ 和 $B$ ，如果存在一种方式将它们的元素配对，且没有任何元素未被覆盖，则 $A$ 和 $B$ 是等势的（equianumerous），记为 $A \approx B$ ，否则记为 $\neg A \approx B$ 。如果没有任何 $A$ 中的元素未被覆盖，则 $|A| \le |B|$ 。如果 $|A| \le |B|$ 且 $\neg A \approx B$ ，则 $|A| < |B|$ 。

$N$ 、 $Z$ 和偶数集等，都有某种方法将其中的元素一一对应，则 $|N| = |Z| = \aleph_0$ 。此外，通过“对角线方法”，有理数集 $Q$ 和 $N$ 也可以一一对应，即 $|Q| = \aleph_0$ 。

（$\frac{1}{1}$ 对应1，$\frac{1}{2}$ 对应2， $\frac{2}{1}$ 对应3等等）  

如果集合 $A$ 的基数 $|A| \le \aleph_0$ ，则 $A$ 为可数集。所有有限集合都是可数集。  

### 幂集合

对于集合 $A$ ，幂集合公理定义了集合 $P(A)$ 或 $2^A$ 。例如 $A = \{1, 2, 3\}$ ， $P(A) = \{\varnothing, \{1\}, \{2\}, \{3\}, \{1, 2\}, \{1, 3\}, \{2, 3\}, \{1, 2, 3\}\}$ 。对于有限集合 $|A| = n$ ，有 $|P(A)| = 2^n = 2^{|A|}$ 。

对于所有集合，很明显 $|A| \le |P(A)|$ ，因为集合的每个元素都可以构成一个子集。通过对角线论证（略），有 $\neg S \approx P(S)$ 。所以得到康托尔定理，每个集合的基数都严格小于它的幂集合的基数。

通过康托尔定理，可以知道并不是所有无限集合都有同样的基数，有无限多的无限集合，并且没有最大的无限集合。