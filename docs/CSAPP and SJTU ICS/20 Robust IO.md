---
sidebar_position: 1
---

本章和IO是一章内容，授课顺序放在network之前。

## RIO

RIO指robust IO。在网络读写中，普通IO可能出现short count问题：读/写到的内容比预期少。RIO用于解决这一问题。此外，RIO还有高效的特点。  

RIO提供两种函数：unbuffered（读取二进制数据）和buffered。

```C
// return number of bytes read (0 if EOF) or written, -1 on error
ssize_t rio_readn(int fd, void *usrbuf, size_t count);
ssize_t rio_writen(int fd, void *usrbuf, size_t count);
```

buffered I/O的实际逻辑大致为重复地执行 ``read`` / ``write`` 函数。  

buffered I/O提供更高效的操作。在读写时，RIO会一次性读写大量数据，维护在某个buffer中，记录用户读写到的位置，下次从这个位置开始，已经读到的数据可以直接返回，不需要再次系统调用。  

```C
// returns number of bytes read (0 if EOF), -1 on error
void rio_readinitb(rio_t *rp, int fd) ;
ssize_t rio_readlineb(rio_t *rp, void *usrbuf, size t maxlen);
ssize_t rio_readnb(rio_t *rp, void *usrbuf, size t maxlen);
```

利用这种机制，读取一行时，RIO可以一次性读取很多数据，然后检查每个字符是否为换行，而不是进行大量的系统调用。

## Standard IO

Standard I/O是C提供的一系列库函数，将文件作为流处理，与buffered RIO相似。

以 ``printf`` 为例；输出某一行时，如果不包含换行符，终端不会产生输出。此时， ``printf`` 只将字符输出到了内部缓冲区，没有真正调用 ``write`` ；检测到换行符时，才会进行系统调用。