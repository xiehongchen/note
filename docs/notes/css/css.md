# css

## 引用 

### 行内样式

在开始标签内添加style样式

配合js使用

```html
<p style="color:red">内容</p>
```

### 嵌入样式

放在 head 标签里面的

其中 type 可以不写，但写了就不能写错

多用于当前页面，小案例

```HTML
<style type="text/css">
样式
</style>
```

### 外部样式

放在一个css文件里面，需要讲引用它的 link 标签放在 head 标签里面

其中， href 就是css文件所在地址

rel="stylesheet"——关系为样式表

多个页面，项目

```html
<link href="XXX.css" rel="stylesheet" type="text/css"/>
```

### 导入式

放在 head 标签里面的 style 标签里面

```html
@import url("文件地址");
```

## 选择器

### 标签选择器

以 HTML标签作为选择器

```html
div{
样式
}
```

### 类选择器

在HTML标签里面添加class属性

注意前面需要增加一个点

```html
<div class="cube">内容</div>

.cube{
样式
}
```

### id选择器

在HTML标签中添加id属性

- id只能使用一次，即每一个标签只有一个id，为一一对应关系

  ```html
  <diV id="only">
      内容
  </diV>
  
  #only{
  样式
  }
  ```

### 全局选择器

设置全部标签样式

- 很少使用

```HTML
*{
样式
}
```

### 子元素选择器

和后代类似，但是只能获得子元素，中间使用小于号隔开

```html
<div class="first">
   <div class="second">
       <em class="third">内容</em>
    </div>
</div>

.first > .second > .third{//第一种
	样式
}
div > div >em{//第二种
样式
}
```

### 后代选择器

类似于路劲，找到符合要求的标签，会匹配所有的后代标签，之间用空格隔开

```HTML
<div class="first">
   <div class="second">
       <em class="third">内容</em>
    </div>
</div>


div div em{
  样式
}

.first div em{
  样式
}
```

### 分组选择器

可以将多种选择器结合到一起使用，用于统一设计样式

```html
div,#id,.a{
样式
}
```

同时满足多个选择器的标签

```
div.box{
样式
}
```



### 伪类选择器

- 只有一个：

#### 动态伪类

```html
link 还未被访问的链接
visited 已经访问的链接
hover 鼠标悬浮在元素上的效果
active 鼠标点中元素一瞬间的效果
```

在 CSS 定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的，a:active 必须被置于 a:hover 之后，才是有效的。（love and hate法则）

```html
//当链接没有点击时，设a标签文字为黑色
a:link{
    color:black;
}
//当链接已经点击时，设a标签文字变为绿色
a:visited {
    color: green;
}
//鼠标悬浮在a标签上时，文字变为红色
a:hover{
    color: red;
}
//鼠标点击的一瞬间背景颜色变为蓝色
a:active{
    background-color: blue;
}
```

#### 结构类伪类

##### first类和last类

```html
 :first-child 所有父标签的第一个子元素如果是某元素，则被选中。
 :first-of-type 所有父标签中某元素的第一个子元素。 
 :last-child 所有父标签的最后一个子元素如果是某元素，则被选中。
 :last-of-type 所有父标签中某元素的最后一个子元素。
```

##### nth类

```html
 :only-child 父标签中只有一个标签，并且是某标签才会被选中
 :only-of-type 所有父标签只有一个某标签时才会被选中
```

##### not类

```html
:not选择器匹配非指定元素/选择器的每个元素 （不是这个元素的其他元素）
```

#### 状态伪类

通常与form和input中的属性使用

```html
  :focus 获得焦点的时候
  :disabled 不可选的
  :enabled 可选的
  :in-range 值在指定区间内
  :out-of-range 值超出区间
  :optional 元素可选时，无必须填写属性
  :required 必须填写项
  :read-only 只读
  :read-write 读写
  :valid 输入值有效，符合要求
  :invalid 输入值无效 ，不符合要求
```

### 伪元素选择器

- 有两个： 

```html
::first-line 用于向文本的首行设置特殊样式，只能用于块级元素。
::first-letter 用于向文本的首字母设置特殊样式。只能用于块级元素。
::after 可以在元素的内容之后插入新内容。
::before 可在元素的内容前面插入新内容。默认地，这个伪元素是行内元素，可使用属性 display 改变这一点。
::selection 可用来匹配突出显示的文本。浏览器默认情况下，选择网站文本是深蓝背景白色字体。
```

- 伪类和伪元素的根本区别在于：它们是否创造了新的元素(抽象)。伪类是在既有元素上添加类别（在逻辑上存在，但并不实际存在于文档树中），而伪类选择器则是添加新元素。

### 继承、层叠与优先级

#### 继承

父元素设置的样式，子元素可以继承

若子元素自己有，就生成自己的，没有才需要继承父元素

#### 层叠

- 在不冲突的时候多个样式可以层叠


- 冲突的时候按不同样式**优先级**来应用样式


**按照就近原则**，也就是写在最后的生效

#### 优先级

公式：！important > 行内样式 > id选择器 > 类选择器 > 标签选择器 > 通配符选择器（全局） > 继承

