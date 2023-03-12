import React, { useEffect, useState } from 'react'

import {auth, provider} from "./Config"
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const handleClick=()=>{
    signInWithPopup(auth, provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
    })
  }
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  },[])

  return (
    <>
      {value?<Home/>:
      <div className="container d-flex align-items-center justify-content-center" style={{height:"40rem"}}>
        <div class="card" style={{width:"20rem"}}>
          <div class="card-header">
          Sign In
          </div>
          <div class="card-body">
            <h5 class="card-title">Sign in with Google</h5>
            <p class="card-text">tap the button below and select your account to log in.</p>
            <button className='btn btn-warning' onClick={handleClick}>Sign In </button>
          </div>
        </div>
      </div>
  }
   </> 
  )
}

export default App
