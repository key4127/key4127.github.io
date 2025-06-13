---
sidebar_position: 1
---

## 锁

### 基本概念与函数

锁可以认为是只有两个状态的变量。未上锁时，没有线程持有锁；上锁时，只有一个进程持有锁。  

```C
pthread_mutex_t lock = PTHREAD_MUTEXT_INITIALIZER;
int rc = pthread_mutex_init(&lock, NULL);
pthread_mutex_lock(&lock);
pthread_mutex_unlock(&lock);
```

```C
// return failure rather than block
int pthread_mutex_trylock(pthread_mutex_t *mutex);
// return after acquiring the lock or timeout
int pthread_mutex_timelock(pthread_mutex_t *mutex, 
                           struct timespec *abs_timeout);
```

实现锁需要考虑三个问题：正确性、饥饿（公平性）和性能。

### 不同实现方式

**控制中断**  

```C
void lock() {
    disableInterrupts();
}

void unlock() {
    enableInterrupts();
}
```

这种实现方式允许应用程序关闭中断，非常危险（操作系统无法抢回控制权）。此外，这种写法在多核上是错的，控制中断只能调整单核。如果关闭中断事件较长，可能导致某些事件丢失。最后，这中方式开销很大。  

目前，这种方式主要用在内核中。  

### 自旋锁

```C
void init() {
    flag = 0;
}

void lock() {
    while (flag) ;
    flag = 1;
}

void unlock() {
    flag = 0;
}
```

如果两个线程同时尝试上锁，可能都会成功，这种方式有并发问题。此外，忙等待方式有很大开销。  

为解决正确性的问题，CPU提供了一个名为TestAndSet的指令。  

```C
int TestAndSet(int *old_ptr, int new) {
    int old = *old_ptr;
    *old_ptr = new;
    return old;
}
```

这个操作保证原子性，有严格的先后顺序。 

```C
void lock() {
    while (TestAndSet(flag, 1)) ;
}
```

这种方式称为自旋锁。  

也可以使用CompareAndSwap指令/Load-Linked and Store-Conditional指令。  

```C
int CompareAndSwap(int *ptr, int expected, int new) {
    int actual = *ptr;
    if (actual == expected) {
        *ptr = new;
    }
    return actual;
}

void lock() {
    while (CompareAndSwap(flag, 0, 1)) ;
}
```

```C
int LoadLinked(int *ptr) {
    return *ptr;
}

int StoreConditional(int *ptr, int value) {
    if (noone has updated *ptr since the LoadLinked) {
        *ptr = value;
        return 1;
    } else {
        return 0;
    }
}

void lock() {
    while (1) {
        while(LoadLinked(flag) == 1) ;
        if (StoreConditional(flag, 1) == 1) {
            return;
        }
    }
}
```

### 排号锁

排号锁需要依靠FetchAndAdd指令实现。  

```C
int FetchAndAdd(int *ptr) {
    int old = *ptr;
    *ptr = old + 1;
    return old;
}
```

```C
void init() {
    ticket = 0;
    turn = 0;
}

void lock() {
    int myTurn = FetchAndAdd(ticket);
    while (turn != myTurn) ;
}

void unlock() {
    turn = turn + 1;
}
```

排号锁也可以视作一种自旋锁，但是它避免了饥饿问题。  

### yield

yield的思想是，如果要发生自旋，就将控制权还给CPU分配给另一个线程，自己睡眠一段时间。这种策略会增加上下文切换，并可能引发饥饿。

在同一个CPU下只有几个线程时，这种策略表现较好；随着线程数增加，性能会逐渐变差。  

### 队列实现锁

这种方式不再轮流检查线程，而是直接选择下一个获取锁的线程。操作系统提供Park和Unpark两个接口，分别用来让线程睡眠、让一个线程唤醒另一个线程。  