1. 一般优先级：id > 类 >标签

2. 优先级规则：权值相同就近选择，权值不同区权值高的

3. 权值：

   标签选择器 -- 1；

   类和伪类选择器 -- 10；

   id选择器 -- 100；

   行内样式 -- 1000；

4. 可使用“！important”来调整优先级

## Emmet语法

其实就是快捷键

1. 快速生成HTML结构语法
   1. 生成标签直接输入标签名按tab键即可，比如 div 然后按 tab 键，就可以生成<div></div>
   2. 如果想要生成多个相同标签，加上 * 就可以了，比如 div*4 就可以快速生成4个div了
   3. 如果有父子级关系的标签，可以用>，比如 ul>li 就可以生成了
   4. 如果有兄弟关系的标签，用+就可以了，比如 div+p
   5. 如果生成带有类名或者id名字的，直接写 .demo 或者 #two tab键就可以了
   6. 如果生成的div类名是有顺序的，可以用自增符号$
   7. 如果想要在生成的标签内部写内容可以用 {} 表示
2. 快速生成css样式语法
   - 基本采取简写形式即可


## 字体样式

### 字体属性

#### font-family

字体类型

- 设置多字体方式（使其能够适应更多的计算机和设备）
- 引号的问题（有的字体中间有空格，必须用引号引起来）

font-size：字体大小（默认大小16px），字体大小一般为偶数

| 属性取值 | 字体大小       |
| -------- | -------------- |
| xx-small | 最小           |
| x-small  | 较小           |
| small    | 小             |
| medium   | 正常（默认值） |
| large    | 大             |
| x-large  | 较大           |
| xx-large | 最大           |

#### font-weight

字体粗细（单词[normal正常、bold加粗]； 数字[100-500正常、600-900加粗]）

#### font-style

字体样式（normal正常、italic斜体[italic所有带有倾斜字体的可以设置；oblique没有倾斜属性的字体也可以设置倾斜]）

#### color

字体颜色

复合样式：`font:weight style size family`、`font:style weight size family`、`font:weight style size/line-height family`

```css
p{
    font-family: sans-serif;   /*设置字体*/
    font-size: large;          /*设置字体大小*/
    font-weight: bold;          /*设置字体粗细*/
    font-style: normal;         /*设置字体样式*/
    font-variant: normal;       /*设置字体变形*/    
    color: white;             /*字体颜色*/
}
```



### 文本样式

```css
p{
    text-align: center;             /*字体对齐方式*/
    line-height: normal;            /*行高*/
    vertical-align: middle;         /*内容垂直方式*/
    word-spacing: normal;           /*单词间距*/
    letter-spacing: normal;         /*字母间距*/
    text-transform: none;           /*大小写*/
    text-decoration: none;          /*元素内文本装饰*/
}
```

### 颜色表示

- 单词表示法
- 十六进制表示法
- RGB三原色表示法（范围0-255）

### 盒子模型



#### 盒子模型基本属性

- conten——内容区域
- padding——内边距区域
- border——边框区域
- margin——外边距区域

![image](./image/box.gif)

##### margin（外边距）

> 1、垂直布局的块级元素，上下的margin会合并
>
> ：只需要给一个盒子设置margin即可
>
> 2、互相嵌套的块级元素，子元素的margin-top会作用在父元素上
>
> - 给父元素设置border-top或者paddding-top
> - 给父元素设置overflow：hidden
> - 转换成行内块元素
> - 设置浮动

- margin-top：上边距（auto--水平居中）
- margin-buttom：下边距
- margin-left：左边距
- margin-right：右边距

##### padding（内边距） 

- padding-top：上部填充
- padding-bottom：下部填充
- padding-left：左部填充
- padding-right：右部填充
- padding：X  （上下左右均为X）
- padding：X Y （上下为X，左右为Y）
- padding：X Y Z （上，左右，下）
- padding：X Y Z W （上，右，下，左）

##### border（边界）

- border-top：上边界（**也可以单独对一个边界使用width，style，color**）

  ```html
  border-top-color:red
  ```

- border-bottom：下边界

- border-left：左边界

- border-right：右边界

- border-width：边界宽度

- border-style：边界样式(**常用 soild--实线边框；dashed--虚线边框；dotted--电线边框**)

- border-color：边界颜色

- border-radius：角设置

- border-collapse:collapse;表示相邻边框合并在一起

```css
/*没有顺序*/
border:1px solid red;
```

**复合样式**，为border-width，border-color，border-style组合使用

##### width&height（内容的长与高）

- max-height：最大高度
- min-weith：最小宽度

##### 清除内外边距

```css
* {
    paddomh:0;/*清除内边距*/
    margin:0;/*清除外边距*/
}
```



### 盒子模型高度与宽度

总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距

总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距



添加这句话，可以使前面的传统盒子模型变成css3的盒子模型

**边框、边距不会撑大盒子**

```css
box-sizing:border-box;
```

### 特殊样式

![image](./image/teshu.png)
## 元素

