import React from 'react';
import './Header.css'; // Import your CSS file
import Testimonial from '../Testimonial/Testimonial';
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
  return (
    <div className="home-container">
      {/* <div className="overlay">
        <div className="quote">
        "One man's 'magic' is another man's engineering."
        </div>
        <div className="additional-content">
        - Robert A. Heinlein
        </div>
      </div> */}
      <Testimonial/>
    </div>
  );
};

export default Header;
