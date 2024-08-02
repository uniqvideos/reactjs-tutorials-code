// let hobbies = [ "Crciket", "FootBall", "BasketBAll" ]
// let hobbies1 = [ "Reader", "Writer" ]

// let newArr = [ ...hobbies, ...hobbies1  ]

// hobbies[0] = "BaseBall"

// let newArr1 = [ ...newArr, "VideoCreator", "Content Writer" ]
// // let newArr = hobbies

// // newArr[0] = "BaseBall"
// // hobbies[2] = "HandBall"

// console.log( newArr);
// console.log( newArr1);

let empDetail = {
    empId : "IQ123",
    empName:"Kesavan",
    empRole: "React Developer"
}

let team2 = { ...empDetail, empId:"IQ456", empSalary : 100000, team2Desig : "Full Stack Developer"  }

console.log( team2 );


//Rest Parameter or Rest Operator

function restParams(a,b,...arr) {
    console.log(a,b, arr );
}
restParams( 1,2,3,4,5  )

/* Stack Memory

    | Variable           | Reference (Address) |
    |--------------------|---------------------|
    | originalObject     | 0x001               |
    | anotherReference   | 0x001               |

*/

/* Heap Memory

    | Address | Object            |
    |---------|-------------------|
    | 0x001   | { name: 'Bob' }   |
    
*/