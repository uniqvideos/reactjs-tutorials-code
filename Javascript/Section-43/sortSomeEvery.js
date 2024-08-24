// let arr = [10,5,100,30,6,2]

// let newArr = arr.sort( (a,b)=>{ return a-b }  )

//Ascending
// a -b => postive, a>b  => swapping
// a - b => negative, a<b => no swapping

// a -b => 10 - 5 => 5 =>  [5,10,100,30,6,2]
// a -b => 10 - 100 => -90 =>  [5,10,100,30,6,2]
// a -b => 100 - 30 => 70 =>  [5,10,30,100,6,2]
//  [5,10,30,6,2,100]

// console.log( newArr );

//Descending
// b - a => positive, b>a => Swapping
// b- a => negative, b<a => no swapping

let newArr = [10,20,30,1,4,true, "100A"]

let descendingSort = newArr.sort( (a,b)=>{ return b-a } )

// b - a => 20 - 10 => 10 =>  [20,10,30,1,4,true, "100"]
// b - a => 30 - 10 => 20 =>  [20,30,10,4,1,true, "100"]
// b- a => true - 1 => 1 - 1 => 0 => [20,30,10,4,1,true, "100"]
// b- a => "100" - true => 100 - 1 => 90 => [20,30,10,4,1,"100", true]

//b - a => "100A" - true => NaN - true => NaN =>    [10,20,30,1,4,true, "100A"]


console.log( descendingSort );

//Some & Every

let arr1 = [10,2,30,40,5]

let value = arr1.some( (ele, ind, arr)=>{
   return ele%2 == 0
} )
let value1 = arr1.every( (ele, ind, arr)=>{
   return ele%2 == 0
} )

console.log( value, value1 );


