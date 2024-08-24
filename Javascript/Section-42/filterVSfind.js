
let employees = [
    {empName:"KEsavan", salary:150000},
    {empName:"Murugesan", salary:100000},
    {empName:"John", salary:120000},
]

let filterData = employees.filter( (val,index,array)=>{ 
    console.log( index );
    return val.salary>110000
} ) // (100000>110000)

// let filterData = employees.filter( val=> val.salary>110000 ).fill( {id:1, name1:"xyz"} )

// employees.filter( val => console.log(val)  )

console.log( filterData );

let filterDataByFind = employees.find( (val,index,array)=>{
    console.log( index );
    return val.salary>100000
} )

console.log( filterDataByFind );