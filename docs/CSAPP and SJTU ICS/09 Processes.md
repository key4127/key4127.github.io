---
sidebar_position: 1
---

这篇笔记介绍lecture14、15中的内容。

## 进程

每个程序运行时都会创建一个进程。此外，程序也可以在自己的进程中创建新的进程，并在新的进程中运行。  

CPU只能按照一定顺序（控制流）一条一条地执行指令。通过交织，各个进程的指令顺序相互交叉，使得多个进程可以同时运行。  

### 上下文切换

上下文指“内核需要重启某个被打断的进程的状态”。内核为每个进程维护一个上下文，存储了内存中的数据与代码、PC、寄存器文件、状态寄存器、用户态和内核态的栈、环境变量、内核的数据结构（process table、page table、file table）等。  

在中断或者内核代表用户进行系统调用时，上下文切换发生。上下文切换使得用户态进入内核态、继而进入另一个进程的用户态，实现进程切换。  

![context switching](./img/context%20switching.png)  

具体来说，调度器（内核代码）会执行以下操作：  

- 决定是否在某个进程执行期间抢占当前进程
- 选择一个已被抢占的进程（调度进程）重启
- 抢占当前进程，保存当前进程的上下文
- 重启先前被抢占的进程（调度进程），恢复它的上下文并将控制权移交给调度进程

### 并行

每个进程都有自己的控制流。通过时间切片和抢占可以实现并行。  

如果两个进程的运行时间有重叠，则它们是并行的；否则是顺序执行的。在下图中，A与B、A与C是并行的，而B与C是顺序执行的。  

![concurrent processes](./img/concurrent%20processes.png)  

在用户看来，这些进程是连续的，可以认为这些进程在同时运行。  

![user view of concurrent processes](./img/user%20view%20of%20concurrent%20processes.png)  

### 进程状态

进程一共有三种状态：运行、停止（被阻塞）、终止。运行指进程正在执行或等待被执行；阻塞指当前进程被暂停了，并且不会被调度；终止指进程永久结束。  

在收到信号时（例如SIGSTOP），运行的进程会被阻塞；收到SIGCONT等信号时，阻塞的进程可以开始运行。接受到默认为终止进程的信号，或从主程序退出（例如调用 ``exit`` ）时，进程被终止。  

### 僵尸进程

内核不会立刻把终止的进程移出系统，而是等待终止进程的父进程收获遗言。父进程收获已终止的子进程时，内核将子进程的退出状态传给父进程，然后丢弃已终止的进程。尚未被收获的已终止进程称为僵尸进程。  

如果父进程在没有收获僵尸进程的情况下终止，系统会用 ``init`` 进程来收获它们。 ``init`` 进程的PID为1，在系统初始化期间由内核创建。  

即使僵尸进程没有运行，它们仍然会占用资源。长期运行的程序（如shell）应该总是回收它们的僵尸子进程。

## 系统调用错误处理

Unix系统在遇到错误时通常返回-1，并设置全局变量 ``errno`` 。  

```C
void unix_error(char *msg) /* unix-style error */
{
    fprintf(stderr, "%s: %s\n", msg, strerror(errno));
    exit(0);
}

pid_t Fork(void)
{
    pid_t pid;

    if ((pid = fork()) < 0)
        unix_error("Fork error");
    return pid;
}
```

## 进程的创建与终止

### 获取进程ID

进程ID称为PID，每个进程都有一个独立的正PID。 ``Getpid()`` 函数返回进程的PID， ``Getppid()`` 函数返回parent进程（创建这个进程）的PID。这两个函数的返回值为 ``pid_t`` ，在Linux中为整型。  

### 退出

``exit()`` 函数没有返回值，有一个 ``int`` 类型参数。通过参数exit status，函数会终止当前进程。  

### 创建

``Fork()`` 函数会创建一个几乎与parent进程相同的子进程。它们有不同的PID。  

子进程会得到一个相同的亲进程用户态的虚拟地址空间拷贝，包含相同的文本、数据、堆、bss段和用户栈。子进程还会获得亲进程打开文件描述符的相同副本，意味着它可以读写亲进程调用 ``Fork()`` 时打开的任何文件。  

``Fork()`` 函数每调用一次会返回两次。在亲进程中返回子进程的PID，在子进程中返回0，通过返回值可以判断在哪个进程中运行。  

```C
int main()
{
    pid_t pid;
    int x = 1;

	pid = Fork();
	if (pid == 0) { /* child */
        printf("child : x=%d\n", ++x);
        exit(0);
    }

    /* parent */
    printf("parent: x=%d\n", --x);
    exit(0);
}
```

两个进程是不同的，它们并行，指令通过内核随机交织，无法预测。虽然子进程的地址空间由亲进程复制而来，但它们的地址空间是相互独立的。也就是说，在上面那段代码中，它们获得 ``x`` 同样的初始值1，但是后续对 ``x`` 的修改是私有的，不会反映在另一个进程中。  

通过共享文件（如 ``stdout`` ），两个进程间可以实现通信。  

在 ``Fork()`` 创建了新进程后，两个进程都会继续顺序执行。  

