# Ajax	尚硅谷

## 1、原生AJAX

### 1、简介

- Ajax就是异步的JS和XML

- 通过Ajax可以在浏览器中向服务器发送异步请求

- 最大的优势为：无刷新获取数据
- Ajax不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式

### 2、XML

- XML：可扩展标记语言
- XML被设计用来传输数据和存储数据
- XML和HTML类似，不过HTML中都是预定义标签，而XML中没有预定义标签，全是自定义标签，用来表示一些数据

```
如 一个学生数据
	name='妮露';age='20';gender='女';
	
用XML表示:
	<student>
		<name>妮露</name>
		<age>20</age>
		<gender>女</gender>
	</student>

现在被json取代了
json表示：
	{"name":"妮露","age":"20,"gender":"女"}
```

### 3、Ajax的特点

**1、优点**

- 可以无需刷新页面而与服务器端进行通信
- 允许你根据用户时间来更新部分页面内容

**2、缺点**

- 没有浏览历史，不能回退
- 存在跨域问题（同源）服务之间
- SEO 不友好（搜索引擎优化）

## HTTP协议请求报文与响应文本结构

http协议：超文本传输协议，协议详细规定了浏览器和万维网服务器之间互相通信的规则

### 请求报文

格式

- 行	GET/POST	/URL	HTTP/1.1	
- 头    
  - HOST：atguigu.com
  - Cookie:name=guigu
  - Conten-type:application/x-www-form-urlencoded
  - User-Agent:chrome 83
- 空行
- 体   username=admin&password=admin

### 响应报文

格式

- 行	HTTP/1.1(协议版本)	200(响应状态码)	OK(响应状态字符串)	
- 头    (对响应体做相关描述)
  - Content-type：text/html;charset=utf-8	(类型)
  - Content-length: 2048   (长度)
  - Content-encoding: gzip    (压缩方式)
- 空行   (必须有)
- 体

# Ajax	黑马

## 1、服务器

上网过程中，负责存放和对外提供资源的电脑，叫做服务器。

## 2、URL

- 同一资源定位符，用于标识互联网上每个资源的唯一存放位置
- 浏览器只有通过URL地址，才能正确定位资源的存放位置，从而成功访问到对应的资源

> URL地址一般由三部分组成
>
> - 客户端与服务器之间的通信协议
> - 存有该资源的服务器名称
> - 资源在服务器上具体的存放位置

![image-20221106111034070](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106111034070.png)

## 3、网页打开过程

![image-20221106111139240](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106111139240.png)

![image-20221106111529164](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106111529164.png)

- Headers——请求的url地址
- Response——服务器返回的数据

## 4、服务器对外提供了哪些资源

![image-20221106111701878](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106111701878.png)

网页中的数据，也是服务器对外提供的一种资源。

![image-20221106111942509](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106111942509.png)

> 数据是网页的灵魂

- HTML是网页的骨架
- CSS是网页的颜值
- JavaScript是网页的行为
- 数据是网页的灵魂
- HTML、CSS、JavaScript皆**为数据服务**

### 资源的请求方式

客户端请求服务器时，请求的方式有很多种，最常见的是`get`和`post`

- get请求	用于获取服务端资源（向服务器要资源）

> 例如：根据URL地址，从服务器获取HTML文件、css文件、js文件、图片文件、数据资源等

- post请求	用于向服务器提交数据（往服务器发送资源）

> 例如：登录时向服务器提交的登录信息、注册时向服务器提交的注册信息、添加用户时向服务器提交的用户信息等各种数据提交操作

## 5、Ajax

异步的JavaScript和XML

> 通俗理解：在网页中利用XMLHttpRequest 对象和服务器进行数据交互的方式，就是Ajax
>
> 能让我们轻松实现网页与服务器之间的数据交互

应用场景：

> 搜索提示：当输入搜索关键字时，通过Ajax的形式，动态加载搜索提示列表（无需手动，ajax会自己向服务器发出请求）
>
> 数据的增删改查——都需要通过ajax的形式，来实现数据的交互

## 6、jQuery中的Ajax

### 1、get

![image-20221106165249465](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165249465.png)

get带参数：

![image-20221106165332453](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165332453.png)

### 2、post

![image-20221106165426352](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165426352.png)

提交数据

**![image-20221106165542287](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165542287.png)**

### 3、ajax

![image-20221106165653527](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165653527.png)

get：

![image-20221106165728947](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165728947.png)

post:

![image-20221106165746675](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165746675.png)

## 7、接口

### 1、接口的概念

![image-20221106165824041](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165824041.png)

### 2、请求过程

![image-20221106165847149](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106165847149.png)

![image-20221106165909126](C:\Users\谢红尘\笔记\java前端\JavaScript\image-20221106165909126.png)

### 3、接口测试工具

![image-20221106170401509](C:\Users\谢红尘\AppData\Roaming\Typora\typora-user-images\image-20221106170401509.png)
