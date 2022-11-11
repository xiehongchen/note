## symbol

### 1、什么是symbol

> Symbol是ES6中引入的一种新的基本数据类型，用于表示一个独一无二的值。它是JavaScript中的第七种数据类型，与undefined、null、Number（数值）、String（字符串）、Boolean（布尔值）、Object（对象）并列。

创建：

```js
const a = Symbol();

console.log(a);  //Symbol()
```

- 使用Symbol函数可以生成一个Symbol类型的值，但是你不能在调用Symbol时使用new关键字，因为Symbol是基本数据类型，而不是对象

使用Symbol()创建一个Symbol类型的值并赋值给a变量后，你就得到了一个在内存中独一无二的值。现在除了通过变量a，任何人在任何作用域内都无法重新创建出这个值。例如当你这样写：

```
const b = Symbol();
```

尽管a和b都是使用Symbol()创建出来的，但是它们在内存中看起来却是这样的：

![symbol](C:\Users\谢红尘\笔记\图片\symbol.png)

实际上，a变量拿到了内存中某块内存的唯一引用（这里所说的引用，其实就是该内存的地址）。如果不借助a变量，你不可能再得到这个地址。因此：

```
a !== b;  //a和b持有的是两块内存的引用

const c = a;  //手动把a里保存的地址保存在c变量中
a === c;  //c和a现在指向同一块内存，因为它们保存了同样的地址
```

![symbol1](C:\Users\谢红尘\笔记\图片\symbol1.png)

### 2、Symbol的作用

如果a中的属性是使用Symbol类型的变量作为键，那么它就无法被篡改：

```js
//模块A.js
var s = Symbol();
var a = {
	name: "夕山雨",
	//s是个变量，因此需要用中括号包裹起来
    [s]: function(){  
        return this.name;
    }
}
exports default a;

//模块B.js
var a = require("A.js");
var s = Symbol();

a[s] = function(){
    ...  //它不会对A模块中的[s]属性造成任何影响，因为两个模块的[s]不是同一个属性
}
```

- 现在，我们使用一个Symbol类型的变量作为对象属性的键。由于s是一个**变量**，而不是字符串，因此需要使用**中括号**括起来（否则它会被当做字符串对待）。
- 通过把对象的属性的键值设置为Symbol类型，我们有效避免了对象属性被修改，在模块化开发中，对象本身也就更安全。

![symbol2](C:\Users\谢红尘\笔记\图片\symbol2.png)

通常来说，如果想要修改对象的某个属性，那么你首先需要获得这个属性的键，参考上面的内存图，实际上就是获得这个键在**内存中的地址**（也就是变量s指向的那个内存区）。

### 3、Symbol的语法规范

#### 1、基本语法

创建一个Symbol变量：

```
var s = Symbol();
```

由于**Symbol不是继承自Object**，因此不可以使用**new关键字**来生成Symbol变量。使用上述语句创建的变量s，在控制台中进行输出时会显示为Symbol()。假如有另一个变量：

```js
var b = Symbol();

console.log(s);  //Symbol()
console.log(b);  //Symbol()
```

变量s和变量b并不是同一个值，但它们在控制台的输出却是一样的，这样不利于我们区分两个变量。为此，我们可以在调用Symbol的时候传入一个字符串作为对当前Symbol变量的描述：

```
var s = Symbol("symbol1");
var b = Symbol("symbol2");

console.log(s); //Symbol("symbol1")
console.log(b); //Symbol("symbol2")
```

现在我们可以在控制台中区分开变量s和变量b了。

需要注意的是，**使用相同描述符的两个Symbol并不相等**：

```
var s = Symbol("s");
var b = Symbol("s");

s !== b;
```

如果你希望得到一个Symbol的**描述符**，可以借助Symbol原型上的description属性（Symbol.prototype.description）：

```js
let sym = Symbol('My symbol');
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'

let sym2 = Symbol();
Boolean(sym2) // true
```

Symbol还可以显式的转化为字符串或布尔值，**但是不能转化为数值**：

```js
let sym = Symbol('My symbol');
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'

let sym2 = Symbol();
Boolean(sym2) // true
```

#### 2、Symbol属性的遍历

- 以Symbol类型的变量作为对象属性时，该属性不会出现在for … in、for … of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。

> 但该属性并不是私有属性，它可以被专门的Object.getOwnPropertySymbols()方法遍历出来。该方法返回一个数组，包含了当前对象的所有用作属性名的Symbol值：

```html
var s1 = Symbol('a');
var s2 = Symbol('b');

var a = {
    name: "夕山雨",
    [s1]: 24,
    [s2]: function(){}
}

var s = Object.getOwnPropertySymbols(a); //[Symbol(a), Symbol(b)]
a[s[0]] = 24; //返回的数组元素不是字符串，而是实际的Symbol值，
               //因此可以通过它引用到对象的该属性
```

- 因此遍历该方法的返回值即可遍历所有的Symbol属性

> ES6新增的Reflect.ownKeys()方法可以遍历出所有的常规键名和Symbol键名。语法为:

```
Reflect.ownKeys(a); //["name", Symbol(a), Symbol(b)]
```

