---
sidebar_position: 1
---

这篇笔记包含前三个lecture，propositional logic（命题逻辑）中的内容。  

*对应教材《数理逻辑与集合论》中1.1-1.5、2.1-2.4。考虑到笔记逻辑，propositional logic最后的重言式、矛盾式等部分放在下一篇笔记中。*  

## 介绍

*（基本与github上的README介绍内容相同）*

CDM是上海交通大学软件工程专业的离散数学课。与其它离散数学课不同，这门课不教图论（放在以后的培养计划里），但额外包含了形式化验证的内容。比起一般的离散数学，这门课特殊为计算机类专业设计，包含3个lab和一个bonus lab。   

CDM（SJTU）网页：  
[https://ipads.se.sjtu.edu.cn/courses/cdm/](https://ipads.se.sjtu.edu.cn/courses/cdm/)

我的github库（暂未开放）：  
[https://github.com/key4127/CDM-SJTU](https://github.com/key4127/CDM-SJTU)  

## 命题

### 命题及相关基本定义

命题的定义是 “**a statement that is, by itself, either true or false**”。由此，不确定真假的、感叹句、祈使句、问句不是命题。命题逻辑的定义是 “**a mathematical system for reasoning about propositions and how they relate to one another**”。  

命题逻辑公式由命题变项和命题联结词组成。命题变项代表命题，命题联结词代表命题之间的关系。命题变项有以下几个特点：一个命题变项代表一个简单命题（原子命题），用P、Q等大写字母表示、要么为真要么为假。命题联结词用于连接命题。  

此外，没有联结词的命题被称简单命题（原子命题）。

### 命题联结词

**否定词：$\neg P$**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**和取词：$P \land Q$**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**析取词：$P \lor Q$**  

<td>

|   $P$  |$\neg P$|
|:------:|:------:|
|   $T$  |   $F$  |
|   $F$  |   $T$  |

</td><td>

|   $P$  |   $Q$  |$P \land Q$|
|:------:|:------:|:---------:|
|   $T$  |   $T$  |    $T$    |
|   $T$  |   $F$  |    $F$    |
|   $F$  |   $T$  |    $F$    |
|   $F$  |   $F$  |    $F$    |

</td><td>

|   $P$  |   $Q$  |$P \land Q$|
|:------:|:------:|:---------:|
|   $T$  |   $T$  |    $T$    |
|   $T$  |   $F$  |    $T$    |
|   $F$  |   $T$  |    $T$    |
|   $F$  |   $F$  |    $F$    |

</td>

**蕴含词：$P \rightarrow Q$**&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**双条件词：$P \leftrightarrow Q$**  

<td>

|   $P$  |   $Q$  |$P \leftarrow Q$|
|:------:|:------:|:--------------:|
|   $T$  |   $T$  |      $T$       |
|   $T$  |   $F$  |      $F$       |
|   $F$  |   $T$  |      $T$       |
|   $F$  |   $F$  |      $T$       |

</td><td>

|   $P$  |   $Q$  |$P \leftrightarrow Q$|
|:------:|:------:|:-------------------:|
|   $T$  |   $T$  |         $T$         |
|   $T$  |   $F$  |         $F$         |
|   $F$  |   $T$  |         $F$         |
|   $F$  |   $F$  |         $T$         |

</td>

联结词的结合性是左结合，优先级是 $\neg > \land > \lor > \rightarrow > \leftrightarrow$ 。

### 合式公式（WFF）

如果一个公式是 “a well-formed formula”，则这个公式是合式公式（WFF）。  

合式公式的递归定义如下：  

1. 每个单独的命题是WFF。
2. 如果A、B是WFF，则 $\neg A$ 、 $A \land B$ 、 $A \lor B$ 、 $A \rightarrow B$ 、 $A \leftrightarrow B$ 是WFF。
3. 除1、2之外的任何公式都不是WFF。

## 联结词

### 联结词完备性

如果一组联结词满足下面的条件，则它们是完备的：  

- 每个公式都可以转换成等价公式，并且这个等价公式只使用组里的联结词。  

而一个有n个变量的公式可以看作一个有n个参数的函数。如果每个这样的函数都可以转为WFF，则联结词是完备的。而如果某个函数的真值表和公式相同，则它们是等价的。

如何将真值表转换为公式？以下面为例：

|   $P$  |   $Q$  |     $g1(P, Q)$      |
|:------:|:------:|:-------------------:|
|   $T$  |   $T$  |         $T$         |
|   $T$  |   $F$  |         $T$         |
|   $F$  |   $T$  |         $F$         |
|   $F$  |   $F$  |         $F$         |

- 考虑结果为T的行

    - 选出为T的每一行，析取P、Q原值：  
        $P \land Q$ &nbsp;&nbsp;&nbsp;&nbsp;
        $P \land \neg Q$ &nbsp;&nbsp;&nbsp;&nbsp;

    - 用 $\lor$ 连接：  
        $(P \land Q) \lor (P \land \neg Q)$
    
- 考虑结果为F的行

    - 选出为F的每一行，合取P、Q取反的值（只要有一个为真结果就不是F）：  
        $\neg P \land \neg Q$ &nbsp;&nbsp;&nbsp;&nbsp;
        $\neg P \land Q$ &nbsp;&nbsp;&nbsp;&nbsp;

    - 用 $\land$ 连接：  
        $(\neg P \land \neg Q) \land (\neg P \land Q)$

---

对于现有的联结词，已经知道

$P \leftrightarrow Q = (P \rightarrow Q) \land (Q \rightarrow P)$

则 \{$\neg$、$\land$、$\lor$、$\rightarrow$\} 是完备的。  

更近一步，可以发现  

$P \rightarrow Q = (\neg P) \lor Q$

由摩根定律得

$P \lor Q = \neg ((\neg P) \land (\neg Q))$   
$P \land Q = \neg ((\neg P) \lor (\neg Q))$

则 \{$\neg$, $\land$\}，\{$\neg$, $\lor$\} 是完备的。

### 相关定律

如果两个公式的真值表相同，则它们是等值的。  

**等值定理**  
$P = Q$ iff $P \leftrightarrow Q$ is always true.

**摩根定理**  
$\neg (P \land Q) = \neg P \lor \neg Q$
$\neg (P \lor Q) = \neg P \land \neg Q$

**双重否定律**  
$\neg \neg P = P$

**结合律**  
$(P \land Q) \land R = P \land (Q \land R)$  
$(P \lor Q) \lor R = P \lor (Q \lor R)$  
$(P \leftrightarrow Q) \leftrightarrow R = P \leftrightarrow (Q \leftrightarrow R)$  
*（对 $\rightarrow$ 不适用）* 


**交换律**  
$P \lor Q = Q \lor P$  
$P \land Q = Q \land P$  
$P \leftrightarrow Q = Q \leftrightarrow P$  
*（对 $\rightarrow$ 不适用）*

**等幂律**  
$P \land P = P$  
$P \lor P = P$  
$P \rightarrow P = T$  
$P \leftrightarrow P = T$  

**同一律**  
$P \land T = P$  
$P \lor F = P$  
$T \rightarrow P = P$  
$T \leftrightarrow P = P$  
$P \rightarrow F = \neg P$  
$P \leftrightarrow F = \neg P$

**补余律**  
$P \land \neg P = F$  
$P \lor \neg P = T$  
$P \rightarrow \neg P = \neg P$  
$\neg P \rightarrow P = P$  
$P \leftrightarrow \neg P = F$  

**零律**  
$P \land F = F$  
$P \lor T = T$  
$P \rightarrow T = T$  
$F \rightarrow P = T$  

**分配律**  
$P \lor (Q_1 \land Q_2 \land ... \land Q_n) = (P \lor Q_1) \land (P \lor Q_2) \land ... \land (P \lor Q_n)$    
$P \land (Q_1 \lor Q_2 \lor ... \lor Q_n) = (P \land Q_1) \lor (P \land Q_2) \lor ... \lor (P \land Q_n)$    

**吸收律**  
$P \lor (P \land Q) = P$  
$P \land (P \lor Q) = P$  