fetch("https://fakestoreapi.com/users/abcd")
  .then((response) => {
    if( !response.ok ){
        throw new Error( "Data Not Found" )
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch( (error)=>{  
    console.log( error.message );
   } )


async function fetchData(){

    try{

       let responce = await fetch("https://fakestoreapi.com/users",{
        method : "PUT"
       })

       if( !responce.ok ){
          throw new Error( "Data Not found" )
       }
        let data = await responce.json()   
        console.log( data[0] );      
    }
    catch(error){
        console.log( error.message );
        
    }

}
fetchData()
