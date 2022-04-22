import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <nav className="navbar has-background-grey ">
        <div className="container">
          <button type="button" className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
          <ul className="navbar-brand is-mobile ">
            <li>
              <Link to="/" className="navbar-item is-white">
                Home
              </Link>
            </li>
            <li className="navbar-item is-white">|</li>
            <li>
              <Link to="/register " className="navbar-item is-white">
                Register
              </Link>
            </li>
            <li className="navbar-item is-white">|</li>
            <li>
              <Link to="/login" className="navbar-item is-white">
                Login
              </Link>
            </li>
            <li className="navbar-item is-white">|</li>
            <li>
              <Link to="/tattoos" className="navbar-item is-white">
                Tattoos
              </Link>
            </li>
            <li className="navbar-item is-white">|</li>
            <li>
              <Link to="/new-tattoo" className="navbar-item is-white">
                Post your tat
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
