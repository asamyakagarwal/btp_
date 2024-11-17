import React, { useEffect, useRef } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';
import Carousel from '../../components/carousel/carousel';
import Typed from 'typed.js';


const Login = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const typedTextRef = useRef(null); // useRef for DOM element reference

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["The LNMIIT Jaipur", "OUR WEBSITE"],
      typeSpeed: 150,
      backSpeed: 150, 
      loop: true,
    });

    // Cleanup function to destroy the Typed instance on unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="login">
      <div className="login-text">
        <p>Welcome to <span className="auto-type" ref={typedTextRef}></span></p>
      </div>

      <div className="login-btn">
        {isAuthenticated ? (
          <button type="button" className="glow-on-hover" onClick={() => logout({ returnTo: window.location.origin + '/' })}>
            Log Out
          </button>
        ) : (
          <button type="button" className="glow-on-hover" onClick={() => loginWithRedirect()}>
            <h2>Log In </h2>
          </button>
        )}
      </div>

      <div className="login-ribbon">
        <Carousel />
      </div>
    </div>
  );
};

export default Login;
