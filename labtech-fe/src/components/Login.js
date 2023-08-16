import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for v6


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function


  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response =await axios.post('http://localhost:3001/api/login', {
        email,
        password
      });
      console.log('Response:', response);

      const userName = response.data.userName;
      navigate('/welcome'); // Use navigate function for navigation


      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error('Login Error:', error);
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
