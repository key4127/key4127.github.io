## HTTP协议

### 概述

HTTP的全程为Hyper Text Transfer Protocol，即超文本传输协议，规定了服务器和浏览器直接的数据传输规则。  

HTTP协议基于TCP协议和请求-响应模型（一次请求对应一次响应），为无状态协议，没有记忆能力。也就是说，HTTP不能记忆数据，但速度较快。

### 请求协议

请求协议由请求行、请求头、请求体三部分组成。请求行为请求协议的第一行，请求头由数个键值对组成，请求体与请求头之间有一个空行。POST请求有请求体（存放参数），但GET请求没有。GET请求大小有限制，POST没有限制。  

请求行包括请求方式、资源路径和协议。  

常见请求体有以下几种。  

|名称|请求内容|
|:-:|:-----:|
|Host|请求主机名|
|User-Agent|浏览器版本|
|Accept|浏览器能接收的资源类型，如文本、图片等|
|Accept-Language|浏览器偏好语言（自然语言）|
|Accept-Encoding|浏览器可以支持的压缩类型|
|Content-Type|请求主体的数据类型|
|Content-Length|请求主题的大小（单位为字节）|

在获取请求数据时，不需要直接对协议进行操作，可以调用相应接口。在 ``HttpServletRequest`` 对象里封装了所有请求信息。  

```Java
@RestController
public class requestController {

    @RequestMapping("/request")
    public String request(HttpServletRequest request) {
        String method = request.getMethod();
        String url = request.getRequestURL().toString();
        String uri = request.getRequestURI();
        String protocol = request.getProtocol();
        String name = request.getParameter("name"); // 请求参数
        String accept = request.getHeader("accept"); // 请求头

        return "OK";
    }
}
```

### 响应协议

响应协议也分为响应行、响应头、响应体三个部分。同样，相应行为第一行，响应头和响应体之间有空行。  

响应行的内容为协议、状态码、描述。常见状态码和响应头内容如下。  

|状态码|描述|
|:-:|:-:|
|1xx|响应中|
|2xx|响应成功|
|3xx|重定向|
|4xx|客户端错误|
|5xx|服务器错误|

|响应头名称|内容|
|:-:|:-:|
|Content-Type|响应内容类型|
|Content-Length|响应内容长度|
|Content-Encoding|响应压缩算法|
|Cache-Control|如何缓存|
|Set-Cookie|为当前域设置Cookie|

第一种设置响应数据的方式是通过 ``HttpServletResponse`` 类。  

```Java
@RestController
public class responseController {

    @RequestMapping("/response")
    public void response(HttpServletResponse response) throws Exception {
        response.setHeader("name", "test");
        response.getWriter().write("<h1>Hello Request</h1>");
    }
}
```

第二种方式是通过Spring提供的 ``ResponseEntity`` 类型。  

```Java
@RestController
public class responseController {

    @RequestMapping("/response2")
    public ResponseEntity<String> response() {
        return ResponseEntity
                .status(401)
                .header("name", "test")
                .body("<h1>Hello Request</h1>");
    }   
}
```

通常来说，不需要手动设置状态码与响应头。