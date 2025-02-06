## Maven

Maven是一个流行的Java项目管理和构建自动化工具。

Maven中有多个仓库，用来存储和管理jar包。仓库分为本地仓库、远程仓库和中央仓库，查找jar包时会按顺序逐层查找。  

### 安装

在官网（[https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)）下载对应安装包（我的为apache-maven-3.9.9-bin.zip）。

将文件夹解压后，首先配置环境变量。将解压后的目录配置为系统环境变量MAVEN_HOME（变量名），再将bin目录（%MAVEN_HOME%\bin）配置为PATH环境变量。然后，在conf文件夹下的settings.xml文件增加 ``<localRepository>D:\Dev Tools\apache-maven-3.9.9\mvn_repo</localRepository>`` ，再将 ``<mirrors>`` 标签中内容改为  

```XML
<mirrors>
  <mirror>
        <id>alimaven</id>
        <name>aliyun maven</name>
        <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        <mirrorOf>central</mirrorOf>
    </mirror>
</mirrors>
```

Maven需要Java才能使用。Java在下载后首先配置JAVA_HOME环境变量，为相应的下载文件夹；然后在path中添加%JAVA_HOME%\bin。配置后，要将这一环境变量移动到最上面，用 ``java -version`` 检查配置是否成功，这是Maven应该已经可以使用。最后按需配置classPath。

然后要在IDEA中配置Maven环境，按视频对应操作即可。

### 坐标

Maven中的坐标是资源（即jar包）的唯一表示，由groupId、artifactId和version三个部分组成，分别为项目隶属组织名称（通常为域名反写）、当前项目名称和版本号。

版本分为快照版和发行版。  

### 单元测试

目前，JUnit是最流行的单元测试框架之一。使用JUnit，首先要在pom.xml文件中引入依赖。  

```XML
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.9.1</version>
    </dependency>
</dependencies>
```

在JUnit中，单元测试类名规范为XxxTest，并要求测试方法类型必须为 ``public void`` 。  

```Java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class FirstTest {

    @Test
    public void test() {
        Assertions.assertTrue(true);
    }
}
```

除了Test外，还有一些常见注解。  

|注释|说明|  
|:-:|:-:|
|@ParameterizedTest|可以让单个测试运行多次，每次参数不同|  
|@ValueSource|参数化测试的参数来源|
|@BeforeEach|在每个测试方法执行前执行一次|
|@AfterEach|在每个测试方法执行后执行一次|
|@BeforeAll|在所有测试方法执行前执行一次|
|AfterAll|在所有测试方法执行后执行一次|

### 依赖范围

依赖在默认情况下可以在任何地方使用。可以用 ``<scope></scope>`` 限制范围。

默认情况下的范围为compile，可以设置为test、provided和runtime。test情况下只能在测试下使用依赖，provided情况下依赖不会被打包，runtime情况下不能在主程序中使用。