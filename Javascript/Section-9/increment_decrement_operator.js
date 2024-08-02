//Post Increment

/*
    1.Substitute
    2.Operation
    3.Increment
*/
// let num = 20; //22
// // let num1 = num++;
// // // num1 = 20++
// // //num1 = 20;

// let num1 = num++ + num++
// // num1 = 20 + 21
// // num1 = 41

// console.log( num, num1 ); // ( 22, 41 )

//Pre Increment

/*
    1.Substitute with Increment
    2.Operation
    
*/

// let newNum = 40; //42

// let newNum1 = ++newNum;
// newNum1 = ++40 = 1 + 40 = 41

// let newNum2 = ++newNum + ++newNum
// newNum2 = 41 + 42
//newNum2 = 83

// console.log( newNum, newNum1 );
// console.log( newNum, newNum2 ); //(42,83)

// let newNum = 30; //32

// let newNum3 = newNum++ + ++newNum;
// newNum3 = 30 + 32
//newNum3 = 62
// console.log( newNum, newNum3 ); //(32,62)

//Pre Decrement & Post Decrement

// let num4 = 10; //8

// let num5 = num4-- + --num4;
// num5 = 10 + 8
//num5 = 18
// let num6 = --num4 + num4--
//num6 = 9 + 9
// num6 = 18

// console.log( num4, num6 );