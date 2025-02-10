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

### 三层架构

项目中的代码可以分为三个部分，分别为数据访问、逻辑处理、接收请求和响应。基于单一职责原则，应该将其分为三层，而不是写在一个方法中。

这三层分别为控制层（controller）、业务逻辑层（service）和数据访问层/持久层（Dao）。控制层接收前端发送的请求，处理并响应数据；业务逻辑层处理具体逻辑；数据访问层负责数据的增删改查。  

在视频的例子（[黑马AI+JavaWeb](https://www.bilibili.com/video/BV1yGydYEE3H?spm_id_from=333.788.player.switch&vd_source=205f66d4bbb533ff3883e1a84b439a3c&p=47)）中，三层的代码分别如下。  

```Java
@RestController // 返回到HTTP响应体
public class UserController {
    private UserService userService = new UserService();
    @RequestMapping("/list")
    public List<User> list2() {
        public List<User> userList = userService.list();
        return userList;
    }
}
```

```Java
public class UserServiceImpl implements UserService {
    private UserDao userDao = new UserDaoImpl();
    @Override
    public List<User> list() {
        List<String> lines = userDao.list();
        List<User> userList = lines.stream().map(line -> {
            Integer id = Integer.parseInt(parts[0]);
            ...
            return new User(id);
        }).collect(Collectors.toList());
        return userList;
    }
}
```

```Java
public class UserDaoImpl implements UserDao {
    @Override
    public List<String> list() {
        InputStream in = this.getClass().getClassLoader().getResourceAsStream("user.txt");
        List<String> lines = IoUtil.readLines(in, StandardCharsets.UTF_8, new ArrayList<>());
        return lines;
    }
}
```

### 分层解耦

### IOC

### DI

