---
sidebar_position: 1
---

这篇笔记包括lecture15、16，继续介绍关系的相关内容。

## 相容关系和覆盖

### 覆盖

集合的覆盖（cover）指将集合分为非空的子集，每个元素至少属于一个子集。划分一定是覆盖，但覆盖不一定是划分。对于集合 $A$ ，满足下面条件的集合 $C$ 为覆盖：  

- $\varnothing \notin C$
- $(\forall x)(x \in C \rightarrow x \subseteq A)$
- $\cap C = A$

覆盖的定义只是去除了划分的最后一条要求（子集不相交）。类似地，覆盖也可以定义关系 $R = \{<a,b>|(\exist C_0)(C_0 \in C \land a \in C_0 \land b \in C_0)\}$ 。覆盖有自反性和对称性，但是没有传递性。

### 相容关系

相容关系（compatible relation）指具有自反性和对称性的关系。对于集合 $A$ 和相容关系 $R$ ，如果有 $C \subseteq A \land C = \{x|(x \in A) \land (\forall y)((y \in C) \rightarrow xRy)\}$ ，则 $C$ 是相容类（compatible class）。如果 $C$ 不是任何相容类的真子集，则 $C$ 是极大相容类（maximum compatible class），记作 $C_R$ 。  

对于 $A$ 上的任意相容类 $C$ ，都存在最大相容类 $C_R$ 使得 $C \subseteq C_R$ 。可以计算出一个序列 $C_0 \subseteq C_1 \subseteq ...\subseteq C_R$ 。  

- $C_0 = C$
- $C_{i + 1} = C_i \cup {a_j}$ ，$j$ 是满足 $a_j \notin C_j \land (x \in C_i \rightarrow a_jRx)$ 的最小下标  

对于 $A$ 上的相容关系 $R$ ，所有最大相容类的集合是 $A$ 的覆盖，称作完全覆盖（complete cover），记为 $C_R(A)$ 。只有一个相容覆盖。相容关系可以产生完全覆盖，覆盖可以产生相容关系。不同的覆盖可以产生相同的相容关系。

## 偏序关系

### 偏序关系和拟序关系

如果 $(\forall a)(\forall b)((a \in A \land b \in A \land aRb \land bRa) \rightarrow a = b)$ ，则 $A$ 上的关系 $R$ 是反对称的（antisymmetric）。  

自反的、反对称的、传递的关系是偏序关系（partial-order relation）。有偏序关系 $R$ 的集合 $A$ 称为偏序集（partially ordered set或poset），记作 $<A,R>$ 。

如果 $(\forall a)(a \in A \rightarrow a\cancel{R}a)$ ，则关系 $R$ 是非自反的（anti-relfexivity）。  

非自反的、传递的关系称作拟序关系（quasi-order relation或strict order relation）。拟序关系是反对称的。  

对于拟序关系 $R$ ， $R \cup R_0$ 是偏序关系。对于偏序关系 $R$ ， $R - R_0$ 是拟序关系。

### 哈斯图

对于拟序集，以 $<A, \le>$ 为例。如果 $x, y \in A，x \not = y，x \le y$ ，并且不存在 $z$ 使得 $x \le z \land z \le y$ ，则称 $y$ 盖住（covers） $x$ 。称 $A$ 上的关系 $R = \{<x,y>|x \in A \land y \in A \land (y covers x)\}$ 是 $A$ 上的盖住关系，记为 $cov(A)$ 。  

将 $A$ 中的所有元素画成点，对于盖住关系中的元素 $<a,b>$ ，在 $a$ 、 $b$ 间连一条有向边。所有有向边指向一个方向，可以以此确定递增方向，将有向边改为无向边。这个图称为哈斯图（hasse diagram）。  

例如，下面是 $A = \{1,2,3,4,6,12\}$ 上整除关系的哈斯图。  

![hasse diagram](./img/hasse%20diagram.png)  

利用拟序关系和偏序关系的性质，可以将它们的关系图简化为哈斯图。  

### 上确界和下确界

对于偏序集 $<A,\le>$ 和 $B \subseteq A$ ，如果存在 $y \in B$ 使得 $(\forall x \in B)(x \le y)$ ，称 $y$ 是 $B$ 的最大元（maximum element）。如果存在 $y \in B$ 使得如果 $y \le x$ ，有 $x = y$ ，则称 $y$ 是 $B$ 的极大元（maximal element）。类似地，如果 $x \in B \land (\forall y)(y \in B \rightarrow x \le y)$ ， $x$ 是 $B$ 的最小元（minimum element）。如果 $x \in B \land (\forall y)((y \in B \land y \le x) \rightarrow x = y)$ ， $x$ 是 $B$ 的极小元（minimal element）。  