#### 3、Symbol.for()，Symbol.keyFor()

Symbol提供了一种可以创建相同Symbol的机制，就是使用Symbol.for()方法进行注册。通过该方法生成的Symbol会根据描述符进行全局注册，之后再次通过Symbol.for()传入相同的描述符时，就可以得到相同的Symbol值。如：

```js
var s1 = Symbol.for('symbol');  //向全局注册了以"symbol"为描述符的Symbol	浅拷贝
//由于描述符"symbol"已被注册到全局，因此这里创建的Symbol与上面是同一个
var s2 = Symbol.for('symbol');  

s1 === s2;
```

这里指的全局不单指该变量所在的作用域，它在各个iframe甚至service worker中都是有效的，因此这是一种允许不同作用域创建相同Symbol的机制。

如果你想得到一个全局注册的Symbol的描述符，可以使用Symbol.keyFor()方法：

```
Symbol.keyFor(s1);  //"symbol"
```

它输出了变量s1的全局注册标识符“symbol”。

#### 4、内置的Symbol值

##### 1. Symbol.hasInstance

当使用instanceof运算符判断某个对象是否为某个构造函数的实例时，就是在调用该构造函数上的静态方法[Symbol.hasInstance]，它是js引擎预先定义好的。如：

```js
[] instanceof Array;  //true

//浏览器实际上是在调用下面的方法
Array[Symbol.hasInstance]([]);
```

实际上，instanceof右侧不要求一定是构造函数，也可以是一个普通的对象，只要该对象实现了[Symbol.hasInstance]方法即可。如：

```js
//1. 使用构造函数 
function F(){
    this[Symbol.hasInstance] = function(obj){
        return obj.constructor === F;
    }
}
var f = new F();
f instanceof new F();  //true

//2. 使用class
class MyClass {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof new MyClass() // true

//3. 直接使用一个实现了Symbol.hasInstance的对象
var a = {
  [Symbol.hasInstance](foo) {
    return foo instanceof Array;
  }
}

[1, 2, 3] instanceof a // true
```

- 总的来说，instanceof的行为就是，遇到a instanceof b这样的语句，就调用b[Symbol.hasInstance](a)，该函数的返回值就是该语句的返回值。这里如果b是构造函数，就调用它的静态方法，如果是对象，就调用它的实例方法或原型方法。

- 不过，如果instanceof右侧不包含[Symbol.hasInstance]方法，那么浏览器会抛出这样的错误：Right-hand side of ‘instanceof’ is not callable，表示右侧不可被instanceof运算符调用。

##### 2、Symbol.isConcatSpreadable

属性决定了当前对象作为`concat`的参数时是否可以展开。通常：

```js
var obj = {age: 24};
[1].concat(obj); //[1, {age: 24}]
```

obj被传入concat后会直接作为一个元素添加到数组中。通过将obj的Symbol.isConcatSpreadable属性设置为true，obj会在执行concat时尝试展开，如果该对象无法展开，obj不会被拼接到数组中去。所谓的可展开，指的是obj是否为数组或类数组结构。如果obj是数组，显然是可展开的，如果它有length属性，并且有"0"，"1"这样的属性键，那么它就是类数组，也是可以展开的：

```js
//设置了该对象需要展开，但它无法展开，因此最终结果为[]
var obj = {age: 24, [Symbol.isConcatSpreadable]: true};
[].concat(obj); //[]

//这是一个类数组对象，它是可展开的
var obj = {
  length: 2, 
  "0": 24, 
  "1": 25, 
  name: "夕山雨",
  [Symbol.isConcatSpreadable]: true
};
//name属性被丢弃了，因为它无法被obj[index]的方式引用到
[].concat(obj); //[24, 25]
```

##### 3、Symbol.species

该属性用于在继承的时候指定一个类的类别。如：

```js
class T1 extends Promise {
}

class T2 extends Promise {
  static get [Symbol.species]() {
    return Promise;
  }
}

new T1() instanceof T1 // true
new T2() instanceof T2 // false
```

对于T1，由它构造出的实例默认都是T1的实例。而在T2中我们为该类定义了[Symbol.species]方法，它始终返回Promise，因此由T2构造出的实例都不再被认为是T2的实例，而是Promise的实例。

该方法允许我们在定义衍生对象时，人为指定由它构造出的实例的构造函数。

##### 4、Symbol.match/replace/search/split

这四个方法允许我们以对象的方式**自定义**String的match、replace、search、split方法。以match为例，我们通常这样调用它：

```js
var s = "hello";
s.match(RegExp);  //匹配一个正则表达式
```

假如我们需要为当前的字符串s定制一个自己的match方法，但是又不希望修改String原型上的match方法（因为这样会影响到其他的字符串调用match方法）。Symbol.match就为我们提供了这种能力。

对于上面的例子，如果传入的对象具有[Symbol.match]方法，那么js引擎就会修改match方法默认的行为，去调用定义的[Symbol.match]方法。如:

```js
var a = {
    [Symbol.match](){
        return true;
    }
}

"hello".match(a);  //true
```

