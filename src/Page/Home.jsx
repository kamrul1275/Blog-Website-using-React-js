import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {


  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

    const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });


  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
       const response = await axios.get('http://localhost:3000/api/auth/users');
        setUsers(response.data.users); // Assuming the response is an array of users
        console.log(response.data);


      } catch (error) {
        console.error('Error fetching users:', error);
      
      }
    };

    fetchUsers();
  }, []);



  const handleEdit = (e, user) => {
  e.preventDefault();
  setEditingUser(user); // Set the current user as the one being edited
  setFormData({
    name: user.name,
    username: user.username,
    email: user.email,
    password: '', // Leave password blank or handle it as needed
  });
};


  // Handle Update User
const handleUpdate = async (e) => {
  e.preventDefault();

  if (!editingUser) {
    console.error('No user selected for editing');
    return;
  }

  try {
    const response = await axios.put(
      `http://localhost:3000/api/auth/user/${editingUser.id}`,
      formData
    );
    const updatedUser = response.data;

    // Update the users list
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );

    setEditingUser(null); // Clear the editing state
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
    });
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
};



  // User Delete

  const handleDelete = async (e, userId) => {
  e.preventDefault(); // Prevent page reload on link click

    // Show a confirmation dialog
  const confirmed = window.confirm("Are you sure you want to delete this user?");
  if (!confirmed) {
    return; // Exit if the user cancels
  }


  try {
    // Make sure to include the full URL with http://
   
    await axios.delete(`http://localhost:3000/api/auth/user/delete/${userId}`);
    console.log('User deleted successfully!');

    // Remove the deleted user from the list
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
     alert('User deleted successfully');

  } catch (error) {
    console.error('Error deleting user:', error.message);
  }
};


    return (
        <div>
            <br/>

            <h2 className="text-center">All Users</h2>
              <br/>
<div className="container">
<div className="row">


  <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>

{
  users.map((user, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        {/* <a href="" onClick={(e)=> handleUpdate(e,user.id)} className='btn btn-success'>Edit</a> */}


    
          <Link to={{pathname: "/edit/user", state: { user }}}  className="btn btn-success">Edit</Link>

{/* <Link to={{ pathname: "/edit/user", state: { user } }} className="btn btn-success">
  Edit
</Link> */}


      
       
         {/* <a href=""  onClick={() => handleDelete(user.id)} className='btn btn-danger'>Delete</a> */}
          <a href="#" onClick={(e) => handleDelete(e, user.id)} className='btn btn-danger confirm="are you sure' >
    Delete
  </a>
      </td>
    </tr>
  ))
}

    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto@gmail.com</td>
      <td>
        <a href="" className='btn btn-success'>Edit</a>
         <a href="" className='btn btn-danger'>Delete</a>
      </td>
    </tr> */}

  </tbody>
</table>
  </div>
  </div>
     
        </div>
    );
};

export default Home;