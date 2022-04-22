import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const location = useLocation();

  React.useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <>
      <side className={`navbar-side ${isSidebarOpen ? 'open' : 'close'}`}>
        <nav>
          <ul className="navbar-brand">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">
                Home
              </Link>
            </li>

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

            <li className="navbar-item ">
              <Link to="/tattoos" className="navbar-link">
                Tattoos
              </Link>
            </li>

            <li className="navbar-item ">
              <Link to="/new-tattoo" className="navbar-link">
                Post your tat
              </Link>
            </li>
          </ul>
        </nav>
      </side>
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
