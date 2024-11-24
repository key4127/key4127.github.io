---
sidebar_position: 1
---

这篇笔记介绍lecture10-11，汇编中的数组和数据结构。 

## 数组

### 数组与指针

```C
T A[N];
```

数组声明语句分配了一块大小为 ``sizeof(T) * N`` 的空间。数组的首地址为 ``Xa`` ，是指向数组第一个数的指针， 也是 ``A`` 的值。数组的下标从 ``0`` 到 ``N - 1`` ，其中第 ``i`` 个元素的地址是 ``Xa + i * sizeof(T)`` 。指针加下标得到另一个指针；两个指针相减得到一个正数（例子中为 ``long`` ）。  

在汇编中，若 ``A`` 的值存在 ``%rdx`` 中，下标 ``i`` 存在 ``%rcx`` 中，则数组 ``A[i]`` 的值在 ``(%rdx, %rcx, 4)`` 。  

![pointer arithmetic](./img/pointer%20arithmetic.png)  

### 多维数组

![nested array](./img/nested%20array.png)  

如图，多维数组也是像一位数组一样存储的。元素 ``A[i][j]`` 存储在 ``Xd + sizeof(T) * (C * i + j)`` ， ``C`` 是列数。  

若 ``%rdi`` 存储 ``Xd`` ， ``%rsi`` 存储 ``i`` ， ``%rdx`` 存储 ``j`` ，则 ``A[i][j]`` 为  

```x86asm
leaq (%rsi, %rsi, 2), %rax
leaq (%rdi, %rax, 4), %rax
(%rdx, %rax, 4)
```

### 固定长度数组

```C
#define N 16
typedef int fix_matrix[N][N];

/* Compute i,k of fixed matrix product */
int fix_prod_ele(fix_matrix A, fix_matrix B, long i, long k)
{
    long j;
    int result = 0;

    for (j = 0; j < N; j++)
        result += A[i][j] * B[j][k];

    return result;
}
```

会被改写为  

```C
/* Compute i,k of fixed matrix product */
int fix_prod_ele_opt(fix_matrix A, fix_matrix B, long i, long k)
{
    int *Aptr = &A[i][0], *Bptr = &B[0][k];
    int *Bend = &B[N][k]; 
    int result = 0;
    do {
        result += *Aptr * *Bptr;
        Aptr ++;
        Bptr += N;
    } while (Bptr != Bend)
    return result;
}
```

汇编为  

```x86asm
A in %rdi, B in %rsi, i in %rdx, k in %rcx
fix_prod_ele:
    salq 	$6, %rdx
    addq 	%rdx, %rdi
    leaq 	(%rsi,%rcx,4), %rcx
    leaq 	1024(%rcx), %rsi
    movl 	$0, %eax
.L7:
    movl	(%rdi), %edx
    imull 	(%rcx), %edx
    addl 	%edx, %eax
    addq 	$4, %rdi
    addq 	$64, %rcx
    cmpq 	%rsi, %rcx
    jne		.L7
    rep;
```

### 不固定长度数组

```C
int var_ele(long n, int A[n][n], long i, long j)
  {
      return A[i][j];
  }
```

数组的长度会在定义时根据变量确定。  

```x86asm
n at %rdi, A at %rsi, i at %rdx, j at %rcx
var_ele:
  imulq %rdx, %rd
  leaq  (%rsi,%rdi,4), %rax
  movl  (%rax,%rcx,4), %eax
```

## 数据结构

### 结构体

和数组一样，所有结构体数据都存储在一块连续的内存中。数据结构的指针指向连续内存中的第一个元素。

### 共用体

共用体 ``union`` 是一种特殊的数据类型。在这种数据类型中，不同的字段使用不同的内存块。  

## 对齐

为了简化硬件设计，要求某些对象的地址必须是某些数字（2、4、8、16）的整数倍。在x86-64机器中，是否对齐不影响系统正常工作，但对齐可以提高系统性能。    

linux要求1字节数据可以使用任何地址，2字节数据必须使用2整数倍地址，4字节数据必须使用4整数倍地址，大于等于8字节数据必须使用8整数倍地址。C语言中的 ``malloc()`` 会返回一个 ``void`` （通用）指针，对齐要求为8。  

为了满足对齐要求，结构体实现时可能需要补位或空位。  

例如对于这个结构体  

```C
struct xxx {
    short s;
    char c0;
    int i;
    long l;
    char c1;
    char a[2];
    double d;
    char c2;
};

xxx x[2];
```

对应的空间分配如下。  

![alignment](./alignment.png)