元素之间可以转化，比如行级元素转化成块级元素， display：block，这样就可以了

### 行级元素、内联元素

- inline

feature：内容觉得元素所占位置

不可以通过css改变宽高

span、strong、em、a、del

### 块级元素

- block

feature：独占一行

可以通过css改变宽高

div、p、ul、ol、form、address

### 行级块元素

- inline-block

feature：内容觉得大小

可以改变宽高

img
## 背景 background

**background**：背景颜色  背景图片地址  背景平铺  背景图像滚动  背景图片位置；

在实际开发中，更加提倡这一种写法，减少了许多代码。

**backgroun  d-color**：（颜色）＋颜色名/rgb/十六进制/rgba；

**background-image**：url(图片位置)/none；

**background-repeat**：（背景图片的重复方式，平铺）＋repeat/no-repeat/repeat-x/repeat-y；

**background-attachment**：（背景图片的显示方式）scroll/fixed;

- scroll:默认值，图片随滚动条滚动

- fixed：其他页面滚动时，图片不会滚动

**background-position**：（背景位置，长度，百分比）

## 列表

**list-style-type**：（设置标记样式）关键字/none；
关键字：

```css
    /*有序列表*/
    list-style-type:decimal;        /*从1开始的整数*/
    list-style-type:lower-roman;    /*小写罗马数字*/
    list-style-type:upper-roman;    /*大写罗马数字*/
    list-style-type:lower-alpha;    /*小写英文字母*/
    list-style-type:upper-alpha;    /*大写英文字母*/
    /*无序列表*/
    list-style-type:disc;           /*实心圆点*/
    list-style-type:circle;           /*空心圆点*/
    list-style-type:square;         /*实心方块*/
```

**list-style-image**：（设置图片标记）url/none；

**list-style-position**：（设置标记位置）inside/outside；
## float属性（浮动）

**特点**

1. 浮动元素会脱离标准流，在标准流中不占位置
2. 浮动元素比标准流高半个级别，可以覆盖标准流中的元素
3. 浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右浮动

**基础**

float：left；靠左浮动

float：none；不用浮动

**清除浮动**

clear：none/left/right/both；

clear只会影响自身，不会影响相邻元素；

**清除浮动的基础方法**

- 在父元素内容的最后添加一个块级元素，给添加的块级元素（class="clearfix"）设置clear：both

```css
 - 在浮动后面加一个空元素 <div class="claer"></div>
 - 在浮动元素的容器里面加 overflowe：hidden； 
 - 使用CSS3的：after伪元素
   clearfix：after{
        content:".';
        display:block;
        height:0;
        visibility:hidden;
        clear:both;
    }
```
## 定位position

### **position:staric**(静态定位)

作用：使元素定位于常规/自然流之中
特点：

1. 忽略top、bottom、left、right或者z-index的声明

1. 两个相邻远的元素都设置外边距则最终外边距=两个外边距最大的

1. 具有固定的width和height值的元素，把左右外边距设置为auto，会使这个块水平居中

### **position:relative**(相对定位)

作用：相对定位作用，是一个可定位的元素
特点：

1. 可以使用top、bottom、left、right或者z-index进行相对定位

1. 相对定位元素不会离开常规流

1. 任何元素都可以设置为relative，他的绝对定位后代都可以对他进行绝对定位

1. 可以使浮动元素发生偏移，并控制他们的堆叠顺序

### **position:absolute**(绝对定位)

作用：绝对定位作用，使元素脱离常规流
特点：

1. 设置百分比尺寸会定位父元素

1. left、right、top、bottom设置为0，他将对齐到最近定位父元素的个边

1. left、right、top、bottom设置为auto变回原形

### **position:fixed**(固定定位)

作用：固定定位使其不会随窗口滚动而滚动，并继承absolute的特点

### **position:stick**

作用：吸附定位作用，会与relavitive＋fixed结合造成吸附效果
特点：

1. 即使产生位移，原位置还是在常规流中

1. 最近的父元素有滚动，则偏移至最近的父元素

1. 父元素没有滚动则偏移标准使窗口

1. 上下左右偏移标准

### 元素的显示与隐藏

####  display属性

display属性用于设置一个元素如何显示

- display:none; 隐藏对象（最常用的）
- display:block;  处理转换为块级元素之外，同时还有显示元素的意思

display隐藏元素后，不再占有原来的位置

#### visibility可见性

- visibility:visible;    元素可视
- visibility:visible;    元素隐藏

visibility隐藏元素后，继续占有原来的位置

#### overflow 溢出

overflow:visible;   不剪切内容也不添加滚动条  

overflow:hidden;   不显示超过内容尺寸的内容，超出的部分直接隐藏掉

overflow:scroll;   不管超出内容否，总会显示滚动条

overflow:auto;   超出自动显示滚动条，不超出不显示滚动条  

#### 文本溢出

单行文本溢出：

1. 强制一行内显示文本（会超出文本框）

   white-space：nowrap

2. 超出隐藏

   overflow：hidden

3. 超出的部分用省略号代替

    text-overflow：ellipsis

