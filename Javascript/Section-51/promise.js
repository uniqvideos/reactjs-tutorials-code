let newPromise = new Promise( (resolve, reject)=>{

    let dataRecieved = false;

    if(dataRecieved){
        resolve( "Data Recieved" )
    }
    else{
        reject( "Data Not Recieved" )
    }

} )
// newPromise.then( ( message )=>{
//     console.log( "Succes: " + message  );
//     return "Next Sucess" + message
// } )
// .then( ( nextMessage )=> {  console.log( nextMessage );
//  }  )
// .catch( (error)=>{
//     console.log( "Failure: " + error );
    
// } )
// .finally( ()=>{
//     console.log( "End" );
// } )


// function fetchProfile( sucesscallBack, errorCallback ){
//     let dataRecieved = true;

//     if(dataRecieved){
//         sucesscallBack("Data Recieved")
//     }
//     else{
//         errorCallback("Data Not Recieved")
//     }
// }

// fetchProfile( 
//     (message)=>{
//         console.log( message );

//         fetchProfile( 
//             (nextMessage)=>{
//                 console.log( "Next Message:" + nextMessage );
                
//             },
//             (nextError)=>{
//                 console.log( "Next Error:" + nextError );
//             }
//          )
        
//     }, 
//     (error)=>{
//         console.log( error );
//     }  
// )
