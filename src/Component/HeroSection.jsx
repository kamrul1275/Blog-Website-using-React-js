import React from 'react';

const HeroSection = (props) => {
    return (
        <div>
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto@gmail.com</td>
      <td>
        <a href="" className='btn btn-success'>Edit</a>
         <a href="" className='btn btn-danger'>Delete</a>
      </td>
    </tr>

  </tbody>
</table>
  </div>
  </div>
     
        </div>
    );
};

export default HeroSection;