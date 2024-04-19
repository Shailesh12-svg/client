import React, { useState } from 'react';
import "./signup.css";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleRegister() {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

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
    
    await fetch("http://127.0.0.1:5000/register", opts)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Failed to register');
        }
        return resp.json();
      })
      .then(data => {
        // Handle successful registration
        alert('Registration successful');
        window.location.href = '/'; // Redirect to login page after registration
      })
      .catch(error => {
        setError('Registration failed. Please try again.');
        console.error("There was an error", error);
      });
  };
  
  return (
    <div className='Registration'>
      <form className='form'>
        <h1>Register</h1>
        <label htmlFor="email">Email:</label>
        <input type='text' id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <label htmlFor="password">Password:</label>
        <input type='password' id="password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type='password' id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} /><br />
        <button type="button" onClick={handleRegister}>Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default SignUp;
