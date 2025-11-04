---
sidebar_position: 1
---

## NFS

NFS，即network file system。这个系统内包含NFS server和NFS client，server和client之间没有open/close命令；用offset取代seek；用fh取代fd。

### Mount

mount，即挂载，将远程文件连接到本地客户端。如果权限允许，客户端获得一个fh，对fd的所有操作通过NFS处理。

fh用于记录哪个文件被打开。如果用路径代表fh，重命名就可能导向不同文件，需要记录；如果采用inode number，就会导致delete after open问题。解决方案是同时用inode number和generation number（版本号）记录。

### Read

![NFS Read](./img/NFS%20Read.png)

图中，第一次到达NFS server的时候，文件实际并未打开，只是找到了对应的inode。应用真正开始read时，客户端才会请求进行read操作。

server无状态，client有状态。

### 性能

对读操作（read、getattr、lookup）等做缓存，减少远程操作数。数据被缓存在client端。但缓存可能带来一致性问题。

第一种策略是close-to-open。打开时，检查远程的attr是否与缓存一致，如果一致则在client读，否则更新缓存。close时，将写的内容发送给服务器。

第二种策略是read/write coherence。这种要求每个操作都保证一致性。这种方案会在client和server存储时间戳，在操作时比较时间戳，如果远端最新，则将本地缓存无效化。此外，每隔一段时长，所有缓存也变为无效。

除缓存外，还有增大chunk、read-ahead（顺序）等优化。

## GFS

### 结构

一个GFS集群包含一个master和数个chunk server。其中，master包含元数据（包含每个chunk位置），chunk server包含具体的信息。  

每个文件由64MB chunk组成，可能分布在多台机器上。chunk一般为64MB，有一个32-bit校验值；chunk handle通常为一个64-bit数。每个chunk默认有三份（避免错误，带来高性能）。

chunk的名字（name to chunk）储存在内存中，同时也储存在磁盘上的operation log。ID to chunk也储存在内存，没有日志，始终保持最新。

### 读写

读：
- 连接到master
- 获取元数据
- 获取chunk位置
- 连接chunk server

写：
- 发送数据
    - 在三个相同chunk中，识别primary和secondaries
    - 通过流水线，从最近chunk开始依次写入；每一块连接下一块
    - chunk server将新数据存在缓存（内存）
- 写入数据
    - 发送请求，primary（负责序列化）写入
    - primary发送请求，写入另外的secondaries

### 命名

GFS中没有一般文件系统的目录结构，只有一个look-up table。