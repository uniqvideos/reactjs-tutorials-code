
//Primitive Datatype

//Number

var num = 120;
var num = 1.25;

//String

let userName = "Javascript is a Scripting Language"

userName = 'Javascript is a Single threaded Language'
userName = `ECMA Script`

//Boolean

let condition = true;
condition = false;

//Undefined

let noValue;

//null

let emptyValue = null;

console.log( num, userName, condition, noValue );

// Single Line Comment

/*  
    Multi Line Comment
    Javascript 
    React Js
*/

//Non-Primitive Datatype or Reference type

//Array
//                         1          2             3            4
let multipleUsers = [ "React js", "Javascript", "Facebook", "Instagram"  ];
// index                  0           1              2           3

console.log( multipleUsers );
console.log( multipleUsers[0], multipleUsers[1], multipleUsers[3] );

console.log( multipleUsers.length  );
console.log( multipleUsers.length-1  );

console.log( multipleUsers[ multipleUsers.length-1 ] );

//Object
//Key value pair
let vehicle = { 
    vehicleType : "Four Wheeler",
    brand : "Hyundai",
    price : 100000,
    fuelType : "Petrol"
 }

console.log( vehicle );
console.log( vehicle.price  );
console.log( vehicle.brand  );
