## MyBatis

Mybatis是一个持久层框架，用于简化JDBC。  

### 基本使用

使用MyBatis时，同样要引入依赖（MyBatis Framework）。然后，同样准备数据库与实体类User。最后，需要配置MyBatis信息，即在application.properties中配置数据库连接信息，包括url、数据库驱动、数据库用户名与密码。然后就可以使用MyBatis。  

实体类本身并不连接数据库。MyBatis将数据库中的内容映射到实体类中。

MyBatis的持久层接口规范为 ``XxxMapper`` ，也成为Mapper接口。  

```Java
@Mapper
public interface UserMapper {
    @Select("select * from user")
    public List<User> findAll();
}
```

按以上的方法，运行 ``findAll`` 时会执行对应的SQL语句。  

### 辅助配置

在上图配置中，引号中的部分会被识别为字符串而不是SQL语句。在IDEA中进行相应配置，可让引号内内容被识别成某数据库的SQL语句。  

### 数据库连接池

数据库连接池是负责分配、管理数据库系统连接的容器，避免了重复创建连接，实现连接的复用。另外，数据库连接池会自动释放空闲时间（在用户段）超过最大时间的连接，将其归还给数据库连接池，避免相应的数据库连接泄露，导致数据库连接池中没有连接的情况。  

数据库连接池的标准接口是DataSource，其中包含getConnection方法。现在实际开发中常用的是Druid连接池和Hikari连接池（Spring Boot 默认）。  

切换连接池时，只要引入对应依赖，然后修改application.properties即可。  

### 增删改查

实现对应的SQL语句需要创建对应Mapper接口。  

**增**

```Java
@Insert("insert into user(username, password, name, age) values(#{username}, #{password}, #{name}, #{age})")
public void insert(User user);
```

注意，前一个小括号中是字段名，后一个小括号的大括号内是对象属性名，通过井号和大括号来获取数据。  

在MyBatis中， ``#{}`` 为占位符，会被替换成 ``？`` ； ``${}`` 为拼接符。前者在参数传递中使用，后者在表名、字段名中使用，避免SQL注入。  

**删**

在MyBatis中，执行DML语句会返回一个整数，代表操作影响的行数。  

```Java
@Delete("delete from user where id = #{id}")
public Integer deleteById(Integer id);
```

**改**

```Java
@Update("update user set username=#{username}, password=#{password}, name=#{name}, age=#{age} where id=#{id}")
public void update(User user);
```

**查**

```Java
@Select("select * from user where username=#{username} and password=#{password}")
public User findByUsernameAndPassword(@Param("Username") String username, @Param("password") String password)
```

在Java中参数名会被默认忽略，所以需要用注解标记参数名；只有一个参数则不需要。如果使用Spring Boot官方框架，接口编译时保留参数名，不必添加注解。  

### XML映射配置

MyBatis中，可以用注解配置SQL语句，也可以通过XML配置SQL语句。  

XML配置文件放在resources目录中。要求XML与mapper接口放在同一个包（分别为java目录和resources目录），并有相同文件名。  

可以以如下形式定义一个接口。  

```Java
@Mapper
public interface UserMapper() {
    public List<User> findAll();
}
```

```XML
<mapper namespace="com.itheima.mapper.UserMapper">
    <select id="findAll" resultType="com.itheima.pojo.User">
        select id, username, password, name, age from user
    </select>
</mapper>
```

XML中id的内容即为方法名。