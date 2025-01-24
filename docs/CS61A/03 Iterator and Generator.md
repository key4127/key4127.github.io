---
sidebar_positon: 3
---

这篇笔记包括第六周Iterators、第七周Generators的内容。

### 迭代器

迭代对象是可以迭代的对象（顾名思义），可以调用相关函数（``iter()``）返回迭代器。迭代器可以使用内置的 ``next`` 函数。此外，还可以用for循环进行迭代。   

```python
>>> s = [1, 2, 3, 4]

>>> next(s)
TypeError: 'list' object is not an iterator

>>> t = iter(s)
>>> next(t)
1
>>> next(t)
2
>>> next(t)
3

>>> t1 = iter(s)
>>> next(t)
4
>>> next(t1)
1

>>> next(t)
StopIteration
```

```python
>>> t = iter([4, 3, 2, 1])

>>> for e in t:
...     print(e)
4
3
2
1
```

### map函数

``map`` 接受一个可迭代对象和一个函数作为参数，并返回一个迭代器。  

```python
>>> numbers = [1, 2, 3, 4]
>>> squared = map(lambda x: x ** 2, numbers)

>>> next(squared)
1
>>> next(squared)
4

>>> list(squared)
[9, 16]
```

### 生成器

生成器函数不会 ``return`` ，而是可以 ``yield`` 多次。当调用生成器函数时，就会产生一个生成器，生成器可以被迭代，迭代结果是 ``yield``的值。每次迭代后，程序会停在 ``yield`` 的位置而不是继续运行。  

```python
>>> def plus_minus(x):
...     yield x
...     yield -x

>>> t = plus_minus(3)
>>> next(t)
3
>>> next(t)
-3
>>> t
<generator object ...>
```

生成器函数允许无限 ``yield`` 下去。  

```python
def fib_generator():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b
```