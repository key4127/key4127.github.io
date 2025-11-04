---
sidebar_position: 1
---

## 结构

文件系统由七层组成。  

- block  
- file
- inode number
- file name
- path name
- absolute path name
- symbolic link

### Block

- 每个id对应4k数据
- block是文件系统的最小单位，section是磁盘的最小单位
- 平衡利用率&效率
- 考虑内部碎片

第二个（编号为1）的block是super block，用于记录元数据（size、free block数量等）。在super block之后，还有一系列block记录了具体哪些block是空的。

### File

file信息由inode记录。

```C
struct inode {
    int block_nums[N]; // 记录文件中每一个block id
    int size; // 粒度到byte
};
```

为了给inode分配合适大小，产生了indirect block。

![indirect block](./img/indirect%20block.png)

### Inode Number

Inode table是一段连续的区域，记录了每个inode的内容。这个table放在free block记录之后。

### File Name

目录也是一个文件。这个文件的内容包含目录内的文件名以及inode地址。

```C
struct inode {
    int block_nums[N];
    int size;
    int type; // 表明文件是否是目录
};
```

### Path Name

如果某个目录指向的文件还是目录，就支持了层次的目录结构。

可能有多个链接指向同一个文件。这种情况下，只要文件名对应的inode序号相同，就实现了指向相同文件。  

需要在inode新增一个变量记录有多少个链接指向当前文件，以便回收。  

```C
struct inode {
    int block_nums[N];
    int size;
    int type;
    int refcnt;
};
```

由于循环问题，不允许链接（hard link，通过inode number链接）到目录。不同的hard link是等同的。

事实上，inode里还储存了大量文件元数据。

### Absolute Path Name

根目录的.和..都指向自己。

根目录默认为第一个inode。

### symbolic link

这一层允许建立soft link：link指向一个新文件，文件存储了指向真正文件的文件名（通过文件名链接）。找到文件名后，可以通过解析文件名找到对应文件。这种情况可以链接到不存在的文件。

## API

### cursor

cursor有share和not share两种策略：share时不同进程共用一个cursor，not share时相反。

### open

open()会返回一个fd。由于优化，open的速度小于fopen的速度。

- 检查权限
- 更新last update time
- 返回fd

### read write

write时，最安全的操作是

- 更新block bitmap
- 写入数据
- 更新inode

否则可能导致读到（无权限的）旧文件信息。  
（先写入会导致并发问题）

### delete

如果在文件打开时删除，inode会保留。实际上只删除了目录的内容。close时，就会真正被删除。

### rename

将from改为to

- 新增to文件
- LINK(to, from)（hard link）
- UNLINK(from)

这种情况保证重命名操作的原子性。

## 其它文件系统

### FAT

文件分布在各个block中。每个block指向下一个block。此外，目录包含了文件名、文件大小等内容；无法使用hard link。

FAT系统的容错性较差。此外，顺序读较快，随机读较慢。

## RPC

### stub

客户端：
- 将参数写入请求
- 将请求发送给服务器
- 等待回复

服务器：
- 等待消息
- 获取参数
- 调用
- 将结果封装到回复
- 发送回复

### message

request message：
- xid
- call/reply
- rpc version
- program（包含库）
- procedure
- argument
- auth stuff

reply message：
- xid
- call/reply
- accepted
- auth stuff
- success（yes/bad prog/bad proc ...）
- results

传递对象时，涉及序列化和反序列化。

### 二进制协议

比起json等文本格式，二进制可以更快、更精确，但可读性差。

每个字段包含：
- type
- type field（字段编号）
- 长度（可选，字符串、列表等需要）
- 数据（和json类似）

可以进一步压缩：在type field只存差值，将type field和type存在一起。

### 错误

RPC过程中，可能client发送的过程中信息丢失，也可能返回时信息丢失。

RPC semantic指，发生故障时应采用什么行为。

- at-least-once（客户端请求至少被执行一次）
- at-most-once
- exactly once

一般采用at-most-once，不会产生副作用。

幂等性用于保证at-most-once，retry用于保证at-least-once。

可以在server中添加重复检查，结合at-most-once和at-least-once，就得到了exactly once。