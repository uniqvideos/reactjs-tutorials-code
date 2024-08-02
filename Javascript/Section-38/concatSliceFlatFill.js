// let arr = [1,2,3,4]
// let arr1 = [4,5,6,7]

// //Concat method

// let newArr = arr.concat(arr1)
// let newArr1 = arr.concat(10,20,30)
// let newArr2 = [].concat(arr)

// arr[0] = 111;

// console.log( newArr, newArr1, newArr2, arr );

//Slice Method

// let newArr = [10,2,3,4,5,6,7]


// let slicedVal = newArr.slice()

// newArr[0] = 101

// let slicedVal1 = newArr.slice(1)
// let slicedVal2 = newArr.slice(1, 4)
// let slicedVal3 = newArr.slice( 0,3)
// //                           ( start, end-1 ) ( 1, 4-1 )
// console.log( slicedVal, slicedVal1, slicedVal2, slicedVal3 );

//Flat method

// let arr = [1,2,3,[4,[5,6,[40,50, [70,80] ]]]]

// let newArr = arr.flat(2)
// let newArr1 = arr.flat(Infinity)

// console.log( arr, newArr, newArr1 );
// console.log(  newArr1 );

//Fill method

let arr = [10,20,30]

arr.fill( 101, 0, 2 )
arr.fill( 103, 2, 5 )

console.log( arr );


