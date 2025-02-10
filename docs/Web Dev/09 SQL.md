## SQL

SQL是Structured Query Language的缩写，是操作关系型数据库的编程语言。  

这里的配置以MySQL为例。

### 安装

在[https://dev.mysql.com/downloads/file/?id=476233](https://dev.mysql.com/downloads/file/?id=476233)下载安装包并解压。  

与maven类似，配置环境变量（系统变量+path变量）。配置后命令行输入 ``mysql`` ，提示无法连接数据库则配置成功。  

接下来进行数据库初始化，以管理员身份执行 ``mysqld --initialize-insecure`` ，完成后执行 ``mysqld -install``，注册MySQL服务。  

注册成功后可以用 ``net start mysql`` 启动MySQL服务。使用 ``net stop mysql`` 可以终止服务。然后使用 ``mysqladmin -u root password xxx`` （xxx为密码）修改密码。

配置成功后，用 ``mysql -uroot -pxxx`` 登录。这条命令中，还有两个可选参数，分别为数据库服务器IP地址 ``-h`` 和端口号 ``-P`` 。MySQL的默认端口号为3306。输入 ``exit`` 可以退出MySQL。使用 ``mysql -uroot -p`` 登录时，会提示输入密码，终端上会出现星号而不是密码内容，相对而言更安全。

### 数据类型

SQL中的整数有tinyint、smallint、mediumint、int和bigint五种类型，浮点数有float和double，还有精度更高的decimal。 ``float(5, 2)`` 表示整个数字长度5，小数部分2，另外两种浮点数同理。  

字符串有char和varchar两种，用 ``char(10)`` 或 ``varchar(10)`` 来指定长度或最大长度。char为固定长度，性能更优，浪费空间更大，varchar反之。此外，还有不同长度的二进制数据（blob）和文本数据（text）。

日期类型中，date、time、year分别表示日期（年月日）、时间和年份。datatime混合日期和时间值，范围从1000年至9999年。timestamp同样混合日期和时间（时间戳），但时间范围较小，只从1970年到2038年。和字符串一样，日期类型使用时也要包裹在引号中。

选择数据类型时，要在满足业务需求的前提下选择占用磁盘空间尽量小的数据类型。

### DDL

数据库操作有以下语法。  

```SQL
show databases; -- 查询所有数据库
select database(); -- 查询当前数据库
use database_name; -- 使用数据库
create database [if not exists] database_name [default charset utf8mb4]; -- 创建数据库
drop database [if exists] database_name; -- 删除数据库
```

方括号中内容为可选项（去掉方括号）， ``database_name`` 替换为对应数据库名。同一个数据库服务器中，数据库的名字不可以相同。此外，上文中的 ``database`` 可以替换为 ``schema`` 。

创建表的语法为  

```SQL
create table table_name(
    field1 field_type [constraint] [comment field1_comments]
    ...
)[comment table_comments];
```

约束有五种，分别是非空约束（ ``not null`` ）、唯一约束（ ``unique`` ）、主键约束（ ``primary key`` ）、默认约束（ ``default`` ）和外键约束（ ``foreign key`` ）。主键约束代表同时唯一和非空，默认约束可以指定默认值，外键约束可以让两张表的数据建立连接。使用 ``auto_increment`` 可以让其自动增长，每次增长的值是上一个加一。一个字段可以存在多个约束。  

表结构操作有下列语法。  

```SQL
show tables; -- 当前数据库所有表
desc table_name; -- 查询表结构（字段名、类型、约束等）
show create table name; -- 查询建表语句

alter table table_name add field_name field_type [comment] [constraint]; -- 添加字段
alter table table_name modify field_name field_type; -- 修改字段类型
alter table table_name change old_name new_name field_type [comment] [constraint]; -- 修改字段名和类型
alter table table_name drop column field_name; -- 删除字段
alter table old_name rename to new_name; -- 修改表名

drop table [if exists] table_name; -- 删除表
```

### DML

DML是Data Manipulation Language的缩写，处理数据的增删改。  

添加数据语法如下。  

```SQL
insert into table_name (field1, field2) values (value1, value2); -- 指定字段添加数据
insert into table_name values (value1, value2); -- 全部字段添加数据
insert into table_name (field1, field2) values (value11, value12), (value21, value22); -- 指定字段批量添加数据
insert into table_name values (value11, value12), (value21, value22); -- 全部字段添加数据
```

注意小括号不省略。另外，字段名要与值一一对应。  

修改数据语法如下。  

```SQL
update table_name set filed1 = value1, filed2 = value2 [where condition];
```

如果没有条件，会修改所有数据。

删除数据语法如下。  

```SQL
delete from table_name [where condition];
```

可以看到，无法用 ``delete`` 删除某个字段的值。如果删除，可以用 ``update`` 语句将该值置为 ``NULL`` 。

### DQL

DQL指Data Query Language。完整的DQL语句为  

```SQL
select field 
from table_name
where condition
group by group_field
having condition
order by order_condition
limit parameters;
```

这个语句从上到下可以分为五部分，分别是基本查询、条件查询、分组查询、排序查询、分页查询。  

基本查询的内容如下。  

```SQL
select field1 [as name1], field2 [as name2] from table_name; -- 查询多个字段
select * from table_name; -- 查询所有字段
select distinct field1, field2 from table_name; -- 去除重复项
```