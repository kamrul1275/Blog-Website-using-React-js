import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", formData);
      setMessage(response.data.message || "Registration successful!");

      // Reset form fields after successful registration
      setFormData({ name: "", username: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "An error occurred during registration.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-3">Register Form</h2>
          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-4" onSubmit={handleSubmit}>
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/10551/10551903.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  id="Email"
                  aria-describedby="name"
                  placeholder="Enter your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  id="username"
                  aria-describedby="username"
                  placeholder="Enter your UserName"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  id="Email"
                  aria-describedby="Email"
                  placeholder="Enter your Email"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  id="password"
                  placeholder="password"
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-color px-5 mb-5 w-100">
                  Register
                </button>
              </div>

              {message && <p className="text-center text-success">{message}</p>}

              <div id="emailHelp" className="form-text text-center mb-5 text-dark">
                Already Registered? <a href="#" className="text-dark fw-bold"> Go Login Page</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
