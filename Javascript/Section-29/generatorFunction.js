

function* generatorFunction(){
    yield "First Val"
    yield "Second Val"
    yield "Third Val"
    return "Final Val"
}

let generator = generatorFunction()

console.log( generator.next().value  );

// console.log( "Im executing after first yield statement" );

console.log( generator.next().value );
console.log( generator.next().value );
console.log( generator.next().value );


function* url(){
    yield "https:/"
    yield "www.uniqtech.com/"
    yield 'homePage'
}

let origin1 = url()

console.log( origin1.next().value );
console.log( origin1.next().value );
console.log( origin1.next().value );
console.log( origin1.next().value );

