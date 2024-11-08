---
sidebar_position: 1
---

这篇笔记包含Lecture14的内容。    

## Disjoint Sets（并查集）

并查集支持两种功能：

* 连接两个元素
* 判断两个元素是否属于同一集合

```java
public interface DisjointSets {

    void connect(int p, int q);

    boolean isConnected(int p, int q);

}
```

### 方案

在每个集合中选出一个元素作为队长，在判断时只需要判断两个队长是否相同。  

除此之外，还有一个问题是如何找到需要连接或查找的元素。

对于链表，认为连接和查找的（至少最坏）复杂度均为 $O(N)$ ，因为需要将链表扫一遍才能找到需要操作的元素。另一种更好的方案是在存储时采用类似OI的方案（Lecture里称为 ``QuickFindDS`` ，类似桶排序的机制），用数组下标记录元素值，数组内存储队长的值，这种方式下查找的复杂度是 $O(1)$ 但连接复杂度仍为 $O(N)$ ，因为需要扫一遍数组，找到每个连接集合的元素。  

```java
public boolean isConnected(int p, int q) {
    return id[p] == id[q];
} 

public void connect(int p, int q) {
    int pid = id[p];
    int qid = id[q];
    for (int i = 0; i < id.length; i++) {
        if (id[i] == pid) {
            id[i] = qid;
        }
    }
}
```

另一种更好的方式是将队长改为亲节点，这种情况下每次连接只需要改变一个值，查找时一步步向上，直至找到“根节点”。  

```java
private int find(int p) {
    int r = p;
    while (parent[r] >= 0) { // parent[root] = -1
        r = parent[r];
    }
    return r;
}

public boolean isConnected(int p, int q) {
    return parent[p] == parent[q];
}

public void connect(int p, int q) {
    int i = find(p); // change the root
    int j = find(q);
    print[i] = j;
}
```

这种情况出现的问题是这种操作会导致“链表”，在OI中解决的方式是路径压缩（Lecture未提及，但是lab5中提到了）。在每次查找时，将路上所有节点的亲节点改为根节点，由于没有整个扫描数据结构不会影响复杂度，避免了退化为链表的问题。这种写法需要递归。  

```java
private int find(int p) {
    if (parent[p] < 0) {
        return p;
    }
    parent[p] = find(parent[p]);
    return parent[p];
}
```

CS61B提供的解决方案是另一种，按秩合并（WeightedQuickUnionDS，也称作启发式合并），在连接时将长度低的集合连接到高的集合上（就是矮的树连到高的树上）。  

```java
private void connect(int p, int q) {
    int i = find(p);
    int j = find(q);
    if (parent[i] <= parent[j]) {
        //parent[i] = Math.max(1 + parent[j], parent[i]);
    }
}
```

查了一下发现两种都是并查集优化方案，并且可以同时使用（没有查到路径压缩单独的复杂度）。另外，路径压缩可能导致大量节点的改动，理论上查找多的情况下路径压缩更优，合并操作多的情况下按秩合并更优。单独使用按秩合并的复杂度为 $O(logN)$ ，同时使用的复杂度为 $O(\alpha(N))$ ， $\alpha$ 为阿克曼函数的反函数，可以认为是小常数。