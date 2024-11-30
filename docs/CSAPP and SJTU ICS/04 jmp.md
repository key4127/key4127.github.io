---
sidebar_position: 1
---

这篇笔记包含lectre8的内容，介绍了jmp指令。

## 条件码

### EFLAGS寄存器

这个寄存器用于存储相应控制信息。  

- CF（Carry Flag）：在无符号运算中，结果超出了运算范围置1，反之置0。

- OF（Overflow Flag）：在有符号运算中发生溢出，置1，反之置0。

- ZF（Zero Flag）：如果结果为0置为1，反之置0。

- SF（Sign Flag）：与符号位相同，即正数为0，负数为1。  

### 设置与读取条件码

各种算数操作会隐式设置条件码。在加法运算时，四种条件码都会对应设置。异或指令会将CF和OF设为0，移位操作会将CF设置为最后移出的位、OF设置为0，lea对条件码没有影响。  

条件码还可以通过比较来显示设置。对于指令 ``cmp a, b`` ，类似于计算 ``b - a`` 但不进行存储。如果最高有效位进位，设置CF；如果 ``a == b`` ，设置ZF；如果 ``a > b`` ，设置SF；如果出现溢出，即 ``(a > 0 && b < 0 && (a - b) < 0) || (a < 0 && b > 0 && (a - b) > 0)`` ，设置OF。  

``test`` 指令也可以设置条件码，相当于计算 ``a & b`` 。同样地，如果 ``a & b == 0`` ，ZF置为1；如果 ``a & b < 0`` ，SF置为1。  

条件码无法直接读取。要读取条件码，需要基于条件码向寄存器或内存中设置值。  

![accessing conditional codes](./img/accessing%20conditional%20codes.png)  

注意目标位置必须是单字节寄存器或单字节内存。如果要将条件码存储在32/64位的位置，必须将目标位置的高位置0。

```x86asm
cmpq   %rsi, %rdi
setl   %al
movzbl %al, %eax
```

## jmp

```x86asm
    movq $0, %rax
    jmp  .L1
    movq (%rax), %rdx
.L1:
    popq %rdx
```

``jmp`` 为无条件跳转指令，除此之外还有许多有条件跳转指令，如 ``jl`` 、 ``jge`` 、 ``jb`` 等。条件跳转中的大小是第一个数比较第二个数，例如在 ``cmp a, b`` 中，如果 $a < b$ 就会执行 ``jg`` 指令（这里似乎与许多网上查到的资料相反）。  

此外， ``jmp`` 分为直接跳转和间接跳转。直接跳转为 ``jmp label`` ，如 ``jmp .L1`` ；间接跳转为 ``jmp *operand`` ，如 ``jmp *%rax`` 。  

### If-else

对于C语言中的分支  

```C
if (test-expr) {
    statement1;
}
else {
    statement2;
}
```

可以写成  

```C
    t = test-expr;
    if (t) goto expt_t;
    statement2;
expr_t:
    statement1;
done:
```

与 ``jmp`` 等的逻辑类似。

另外，比如  

```C
long absdiff(long x, long y)
{
    long result;
    if (x < y) {
        result = y - x;
    } else {
        result = x - y;
    }
    return result;
}
```

可以转为

```C
long absdiff(long x, long y)
{
    long rval = y - x;
    long eval = x - y;
    long ntest = x >= y;
    if (ntest) {
        rval = eval;
    }
    return rval;
}
```

得到汇编

```x86asm
absdiff:
    movq   %rsi, %rax
    subq   %rdi, %rax
    movq   %rdi, %rdx
    subq   %rsi, %rdx
    cmpq   %rsi, %rdi
    comvge %rdx, %rax
    ret
```

注意判断条件要能写成单行指令。  

其中 ``comvge`` 为conditional move。  

![conditional move](./img/conditional%20move.png)  

对于conditional move，要求源和目标都是16/32/64位，源可以是寄存器或内存，但目标位置必须是寄存器。  

另外，这种操作要求没有“副作用”。  

```C
int cread(int *xp)
{
    return xp ? *xp : 0;
}
```

对于这段代码，``xp`` 的值存在不代表 ``*xp`` 的值存在，直接使用条件移动指令可能产生未定义行为。  

### Switch

