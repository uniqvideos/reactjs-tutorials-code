import React from 'react'
import {UserContext} from '../App'

class Footer extends React.Component {
    render(){



    // console.log( this.props );

      let date = new Date()
      
      return(
        <footer>
            <h2> Footer </h2>
            <UserContext.Consumer>
              {
                ( {user} )=>{
                  return (
                    <h1> {  user.uName } - {date.getFullYear()} </h1> 
                  )
                }
              }
            </UserContext.Consumer>
        </footer>
      )
    }
}

export default Footer;