多行文本溢出：

## 边框与圆角

### 圆角

border-radius 属性是一个简写属性，用于设置四个 border-*-radius 属性。

```css
border-radius: 1-4 length|% / 1-4 length|%;
```

> length:定义圆角的形状。
> %:以百分比定义圆角的形状。

### 盒阴影

box-shadow 属性向框添加一个或多个阴影。不占用空间的

```css
box-shadow: h-shadow v-shadow blur spread color inset;
```

> h-shadow:必需。水平阴影的位置。允许负值。
> v-shadow:必需。垂直阴影的位置。允许负值。
> blur:可选。模糊距离。
> spread:可选。阴影的尺寸。
> color:可选。阴影的颜色。
> inset:可选。将外部阴影 (outset) 改为内部阴影

### 文字阴影

text-shadow属性将阴影应用于文本

```css
text-shadow:h-shadow v-shadow blur color;
```

h-shadow:必需。水平阴影的位置。允许负值。
v-shadow:必需。垂直阴影的位置。允许负值。
blur:可选。模糊距离。
color:可选。阴影的颜色。

### 边界图片

border-image属性使用图片作为对象的边界。

```css
border-image:border-image-source;  //用在边框的图片的路径

border-image:border-image-slice;  //图片边框向内偏移

border-image:border-image-width;  //图片边框的宽度

border-image:border-image-outset;  //边框图像区域超出边框的量

border-image:border-image-repeat;  //图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)
```

## 背景（精灵图）

### 背景图像区域

background-clip属性指定背景绘制区域。

```css
background-clip: border-box;  //默认值。背景绘制在边框方框内（剪切成边框方框）

background-clip:padding-box;  //背景绘制在衬距方框内（剪切成衬距方框）

background-clip:content-box;  //背景绘制在内容方框内（剪切成内容方框）
```

### 背景图片定位

background-origin 属性规定 background-position 属性相对于什么位置来定位。

```css
background-origin: padding-box;  //背景图像相对于内边距框来定位

background-origin: border-box;  //背景图像相对于边框盒来定位

background-origin: content-box;  //背景图像相对于内容框来定位
```

> 注意：如果背景图像的 background-attachment 属性为 “fixed”，则该属性没有效果。

### 背景图片大小

background-size 属性规定背景图像的尺寸。

```css
background-size: length;  //设置背景图像的高度和宽度。第一个值设置宽度，第二个值设置高度。如果只设置一个值，则第二个值会被设置为 “auto”。

background-size: percentage;  //以父元素的百分比来设置背景图像的宽度和高度。第一个值设置宽度，第二个值设置高度。如果只设置一个值，则第二个值会被设置为 “auto”。

background-size: cover;  //把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。背景图像的某些部分也许无法显示在背景定位区域中。

background-size: contain;  //把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域
```

## css用户界面样式

### 鼠标样式 cursor

设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状

style属性

- cursor:default;   默认
- cursor:pointer;    小手
- cursor:move;     移动
- cursor:text;     文本
- cursor:not-allowed;    禁止  

#### 轮廓线 outline

outline:none;  取消轮廓线

#### 取消拖拽文本域  resize

resize:none;  

#### vertical-align属性应用

设置图片或者表单和文字垂直对齐

vertical-align：middle
## 渐变

### 线性渐变

为了创建一个线性渐变，你必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以设置一个起点和一个方向（或一个角度）。

```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

> color用rgba可调整透明度

#### 上下

```css
background-image: linear-gradient(color-stop1, color-stop2);
```

#### 左右

```css
background-image: linear-gradient(to right,color-stop1, color-stop2);
```

#### 对角

```css
background-image: linear-gradient(to bottom right,color-stop1, color-stop2);
```

#### 角度

角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。

```css
background-image: linear-gradient(90deg,color-stop1, color-stop2);
```

![image](./image/diaodu.jpg)

#### 多颜色结点

彩虹色：

```css
 background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
