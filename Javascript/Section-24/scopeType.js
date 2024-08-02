// var - function scope or Global scope

// function outerFunction(){
//     if(true){  
//         if(true){
//             var innerVar = "Hi im a vairable"
//         }
//     }
//     console.log( innerVar );
// }
// outerFunction()

//let - block scope
//const - block scope
// function outerFunction(){
//     let newVar = "Im a variable"
//     if(true){  
//         if (true) {
//             const innerVar = "Im a Block Scoped Variable"
//         }
//         console.log( newVar );         
//         console.log( innerVar );
//     }
// }
// outerFunction()

//var - global scope

// var globalVar = "Im accessible throughtout the global context"

// console.log( window.globalVar );

// const blockScopedVar = "Hi im a block scope"
// console.log( window.blockScopedVar  );

// function name1() {
//     var innerVar = "Im a Function Scope"
//     console.log( innerVar );
// }
// name1()

var a = 50; //Global Variable
let b = 60;
const c = 70;

function sample(  ){
    // var a = 10; //Local Variable
    // let b = 20;
    // const c = 30;

    if(true){
        console.log( a+b+c );
    }
}
sample()
console.log( a + b+c );
