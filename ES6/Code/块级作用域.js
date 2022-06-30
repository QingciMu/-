// //内层变量覆盖外层变量
// var tmp = new Date();

// function f() {
//   console.log(tmp);
//   if (false) {
//     var tmp = 'hello world';
//   }
// }

// f(); // undefined

// //用来计数的循环变量泄漏为全局变量
// var s = 'hello';

// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }

// console.log(i); // 5


// function f(){
//     let n = 5;
//     if(true){
//         let n = 10;
//         console.log(n);//10
//     }
//     console.log(n);//5
// }

// //ES5
// // 情况一
// if (true) {
//     function f() {}
//   }
  
//   // 情况二
//   try {
//     function f() {}
//   } catch(e) {
//     // ...
//   }


function f() {console.log('i am out');}
f();
(function (){
    if(true){
        function f() {console.log('i am in');}
      f();
    }

}());

