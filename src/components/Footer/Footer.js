// Footer.js

import React from 'react';
import './Footer.css'; // Import the Footer.css file
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Footer() {

const navigation = useNavigate() ;    // important concept used here 

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">All rights reserved &copy; 2024</p>
        <div className="footer-links">
          <Link to="/home" className="footer-link">Home</Link>
          <Link to="/home" className="footer-link">About</Link>
          <Link to="#contact" className="footer-link">Contact Us</Link>
          <Link to="/contact-page" className="footer-link">Feedback</Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
