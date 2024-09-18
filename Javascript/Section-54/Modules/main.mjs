// import { loginData as newPerson  } from "./loginPage.mjs";
// import personObject from "./signUpPage.mjs";
import {newEmployeeId, loginInfo} from './loginPage.mjs'
import signUpInfo from './signUpPage.mjs'

function application(){
   // console.log( newPerson  );
   // console.log( personObject );
   console.log( newEmployeeId );
   loginInfo();
   signUpInfo(); 
}
application()