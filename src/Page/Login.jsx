import React, { useState } from 'react';
import '../assets/css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email and password are provided
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      // Make the POST request to the login API
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      // Handle login success
      if (response.ok) {
        // Save the token or handle success (e.g., redirect to dashboard)
        localStorage.setItem('token', data.token);
        console.log('Login successful', data);
        // Redirect to another page, for example:
        // window.location.href = '/dashboard';
        alert('Login successful');
        navigate("/dashboard"); // Redirect after successful update
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred, please try again later');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Login Form</h2>
          <div className="card my-3">
            <form className="card-body cardbody-color p-lg-3" onSubmit={handleSubmit}>
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9771/9771767.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              {error && <div className="text-danger text-center">{error}</div>}

              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Login
                </button>
              </div>
              <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                Not Registered?{' '}
                <a href="#" className="text-dark fw-bold">
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
