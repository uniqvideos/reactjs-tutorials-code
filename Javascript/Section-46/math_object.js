// Math.abs(x)

console.log( Math.abs( 0 )  );
console.log( Math.abs( -10 )  );

// Math.sign(x)

console.log( Math.sign( -10 ) );
console.log( Math.sign( 0 ) );
console.log( Math.sign( 10 ) );


// Math.sqrt(x)

console.log( Math.sqrt( 25 )  );


// Math.cbrt(x)

console.log( Math.cbrt( 27 )  );

// Math.pow(base, exponent)

console.log( Math.pow( 6, 3 ) );

// Math.min(...values)

let arr = [1,2,3,4,5]

console.log( Math.min( ...arr, 10 ,15, 0,-1 ) );

// Math.max(...values)
console.log( Math.max( ...arr, 100, 30 ) );

// Math.random()

let randomNum =   Math.random()*100 

console.log( randomNum.toFixed(3) );

// Math.ceil(x)

console.log( Math.ceil( 2.01 )  );

// Math.floor(x)

console.log( Math.floor( 2.99 )  );

// Math.round(x)

console.log( Math.round( 2.49 ) );
console.log( Math.round( 2.51 ) );

// Math.trunc(x)

console.log( Math.trunc( 12.999999 ) );
