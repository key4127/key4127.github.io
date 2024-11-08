---
sidebar_position: 1
---

## W2: Catbook in React

react复习部分略。  

官方库：  
[https://github.com/weblab-workshops/catbook-react](https://github.com/weblab-workshops/catbook-react)  

官方代码（只包含相关代码，不包含其它内容，无法运行）：  

我的代码：  


w2使用方法与w0和w1相同，用 ``git checkout w2-starter`` 切换到w2部分。所以同样的，每次reset后会将原来的代码清除，但是课程鼓励我们设计自己的内容。在下面的笔记中只包含官方代码。  

官方页面：  

我的页面：  


注意这一部分有一个client文件夹，文件夹内的src文件夹中包含了对应代码。ppt告诉我们只需要关注components文件夹中的JavaScript内容，并且只需要编辑components/pages中的Profile.js、components/modules中的CatHappiness.js、NavBar.js和Navbar.css四个文件。  

另外，在执行 ``npm install`` 后，可以用 ``npm run hotloader`` 来运行代码，在 [http://localhost:5050/](http://localhost:5050/) 看到网页。  

### npm 相关问题

在执行npm对应命令行时，可能出现各种报错。  

``npm install`` **卡住不动** 

这个网上有很多教程，一般是因为访问官方网站不稳定，需要切换镜像源。我使用的镜像源是 [https://registry.npmmirror.com](https://registry.npmmirror.com)，输入以下命令配置  

```shell
npm config set registry=https://registry.npmmirror.com
```

当然也可以用其它镜像源。  

更换后，可以用 ``npm config get registry`` 查看换源是否成功。  

``npm install`` 出现报错

如果报错里出现了 ``permission denied`` 等类似的语句，是因为权限不足，在管理员模式下重新运行。  

如果 ``npm install hotloader`` 成功运行，会出现 ``<i> [webpack-dev-server] Loopback: http://localhost:5050/`` 等语句。和其它的命令一样，按Ctrl^C停止运行。  

### step 0

在Navbar.js和Navbar.css中实现Navbar。  

注意nav标签代表navbar相关的容器。在NavBar.js中return相关内容，并且在NavBar.css中调整样式，可以参考old_index.html和old_style.css中的内容。  

官方代码：  

NavBar.js在return部分添加  

```JavaScript
<nav className="NavBar-container">
    <div className="NavBar-title">Catbook</div>
</nav>
```

NavBar.css添加

```CSS
 .NavBar-container {
    padding: 8px 16px;
    background-color: #396dff;
 }

 .NavBar-title {
    color: white;
    font-size: 20px;
 }
```

### step 1

这部分是完成CatHappiness元件。从ppt中看出，``<app>`` 标签包括两部分 ``<NavBar>`` 和 ``<Profile>`` ，``<CatHappiness>`` 元件包含在 ``<Profile>`` 中。CatHappiness数值包含在 ``<Profile>`` 的state里，作为props传递给 ``<CatHappiness>`` 。  

要完成这一步，要先添加catHappiness state，然后导入、实现、并且最终渲染这个元件。  

这一步被具体分成四步来进行，以下是四步的官方代码（前三步改动在Profile.js中，最后一步在CatHappiness.js中）：  

**step 1a**

添加CatHappiness state

注意源代码里没有导入 ``useState``，要将第一行改为

```JavaScript
import React, { useState } from "react";
```

然后在Profile函数里添加

```JavaScript
const [catHappiness, setCatHappiness] = useState(0);
```

**step 1b**

导入元件

```JavaScript
import CatHappiness from "../modules/CatHappiness.js";
```

**step 1c**

添加CatHappiness元件，在return部分添加

```JavaScript
<div className="Profile-subContainer u-textCenter">
    <h4 className="Profile-subTitle">Cat Happiness</h4>
    <CatHappiness catHappiness={catHappiness} />
</div>
```

**step 1d**

渲染CatHappiness

将CatHappiness.js中的CatHappiness函数进行如下修改  

```JavaScript
const CatHappiness = (props) => {
  return (
    <div className="CatHappiness-container">
      <div className="CatHappiness-story">
        <p className="CatHappiness-storyContent">{props.catHappiness}</p>
      </div>
    </div>
  );
};
```

### step 2

这一步要完成CatHappiness的更新：每次点击时CatHappiness加一。  

每个 ``<div>`` 都有一个onClick属性（prop），当这个 ``<div>`` 被点击时，它会调用onClick函数。  

首先实现 ``incrementCatHappiness`` 函数  

```JavaScript
const incrementCatHappiness = () => {
    setCatHappiness(catHappiness + 1);
};
```

再在return部分修改

```JavaScript
<div className="Profile-avatarContainer" onClick={incrementCatHappiness}>
```

官方代码完成后，使用 ``git checkout w2-complete`` 查看完成代码。  