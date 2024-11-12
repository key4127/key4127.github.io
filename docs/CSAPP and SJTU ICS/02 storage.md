---
sidebar_position: 1
---

这篇笔记包含lecture3 information storage相关的内容。  

## 指针和字符大小

~~到底哪里提到了指针，address吗~~

### 读写操作

wirte操作类似 ``write(name, value)`` 。这说明使用write需要指定两个值：要写入的值（value）、可以追溯到这个值的名称（name）。类似地，read操作需要要读出的名称（name）和内存设备。  

### 内存

内存是存储设备之一。在内存中，数据的存储大小（size）是固定的，而名称（name）是从0开始的一系列整数，这些整数称作地址（address），整个集合称作地址空间（address space）。  

### 字符大小

虚拟地址通过固定大小（size）的字符编码。这里的字符大小代表相应种类的字符大小，决定了虚拟地址空间的最大值，也决定了最重要的系统参数。  

对于 $n$ 位机器，虚拟地址的取值可以从 $0$ 到 $2^n - 1$ 。目前的机器大多为64位（8字节），也支持32位（32位将地址限制到4GB）。  

下表列出了32位和64位机器中，不同类型所占的位数。  

![data size](./img/data%20size.png)  

除此之外，还有 ``intN_t`` 和 ``uintN_t`` 。这一类数据类型在 ``stdint.h`` 中，包含 ``int8_t`` 、 ``int16_t`` 、 ``int32_t`` 、 ``int64_t`` 和  ``uint8_t`` 、 ``uint16_t`` 、 ``uint32_t`` 、 ``uint64_t`` 。  

程序可能因为机器位数不同出现bug。C为不同数据类型的数据范围设置了下限，但没有上限。在32位机器上正常工作的程序可能会在64位机器上出问题。  

## 字节顺序

### 虚拟内存

前文提到的内存只是虚拟概念，实际并不存在，只是概念上的图像。事实上，虚拟内存是由软硬件的一系列配合搭建的。  

![virtual memory](./img/virtual%20memory.png)  

可以将虚拟内存划分为不同部分。  

![virtual memory units](./img/virtual%20memory%20units.png)  

### 字节顺序

在不同芯片中，LSB的位置不同。  

C语言中的对象被简单地视作字节块，而对象指针的值是字节块中第一个字节的虚拟地址。编译器会为不同类型的指针生成不同的机器码（事实上机器码中不含有数据类型的信息）。不同机器可能把LSB放在不同的位置，同一个数据存储会有不同顺序，可能导致错误。显示的显现出字节顺序~~不过这跟强制类型转换有什么关系~~，可以让不同机器之间通信。

对于字符串，由于每个字符只占一字节，字节顺序就不是问题。不过，不同机器的结束符可能不同（linux为00）。  

下面是一段打印byte representation的代码。  

```C
typedef unsigned char *byte_pointer;

void show_bytes(byte_pointer start, int len)
{
    int i;
    for (i = 0; i < len; i++) {
        printf("0x%p\t0x%.2x\n", start + i, start[i]);
    }
    printf("\n");
}
```

其中， ``%p`` 用于打印指针， ``%.2x`` 打印至少输出两位的16进制。