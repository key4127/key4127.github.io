---
sidebar_position: 1
---

这篇笔记包含lecture10，SMT Slover、Symbolic Execution ppt 中的内容。
~~lecture11暂时跳过~~  

## SMT Slover

所有没有量词和联结词的公式为原子公式。目前，只考虑没有量词的情况。

Lazy SMT步骤如下：  

- 将所有原子公式换成命题变量
- 用SAT Slover得到各个命题变量的值
- 用T Slover检查这些值是否可能
- 如果不可能，让SAT Slover给出另一组解

### T Slover

这里介绍的T Slover以EUF为例。  

根据函数的等价性，如果 $x_1 = y_1, x_2 = y_ 2，...，x_n = y_n$ ，则有 $f(x_1, x_2, ..., x_n) = f(y_1, y_2, ..., y_n)$ 。  

所以EUF步骤如下：  

- 用常量代替函数值
- 将每个值视为一个集合
- 将相等的值合并到同一集合
- 检查是否矛盾

例如，要检查 $a = b, c \not = d, c = f(a), d = f(b)$ 是否成立  

- $f(a) = v_1, f(b) = v_2$
- $a, b$ 属于同一集合，$c, d, v_1, v_2$ 属于同一集合
- 与 $c \not = d$ 矛盾，得出 $UNSAT$
