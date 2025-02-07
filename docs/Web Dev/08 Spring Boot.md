## Spring Boot

Spring旗下有多种框架，其中大多数框架基本基于Spring Framework。考虑到配置难度等原因，现在基本使用Spring Boot作为框架。

### 配置

在IDEA中，直接选择Spring Boot项目，按顺序配置即可，可选择使用Maven。

在已经创建的代码中，Spring Boot Application中的类为项目的启动类。

### 入门程序

```Java
@RestController // 请求处理类
public class helloController {

    @RequestMapping("/hello") // 在对应请求路径调用下面的方法
    public String hello(String name) {
        return "Hello " + name;
    }
}
```

启动后，会监听对应端口，默认为8080。运行启动类后，在对应路径就可以看到相应的字符串。  