```C
switch(op) {
    case val_0:
        block0;
    case val_1:
        block1;
        ...
    case val_n;
        blockn;
}
```

在使用 ``switch`` 语句（并且 ``case`` 较多）时，编译器会前处理 ``case`` 对应的值，将最小 ``case`` 置为0并对应修改其它 ``case`` ，然后生成一个跳转表。跳转表是一个数组，存储对应 ``case`` 代码的首地址。跳转表是“连续”的，如果其中某个位置没有对应的 ``case`` ，跳转表的内容会被设置为 ``default`` 而不是直接跳过这个位置。这种设计使得可以直接 ``jmp *(jtab + 8 * x)`` 到达对应代码索引。    

```C
void switch_eg(long x, long n, long *dest)
{
    long val = x;
    switch(n) {
        case 100:
            val *= 13;
            break;
        case 102:
            x += 10;
        case 103:
            val += 11;
            break;
        case 104:
        case 106:
            val *= val;
            break;
        default val = 0;
    }
    *dest = val;
}
```

会被转化为

```C
void switch_eg(long x, long n, long *dest)
{
    static void *jt[7] = {
        &&loc_A,
        &&loc_def,
        &&loc_B,
        &&loc_C,
        &&loc_D,
        &&loc_def,
        &&loc_D
    };

    unsigned long index = n - 100;
    long val;
    if (index > 6) {
        goto loc_def;
    }
    goto *jt[index];

loc_A:
    val = x * 13;
    goto done;
loc_B:
    x = x + 10;
loc_C:
    val = x + 11;
    goto done;
loc_D:
    val = x * x;
    goto done;
loc_def:
    val = 0;
done:
    *dest = val;
}
```

然后，汇编中会生成跳转表  

```x86asm
.section .rodata
.align 8
.L4
    .quad .L3 
    .quad .L8
    .quad .L5
    .quad .L6
    .quad .L7
    .quad .L8
    .quad .L7
```

以及函数体

```x86asm
switch_eq:
    subq   $100, %rsi
    cmpl   $6, %rsi
    ja     .L8
    jmp    *.L4(, %rsi, 8)
.L3:
    leaq   (%rdi, %rdi, 2), %rax
    leaq   (%rdi, %rax, 4), %rdi
    jmp    .L2
.L5:
    addq	$10, %rdi
.L6:
    addq	$11, %rdi
    jmp	.L2
.L7:
    imulq 	%rdi, %rdi
    jmp	.L2
.L8:
    movl	$0, %edi
.L2
    movq	%rdi, (%rdx)
    ret
```

### Do-while

```C
do
    body;
while (test-expr);
```

可以转化为 

```C
loop:
    body;
    t = test-expr;
    if (t)
        goto loop;
```

例如  

```C
long fact_do(long n)
{
    long result = 1;
    do {
        result *= n;
        n = n - 1;
    } while (n > 1);
    return result;
}
```

可以写成

```C
long fact_do(long n)
{
    long result = 1;
loop:
    result *= n;
    n = n - 1;
    if (n > 1)
        goto loop;
    return result;
}
```

转为汇编

```x86asm
fact_do:
    movl   $1, %rax
.L2:
    imulq  %rdi, %rax
    subq   $1, %rdi
    cmpq   $1, %rdi
    jg     .L2
    ret
```

### While

```C
while (test-expr)
    body;
```

```C
    goto test;
loop:
    body;
test:
    t = test-expr;
    if (t)
        goto loop;
```

类似地，举例  

```C
long fact_while(long n)
{
    long result = 1;
    while (n > 1) {
        result *= n;
        n = n - 1;
    }
    return result;
}
```

```C
long fact_while(long n)
{
    long result = 1;
    goto test;
loop:
    result *= n;
    n = n - 1;
test:
    if (n > 1)
        goto loop;
    return result;
}
```

```x86asm
fact_while:
    movq   $1, %rax
    jmp    .L5
.L6:
    imulq  %rdi, %rax
    subq   $1, %rdi
.L5:
    cmpq   $1, %rdi
    jg     .L6
    ret
```

### For

```C
for (init-expr; test-expr; update-expr)
    body;
```

```C
init-expr
while(test-expr) {
    body;
    update-expr;
}
```