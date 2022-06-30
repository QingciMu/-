# TypeScript

## TypeScript的特性

Typescript最重要的两个特性-类型系统、适用于任何规模

### 类型系统

JavaScript 是一门非常灵活的编程语言：

- 它没有类型约束，一个变量可能初始化时是字符串，过一会儿又被赋值为数字。
- 由于隐式类型转换的存在，有的变量的类型很难在运行前就确定。
- 基于原型的面向对象编程，使得原型上的属性或方法可以在运行时被修改。
- 函数是 JavaScript 中的一等公民，可以赋值给变量，也可以当作参数或返回值。



- TypeScript是静态类型

类型系统按照「类型检查的时机」来分类，可以分为动态类型和静态类型。

动态类型是指在运行时才会进行类型检查，这种语言的类型错误往往会导致运行时错误。JavaScript 是一门解释型语言，没有编译阶段，所以它是动态类型，以下这段代码在运行时才会报错：

```js
let foo = 1;
foo.split(' ');
// Uncaught TypeError: foo.split is not a function
// 运行时会报错（foo.split 不是一个函数），造成线上 bug
```



静态类型是指编译阶段就能确定每个变量的类型，这种语言的类型错误往往会导致语法错误。TypeScript 在运行前需要先编译为 JavaScript，而在编译阶段就会进行类型检查，所以 **TypeScript 是静态类型**，这段 TypeScript 代码在编译阶段就会报错了：

```tsx
let foo = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
```



完整的ts代码

```ts
let foo: number = 1;
foo.split(' ');
// Property 'split' does not exist on type 'number'.
// 编译时会报错（数字没有 split 方法），无法通过编译
```



- TypeScript是弱类型

按照是否允许隐式类型转换来分类，分为强类型和弱类型

```js
console.log(1+'1');//'11'
```

代码在JS和TS中都可以正常运行。TS是完全兼容JS的，都是弱类型



TS在完整保留JS运行时行为的基础上，通过引入静态类型系统来提高代码的可维护性，减少可能出现的bug。



### 适用于任何规模

TypeScript 增强了编辑器（IDE）的功能，包括代码补全、接口提示、跳转到定义、代码重构等，这在很大程度上提高了开发效率。而且 TypeScript 有近百个编译选项，如果你认为类型检查过于严格，那么可以通过修改编译选项来降低类型检查的标准。

TypeScript 还可以和 JavaScript 共存。这意味着如果你有一个使用 JavaScript 开发的旧项目，又想使用 TypeScript 的特性，那么你不需要急着把整个项目都迁移到 TypeScript，你可以使用 TypeScript 编写新文件，然后在后续更迭中逐步迁移旧文件。如果一些 JavaScript 文件的迁移成本太高，TypeScript 也提供了一个方案，可以让你在不修改 JavaScript 文件的前提下，编写一个类型声明文件，实现旧项目的渐进式迁移。

事实上，就算你从来没学习过 TypeScript，你也可能已经在不知不觉中使用到了 TypeScript——在 VSCode 编辑器中编写 JavaScript 时，代码补全和接口提示等功能就是通过 TypeScript Language Service 实现的



### 与标准同步发展

TypeScript 的另一个重要的特性就是坚持与 ECMAScript 标准同步发展。

ECMAScript 是 JavaScript 核心语法的标准，自 2015 年起，每年都会发布一个新版本，包含一些新的语法。

除了实现 ECMAScript 标准之外，TypeScript 团队也推进了诸多语法提案，比如可选链操作符（`?.`）、空值合并操作符（`??`）、Throw 表达式、正则匹配索引等



总结

- TypeScript 是添加了类型系统的 JavaScript，适用于任何规模的项目。
- TypeScript 是一门静态类型、弱类型的语言。
- TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性。
- TypeScript 可以编译为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中。
- TypeScript 拥有很多编译选项，类型检查的严格程度由你决定。
- TypeScript 可以和 JavaScript 共存，这意味着 JavaScript 项目能够渐进式的迁移到 TypeScript。
- TypeScript 增强了编辑器（IDE）的功能，提供了代码补全、接口提示、跳转到定义、代码重构等能力。
- TypeScript 拥有活跃的社区，大多数常用的第三方库都提供了类型声明。
- TypeScript 与标准同步发展，符合最新的 ECMAScript 标准。



## 原始数据类型

JS中的布尔、数值、字符串、null、undefined，ES6中得到Symbol，ES10中得到BigInt



### 布尔

在TS中，用boolean定义布尔值类型：

```tsx
let isDDone:boolean = false;

//使用new Boolean构造函数创建的不是boolean值 而是一个Boolean对象
// let createByNewBoolean:boolean = new Boolean(1);

let createByNewBoolean: Boolean = new Boolean(1);

let createByBoolean:boolean = Boolean(1);
```



### 数值

```tsx
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;

//ES6中的二进制表示法
let binaryLiteral: number = 0b1010;

//ES6中的八进制表示法
let octalLiteral: number = 0o744;

let infinityNumber: number = Infinity;

```

二进制和八进制会被编译为十进制



### 字符串

```tsx
let myName:string = 'seejen';
let myAge: number = 24;

//模版字符串
let sentence: string = `Hello ,my name is ${myName}.
i will be ${myAge+1} years old next year`;
```



编译之后

```js
var myName = 'seejen';
var myAge = 24;
//模版字符串
var sentence = "Hello ,my name is ".concat(myName, ".\ni will be ").concat(myAge + 1, " years old next year");
alert(sentence);
```

使用`来定义模版字符串，${}来嵌入表达式



### 空值

JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 `void` 表示没有任何返回值的函数



```ts
function alertName(): void {
    alert('My name is Tom');
}
```



### Null  Undefined

```ts
let u: undefined = undefined;
let n: null = null;
```



与 `void` 的区别是，`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量：

```ts
// 这样不会报错
let num: number = undefined;

let u: undefined;
let num: number = u;
```

而 `void` 类型的变量不能赋值给 `number` 类型的变量：

```ts
let u: void;
let num: number = u;

// Type 'void' is not assignable to type 'number'.
```



## 任意值

任意值（Any）用来表示允许赋值为任意类型。

### 什么是任意类型

如果是一个普通类型，在赋值过程中改变类型是不被允许的：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

但如果是 `any` 类型，则允许被赋值为任意类型

```tsx
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;
```



### 任意值的属性和方法

在任意值上访问任何属性都是允许的

```ts
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
```

也允许调用任何方法：

```ts
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```

可以认为，**声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值**。



### 未声明类型的变量

**变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**

```ts
let something;
something = 'seven';
something = 7;

something.setName('Tom');

//等价于
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```



## 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型



以下代码虽然没有指定类型，但是会在编译的时候报错：

```
```



