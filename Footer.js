import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='section footer bg-dark text-white '>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h6>Company Information</h6>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id
              amet temporibus distinctio reprehenderit! Accusamus omnis, maiores
              tenetur quaerat doloremque, et quas mollitia veritatis animi
              necessitatibus dolores suscipit, eveniet porro.
            </p>
          </div>
          <div className='col-md-4'>
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to='/'>Home</Link>
            </div>
            <div>
              <Link to='/about'>About</Link>
            </div>
            <div>
              <Link to='/contact'>Contact</Link>
            </div>
            <div>
              <Link to='/blog'>Blog</Link>
            </div>
          </div>
          <div className='col-md-4'>
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className='text-white mb-1'>
                Bangalore, Yelahanka, Bagalur Cross
              </p>
              <p className='text-white mb-1'>Phone: 85485224</p>
              <p className='text-white mb-1'>Email: example@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
