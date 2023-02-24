import React from 'react'
import './App.css'
import { useState } from 'react'
import { users } from './stubdata/users'
import {useNavigate} from 'react-router-dom';


const LoginPage = () => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const clickHanler = (a,b) => {
  
    const user = users.find((user) => user.username === a && user.password === b);
    if (!user){
      alert('Incorrect Username or Password')
      return
    }
    else if (user.role === "Admin" )
    navigate("/admin");
    else if (user.role === "Checker" )
    navigate("/checker");
    else if (user.role === "Approver" )
    navigate("/approver");
    else if (user.role === "Creator" )
    navigate("/creator");

    
  }
 
  const handleUsername = (e) => {
    setUserName(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  } 
  return (
    <div className='login-page'>
      <div className='login-card'>
        <h1>Login</h1>
        <h3>Username</h3>
        <input
          type='text'
          value={userName}
          onChange={(e) => handleUsername(e)}
        /> 
        <h3>Password</h3>
        <input
          type='password'
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <br/>
        <br/>
        <button onClick={() => clickHanler(userName,password)}>Enter</button>
      </div>
    </div>
  )
}

export default LoginPage