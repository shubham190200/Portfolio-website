import React, { useState } from 'react';


const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone_no: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <section className="py-4 bg-info mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact us/About us</h4>
            </div>
            <div className="col-md-8 my-auto"></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card-shadow">
                <div className="card-body">
                  <h6>Contact form</h6>
                  <hr />
                  <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone_no">Phone number</label>
                    <input
                      type="number"
                      name="phone_no"
                      value={user.phone_no}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary shadow my-2">
                      Send message
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 border-start">
              <div className="card-shadow">
                <div className="card-body">
                  <h5 className="heading">Address Information</h5>
                  <div className="underline">
                    <p> xxx bythari, bangalore, Karnataka, 560064</p>
                    <p>Phone: 84585478XX</p>
                    <p>Email: shubham@gmail.com</p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
