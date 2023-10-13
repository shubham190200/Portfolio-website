import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid fixed-top shadow bg-secondary p-0">
          <Link to="/" className="navbar-brand"><img src={logo} className='logo' alt="" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link active">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
