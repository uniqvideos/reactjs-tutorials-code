// let arr = [10,100,1000,10000]

// for( let val of arr  ){
//     console.log( val );
// }

// let str = "Javscript"

// for( let char of str  ){
//     console.log( char );
// }

function* genFunction(){
    yield "One"
    yield "Two"
    yield "Three"
}

let iterator = genFunction()

for(  let val of iterator ){
    console.log( val );
}
//To Iterate Object - use for in loop
/* 
    let obj = {
        id:1
    }

    for( let key of obj ){
        console.log( key );
    }
*/