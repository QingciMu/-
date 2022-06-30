{
    let a = 10;
    var b = 1;
}

//console.log(a)  referenceError a is not defined
console.log(b);//1


//for循环适合用let
for(let i = 0;i<10;i++){
    console.log(i);
}

//循环变量是父作用域，循环体内是一个子作用域
for (let i = 0;i<3;i++){
    let i = 'abc';
    console.log(i);
    //abc
    //abc
    //abc
}

//var
console.log(foo);//undefined
var foo = 2;

//let
console.log(bar);//referenceError
let bar = 2;

var tmp = 123;
if(true){
    tmp = 'abc';//referenceError
    let tmp;
}

if(true){
    temp = 'abc';//referenceError
    console.log(tmp);//referenceError

    let tmp;
    console.log(tmp);//undefined

    tmp = 123;
    console.log(tmp);//123
}

// 报错
// function func() {
//     let a = 10;
//     var a = 1;
//   }
  
//   // 报错
//   function func() {
//     let a = 10;
//     let a = 1;
//   }

  //不能在函数内部重新声明参数
  function func(arg) {
    let arg;
  }
  func() // 报错
  
  function func(arg) {
    {
      let arg;
    }
  }
  func() // 不报错





