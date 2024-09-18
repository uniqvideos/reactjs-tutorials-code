// let employee = {
//     eName : "Kesavan",
//     eSalary : 1000,
//     introYourself : function(a,b){
//         console.log( a + b + this.eName );
//     }
// }
// console.log( employee.eName );
// employee.introYourself(10,20)


// var eName = "Murugesan"

// let employee1 = {
//     eName : "Kesavan",
//     eSalary : 1000,
//     introYourself : (a,b)=>{
//         console.log( this.eName );
//     }
// }

// employee1.introYourself(10,20)

let person = {
    pFName: "Kesavan",
    pLName : "Murugesan"
}

let person1 = {
    pId : "UQI123",
    pFName: "Nanda",
    pLName : "Kumar",
    introYourself : function(a,b){
        console.log( this.pFName +" " + this.pLName + ( a + b ) );  
        return (a+b) 
    }
}

person1.introYourself.call(person, 10, 20)
person1.introYourself.apply(person, [100, 200])

let newFun = person1.introYourself.bind(person, 500, 300)

console.log( newFun()  );


