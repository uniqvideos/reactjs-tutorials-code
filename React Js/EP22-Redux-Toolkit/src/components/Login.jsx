import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {

  let {newUser} = useParams()
  let navigate = useNavigate();
  
  let handleNavigate = () => {
    navigate("/")
  }

  return (
    <div>
      Login - {newUser}
      <button onClick={ handleNavigate }> Move to Home </button>
    </div>
  )
}

export default Login