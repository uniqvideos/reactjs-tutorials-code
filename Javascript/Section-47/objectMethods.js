// let person = {
//     pName : "Johny",
//     age : 30
// }

// console.log( person );

// let arr = [1,2,3,4]

// console.log( arr );

// Object.create

// let newObj = Object.create( person )
// newObj.location = "Tamilnadu"
// console.log( newObj.__proto__ );
// console.log( Object.getPrototypeOf( newObj ) );

// console.log( newObj.age );
// console.log( newObj );

// Object.assign

// let person1 = {
//     id : "QUI123",
//     name1 : "Kesavan"
// }

// let newObj1 = Object.assign( person1, { role : "frontEnd Developer", salary : 1000  }  )

// console.log( person1 );
// console.log( newObj1 );

// Object.entries

let employee = {
    eName : "Murugan",
    eRole : "Back end Developer"
}

let multiArr = Object.entries( employee  )

multiArr.push ( ["Name", "Murugesan"] )

console.log( multiArr );

// Object.fromEntries

let normalObj = Object.fromEntries( multiArr  )

console.log( normalObj );

// Object.keys

let onlyKeys = Object.keys(  normalObj  )

console.log( onlyKeys );

// Object.values

let onlyValues = Object.values( normalObj  )

console.log( onlyValues );

// Object.freeze

let newObj1 = {
    id:1
}

Object.freeze( newObj1 )

newObj1.name1 = "Javascript"
newObj1.id = "QUI123"

console.log( newObj1 );

// Object.isFrozen

console.log( Object.isFrozen( normalObj )  );
