// let str = "45";
// let num = 100;

// console.log( str + num );
// console.log( typeof (str + num) );

//String 

// console.log( "Hi" + true );
// console.log( "Hi" + undefined );
// console.log( "Hi" + null );
// console.log( "Hi" + [1,2] );
// console.log( "Hi" + {} );

//String + anything === anything + string

//Number

// console.log(  10 + false  );

// true - 1, false - 0

// console.log( 10 + undefined ); // NaN - Not A Number
// console.log( 10 + null ); // 10 + 0 -- 10
// console.log( 10 + [1,2] );
// console.log( typeof( 10 + [1] ));
// console.log(  10 + {} );
// console.log( typeof (10 + '' ) );

//Boolean

// console.log( 10  + true );
// console.log( true + undefined ); //Nan
// console.log( true + null ); // 1 + 0 == 1

// console.log(  10 == '10'  );

// console.log(   10 - 'abc'  );
// console.log( 10 - '' ); // 10 - 0 = 10


//Explicit Conversion


// console.log( 10 + Number( "10" )  );
// console.log( Number( "" ) );
// console.log( Number( "abc" ) );
// console.log( Number( false ) );
// console.log(  Number( undefined ) );
// console.log(  Number( [1,2] ) );
// console.log(  Number( {} ) );

// console.log( Boolean( "" )  );
// console.log( Boolean( "123" )  );

// console.log( Boolean( -10 )  );
// console.log( Boolean( 0 )  );
// console.log( Boolean( undefined )  );
// console.log( Boolean( null )  );
// console.log( Boolean( [1] ) );
// console.log( Boolean( {} ) );

// console.log( Boolean( Infinity ) );
// console.log( Boolean( -Infinity ) );
// console.log( Boolean( NaN ) );

// console.log( String() );

// console.log(  "bg" > "bb" );

let a = 10;

console.log( window.a )
