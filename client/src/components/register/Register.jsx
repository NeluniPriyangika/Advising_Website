import React from 'react'
import './register.css'
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

    const handleLogin = async (googleData) => {
        const res = await fetch('http://localhost:5000/api/googleauth', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();
        if (data.success) {
            navigate('/home');
        }
    };
  return (
    <div>
      <h1>Welcome</h1>
      <GoogleLogin
        clientId="1004699986445-lsq4050t9t83r6q04t9esf3f0tnqo33p.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={handleLogin}
        onFailure={(err) => console.error('Google Login Failed', err)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Register
