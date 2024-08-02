// function add(a,b,c){
//     console.log( a+b+c );
// }
// add( 1,2,3 )

function add(a){
    return function(b){
        return function(c){
            console.log( a+b+c );
        }
    }
}

add(10)(20)(30);

let curry1 = add(100)
let curry2 = curry1(200)
curry2(300);

// console.log( curry1 );
// console.log( curry2 );