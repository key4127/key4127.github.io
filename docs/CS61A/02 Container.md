---
sidebar_position: 1
---

这篇笔记包含第五周、第六周Mutability的内容。第六周Trees的内容被我视作对列表和递归的练习，略过。

## 列表

python中的列表允许以下操作等

```python
>>> l = list(range(3))
>>> l
[0, 1, 2]

>>> l.append(3)
>>> l
[0, 1, 2, 3]

>>> l = l + [4]
>>> l
[0, 1, 2, 3, 4]

>>> 1 in l
True
>>> 5 in l
>>> False
```

另外，与其它对象相同， ``A is B`` 代表A、B为相同对象， ``A == B`` 代表 A、B的值相同。 

### range

```python
>>> list(range(-2, 2))
>>> [-2, -1, 0, 1]
```

```python
>>> list(range(4))
>>> [0, 1, 2, 3]
```

### 列表推导式

```python
>>> xs = range(5)
>>> ys = [x * x - 2 * x + 1 for x in xs]
>>> list(xs)
[0, 1, 2, 3, 4]
>>> ys
[1, 0, 1, 4, 9]
```

### 切片

```python
def double_eights(s):
    """
    Return whether two consecutive items of list s are 8.
    """
    for i in range(len(s) - 1):
        if s[i] == 8 and s[i + 1] == 8:
            return True
    return False
```

```python
def double_eights(s):
    if s[:2] == [8, 8]:
        return True
    elif len(s) < 2:
        return False
    else:
        return double_eights(s[1:])
```

python中切片的语法为 ``list[start:stop:step]`` 。如果 ``start`` 或 ``stop`` 为负数，则从后向前数；如果 ``step`` 为负数，则反向切片。若冒号不足省略 ``step`` 。

```python
>>> l = [1, 2, 3, 4, 5]

>>> l[-3:]
[3, 4, 5]

>>> l[:3]
[1, 2, 3]

>>> l[::2]
[1, 3, 5]

>>> l[::-1]
[5, 4, 3, 2, 1]
```

### aggregation

**sum**

```python
>>> l = [1, 2, 3, 4, 5]
>>> sum(l)
15
```

**max**

```python
>>> l = [1, 2, 3, 4, 5]
>>> max(l)
5
```

**all**

```python
>>> l = [1, 2, 3, 4, 5]
>>> all(l)
True

>>> l = [True, 0]
>>> all(l)
False
```

## 字典

Python中的字典存储键值对。  

```python
>>> d = {'key1': 1, 'key2': 2}

>>> d['key3'] = 3
>>> d['key1'] = 0
>>> d
{'key1': 0, 'key2': 2, 'key3': 3}

>>> del d['key1']
>>> d.pop('key2')
>>> d
{'key3': 3}

# 检查键值
>>> 'key1' in d
False
>>> 'key3' in d
True

>>> squares = {x: x ** 2 for x in range(3)}
>>> squares
{0: 0, 1: 1, 2: 4}
```