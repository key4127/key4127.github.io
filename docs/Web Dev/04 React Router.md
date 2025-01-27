## React Router

一个路径（path）对应一个组件。当浏览器访问某个path时，对应的组件会被渲染，这就是前端路由。  

### 配置

配置React Router需要安装 ``react-router-dom`` 包。  

```
npm i react-router-dom
```

### 基础使用

配置基础的路由，首先需要创建router实例对象并配置对应关系。  

（App.js）
```JavaScript
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <div>LOGIN</div>
  },
  {
    path: '/article',
    element: <div>ARTICLE</div>
  }
])
```

然后在渲染部分，使用 ``RouterProvider`` 进行路由绑定。  

```JavaScript
root.render(
  <RouterProvider router={router}></RouterProvider>
);
```

当然，实际情况下不会渲染简单的div，也不能将路由配置放在根文件中。  

### 抽象路由模块

在src下新建page和router文件夹，在文件夹中新建相关文件，配置不同路由。  

（Router文件夹下的index.js）
```JavaScript
import { createBrowserRouter } from "react-router-dom";
import Login from "../page/login";
import Article from "../page/article";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/article',
    element: <Article />
  }
])

export default router;
```

### 路由导航

路由导航指多个路由之间需要跳转，且可能需要传递参数。路由导航分为声明式导航和编程式导航。  

声明式导航指通过 ``<Link />`` 组件描述要跳转的目的地，通过组件的 ``to`` 属性指定。  

```HTML
<Link to={"/article"}>click this to article</Link>
```

编程式导航指通过 ``useNavigate`` 得到导航方法，通过调用方法进行跳转，更加灵活。   

```JavaScript
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/article')}>CLICK TO ARTICLE</button>
    </div>
  )
}
```

传参也有两种写法。第一种是 ``searchParams`` 传参，发送与接收格式分别如下。  

```JavaScript
<button onClick={() => navigate('/article?id=1001&name=jack')}>CLICK TO ARTICLE</button>
```

```JavaScript
import {useSearchParams} from "react-router-dom";

function Article() {
  const [params] = useSearchParams();
  const id = params.get('id');
  return (
    <div>ID: {id}</div>
  )
}
```

其中网址与参数间用 ``?`` 分隔，各个参数之间用 ``&`` 分隔。  

第二种传参方式是 ``params`` 传参。  

```JavaScript
<button onClick={() => navigate('/article/1001')}>CLICK TO ARTICLE</button>
```

```JavaScript
import {useParams} from "react-router-dom";

function Article() {
  const params = useParams();
  let id = params.id;
  return (
    <div>ID: {id}</div>
  )
}
```

此外，要注意更改router的index文件。  

```JavaScript
{
  path: '/article/:id',
  element: <Article />
}
```

如果要继续增加参数，可以继续增加 ``'/article/:id/:name`` 等等。

### 嵌套路由

嵌套路由允许在一个路由组件内部定义其他的路由组件。这种机制使得多个视图可以在同一个页面上以层次的方式展示。

实现嵌套路由，需要 ``children`` 属性配置路由嵌套关系，再使用 ``<Outlet />`` 配置渲染位置。  

router配置与一级路由渲染分别如下。  

```JavaScript
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'board',
        element: <Board />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])
```

```JavaScript
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div>
      LAYOUT
      <Outlet />
    </div>
  )
}
```

如果要设置默认路由（例如 ``board`` ），只需要进行如下配置。  

```JavaScript
{
  index: true,
  element: <Board />
}
```

### 404

实现404需要两步。首先需要一个组件作为404渲染，接下来在路由表末尾配置 ``*`` 。  

```JavaScript
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Board />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
```

### 两种路由模式

Router分为history模式和hash模式，在React中分别由 ``createBrowserRouter`` 和 ``createHashRouter`` 创建。之前使用的一直为history模式。  

![different router](./img/different%20router.png)   

（图源自[黑马程序员React18教程](https://www.bilibili.com/video/BV1ZB4y1Z7o8?spm_id_from=333.788.player.switch&vd_source=205f66d4bbb533ff3883e1a84b439a3c&p=59)）