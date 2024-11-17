import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/new_logo.png';
import './Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

  const { user ,loginWithRedirect , isAuthenticated , logout } = useAuth0();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsDropdownOpen(false); // Close dropdown when toggling navigation
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="nav">
      <img src={logo} className="logo"/>

      <div className="hamburger" onClick={toggleNav}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      <div className={`nav__link ${isNavOpen ? '' : 'hide'}`} onMouseLeave={closeDropdown}>
        <Link to="/home">Home</Link>
        <Link onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>Types</Link>
        {/* Dropdown Menu for Types */}
        {(isDropdownOpen || isNavOpen) && (
          <ul className="dropdown-menu" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <li><Link to="/lathe">Lathe Machine Tool</Link></li>
            {/* Add more machine links as needed */}
          </ul>
        )}
        {/* End of Dropdown Menu */}
        <Link to="/news">News</Link>
        <Link to="/expert">FAQ's</Link>
        <Link to="/contact-page">FeedBack</Link>

        <Link to="/calculator">Calculator</Link>
         

        <button>
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        { isAuthenticated ? <button className ="button-74" onClick={() => logout({ returnTo: window.location.origin + '/' })}>Log Out</button> : ( <button className ="button-74"  onClick={() => loginWithRedirect()}>Log In</button> )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;










