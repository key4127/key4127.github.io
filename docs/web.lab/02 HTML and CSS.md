---
sidebar_position: 1
---

## HTML

### 介绍

html是一种超文本标记语言。下面这张图简单诠释了html、css和js的关系和区别。        

![html vs. js vs. css](./img/html%20&%20js%20&%20css.png)

html由一系列“box”组成。以下是一个html框架：  

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title!</title>
    </head>
    <body>
        <h1>Heading!</h1>
        <p>Paragraph!</p>
    </body>
</html>
```

``<!DOCTYPE html>`` ：指定网站使用最新版html（而不是随机版本）  
``<html></html>`` ：一个html元素  
``<head></head>`` ：存储文档的标题、样式、脚本等，描述数据属性的信息  
``<title></title>`` ：页面标题    
``<body></body>`` ：内容  
``<h1></h1>`` ：一级标题  
``<p></p>`` ：段落  

搭建好的网页效果如下图：

![web page](./img/html%20basic.png)  

### 属性

```html
<tagname abc="xyz">
</tagname>
```
其中，上面一行为开场标签（opening tag），下一行为结束标签（closing tag）。 ``abc`` 为属性（attribute）， ``xyz`` 为这个属性的值（value）。

### 标签

以下列出了各种常用的html标签。

* 链接  
    * ``<a href="http://weblab.mit.edu">Link to web.lab!</a>``  
    * ``href`` 后边代表网址
    * ``<a>`` 与 ``</a>`` 中间的字代表链接名称

    ![link](./img/html%20link.png)

* 图片
    * ``<img src="pusheen.gif" />``
    * 不需要结束标签
    * 相对路径从html所在文件夹开始  

    ![img](./img/html%20img.png)

* 列表  

    ```html
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    ```
    
    <br></br>

    * ``<ul>`` 是无序号列表， ``<ol>`` 是有序号列表  
    * ``<li>`` 是列表内容  

    ![item](./img/html%20item.png)

### ``<div>`` 与 ``<span>``

* ``div`` ：一种框架，没有实际含义（因此用得太多会降低可读性）。
* ``span`` ：内联元素，用于在文本中进行小范围样式修改。  

<br></br>

```html
<body>
    <div>
        <h1></h1>
        <p></p>
    </div>
</body>
```

<br></br>

~~span 看不懂，待补充~~

## css

### 介绍

ppt上的原文是，html是 **the language your web browser use to describe the content and structure of web pages**，而css是 **the rules that tell your web browser how stuff looks**。  
更言简意赅的，总结中提到**html = nested boxes**，**css = a list of descriptions**。  

```css
div {
    color: red;
    font-family: Arial;
    font-size: 24pt;
}
```

将这段代码写在style.css中，则对应html文件中所有 ``<div>`` 部分会变成style.css中的格式。  

### ``id`` 与 ``class``

先介绍一下 ``id`` 和 ``class`` 的用法。  

* id

```html
    <div id="unique">Content</div>
```

```css
#unique {
    color: red;
    font-family: Arial;
    font-size: 24pt;
}
```

* class

```html
    <div class="info">Content</div>
```

```css
.info {
    color: red;
    font-family: Arial;
    font-size: 24pt;
}
```

一个元素只能拥有一个 ``id`` ，但是可以拥有多个 ``class`` 。另外，所有 ``id`` 不能重名，但 ``class`` 可以。  
这门课中的建议是只用 ``class`` 。

### 优先级

css的优先级可参考这张幻灯片：  

![css hierarchy](./img/css%20hierarchy.png)

### 结合 html 与 css

这门课提供的方式是使用外部样式表：使用 ``<link>`` 引入外部的css文件。  

```html
<head>
    <link rel="stylesheet"
          herf="style.css" />
</head>
<body>
    <h1 class="myClass">Heading!</h1>
</body>
```

其中， ``<rel>`` 定义了当前文档与被链接文档的关系， ``<herf>`` 指定了URL或路径。  

还有数种其它方式，但这门课只推荐这种。  