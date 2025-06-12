---
sidebar_position: 1
---

## 并发

以client-server模型为例。

### 多进程

在每次server收到信息时，创建一个子进程，分配给客户。主进程始终只用于接受信息。可以通过文件、socket、信号等方式进行父子进程的通信。  

父进程需要显示地回收子进程（由于父进程存在，系统不会主动回收），否则可能引起内存泄漏，进一步导致资源耗尽。  

多进程的优点为实现简单。父子之间只有系统规定的东西是共享的，不存在全局变量的问题。缺点为需要手动地进行控制（创建、回收、等待等），会增加开销。此外，内存不会共享，进程间通信比较麻烦，需要额外机制。

### 多线程

进程的上下文分为program context和kernel context。program context包括寄存器、状态码、栈指针、PC等；kernel context包括描述符表、brk指针、VM structures等。

多线程会复制program context，但不复制kernel context。线程间共享同一个进程的地址空间，有共同的共享库、堆、数据和代码段。每个进程有自己的控制流和进程id。  

多线程中，各种线程之间的关系是平行的，不存在树状结构。  

```C
// tid, thread attributes(NULL), function, thread arguments
pthread_create(&tid, NULL, thread, NULL);
// tid, whether to get return information
// wait the thread to exit
pthread_join(tid, NULL);
// implicit
pthread_exit();
```

线程会处于joinable或detached。joinable的线程可以被其它线程回收并停止，detached时则不能，会被系统自动回收。线程默认为joinable，通过下列函数可以将线程设为detached。  

```C
pthread_detach(pthread_self());
```

如果需要初始化，下面这个函数可以保证某个函数只调用一次。  

```C
// the first parameter is of type pthread_once_t
pthread_once(&once, function);
```

实现例子的方法与多进程类似；主线程接受到客户信息时，创建新的线程，使用新线程与客户端连接。  

多线程共享一个地址空间，多进程有不同的地址空间。多线程的性能比多进程更好。  

多线程的优势为更容易共享信息（进行流量统计等）。劣势是可能带来以外的共享，出现并行错误，而且基本不可能用GDB调试。

### IO多路复用 select

```C
// return when some fds are ready
int select(int maxfd, fd_set *readset, NULL, NULL, NULL);
```

select函数的作用是睡眠，直到readset中的一个或几个fd就绪，返回值是就绪fd的数量。select会更新readyset，可以查到具体就绪的fd。  

```C
void FD_ZERO(fd_set *fdset);
void FD_CLR(int fd, fd_set *fdset);
void FD_SET(int fd, fd_set *fdset);
// check if the fd was in the set
int FD_ISSET(int fd, *fdset);
```

select可以让例子以单线程的方式执行。注意所有新建客户端的请求都会发送给listenfd。将listenfd和客户端fd加入readyset并等待，进行相应处理。每次等待之后，检查所有fd，进行相应处理并关闭已经停止的fd。  

select的优势的可以调试，不需要创建进程/线程，没有管理的开销。劣势是程序更复杂，不能利用多核，一个client的问题可能影响所有client。  

## 多线程同步

### 共享变量

理论认为每个线程运行在进程的上下文中，但也有自己的线程上下文。实际中，线程可以读写其它线程的栈。  

变量分为全局变量、局部变量和局部静态变量三种。局部变量存在各自的线程栈中，每个线程都有一个实例。另外两种变量在栈中只有一份，各个线程都可以访问这一块空间。会被多线程访问的实例称为共享变量。  

下面这段代码可能产生并行错误，输出的cnt可能相反也可能相同。  

```C
for (i = 0; i < N; i++) {
    Pthread_create(&tid, NULL, thread, (void *)i);
    Pthread_exit(NULL);
}

void *thread(void *vargp) {
    int myid = (int)vargp;
    static int cnt = 0;
    printf("[%d]:%s(cnt=%d)\n", myid, ptr[myid], ++cnt);
}
```

一次++操作可以分成load、update、和store，在线程中会顺序执行，但两个线程之间会交错执行。两次执行可以画为两个坐标轴，其中共享变量的访问区域为unsafe region。如果某条执行时的顺序穿过了unsafe region，就会导致问题。  

![unsafe region](./img/unsafe%20region.png)

### 信号量

信号量是一个非零量。信号量保证操作是的原子的。  

```C
int sem_init(sem_t *sem, 0, unsigned int value); 
int sem_wait(sem_t *s); /* P(s) */
int sem_post(sem_t *s); /* V(s) */
```

信号量分为P操作和S操作，分别代表等待和自增。进行P操作时，会一直等待到信号量不为0，然后将信号量减一；进行V操作时，会将信号量自增。  

信号量要求必须不为零时才能减一。如果执行流穿过unsafe region，就要求信号量为-1，不可能出现。信号量保证了程序的正确。  

信号量可以视为允许共享某个资源的线程数。此外，它还有通知的功能。

## 多线程问题

### 读写问题

在这种模型下，分为读者和写者，分别只会做读操作和写操作。写操作/写操作和读操作之间不允许并行，但读操作之间允许并行。有优先读者和优先写者两种策略。  

优先读者策略指读者不会被block，除非现在有写操作正在进行。在多个读者和写者排队时，优先选择读者。优先写者策略指排队时优先选择写者。

这两种策略都可能导致饥饿。  

### 性能

这段代码运行在一个4核机器上。线程数增加时，性能先明显下降再上升，在线程数为4时最差。  

```C
void *sum_mutex(void *vargp) {
    int myid = *((int *)vargp);
    long start = myid * nelems_per_thread;
    long end = start + nelems_per_thread;
    long i;
    
    for (i = start; i < end; i++) {
        p(&mutex) ;
        gsum += i;
        V(&mutex);
    }
    return NULL;
}
```

在线程数为1时，不涉及到block，pv操作只需要简单地自增自减，而大于1时涉及到系统调用，会增加开销。线程数为4时开销最严重。线程数增加时，同一个核心上可以运行多个线程，之间会有调度策略，优化性能。  

可以改为不是累加全局变量，而是累加局部变量，将局部变量的结果放在一个全局数组中，在主线程累加。如果直接累加到各自的数组，会涉及到内存增加开销。  

加速比指T1/Tp（一个线程用时除以多线程用时），可以衡量并行带来的加速。  

### 线程安全

书中给出了四种unsafe的例子。  

1. 没有保护共享变量。添加保护即可，会带来性能下降。
2. 两线程依赖于某个共同的状态。  
3. 返回某个静态变量的指针。改进方法为加锁并返回指针副本。
4. 调用了线程不安全的函数。

如果某个函数没有共享变量的访问，则它的reentrant的。reentrant的函数是线程安全函数的子集。  

### 线程局部变量

线程局部变量在每个线程中都有一个副本，各个线程会去访问它独立的版本。  

```C
thread_local int i = 0;
```

对于随机数生成、存储errno等，线程局部变量（TLS）都能发挥作用。  

### 其它问题

如果程序的正确性依赖于线程函数的调用顺序，就可能发生竞争。  

类似竞争，可以将指令顺序作为坐标轴，如果执行路径进入了某些区域，就会发生死锁。