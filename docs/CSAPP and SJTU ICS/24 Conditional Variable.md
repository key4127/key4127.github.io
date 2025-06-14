---
sidebar_position: 1
---

## 条件变量

### 定义

每个条件变量和一个队列关联。这个队列中包含所有在等待这个条件变量的线程。如果条件未被满足，则这些所有线程睡眠；否则，改变条件的线程会唤醒一个（或某些）线程。  

```C
pthread_cond_t c;
pthread_cond_wait(pthread_cond_t *c, pthread_mutex_t *m);
pthread_cond_signal(pthread_cond_t *c);
```

线程在持有锁时调用wait。如果条件不满足，线程会释放锁，然后进入睡眠；条件满足时，线程会被唤醒，并尝试重新获取锁再返回。  

注意必须上锁/先使用wait函数再使用signal函数。  

此外，也可以唤醒全部等待的线程。  

```C
pthread_cond_broadcast();
```

## 信号量

### 实现

```C
void init(sem_t *s, int value) {
    s->value = value;
    cond_init(&s->cond);
    mutex_init(&s->mutex);
}

void wait(sem_t *s) {
    mutex_lock(lock);
    while (value <= 0) {
        cond_wait(cond, lock);
    }
    value--;
    mutex_unlock(lock);
}

void post(sem_t *s) {
    mutex_lock(lock);
    value++;
    cond_signal(cond);
    mutex_unlock(lock);
}
```