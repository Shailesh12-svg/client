import React, { useState } from 'react';
import "./login.css";

const Login = () => {
  //Creating States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = sessionStorage.getItem("token");
  console.log("This is your token", token);

  const handleClick = () => {
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify JSON content type
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    };

    fetch("http://127.0.0.1:5000/token", opts)
      .then(resp => {
        if (resp.status === 200) return resp.json();
        else alert("There was an error!!!");
      })
      .then(data => {
        console.log("This came from backend", data);
        sessionStorage.setItem("token", data.access_token);
      })
      .catch(error => {
        console.error("There was an error", error);
      });
  };

  return (
    <div className='Login'>
      {!token ? (
        <form className='form'>
          <h1>Login</h1>
          <label htmlFor="femail" name="email" id="femail">Email:</label>
          <input type='text' name="email" id="femail" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <label htmlFor="fpasswd" name="passwd" id="fpasswd">Password:</label>
          <input type='password' name="passwd" id="fpasswd" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
          <button type="button" onClick={handleClick}>LogIn</button>
        </form>
      ) : (
        <p>You are logged in with this token: {token}</p>
      )}
    </div>
  );
}

export default Login;
