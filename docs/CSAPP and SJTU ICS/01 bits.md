---
sidebar_position: 1
---

这篇笔记包含lecture1-2, 4-5，所有与bits相关的内容。其中二、八、十六进制转换以及C语言基础跳过。

## 介绍

sjtu的ICS1、2基本为CSAPP的部分内容。

这个合集包含CSAPP和上海交通大学ICS1、2的笔记。由于ICS基本上讲解的是CSAPP内容，不单列两个合集了。对于两门课程中重叠的部分，笔记会专注于ICS。  

我的CSAPP库：  
[https://github.com/key4127/CSAPP](https://github.com/key4127/CSAPP)  

我的ICS库（暂不开放）：

## 位运算

位运算符的介绍跳过。  

通过异或的swap函数如下：  

```C
int swap(int *x, int *y)
{
    *x = *x ^ *y;
    *y = *x ^ *y; // *x ^ *y ^ *y
    *x = *x ^ *y; // *x ^ *y ^ *x
}
```

### Mask Operations

通过某个二进制可以对原数据进行相应操作。例如，对于十六进制 ``0xFF`` ，``x & 0xFF`` 可以提取出x的前八位，x ^ ~0xFF 可以保持前八位不变的同时对后面的位取反， x | 0xFF 可以将前八位置为1，后八位不变。

一些具体的使用方式：  

|运算符| 0 | 1 |
|:---:|:-:|:-:|
|&|置0|不变|
|\||不变|置1|
|^|不变|取反|

- ~：取反
- \<\<\/\>\>：乘/除 $2^x$

mask的使用示例：bitCount（统计1的数量）。   

```C
//There are more readable ways
int bitCount(int x)
{
    int m1 = 0x11 | (0x11 << 8);
    int mask = m1 | (m1 << 16);

    int s = x & mask;
    s += x >> 1 & mask;
    s += x >> 2 & mask;
    s += x >> 3 & mask;

    s = s + (s >> 16);
    mask = 0xF | (0xF << 8);
    s = (s & mask) + ((s >> 4) & mask);
    return (s + (s >> 8)) & 0x3F;
}
```

## 数据存储 运算

数据存储部分介绍了原码、反码、补码以及int的singed和unsigned类型。  

运算部分介绍了计算机中的运算（加、乘）。

跳过（如果考试内容超过这部分会补充）