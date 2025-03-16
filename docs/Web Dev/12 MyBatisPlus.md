### 基础使用

使用MyBatisPlus只需要以下几步。

首先引入依赖  

```XML
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.5.3.1</version>
</dependency>
```

然后让 ``Mapper`` 接口继承 ``BaseMapper`` 类  

```Java
public interface UserMapper extends BaseMapper<User> {}
```

即可使用对应的函数。  

```Java
userMapper.insert(user);
User user = userMapper.selectById(5L);
List<User> users = userMapper.selectBatchIds(List.of(1L, 2L, 3L, 4L));
userMapper.updateById(user);
userMapper.deleteById(5L);
```

MyBatisPlus可以自动生成对应的SQL语句，且MyBatisPlus是“无侵入”的，进行这些修改不会影响之前项目中MyBatis的内容。

### 常见注解

MyBatisPlus通过扫描得到的实体类判断数据库信息，并且可以访问私有字段。对于实体类，MyBatisPlus约定类名驼峰转下划线（UserInfo -> user_info）为表名，id字段为主键，变量名驼峰转下划线为表的字段名。如果变量为布尔类型，且名为 ``isXxx`` ，会把 ``Xxx`` （去掉is）作为字段名。

如果实体类不符合约定，可以通过注解手动定义表名、主键和字段名，三个注解分别为 ``@TableName`` 、 ``@TableId`` 和 ``@TableField`` 。注意类中必须有主键或名为 ``id`` 的字段。

对于主字段，可以指定 ``type`` 为 ``IdType.Auto`` 、 ``IdType.Input`` 或 ``IdType.ASSIGN_ID`` ，分别代表自增、用户指定（需要手动设置）和20位波浪形随机数，默认为最后一种。

对于表中有关键字的情况，或某些变量不在表中，都需要手动设置。

```Java
@TableName("tb_user")
public class User {
    @TableId(value = "id", type = IdType.Auto)
    private Long id;
    @TableField("username")
    private String name;
    @TableField("isMarried")
    private Boolean isMarried;
    @TableField("`order`")
    private Integer order;
    @TableField(exist = false)
    private String address;
}
```

### 自定义配置

MyBatisPlus的自定义配置写在Application.yaml中。大部分不需要自定义配置。  

```YAML
mybatis-plus:
  type-aliases-package: com.itheima.mp.domain.po
  global-config:
    db-config:
      id-type: auto
```

### 条件构造器

MyBatisPlus只提供了根据主键查询的函数。可以自定义其它函数。

查询时需要用 ``QueryWrapper<T>`` 类构建查询条件。  

```Java
void testQueryWrapper() {
    QueryWrapper<User> wrapper = new QueryWrapper<>();
    wrapper.select("id", "username", "info")
            .like("username", "o")
            .ge("balance", 1000);
    List<User> users = userMapper.selectList(wrapper);
    users.forEach(System.out::println);
}

void testUpdateWrapper() {
    User user = new User();
    user.setBalance(2000);
    QueryWrapper<User> wrapper = new QueryWrapper<User>()
            .eq("username", "jack");
    userMapper.update(user, wrapper);
}
```

注意字符串中的名字为表名（表字段），其它地方为类名或类变量。  

通过使用 ``LambdaQueryWrapper<T>`` 可以减少字符串硬编码。  

```Java
void testLambdaQueryWrapper() {
    LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
    wrapper.select(User::getI, User::getName, User::getInfo)
            .like(User::getName, "o")
            .ge(User::getBalance, 1000);
    List<User> users = userMapper.selectList(wrapper);
    users.forEach(System.out::println);
}
```

对于比较特殊的set语句，要使用 ``UpdateWrapper<T>`` 或 ``LambdaUpdateWrapper<T>`` 。这个类允许不创建实体对象。  

```Java
void updateWrapper() {
    List<Long> ids = List.of(1L, 2L, 4L);
    UpdateWrapper<User> wrapper = new UpdateWrapper<User>()
            .setSql("balance = balance - 20")
            .in("id", ids);
    userMapper.update(null, wrapper);
}
```

### 自定义SQL

很多规范不允许上面 ``updateWrapper`` 中的写法，SQL语句不能出现在业务逻辑处理中。在这种情况下，可以自定义SQL方法。  

```Java
void updateBalanceByIds(@Param(Constants.WRAPPER) QueryWrapper<User> wrapper, @Param("amount") int amount);
```

```Java
void testUpdateWrapper() {
    User user = new User();
    user.setBalance(2000);
    QueryWrapper<User> wrapper = new QueryWrapper<User>()
            .eq("username", "jack");
    userMapper.update(user, wrapper);
}
```

```XML
<update id="updateBalanceByIds">
    UPDATE user_tb SET balance = balance - #{amount} ${ew.customSqlSegment}
</update>
```

### IService 接口

使用IServce接口时，将自定义接口继承 ``IService<User>`` 接口，自定义类实现自定义接口，继承 ``ServiceImpl<UserMapper, User>`` 类。