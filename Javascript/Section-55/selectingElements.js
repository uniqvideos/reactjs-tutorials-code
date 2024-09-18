// console.log( document.head  );


let heading = document.getElementsByTagName( "h1" )

console.log( heading );

let para1 = document.getElementsByClassName("para1")

console.log( para1 );

let uniqPara = document.getElementById("uniq-para")

console.log( uniqPara );

let nameAttri = document.getElementsByName("input-1")

// let selectOne = document.querySelector("h1")
// let selectOne = document.querySelector(".para1")
let selectOne = document.querySelector("#uniq-para")

console.log( selectOne.innerHTML  );

// let multiElements = document.querySelectorAll( "h1" )
// let multiElements = document.querySelectorAll( ".para1" )
let multiElements = document.querySelectorAll( "#uniq-para" )

console.log( multiElements );

let newElement = document.createElement( "h2" )

newElement.innerText = "Manipulating Phase"

console.log( newElement );

document.body.append( newElement )








