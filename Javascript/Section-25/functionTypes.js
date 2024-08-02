//Named Function

// function add(uName){
//     console.log( "Named Function " + uName );
// }
// add("Im a Function")

// //Ananomous Function

// let ananFun = function (a,b){
//     console.log( "Ananoumus Function " + (a*b) );
// }
// ananFun(10,20);

// //Arrow Function

// let fatArrow = (a,b) => console.log( "Arrow Function " + (a*b) );

// fatArrow(10,20)

// let newFun = name1 => console.log( name1 );
// newFun( "John" )

// let firstName = "Brendan"
// //fName = "Brendan"

// let returnedFun = fName => fName

// let finalOutput = returnedFun( firstName )

// console.log( finalOutput );

//Higher Order Function

// function function1(){
//     console.log( "IM a Higher order Function" );
// }

// function function2(){
//     console.log( "Im a Call back Function" );
// }

// function1( function2() )

function add( callBack,a,b ){
    callBack(100,200)
    console.log( a + b );
}
function subtract(num1, num2) {
    console.log( num1+num2 );
}
add( subtract,20,40  )


