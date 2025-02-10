---
sidebar_position: 6
---

这篇笔记介绍第十三周的后两个lecture和第十四周的第一个lecture。以后的内容不再继续。

只介绍一些基础的SQL语法。

*update：似乎这里的查询都是多表查询，具体见笔记Web Dev 09。*

## SQL

SQL指结构性查询语言，是对关系型数据库的操作语言。  

SQL不区分大小写。一般关键字用大写。

### 创建新数据表

```SQL
CREATE TABLE [name] AS [select statement]; 
```

例如  

```SQL
CREATE TABLE parents AS
  SELECT "ace" AS parent, "bella" AS child UNION
  SELECT "ace"          , "charlie"        UNION
  SELECT "daisy"        , "hank"           UNION
  SELECT "finn"         , "ace"            UNION
  SELECT "finn"         , "daisy"          UNION
  SELECT "finn"         , "ginger"         UNION
  SELECT "ellie"        , "finn";
```

### 依靠原有数据表创建

基础的语法为  

```SQL
SELECT [columns] FROM [tables] WHERE [condition] ORDER BY [orders];
```

其中 ``[columns]`` 的内容为数个 ``[expression] AS [name]`` ，用逗号连接。  

```SQL
SELECT track
  FROM spotify WHERE track < artist ORDER BY track DESC;
```

### 连接数据表

可以用join语法将多个数据表连接，然后通过这个连接的数据表构建新数据表。  

```SQL
SELECT  
shm_tracks.track AS s_track, shm_tracks.artist AS s_artist, 
anya_tracks.track AS a_track, anya_tracks.artist AS a_artist 
FROM shm_tracks, anya_tracks  
WHERE s_track = a_track OR s_artist = a_artist
```

这段代码连接了两个 ``shm_tracks`` ，并通过 ``AS`` 分别命名为 ``s_track`` 和 ``a_track`` 。数据表会通过类似笛卡尔积的方式连接，即数据表1的第一行到最后一行依次与数据表2的第一行到最后一行连接，长度分别为 $m_1$ 、 $m_2$ 、... $m_n$ 的数据表连接会得到一个长度为 $m_1 \times m_2 \times ... \times m_n$ 的数据表，再对这个数据表通过 ``WHERE`` 、 ``ORDER BY`` 等创建出最终的数据表。  

### 连接字符串

在表达式中，可以用 ``||`` 来连接字符串。  

```
sqlite> SELECT "hello, " || " world";
hello, world
```

### 行分组

分组语法为  

```SQL
SELECT [columns]
  FROM [table] GROUP BY [expression] HAVING [expression];
```

这种语法会将表格按照某行分组（ ``GROUP BY`` 后面的表达式）。在分组语句中可以使用聚合函数。注意，分组会在 ``WHERE`` 之后进行，所以不能在 ``WHERE`` 中使用聚合函数。  

```SQL
SELECT  MAX(a.legs - b.legs) AS difference 
  FROM animals AS a, animals AS b  
  WHERE a.weight = b.weight; 
```

这里的 ``MAX`` 和 ``MIN`` 就是聚合函数。此外， ``AVG`` 、 ``SUM`` 和 ``COUNT`` 都是常见的聚合函数。 ``AVG`` 和 ``SUM`` 分别统计某列的平均值和总和， ``COUNT(*)`` 返回表中的总行数， ``COUNT(column_name)`` 返回表中非空值的行数， ``COUNT(DISTINCT column_name)`` 返回表不同值数。  