```C
int main()
{
    Fork();
    Fork();
    Fork();
    printf("hello!\n");
    exit(0);
}
```

这段函数会打印八行输出。  

![fork example](./img/fork%20example.png)  

### 等待

``waitpid`` 是父进程等待子进程结束的函数，有三个参数 ``pid`` 、整型指针 ``status`` 、以及整型 ``options`` 。 ``waitpid`` 函数有简化版 ``wait`` ，只有 ``*status`` 参数。如果函数运行正常，它会返回子进程的PID，否则返回0或-1。  

如果没有子进程或者被中断，函数都会返回-1。但前者会将 ``errno`` 设为ECHILD，后者设为EINTR。

对于 ``pid`` 参数，在它大于0时，等待集合是单一的子进程；当它等于1时，等待集合是所有子进程。  

对于 ``option`` 参数，当它等于0时，函数挂起调用进程的执行，直到某个子进程终止；如果调用时已有子进程终止，则立刻返回。返回值是终止子进程的PID。然后子进程被从系统中移除。当参数为WUNTRACED | WNOHANG时，如果等待集中的子进程尚未停止或终止，立刻返回0，否则返回已停止或终止的子进程之一的PID。其中WUNTRACED指挂起调用进程的执行，直到子进程停止或终止；WNOHANG指如果等待集中的子进程尚未终止，则立刻返回0。  

函数会检查已收获子进程的退出状态。 ``status`` 为一个非 ``NULL`` 值，它编码了返回子进程的状态信息。以下的函数可以检查这些状态信息。  

- WIFEXITED(status)：如果子进程正常终止，返回 ``true``  
- WEXITSTATUS(status)：返回正常终止子进程的退出状态  
- WIFSIGNALED(status)：如果子进程因未捕获的信号而终止，返回 ``true``  
- WTERMSIG(status)：返回导致子进程终止的信号
- WIFSTOPPED(status)：如果导致返回的子进程已停止，返回 ``true`` 
- WIFSTOPPED(status)：返回导致子进程停止的信号   

注意，对于WEXITSTATUS、WTERMSIG和WIFSTOPPED，只有上一个值为 ``true`` 时，它们才被设置。  

以下是一个 ``waitpid()`` 的例子。  

```C
#include "csapp.h"
#define N 2

int main()
{
    int status, i;
    pid_t pid;

    /* Parent creates N children */
    for (i = 0; i < N; i++)
        if ((pid = Fork()) == 0) /* child */
	        exit(100+i);

    /* Parent reaps N chds. in no particular order */
    while ((pid = waitpid(-1, &status, 0)) > 0) {
        if (WIFEXITED(status))
            printf("child %d terminated normally with exitstatus=%d\n", pid, WEXITSTATUS(status));
        else
            printf("child %d terminated abnormally\n", pid);
    }

    /* The only normal term. is if there no more chds. */
    if (errno != ECHILD)
        unix_error("waitpid error");

    exit(0);
}
```

在访问这些子进程的时候，顺序是不确定的。下面的代码可以将子进程的PID按顺序打印。  

```C
#include "csapp.h"
#define N 2

int main()
{
    int status, i;
    pid_t pid[N+1], retpid;

    /* Parent creates N children */
    for (i = 0; i < N; i++)
        if ((pid[i] = Fork()) == 0) /* Child */
            exit(100+i);

    /* Parent reaps N children in order */
    i = 0;
    while ((retpid = waitpid(pid[i++], &status, 0)) > 0) {
        if (WIFEXITED(status))
            printf("child %d terminated normally with exit status=%d\n", retpid, WEXITSTATUS(status));
        else
            printf("child %d terminated abnormally\n", retpid);
    }

    /* The only normal term. is if there are no more chds. */
    if (errno != ECHILD)
        unix_error("waitpid error");

    exit(0);
}
```

### 睡眠

``sleep()`` 接口接受一个参数（单位为秒），让进程暂停相应时间。如果未被打断，返回0；否则返回剩余的睡眠时间。

### 暂停

``pause()`` 接口将进程置于暂停状态。被打断后，返回-1。  

## 程序的加载与运行

### 运行

``execve()`` 函数有 ``const char *filename`` 、 ``const char *argv[]`` 、 ``const char *envp[]`` 三个参数，存储了可执行目标文件名、参数列表、环境变量列表。这个函数只在出错时会返回到调用程序，正常情况下永不返回。  

其中， ``argv`` 和 ``envp`` 是字符指针数组。它们存储在栈中。  

![stack before run](./img/stack%20before%20run.png)  

### 环境变量

有三个环境变量相关函数。  

- ``char *getenv(const char *name)`` ：如果这个名字的环境变量存在，返回指向环境变量名字的指针，否则返回 ``NULL`` 。

- ``int setenv(const char *name, const char *newvalue, int overwrite)`` ：设置环境变量，成功返回0，失败返回1。如果 ``overwrite`` 为1，会覆盖同名变量；如果为0且同名变量存在，不进行任何操作。  

- ``void unsetenv(const char* name)`` ：用于移除环境变量，无返回值。  