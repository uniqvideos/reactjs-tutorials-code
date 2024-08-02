//Array Destructuring

// let arr = [10,20,30,40,5,4,5,6,7,8,9,10]

// let fVal = arr[0]

// let [a,b,c,d] = arr
// let [a,,,d] = arr
// let [a1,a2,a3,...a4, a5] = arr


// console.log( a1,a2,a3, a4 );

//Nested Array Destructuring

// let nestArr = [ 1,2,3,4, [10,20,[30,40]]  ]

// let [a,b,c,d,[a1,a2,[a11,a12]]] = nestArr

// console.log( d, a12 );


//Object Destructuring

// let obj = {
//     id:1,
//     name1:"Kesavan"
// }

// console.log( obj.name2 );

// let {name1,id} = obj

// console.log(  id,name1 );

//Nested Object Destructuring

let nestObj = {
    id:1,
    name1 : "Murugesan",
    bankDetails : {
        accName : "Murugan",
        accNo : 123456,
        branch : "xyz"
    }
}

let {id,name1, bankDetails: { accName, accNo, branch  } } = nestObj

console.log( nestObj.bankDetails.accNo );
console.log( name1, branch );