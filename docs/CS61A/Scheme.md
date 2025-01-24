---
sidebar_position: 5
---

这篇笔记包含第十一、十二周的内容和第十三章的第一个lecture，只关注scheme的语法（基本不涉及calculator和interpreter部分）。  

## scheme基础

scheme是一种函数式编程语言，用函数来构造程序。可以理解为，scheme的内容基本遵循 ``(f a b c ...)`` 的格式，其中 ``f`` 为函数，后面为参数，用空格分隔。即使是最简单的运算都使用这种表达形式，例如 ``(+ 1 1)`` 。  

### 控制流与函数 

scheme中的分支为  

```scheme
(if condition
    A
    B)
```

``condition`` 为真时，表达式的值为 ``A`` ，否则为 ``B`` 。 ``B`` 可以省略（相当于没有 ``else`` 的 ``if`` ）。  

scheme中没有循环表达式，循环通过递归来实现。  

```scheme
(define (sum-first-n n) 
  (define (f k total) 
    (if (> k n) 
      total 
      (f (+ k 1) (+ total k)))) 
    (f 1 0)) 
```

函数为

```scheme
(define (name arg1 arg2 ...)
    return-value)
```

例如  

```scheme
(define (fib n)
  (if (or (= n 0) (= n 1))
    n
    (+ (fib (- n 2)) (fib (- n 1)))))
```

### lambda 表达式

lambda表达式格式为  

```scheme
(lambda (<formal-parameters>) <body>)
```

例如  

```scheme
(lambda (x y z) (+ x y (square z)))
```

### let 表达式

表达式格式  

```scheme
(let (<let-expression>) <body>)
```

其中 ``let-expression`` 为数个 ``(name value)`` 。

```scheme
(define c (let ((a 3)  
               (b (+ 2 2))) 
  (sqrt (+ (* a a) (* b b)))))
```

注意， ``let`` 定义的量的作用域范围只在括号内。  

### cond 和 begin

``cond`` 可以达到类似 ``elif`` 的效果。  

```scheme
(cond <cond-expression>)
```

``cond-expression`` 为数个 ``(condition value)`` ， ``condition`` 可以为 ``else`` 。

```python
 if x > 10: 
    print('big') 
elif x > 5: 
    print('medium') 
else: 
    print('small')
```

```scheme
(cond ((> x 10) (print 'big))
      ((> x 5) (print 'medium)
      (else 'small)))
```

``begin`` 可以在一个分支里执行多条语句。  

```scheme
(begin <begin-expression>)
```

``begin-expression`` 为数条语句。

```python
if x > 10:
    print('big')
    print('guy')
else:
    print('small')
    print('fry')
```

```scheme
(if (> x 10)
  (begin
    (print 'big)
    (print 'guy))
  (begin
    (print 'small)
    (print 'fry)))
```

## scheme list

### 基本操作

scheme中的列表和python中类似。列表中的每个元素分为两个部分：它的值和连接的下一个列表。  

``cons`` 有两个参数，分别为值和列表，用于创建列表。 ``nil`` 为空列表。  

（由于设定上是在终端中，这部分代码没有高亮）

```
> (cons 1 (cons 2 nil))
(1 2)
> (cons 1 (cons 2 (cons 3 (cons 4 nil))))
(1 2 3 4)
```

``car`` 和 ``cdr`` 分别用于获取列表的第一个（值）和第二个（下一个列表）元素。  

```
> (define x (cons 1 (cons 2 nil)))
> x
(1 2)
> (car x)
1
> (cdr x)
(2)
```

### 其它

``(list <arguments>)`` 将所有参数作为元素组成一个链表。  

```
> (list 1 2 3 4)
(1 2 3 4)
```

``(append <argumens>)`` 的所有参数均为链表，将其连接在一起产生一个新链表。注意 ``list`` 的参数为值， ``append`` 的参数为链表。  

```
> (define x (cons 1 (cons 2 nil)))
> (define y (cons 3 (cons 4 nil)))
> (append x y)
(1 2 3 4)
```

## 宏

### 引用

scheme中的引用分为quote和quasiquote。  

quote的格式为 ``(quota obj)`` 或 ``'obj`` ，会阻止表达式求值，直接返回字面内容。  

quasiquote的格式为 ``(quasiquote obj)`` 或 `` `obj`` ，也会直接返回字面内容。可以用 ``,`` 来unquote，将某些部分求值后再插入。嵌套时，只对同一层（最外层）中的解引用部分求值。  

```
> (define b 1)
> `(a `(,b))
(a (b))
```

### 宏

宏（macro）指“在程序求值之前对代码执行的操作”（例如C中的 `
`#define N 10000`` ），会对代码进行某种“替换”。  

scheme中可以用 ``define-macro`` 语句来定义宏。  

```scheme
(define-macro (twice expr)
  (list 'begin expr expr))
```

这里的``twice`` 就是一个宏。  

```
> (twice (print 2))
2
2
```

在执行 ``(twice (print 2))`` 时，这个语句被替换为了 ``(begin (print 2) (print 2))`` ，然后执行替换后的代码。