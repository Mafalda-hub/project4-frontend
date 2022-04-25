import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/api';

import { removeToken, removeUserId } from '../lib/api';

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const location = useLocation();

  React.useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const handleLogout = () => {
    removeToken();
    removeUserId();
    Navigate('/');
    console.log('logged out');
  };

  return (
    <>
      <aside className={`navbar-side ${isSidebarOpen ? 'open' : 'close'}`}>
        <nav>
          <ul className="navbar-brand">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>

            <li className="navbar-item ">
              <Link to="/tattoos" className="navbar-link">
                Tattoos
              </Link>
            </li>
            {getLoggedInUserId() ? (
              <>
                <li className="navbar-item ">
                  <Link to="/new-tattoo" className="navbar-link">
                    Post your tat
                  </Link>
                </li>
                <li className="navbar-item ">
                  <Link to="/" className="navbar-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="navbar-item ">
                  <Link to="/register" className="navbar-link">
                    Register
                  </Link>
                </li>

                <li className="navbar-item ">
                  <Link to="/login" className="navbar-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>
      <button
        type="button"
        className={`hamburger ${isSidebarOpen ? 'active' : 'close'}`}
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
    </>
  );
};

export default Nav;