对于偏序集 $<A,\le>$ 和 $B \subseteq A$ ，如果 $y \in A \land (\forall x)(x \in B \rightarrow x \le y)$ ，则 $y$ 是 $B$ 的上界（upper bound）。让所有上界构成集合 $C$ ，则 $C$ 中的最小元是 $B$ 的上确界（supremum）。如果 $x \in A \land (\forall y)(y \in B \rightarrow x \le y)$ ， $x$ 是 $B$ 的下界（lower bound）。同样，下界集合 $C$ 中的最大元是 $B$ 的下确界（infimum）。  

上界和下界不一定存在，也可能不止一个。上确界和下确界要么不存在，要么只有一个。  

### 全序关系和链

在偏序集 $<A, \le>$ 中，对于 $x \in A$ ， $y \in A$ ，如果有 $x \le y$ 或  $y \le x$ ，则 $x$ 和 $y$ 是可比的（comparable）。如果对于任何 $x$ 、 $y$ ，都有 $x$ 和 $y$ 是可比的，则称 $\le$ 是 $A$ 上的全序关系（或线序关系，total order relation）， $<A, \le>$ 是 $A$ 上的全序集。  

如果 $B$ 中的任何 $x$ 和 $y$ 都是可比的，则 $B$ 是 $A$ 上的链（chain）， $|B|$ 是链的长度。如果任何 $x$ 和 $y$ 都是不可比的，则 $B$ 是 $A$ 上的反链（anti-chain）， $|B|$ 是反链的长度。  

偏序集可以被分成不相交的反链。如果链的最大长度为 $n$ ，则将偏序集分割时，反链的个数最少为 $n$ 。因为最长链中的 $n$ 个元素必须分在 $n$ 个不同的反链中。此外，对偏序集 $<A, \le>$ ，若 $A$ 中元素为 $mn + 1$ ，则 $A$ 中或者存在一条长度为 $m + 1$ 的反链，或者存在一条长度为 $n + 1$ 的链。

### 良序关系

对于偏序集 $<A, \le>$ ，如果任何非空子集 $A$ 都有最小元，则 $\le$ 是良序关系（well order relation）， $<A, \le>$ 是良序集（well order set）。  

良序集是全序集。有限全序集是良序集。

## 闭包

### 闭包的定义

对于非空集合 $A$ 上的关系 $R$ ，如果有另一个关系 $R^{'}$ 满足 $R^{'}$ 自反、 $R^{'}$ 是 $R$ 的子集，且对于任何 $A$ 上的自反关系 $R^{''}$ 都有 $R \subseteq R^{''} \rightarrow R^{'} \subseteq R^{''}$ ，称 $R^{'}$ 为 $R$ 的自反闭包（reflexive closure），记作 $r(R)$ 。类似地，有对称闭包（symmetric closure）和传递闭包（transitive closure）的定义，分别记作 $s(R)$ 和 $t(R)$ 。  

对于关系 $R$ ，有 $R是自反的 \Leftrightarrow r(R) = R$ 、 $R是对称的 \Leftrightarrow s(R) = R$ 和 $R是传递的 \Leftrightarrow t(R)$ 。

### 闭包的构造与性质

对于非空集合 $A$ 上的关系 $R$ ， $r(R) = R \cup R_0$ ， $s(R) = R \cup R_{-1}$ 。令 $|A| = n$ ， $t(R) = R \cup R_1 \cup ... \cup R_n$ 。  

$<a, b> \in R^n$ 等价于有一条长度为 $n$ 的从 $a$ 到 $b$ 的路径。 $R$ 的连接关系 $R^+ = R \cup R^2 \cup ...$ ，但通常只需要考虑连接到 $R^n$ 的情况，即 $R^+ = R^1 \cup R^2 \cup ... \cup R^n$ 。  

可以用warshall算法来计算传递闭包。  

如果 $R$ 是自反的，则 $s(R)$ 和 $t(R)$ 是自反的。如果 $R$ 是对称的，则 $r(R)$ 和 $t(R)$ 是对称的。如果 $R$ 是传递的，则 $r(R)$ 是传递的，但 $s(R)$ 不一定是传递的。  

$rs(R)$ 代表 $r(s(R))$ ，其它类似。有 $rs(R) = sr(R)$ ， $rt(R) = tr(R)$ ， $st(R) \subseteq ts(R)$ 。