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

### 集合论公理

1. 外延公理（axiom of extensionality）

2. 空集合存在公理（axiom of the empty set）

3. 无序对集合存在公理（axiom of pairing）

4. 并集合公理（axiom of union）

5. 子集公理模式（分离公理模式，axiom of ）

6. 幂集合公理（）

7. 正则公理（）

8. 无穷公理（）

9. 替换公理模式（）

10. 选择公理（）