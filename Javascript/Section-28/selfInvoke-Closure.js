// function normalFun(){
//     console.log( "Executed whenever i called" );
// }
// normalFun()
// normalFun()
// normalFun();

// //IIFE - Immediately Invoked Function Expression
// (function iifePattern(userName, age){
//     console.log( "Self Invoked Function", userName+age );
// })("Kesavan", 45)

// iifePattern();

//Closure

// function outerFunction(){
//     let outerVariable = "Im from outer scope"
//     function innerFunction(){
//         console.log( outerVariable );
//     }

//     return innerFunction
// }

// let innerFun = outerFunction();
// innerFun()

const arr = new Array()

arr[1] = "Kesavan"

console.log( arr );

arr.length = 0;

console.log( arr );



