---
sidebar_position: 1
---

### 相关网址

http(s)方法：  
[https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)  

http status codes：  
[https://www.restapitutorial.com/httpstatuscodes.html](https://www.restapitutorial.com/httpstatuscodes.html)  

## HTTP, HTTPS, Status Codes

### HTTP and HTTPS

HTTP（协议）是“Hypertext Transfer Protocol”（超文本传输协议）的简写，HTTPS指HTTP Secure。  

HTTP request分为四部分：request target(URL) + params、http methods、headers和body。  

- target：

    对于这样一个网址[https://www.youtube.com/results?search_query=web+lab](https://www.youtube.com/results?search_query=web+lab)，问号前一部分为服务器的URL，后一部分为Query params（两种参数）。

- method：

    具体的http(s) methods见上面的网址。  
    常见的method如下：  

    - GET
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        获取数据
    - POST
        &nbsp;&nbsp;&nbsp;
        发布数据
    - PUT
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        替换数据
    - DELETE
        &nbsp;
        删除数据

- request headers and body：  

    request headers 为 request提供上下文，body包含具体内容。  

此外，HTTP response 由 status codes、header 和 body三部分组成。其中，body通常为json格式。

### Status Codes

如图  

![status codes](./img/status%20codes.png)  

同样，更多情况见上文链接。  

## API

API的全称是“Application Program Interface”（应用程序编程接口），ppt将其介绍为“a set of endpoints a service allows you to make requests to”。通过服务器提供的API，可以安全地访问允许的数据（而不是直接在服务器上访问）。可以通过访问URL向端点发送请求。  

### preview of making requests in JavaScript

在这门课中，staff写了两个函数。  

```JavaScript
// /api/getUserByNumber?phoneNumber=6172530418
get("/api/getUserByNumber", {
    phoneNumber: "6172530418",
});
```


```JavaScript
post("/api/adduser", {
    name: "Nick Tsao",
    school: "MIT",
    phoneNumber: "6172530418",
});
```

函数的返回值是一个Promise对象。  

## Promise

Promise允许异步的处理。  

以下面这段代码为例：  

```JavaScript
get("/api/stories").then((storyObjs) => {
    setStories(storyObjs);
}).catch((err) => {
    console.log("this is so sad:, ", err.message);
});
```

其中，``then`` 表示promise实现时执行后面的内容，``catch`` 表示promise被拒绝时执行后面的内容。  

promise不会阻塞后面语句的执行。对于这段代码

```JavaScript
myOneSecondPromise().then((value) => {
    console.log('Promise fullfilled with value: ', value)
}).catch((err) => {
    console.log('Error', err)
})

console.log('Herro')
```

输入“Hello”，可能看到的输出是“Herro”在前，“Hello”在后。  

### 实例

```JavaScript
const f = (Promise) => {
    Promise.then((val) => console.log('a'))
    .then((val) => console.log('b'))
    .catch((err) => console.log("error!"))
};

const promise = /* Some way of getting rejected. */
f(promise)
```

输出为“error!”。  

```JavaScript
const f = (Promise) => {
    Promise.then((val) => console.log('a'))
    .then((val) => console.log('b'))
    .catch((err) => console.log('error!'))
};

const promise = /* Some way of getting accepted. */
f(promise)

console.log('Hi there!');
```

输出为“‘Hi there!’，‘a’，‘b’”。