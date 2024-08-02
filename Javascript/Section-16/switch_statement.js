
//Switch Statement

/*
    switch( expression ){
        case value : Statement;
        break;
        case value : Statement;
        break;
        default : Styatement;
        break;
    }

*/

// let trafficLight = "over speed";

// switch( trafficLight ){
//     case "red" : console.log( "Stop" );
//     break;
//     case "yellow" : console.log( "Slow Down" );
//     break;
//     case "green" : console.log( "Go" );
//     break
//     default : console.log( "Pay Fine" );
//     break;
// }

let day = "Jan"

switch( day ){
    case "Monday" :
    case "Wednesdsay" : //Fsall through Method 
    case "Friday" : console.log( "Weekday" );
    break;
    case "Saturday" :
    case "Sunday" : console.log( "WeekEnd" );
    break;
    default : console.log( "It is not a day" );
}