```

#### 重复线性渐变

```css
background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
```

### 径向渐变

径向渐变由它的中心定义。
为了创建一个径向渐变，你也必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。

```css
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```

#### 颜色节点均匀分布

```css
background-image: radial-gradient(color1, color2, color3);
```

#### 颜色节点不均匀分

```css
background-image: radial-gradient(color1 5%, color2 15%, color3 60%);
```

#### 形状

shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。

```css
background-image: radial-gradient(circle,color1, color2, color3);
```

#### 不同尺寸的关键字

size 参数定义了渐变的大小。它可以是以下四个值：

> closest-side：最近边
> farthest-side：最远边
> closest-corner：最近角
> farthest-corner：最远角

```css
background-image: radial-gradient(closest-side at 60% 55%,color1, color2, color3);
```

#### 重复径向渐变

```css
background-image: repeating-radial-gradient(color1 5%, color2 15%, color3 60%);
```

## 2D转换

顺序问题：移动放在最前

### 旋转

rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。

```css
transform: rotate(Xdeg);  度数
```

### 转换中心点

设置元素转换的中心点

- 方位：left bottom
- 元素的中心点（百分比，百分比）

```
transform-orgin:x y;
```



### 移动

translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。

百分比单位是相对于自身元素的百分比

```css
transform: translate(Xpx,Ypx);
transform: translateX(n);
transform: translateY(n);
```

### 缩放

scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：

可以设置转换中心，默认以中心点缩放，不会影响其他盒子

```css
transform: scale(X,Y);
```

### 扭曲

skew() 方法,包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。

> skewX();表示只在X轴(水平方向)倾斜。
> skewY();表示只在Y轴(垂直方向)倾斜。

```css
transform: skew(Xdeg,Ydeg);
```

## 3D转换

### 旋转

```css
transform: rotate3d(x,y,z,angle);  //x,y,z代表方向
```

- rotateX()方法，围绕其在一个给定度数X轴旋转的元素。

```css
transform: rotateX(Xdeg);
```

- rotateY()方法，围绕其在一个给定度数Y轴旋转的元素。

```css
transform: rotateY(Ydeg);
```

- rotateZ()方法，围绕其在一个给定度数Z轴旋转的元素。单位一般为px

```css
transform: rotateZ(Zdeg);
```

### 平移

```css
transform: translate3d(Xpx,Ypx,Zpx);
```

### 缩放

```css
transform: scale3d(X,Y,Z);
```
## 扩展属性

### 坐标系统

transform-Origin属性允许更改转换元素的位置。

> 注意：2D转换元素可以改变元素的X和Y轴。 3D转换元素，还可以更改元素的Z轴。使用此属性必须先使用transform 属性。

```css
transform-origin: x-axis y-axis z-axis;
```

> x-axis:定义视图被置于 X 轴的何处。可能的值：left、center、right、length、%
>
> y-axis:定义视图被置于 Y 轴的何处。可能的值：top、center、bottom、length、%
>
> z-axis:
> 定义视图被置于 Z 轴的何处。可能的值：length

### CSS3矩阵

基本格式：

```css
transform: matrix(a,b,c,d,e,f);
```

其中abcdef为

![avatar](./image/juzhen1.png) 

应用中为

![avatar](./image/juzhen2.png) 
其中:
ax+cy+e = 横坐标
bx+dy+f = 纵坐标

**translate 矩阵**

```css
transform: matrix(1, 0, 0, 1, X, Y); // X 横向平移, Y 纵向平移
```

**scale 矩阵**

```css
transform: matrix(matrix(A, 0, 0, B, 0, 0); // 将 X 轴缩放 A 倍,将 Y 轴缩放 B 倍
```

**skew 矩阵**

```css
transform: matrix(1,tan(A),tan(B),1,0,0); // 将 Y 轴向 X 轴倾斜 A°, 将 X 轴向 Y 轴倾斜 B°
```

**3D变换矩阵**
矩阵有变化

![avatar](./image/3djuzhen.png) 

```css
transform: matrix3d(sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1)
```

### transfrom-style

写给父盒子

transform–style属性指定嵌套元素是怎样在三维空间中呈现。

```css
transform-style: flat;
transform-style: preserve-3d;
```

> flat:表示所有子元素在2D平面呈现。
> preserve-3d:表示所有子元素在3D空间中呈现。

### perspective

perspective 属性允许设置3D元素的透视关系。

> 注意：perspective 属性只影响 3D 转换元素，与 perspective-origin 属性一同使用

```css
perspective: number|none;
```

> number:元素距离视图的距离，以像素计。
> none:默认值。与 0 相同。不设置透视。

### perspective-origin

perspective-origin 属性定义 3D 元素所基于的 X 轴和 Y 轴标准。

> 注意：它是一个元素的子元素，透视图，而不是元素本身。常与perspective属性组合使用。

```css
perspective-origin: x-axis y-axis;
```

> x-axis:定义该视图在 x 轴上的位置。默认值：50%。
> 可能的值： left 、 center 、right 、 length 、 %

> y-axis:定义该视图在 y 轴上的位置。默认值：50%。
> 可能的值： top 、 center 、 bottom 、 length 、 %

### backface-visibility

backface-visibility 属性定义当元素不面向屏幕时是否可见。

> 注意：如果在旋转元素不希望看到其背面时，该属性很有用处。

```css
backface-visibility: visible|hidden;
```

> visible:背面是可见的。
> hidden:背面是不可见的。

### 注意

使用过程中记得考虑兼容性

| 前缀     | 浏览器         |
| -------- | -------------- |
| -webkit- | chrome、safari |
| -moz-    | firefox        |
| -ms-     | IE             |
| -o-      | opera          |

## 图片模糊处理

```
filter:函数();
filter:blur(5px);	blur 模糊处理，数值越大越模糊
```

## 计算盒子宽度calc

```
width:calc(100% -80px);
```



## CSS3过渡

过渡动画：是从一个状态渐渐过渡到另外一个状态

通常和`:hover`一起使用

```
transition: 要过度的属性 花费时间 运动曲线 何时开始;
```

- 属性：想要变化的css属性，宽度高度、背景颜色、内外边距都可以。所有属性写all
- 花费时间：单位是秒（必须要写单位）
- 运动曲线：默认是ease（可以省略）
- 何时开始：单位是秒（必须写单位），可以设置延迟触发事件，默认为0s，可以省略

####  **1、transition-property**

说明：检索或者设置对象中的参与过渡的属性
`transition-property:none/all/property;`

> none：无属性改变
> all：全属性改变。默认值
> property：元素属性名

#### **2、transition-duration**

说明：检索或者设置对象过渡的持续时间
`transition-duration：time；`

> time：规定完成过渡效果需要花费的时间

#### **3、transition-timing-function**

说明：检索或者设置对象中过渡的动画类型

```css
    transition-timing-function: linear; //线性过渡，贝塞尔曲线（0.0，0.0，1.0，1.0）
    transition-timing-function: ease; //平滑过渡，贝塞尔曲线（0.25，0.1，0.25，1.0）
    transition-timing-function: ease-in; //由慢到快，贝塞尔曲线（0.42，0，1.0，1.0）
    transition-timing-function: ease-out; //由快到慢，贝塞尔曲线（0，0，0.58，1.0）
    transition-timing-function: ease-in-out; //由慢到快再到慢，贝塞尔曲线（0.42，0，0.58，1.0）
    transition-timing-function:cubic-bezier(n,n,n,n); //贝塞尔曲线
```

#### **4、transition-delay**

说明：检索或者设置对象延迟过渡时间
`transition-delay：time；`

> time：切换效果开始前要等待的时间

## 动画

1. 定义动画
2. 调用动画

### 创建动画

**@keyframes规则**

```css
    @keyframes animationname {
        keyframes-selector {css-styles;}
    }
```

- animationname:必需的。定义animation的名称。

- keyframes-selector:必需的。动画持续时间的百分比。合法值：**0-100%**。  其中from (和0%相同)，to (和100%相同)

> 可以用一个动画keyframes-selectors。

- css-styles:必需的。一个或多个合法的CSS样式属性

```css
/* from to 相当于 0% 到 100% */
/*定义淡出动画*/
@keyframes fadein {
         0%{
    opacity: 0;     
    }

        50% {
    opacity: 0; 
    }
        100% {
    opacity: 1; 
    } 
}
```

### CSS3动画

```
animation: 动画名称 持续时间 运动曲线 播放次数 是否反方向 动画起始或者结束的状态
```



#### 1、**animation-name**

说明：属性检索或者设置对象所应用的动画名称
`animation-name: keyframename/none;`

> keyframename：指定要绑定到选择器的关键帧的名称；
> none：指定有没有动画（可用于覆盖从级联的动画）；

#### 2、**animation-duration**

说明：属性检索或者设置对象动画的持续时间
`animation-duration: time;`

> time：指定动画播放完成花费的时间
> 注意：如果只设置动画播放一次，该属性将不起作用。

#### 3、**animation-timing-function**

说明：检索或者设置对象动画的过渡类型

```css
    animation-timing-function: linear; //线性过渡，贝塞尔曲线（0.0，0.0，1.0，1.0）
    animation-timing-function: ease; //平滑过渡，贝塞尔曲线（0.25，0.1，0.25，1.0）
    animation-timing-function: ease-in; //由慢到快，贝塞尔曲线（0.42，0，1.0，1.0）
    animation-timing-function: ease-out; //由快到慢，贝塞尔曲线（0，0，0.58，1.0）
    animation-timing-function: ease-in-out; //由慢到快再到慢，贝塞尔曲线（0.42，0，0.58，1.0）
    animation-timing-function:cubic-bezier(n,n,n,n); //贝塞尔曲线
  animation-timing-function:steps();//指定了时间函数中的间隔数量（步长）
```

#### **4、animation-delay**

说明：属性检索或者设置对象动画延迟时间
`animation-delay: time;`

> animation-delay 值单位可以是秒（s）或毫秒（ms）。
> 允许负值，-3s 是跳过前3s动画

#### **5、animation-iteration-count**

说明：属性检索或者设置对象的循环次数
`animation-iteration-count: value;`

> value：一个数字，定义应该播放多少次动画
> infinite：指定动画应该播放无限次（永远）

#### **6、animation-direction**

说明：检索或者设置对象动画在循环中是否反向运动
`animation-direction: normal/reverse/alternate/alternate-reverse/initial/inherit;`

> normal：默认值。动画按正常播放。
>
> reverse：动画反向播放。
>
> alternate：动画在奇数次（1、3、5…）正向播放，在偶数次（2、4、6…）反向播放。
>
> alternate-reverse：动画在奇数次（1、3、5…）反向播放，在偶数次（2、4、6…）正向播放。
>
> initial：设置该属性为它的默认值。
>
> inherit：从父元素继承该属性。

#### **7、animation-fill-mode**

说明：规定当动画不播放的时候，应用的元素样式
`animation-fill-mode: none/forwards/backwards/both/initial/inherit;`

> none：默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。
>
> forwards：在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值。
>
> backwards：动画将应用在 animation-delay定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 “normal” 或 “alternate” 时）或 to 关键帧中的值（当 animation-direction 为 “reverse” 或 “alternate-reverse” 时）。
>
> both：动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。
>
> initial：设置该属性为它的默认值。
>
> inherit：从父元素继承该属性。

#### **8、animation-play-state**

说明：属性指定动画是否正在运行或者已停止
`animation-play-state: paused/running;`

> paused：指定暂停动画
> running：指定正在运行的动画

## 流式布局

很少用

```
section div{
样式
}
```



## flexbox布局

### 容器属性

主轴、侧轴  相当于x轴、y轴或行和列

#### flex-direction

flex-direction 属性指定了弹性子元素在父容器中的位置。

设置主轴的方向

```css
flex-direction: row;                //横向从左到右排列（左对齐），默认的排列方式。从左到右
flex-direction: row-reverse;        //反转横向排列（右对齐，从后往前排，最后一项排在最前面。)从右到左
flex-direction: column;             //纵向排列。从上到下
flex-direction: column-reverse;     //反转纵向排列，从后往前排，最后一项排在最上面。从下到上
```

#### justify-content

内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。

设置主轴上的子元素排列方式

```css
justify-content: flex-start;        //弹性项目向行头紧挨着填充。默认从头部开始，如果主轴是x轴，则从左到右
justify-content: flex-end;          //弹性项目向行尾紧挨着填充。从尾部开始排列
justify-content: center;            //弹性项目居中紧挨着填充.在主轴剧中对齐,如果主轴是x轴，则水平居中
justify-content: space-between;     //弹性项目平均分布在该行上。先两边贴边，再平分剩余空间
justify-content: space-around;      //弹性项目平均分布在该行上，两边留有一半的间隔空间。平分剩余空间
```

#### align-items

align-items 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。

设置侧轴上的子元素的排列方式（单行） 

```css
align-items: flex-start;	//从上到下
align-items: flex-end;	//从下到上
align-items: center;	//垂直居中
align-items: baseline;          //如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
align-items: stretch;	//拉伸，子盒子不给高度      //如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。
```

#### flex-wrap

flex-wrap 属性用于指定弹性盒子的子元素换行方式。

设置子元素是否换行

```css
flex-wrap: nowrap;                  //默认单行
flex-wrap: wrap;                    //多行            
flex-wrap: wrap-reverse;            //反转 wrap 排列。
```

#### flex-flow

符合属性，相当于同时设置了flex-direction和flex-wrap

flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
.box {
  flex-flow: row nowrap;
}
```

#### align-content

align-content 属性用于修改 flex-wrap 属性的行为。类似于 align-items, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。

设置侧轴上的子元素的排列方式（多行）

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

> stretch - 默认。各行将会伸展以占用剩余的空间。

> flex-start - 各行向弹性盒容器的起始位置堆叠。

> flex-end - 各行向弹性盒容器的结束位置堆叠。

> center -各行向弹性盒容器的中间位置堆叠。

> space-between -各行在弹性盒容器中平均分布。

> space-around - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。

### 子元素属性

#### 1. **order : 1**

用整数值来定义排列顺序，数值小的排在前面。可以为负值。

#### 2. **align-self**

控制子项自己在侧轴上的排列方式

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

> auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。
> flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
> flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
> center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
> baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
> stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

#### 3. **flex**：1

flex 属性用于指定弹性子元素如何分配空间。

flex属性定义子项目分配剩余空间，用flex来表示占多少份数

```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

#### 4. flex-grow

flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

#### 5. flex-shrink

flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

#### 6. flex-basis

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小

![avatar](./image/flex.png) 

Adblocker

## Grid布局

即网格布局

### 容器

和flex类似，需要给个容器

```css
div {
  display: grid;
}
```

对于网格布局
如图

![avatar](./image/wangge.png) 

### grid-template

### 行与列

设置行宽与宽高，单位可以用px、%、fr、em、还有`repeat()`进行方便改写

> 列 : `grid-template-columns`
> 行 : `grid-template-rows`

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);

  //或者重复某一模式 grid-template-columns: repeat(2, 100px 20px 80px);
}
```

**自动填充列数可以用`auto-fill`关键字**

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

**定义长度范围`minmax()`**

```css
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
```

**自动填充长度`auto`**

```css
grid-template-columns: 100px auto 100px;
```

### 网格线命名

`grid-template-columns`属性和`grid-template-rows`属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

### grid-template

```css
/* 为 grid-template-rows / grid-template-columns */
  grid-template: 1fr 1fr/ifr 1fr;
```

### grid-gap

设置间隔

```css
.container {
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
```

又或者`grid-gap: <grid-row-gap> <grid-column-gap>;`

```css
.container {
  grid-gap: 20px 20px;
}
```

### grid-template-areas

设置区域

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

> 有区域不用时，用`.`表示

### grid-auto-flow

设置顺序

```css
grid-auto-flow: row;        //默认。先行后列
grid-auto-flow: column;         //先列后行
grid-auto-flow: row dense;      //先行后列，并且尽可能紧密填满，尽量不出现空格。
grid-auto-flow: column dense;       //先列后行，并且尽可能紧密填满，尽量不出现空格。
```

### items

分`justify-items`、`align-items`和`place-items`

设置单元格内容的位置

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

其中

- start：对齐单元格的起始边缘。

- end：对齐单元格的结束边缘。

- center：单元格内部居中。

- stretch：拉伸，占满单元格的整个宽度（默认值）。

`place-items`即简写

```css
place-items: <align-items> <justify-items>;
```

### content

分`justify-content`、`align-content`和`place-content`

设置内容的位置

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```

- start - 对齐容器的起始边框。

- end - 对齐容器的结束边框。

- center - 容器内部居中。

- stretch - 项目大小没有指定时，拉伸占据整个网格容器。

- space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。

- space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。

- space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

`place-content`即简写

```css
place-content: <align-content> <justify-content>；
```

## rem布局

### rem单位

rem是一个相对单位，类似于em，em是相对于父元素字体大小

> rem的基准是相对于html的字体大小
>
> 优点：可以通过修改html里面的字体大小来改变页面中元素的大小，可以整体控制

### 媒体查询

- 使用@media查询，可以针对不同的媒体类型定义不同的样式
- @media可以针对不同的屏幕尺寸设置不同的样式
- 当你重置浏览器大小的过程中，页面会根据浏览器的宽高重新渲染页面
- 目前针对很多苹果手机、安卓手机，平板等设备都用得到多媒体查询

```css
@media mediatype and|not|only (media feature){
样式
}
```

@media 开头

**mediatype	媒体类型**

- all——所有设备
- print——打印机和打印预览
- scree——电脑屏幕、平板电脑、智能手机等

**关键字**

- and——多个媒体特性连接到一起
- not——排除某个媒体类型
- only——指定某个特定的媒体类型，可以省略

**media feature**	媒体特性，必须要小括号包含

- width——定义输出设备中页面可见区域的宽度
- min-width——定义输出设备中页面最小可见宽度
- max-width——定义输出设备中页面最大可见宽度

### 媒体查询引入资源

> 其实就是针对不同的屏幕尺寸，调用不同的css

link

## less

css扩展语言，也称为css预处理器

在css的基础上，引入变量，Mixin，运算及函数等、

文件后缀为less

### less基础

#### 1、less变量

变量是指没有固定的值，可以改变的

```css
@变量名:值;
```

> 变量名：不能包含特殊字符、不能以数字开头、大小写敏感

#### 2、less编译

保存，就可以生成一个css

#### 3、less嵌套

- 子元素的样式直接写到父元素的样式里面即可

```less
#header {
	.logo {
		width:300px;	
	}
}
```

如果遇到（交集|伪类|伪元素选择器）

- 内层选择器的前面没有**&**符号，则它被解析为父选择器的后代
- 如果有**&**符号，它就被解析为父元素自身或父元素的伪类

```less
#header {
	.logo {
		&:hover {
			color:bule;
		}	
	}
}
```

#### 4、less运算

任何数字、颜色或者变量都可以进行运算

```less
@width: 20px -50;
```

- 运算符的左右两侧必须空格隔开
- 两个数参与运算，如果只有一个数有单位，则结果以这个单位为准
- 如果两个数都有单位，则结果以第一个单位为准

### rem适配方案

1、rem+媒体查询+less技术

2、flexible.js+rem

![avatar](./image/remstyle.png) 

## 项目属性

### 定位

`grid-column-start` 属性

> 左边框所在的垂直网格线

`grid-column-end` 属性

> 右边框所在的垂直网格线

`grid-row-start` 属性

> 上边框所在的水平网格线

`grid-row-end` 属性

> 下边框所在的水平网格线

```css
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

