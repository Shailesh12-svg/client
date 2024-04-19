import React, { useState } from 'react';
import "./login.css";

const Login = () => {
  //Creating States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function signup(){
    window.location.href ='/signup';
  }

   async function handleClick(){
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    };
    
    console.log('Request options:', opts);
  
     await fetch("http://127.0.0.1:5000/token", opts)
      .then(resp => {
        console.log('Response status:', resp.status);
        return resp.json();
      })
      .then(data => {
        console.log('Data from backend:', data);
        if (data && data.access_token) {
          sessionStorage.setItem("token", data.access_token);
          alert('Login succesful')
          window.location.href ='/homepage'
        } else {
          throw new Error("Invalid response format: missing access_token");
        }
      })
      .catch(error => {
        console.error("There was an error", error);
      });
  };
  
  return (
    <div className='Login'>
        <form className='form'>
          <h1>Login</h1>
          <label htmlFor="femail" name="email" id="femail">Email:</label>
          <input type='text' name="email" id="femail" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <label htmlFor="fpasswd" name="passwd" id="fpasswd">Password:</label>
          <input type='password' name="passwd" id="fpasswd" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
          <button type="button" onClick={handleClick}>LogIn</button>
          <button type="button" onClick ={signup}>SignUp</button>
        </form>
    </div>
  );
}

export default Login;
