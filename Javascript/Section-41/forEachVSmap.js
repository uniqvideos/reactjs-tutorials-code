let fruits = [ "Apple", "WaterMelon", "MuskMelon", "Banana" ]

// fruits.forEach( printFruit )

// function printFruit(currentElement, index, totalArray){
//     console.log( currentElement, index, totalArray );    
// }

// fruits.map( function(currentEle, index, totalArr){
//     console.log( currentEle, index, totalArr );
// }  )

// let newArr = fruits.forEach( (cElement)=>{
//     console.log( cElement.toUpperCase() );
//     return cElement
// } )

// console.log( newArr );

// let newArr1 = fruits.map( (cElement, index)=>{
//     return { id: index+1 , fruit : cElement }
// } )

// console.log( newArr1 );

//Chaining method

// let newArr = fruits.map(  cEle => cEle.toUpperCase() ).sort().fill( "123" )

// console.log( newArr );

// let newArr1 = fruits.forEach(  cEle => cEle.toUpperCase() ).sort().fill( "123" )

// console.log( newArr1 );

//Condition based Statement

let newArr2 = fruits.map(  (cEle) =>{ return cEle=="Apple" }  )

console.log( newArr2 );

fruits.forEach( val => console.log( val=="Apple" ) )