**span代表跨域**

```css
.item-1 {
  grid-column-start: span 2;
}
```

> 会产生重叠

**简写**

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

 **grid-area**

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

### 位置

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

**place-self简写**

```css
place-self: <align-self> <justify-self>;
```

## CSS 滑动栏样式

> ::-webkit-scrollbar-corner 边角
> ::-webkit-resizer 定义右下角拖动块的样式

### 1、::-webkit-scrollbar

定义了滚动条整体的样式；如宽度啥的

> ::-webkit-scrollbar-button 滚动条两端的按钮

### 2、::-webkit-scrollbar-thumb

滑块部分；

> ::-webkit-scrollbar-track-piece  内层滚动槽=

### 3、::-webkit-scrollbar-track

轨道部分；

### 简易样式1

```css
.test-1::-webkit-scrollbar {/*滚动条整体样式*/
        width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
}
.test-1::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        background: #535353;
}
.test-1::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        border-radius: 10px;
        background: #EDEDED;
}
```

### 简易样式2

```css
.test-5::-webkit-scrollbar {/*滚动条整体样式*/
    width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}
.test-5::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        border-radius: 10px;
        background-color: #F90;
        background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent);
}
.test-5::-webkit-scrollbar-track {/*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        /*border-radius: 10px;*/
        background: #EDEDED;
}
```