当调用字符串的match方法并传入具有[Symbol.match]属性的对象时，js引擎就会调用对象的这个方法。

上面的写法等同于下面的写法：

```js
a[Symbol.match]("hello");  //true
```

replace、search和split也是相同的原理。下面分别给一个简单的例子：

**replace:**

```js
const x = {};
x[Symbol.replace] = (...s) => console.log(s);

'Hello'.replace(x, 'World') // ["Hello", "World"]
```

由于replace的第一个参数有[Symbol.replace]方法，因此js引擎会调用这个方法，并把调用者‘Hello’和第二个参数‘World’作为参数传递给该方法。这样，上面的写法就等同于：

```js
x[Symbol.replace]("Hello", "world");
```

**search:**

```js
var a = {
    [Symbol.match](){
        return true;
    }
}

"hello".search(a);  //true
```

- 原理同match

**split：**

```js
var a = {
    sep: ",",
    [Symbol.match](t){
        return t.split(this.sep);
    }
}

"hello,world".split(a);  //["hello", "world"]
```

- 原理也与match相同

##### 5、Symbol.iterator

定义一个对象的遍历器方法。凡是具有[Symbol.iterator]方法的对象都是可遍历的，可以使用for … of循环依次输出对象的每个属性。数组和类数组，以及ES6新增的Map、Set等都原生部署了该方法，因此它们都可遍历。如：

```js
for(var item of [1,2,3]){
  console.log(item); //依次输出1，2，3
}
```

任何一个数组都具备这个原生的遍历器方法：

```js
> [][Symbol.iterator]

< ƒ values() { [native code] } //C++实现
```

普通对象默认不具有该遍历器方法，因此无法用for … of循环遍历出对象所有的属性值。如果你希望让普通对象可遍历，可以手动为该对象定义遍历器方法，如：

```js
var a = {
    name: "夕山雨",
    age: 24,
    [Symbol.iterator]: function* (){
        yield this.name;
        yield this.age;
    }
}
```

这里为了简单，使用了ES6的Generator函数，它定义该遍历器先输出name属性，再输出age属性。因此当你用for … of来输出a的属性值时，就可以得到结果：

```js
for(var item of a){
  console.log(item);  //依次输出："夕山雨"  24
}
```

##### 6、Symbol.toPrimitive

该方法定义了一个对象如何被转化为一个基本数据类型。通常对象是不能直接与基本数据类型的变量进行运算的，但是如果你为它定义了[Symbol.toPrimitive]方法，它就可以按照你所指定的规则转化为基本数据类型。它接收一个字符串，表示需要转换成的数据类型：

```js
let obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'number':
        return 123;
      case 'string':
        return 'str';
      case 'default':
        return 'default';
      default:
        throw new Error();
     }
   }
};

2 * obj // 246
3 + obj // '3default'
obj == 'default' // true
String(obj) // 'str'
```

这里表示，如果对象需要转化为数字，就返回123；如果需要转化为字符串，就转化为’str’；如果没有指定要转化的类型，那就返回字符串’Default’。

由于乘法运算*只能对数值操作，因此js引擎会调用[Symbol.toPrimitive]并传入"number"，将obj转化为数字。而加法既可以对数值生效，也可以对字符串生效，因此js引擎传入了"default"。该方法默认只接受number、string和default这三个值。

##### 7、Symbol.toStringTag

可以自定义对象的toString()方法。通常对象的toString方法会返回一个类似[object Object]的字符串，表示该对象的类型，如：

```js
var a = {};

a.toString();  //"[object Object]"
```

但是如果你修改了对象的Symbol.toStringTag方法，返回值就会发生变化：

```js
a[Symbol.toStringTag] = function(){
  return "xxx";
}
a.toString(); //"[object xxx]"
```

可以看到，我们定义的返回值覆盖了之前的字符串中的后半部分“Object”，因此该方法可以用于定制对象的toString()的返回值。

##### 8、Symbol.unscopables

该方法用于with语句。它指定在使用with语句时，哪些属性不属于with环境。举个例子：

```js
var author = {
    name: "夕山雨",
    age: 24,
    stature: "179",
    weight: 65
}

var name = "张三";
var age = "28";

with(author){
  console.log(name);  //“夕山雨”
  console.log(age);   //24
  console.log(stature);  //"179"
  console.log(weight);   //65
}
```

默认情况下，对于with语句内引用的变量，js引擎会优先去with的作用对象上查找对应的属性，如果找不到，才认为是外部变量。但是你可以人为指定哪些属性不应该去作用对象上查找，如：

```js
var author = {
    name: "夕山雨",
    age: 24,
    stature: "179",
    weight: 65,
    get [Symbol.unscopables](){
      return { name: true, age: true }
    }
}

var name = "张三";
var age = "28";
var stature = "153";
var weight = 80;

with(author){
  console.log(name);  //“张三”
  console.log(age);   //28
  console.log(stature);  //"179"
  console.log(weight);   //65
}
```

可以看到，由于我们认为指定了name和age两个属性不作用域with环境，因此这里的name和age输出的是外部的变量，而stature和weight输出的仍然是author的属性值。