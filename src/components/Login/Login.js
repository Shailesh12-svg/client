import React from 'react';
import { useCallback, useState } from 'react';
import "./login.css";
const Login = () => {
    const [, setRedirectToSignup] = useState(null); // State variable to store the callback
    const [,setRedirectToHomepage]=useState(null);

  // Define a callback function to redirect to the signup page
  const handleSignUp= useCallback(() => {
    setRedirectToSignup(() => {
      window.location.href = '/signup'; // Redirect using window.location.href
    });
  }, []);


  const handleLogin= useCallback(() => {
    setRedirectToHomepage(() => {
      window.location.href = '/homepage'; // Redirect using window.location.href
    });
  }, []);
  return (
    <div className='Login'>
        <form>
            <h1>Login</h1>
            <label for="femail" name="email" id="femail">Email:</label>
            <input type='email' name="email" id="femail"/><br/>
            <label for="femail" name="passwd" id="fpasswd">Password:</label>
            <input type='password' name="passwd" id="fpasswd"/><br/>
            <button type='submit' onClick={handleLogin}>LogIn</button>
            <button type="button" onClick={handleSignUp}>SignUp</button>
        </form>
    </div>
  )
}

export default Login;