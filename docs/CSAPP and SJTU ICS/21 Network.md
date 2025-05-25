---
sidebar_position: 1
---

### 网络模型

地址分为Mac地址与IP地址。Mac地址可以标识机器，IP地址可以标识机器的地区。

下图是通过交换机、路由器进行数据传输的例子。路由器会相应地改变传输者、接收者的Mac地址，但不会改变IP地址。

![IP address and routing](./img/IP%20address%20and%20routing.png)  

获得IP后，机器通过ARP（address resolution control）获取Mac地址。  

### TCP/IP 协议

TCP/IP 协议分为四层，自下到上分别是：物理层（link layer），负责物理上的网络包传输；网络层（network layer），与IP相关；传输层（transport layer），包含TCP（负责数据的可靠性）、UDP（负责性能）等协议；应用层，包含HTTP等协议，是应用之间约定的协议。

用户通过socket封装相应的数据传输。  

![Internet organization](./img/Internet%20organization.png)

### DNS

将域名转换为IP地址的服务称为DNS。  

域名和IP可以是一对一/多对一/多对多的关系。  

每个主机都有一个本地域名，称为localhost。

### 端口

连接时除了IP地址还需要端口。端口是一个16位整数，标识一个进程。

### socket

![socket interface overview](./img/socket%20interface%20overview.png)  

客户端通过 ``socket`` 函数打开网络包， ``connect`` 连接（成功即可读写）；服务器通过 ``accept`` 等待连接； ``bind`` 进行socket间的连接； ``listen`` 用于真正的监听。  

```C
socket();
connect();
accept();
bind();
listen();
```

accept的具体过程为：

1. 服务器创建 ``listen_fd`` ，客户端创建 ``clien_fd``。
2. 客户发起请求，被服务器接收。
3. 服务器返回 ``connfd`` ，用于数据传输。原有的 ``listen_fd`` 继续监听其它客户。  