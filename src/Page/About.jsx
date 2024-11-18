

const About = () => {
    return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p>
        Welcome to our website! We are committed to providing exceptional services and creating
        meaningful experiences for our users. Our team works tirelessly to ensure that every aspect
        of our platform meets your expectations.
      </p>
      <div className="row mt-5">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality solutions that empower individuals and businesses
            alike. We strive to innovate and bring unique value to everything we do.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Vision</h2>
          <p>
            We envision a world where technology seamlessly integrates into everyday life, enhancing
            productivity and fostering growth across communities.
          </p>
        </div>
      </div>
      <div className="text-center mt-5">
        <h3>Meet the Team</h3>
        <div className="row mt-4">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h5>John Doe</h5>
            <p>CEO & Founder</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h5>Jane Smith</h5>
            <p>CTO</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h5>Bob Johnson</h5>
            <p>Marketing Head</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default About;