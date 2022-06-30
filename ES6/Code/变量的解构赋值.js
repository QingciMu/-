//数组

let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];

let [x, , y] = [1, 2, 3];//x=1,y=3

let [head, ...tail] = [1, 2, 3, 4];
//head 1 ,tail[2,3,4]

let [m,n,...z] = ['a'];
// m 'a'
// n unfined
// z []

//解构不成功 值为unfined

//不完全解构是允许的


//默认值
{
    let [foo = true] = [];
    foo // true

    let [x, y = 'b'] = ['a']; // x='a', y='b'
    let [m, n = 'b'] = ['a', undefined]; // m='a', n='b'
}

{
    let [x = 1] = [undefined];
    x // 1

    let [y = 1] = [null];
    y // null
}

//对象
{
    let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
    foo // "aaa"
    bar // "bbb"

    let { baz } = { foo: 'aaa', bar: 'bbb' };
    baz // undefined
}

//如果解构失败，变量的值等于undefined。

{
    let {max} = Math;
    alert(max(1,2));
    // 例一
    let {log, sin, cos } = Math;
}
{
    // 例二
    const { log } = console;
    log('hello') // hello
}

{
    let obj = {
        p: [
          'Hello',
          { y: 'World' }
        ]
      };
      
      let { p, p: [x, { y }] } = obj;
      x // "Hello"
      y // "World"
      p // ["Hello", {y: "World"}]
}

//字符串
{
    const [a, b, c, d, e] = 'hello';
    a // "h"
    b // "e"
    c // "l"
    d // "l"
    e // "o"
}

{
    let {length : len} = 'hello';
    len // 5
}

//数值和布尔值