```C
void init() {
    flag = 0;
    guard = 0;
    queue_init(q);
}

void lock() {
    while (TestAndSet(guard)) ;
    if (flag == 0) {
        flag = 1;
        guard = 0;
    } else {
        queue_add(q, gettid());
        guard = 0;
        park();
    }
}

void unlock() {
    while (TestAndSet(guard)) ;
    if (queue.empty()) {
        flag = 0;
    } else {
        unpark(queue_remove(q));
    }
    guard = 0;
}
```

注意，lock中的park要放在guard之后，否则会导致死锁。注意，线程在睡眠时不能持有自旋锁。  

这种写法仍然存在数据竞争。如果线程1在上锁，线程2在解锁，线程1在park之前切换到线程2，此时线程2不会把线程1从队列中取出来，线程1就会丢失。为解决这个问题，操作系统提供了一个setpark接口。  

在调用setpark之后，park时如果发现线程已经unpark过，就会立刻返回。  

```C
void lock() {
    else {
        queue_add(q, gettid());
        setpark();
        guard = 0;
        park();
    }
}
```

### Linux futex

```C
futex_wait(address, expected);
futex_wake(address);
```

Linux中的锁由1位的lock和31位的计数器组成。


```C
void mutex_lock(int *mutex) {
    int v;
    if (atomic_bit_test_set(mutex, 31) == 0) {
        return;
    }
    atomic_increment(mutex); // add counter
    while (1) {
        if (atomic_bit_test_set(mutex, 31) == 0) {
            atomic_decrement(mutex);
            return;
        }
        v = *mutex;
        if (v >= 0) {
            continue;
        }
        futex_wait(mutex, v); // immediately return if mutex != v
    }
}

void mutex_unlock(int *mutex) {
    if (mutex_add_zero(mutex, 0x8000000)) {
        return;
    }
    futex_wake(mutex);
}
```

这种锁分为两个阶段。第一个阶段是快速的TestAndSet，包含一个可能的自旋锁。第二阶段，调用者可能进入睡眠。这种设计在低竞争和高竞争下都能保持良好的性能。  

## 并行数据结构

注意在出现错误的控制流中要释放锁。在锁的控制区域让代码尽量少。

### 链表

```C
void insert(int key) {
    node *new = malloc(sizeof(node));
    if (new == NULL) {
        perror("malloc");
        return;
    }
    new->key = key;

    pthread_mutex_lock(lock);
    new->next = head;
    head = new;
    pthread_mutex_unlock(lock);
}

void find(int key) {
    int rv = -1;
    pthread_mutex_lock(lock);
    node *curr = head;
    while (curr) {
        if (curr->key == key) {
            rv = 0;
            break;
        }
        curr = curr->next;
    }
    pthread_mutex_unlock(lock);
    return rv;
}
```

如果为每个节点分配一个锁，可以提高并发性，但是会带来大量开销，反而会降低性能。

### 队列

```C
void init() {
    node *tmp = malloc(sizeof(node));
    tmp->next = NULL;
    head = tail = tmp;
    pthread_mutex_init(head_lock, NULL);
    pthread_mutex_init(tail_lock, NULL);
}

void enqueue(int value) {
    node *tmp = malloc(sizeof(node));
    assert(tmp != NULL);
    tmp->val = value;
    tmp->next = NULL;

    pthread_mutex_lock(tail_lock);
    tail->next = tmp;
    tail = tmp;
    pthread_mutex_unlock(tail_lock);
}

void dequeue() {
    pthread_mutex_lock(head_lock);
    node *tmp = head;
    head = tmp->next;
    // not consider dequeue when queue is empty
    pthread_mutex_unlock(head_lock);
    free(tmp);
}
```

### 哈希表

并行哈希表基于并行链表实现。

```C
void init() {
    for (int i = 0; i < BUCKETS; i++) {
        list_init(lists[i]);
    }
}

void insert(int key) {
    int bucket = key % BUKECTS;
    return list_insert(lists[bucket], key);
}

void find(int key) {
    int bucket = key % BUCKETS;
    return list_find(lists[bucket], key);
}
```