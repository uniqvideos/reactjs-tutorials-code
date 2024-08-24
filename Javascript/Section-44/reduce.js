let arr = [10,2,3,4,5]

// 10 + 2 + 3 + 4 + 5 => 24

let totalVal = 0; // 10

for (let i = 0; i < arr.length; i++) {
    totalVal = totalVal + arr[i]
}

// 1st => totalVal = 0 + 10 => 10
// 2nd => totalVal = 10 + 2 => 12
//5th => totalVal = 19 + 5 => 24

console.log( totalVal );

let totalVal1 = arr.reduce( ( acc, cElement, index, array  )=>{  return acc+cElement  }, 0 )

//[10,2,3,4,5]
// 1st => acc + cElement => 0 + 10 => 10
// 2nd => 10  + 2 => 12
// 3rd => 12 + 3 => 15
//5th => 19 + 5 => 24 

console.log( totalVal1 );

let employees = [
    {eName: "Xyz", salary:1000},
    {eName: "abc", salary:10000},
    {eName: "Kesavan", salary:20000},
    {eName: "Alex", salary:25000}
]

let calcTotalSalary = employees.reduce( (acc, cElement)=>{  return acc + cElement.salary }, 0  )

console.log( calcTotalSalary );



