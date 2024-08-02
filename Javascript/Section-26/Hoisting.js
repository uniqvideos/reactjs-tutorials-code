//Variable Declaration Hoisiting

/* Before Code Execution - Declaration will come at top
var a
let b
const c
sample(){
}
let sample1
*/

// Actual Execution Starts

console.log( a );

var a = 10;

console.log( a );

console.log( b );
let b = 20;

console.log( b );

console.log( c );
const c = 30;
console.log( c );

//Function Declaration

sample();

function sample(){
    console.log( "IM in" );
}

// let sample1
// var sample1
console.log( sample1 );
sample1()

// var sample1 = function(){
//     console.log( "Am i accessible" );
// } // Type Error


let sample1 = function(){
    console.log( "Am i accessible" );
} // Reference Error

sample1()