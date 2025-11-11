---
sidebar_position: 1
---

## 事务

### MVCC

需要维护两个时间戳：开始时间戳（sts）和提交时间戳（cts）。

- 开始
    - 分配新sts
- 读
    - read属于离开始时间最近的版本（read.cts < t.sts）
- 写
    - 写到buffer
- 提交
    - 分配cts
    - 检查write buffer中的所有数据，如果t.sts < write.cts，则abort
    - 否则用cts更新write buffer

这种方式不需要验证。

MVCC不保证before-or-after。如果做读验证，MVCC实际回退到了OCC；否则不保证可串行化，但性能更高，这种隔离级别被称为SI（快照隔离）。

## multi-site 原子性

### two-phase commit

transaction分为两种：high-level和low-level。总事务由high发起，low在事务结束后不能commit，只能通报给high-level，由high-level来做最终决定。

### Primary-backup

只有一个server决定客户端收到所有指令的顺序。

- primary决定顺序
- 发送到backup
- backup按照顺序操作

这种情况下如果primary崩溃，就会出现问题。

解决方案：
1. 人类决定，选择一个新backup
2. agent选择新backup
3. 协议

primary-backup需要一个view server，来判断主节点是否崩溃，并改变primary server、记录相关切换信息等。

实际操作时，不一定每次都要完整写回所有backup。假设共有N台机器，每次写回W台，如果primary崩溃，则选取R（R + W > N）台机器，选取有最新log的backup作为primary。新的primary生成完整log，再给其它的backup复制。