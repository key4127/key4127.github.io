## JDBC

JDBC的全称为Java Database Connectivity，是使用Java语言操作关系型数据库的一套API。Java通过JDBC可以操作各种关系型数据库。  

### 基本操作步骤

使用JDBC首先要引用相关依赖。例如，使用MySQL对应的JDBC可以如下引入依赖。

```XML
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.0.33</version>
</dependency>
```

引入编译后，需要五步：注册驱动、获取连接、获取SQL语句执行对象、执行语句、释放资源。  

```Java
Class.forName("com.mysql.cj.jdbc.Driver");

String url = "jdbc::mysql://localhost:3306/web01";
String userName = "root";
String password = "xxx";
Connection connection = DriverManager.getConnection(url, username, password);

Statement statement = connection.createStatement();

int i = statement.executeUpdate("update user set age = 25 where id = 1");

statement.close();
connection.close();
```

JDBC中，执行DML用 ``statement.executeUpdate()`` 语句，DQL用 ``statement.executeQuery()`` 语句。DML的返回值是一个整数，代表影响的行数。DQL的返回值是一个 ``ResultSet`` （结果集）对象。  

对于结果集对象，使用 ``resultSet.next()`` 可以让光标向下移动，true代表数据有效，false代表无效。通过 ``resultSet.getType("")`` 可以获取数据，将 ``Type`` 替换为对应类型，引号中要包裹字段名。

### 预编译

SQL语句分为静态SQL和预编译SQL。  

```Java
Statement statement = connection.createStatement();
int i = statement.executeUpdate("update user set age = 25 where id = 1");
```

```Java
PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM user WHERE username = ? AND password  = ?");
pstmt.setString(1, "name");
pstmt.setString(2, "xxx");
Result resultSet = pstmt.executeQuery();
```

比起静态SQL，预编译的SQL更安全，性能也更高。静态编译的SQL可能导致SQL注入问题，此外，预编译SQL增加了语句的复用，复用时可以直接从缓存中找出编译结果，不必重新编译。