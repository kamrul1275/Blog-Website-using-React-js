import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  if (!user) {
    console.error("User data is missing.");
    navigate("/users"); // Redirect to users list page or show an error message
    return null;
  }

  const [formData, setFormData] = useState({
    name: user.name || "",
    username: user.username || "",
    email: user.email || "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:3000/api/auth/user/${user.id}`,
        formData
      );

//   setMessage(response.data.message || "Registration successful!");

      console.log("User updated successfully:", response.data);
    //   navigate("/users"); // Redirect after successful update
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

  return (
    <div className="container">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
