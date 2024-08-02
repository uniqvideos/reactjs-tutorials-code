// let arr = [100,200,300,400]

//Pop Method

// let poppedVal = arr.pop()

// console.log(poppedVal, arr );

//Push Method

// arr.push( 500,550,600 )

// console.log( arr );

//Shift Method

// let firstVal = arr.shift()

// console.log( firstVal,  arr );

// arr.unshift( -2,-1,0,10,20 )

// console.log( arr )

//Splice Method

let newArr = [10,20,30,40]

//Splice( start,count,...items  )

// newArr.splice()
// newArr.splice(1)
// newArr.splice(1, 2)
// newArr.splice(1, 2, ("newVal", true, [11,12]),"secondVal")
newArr.splice( 0, 0, 100,200,300  )
newArr.splice( -1, 0, 500,600,700  )

console.log( newArr );

