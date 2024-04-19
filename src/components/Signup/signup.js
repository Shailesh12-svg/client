import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://your-backend-url/register', {
                email: email,
                password: password
            });
            setMessage(response.data.msg);
            // Clear the form fields after successful registration
            setEmail('');
            setPassword('');
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.msg);
            } else {
                setMessage('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleRegister}>Register</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;
