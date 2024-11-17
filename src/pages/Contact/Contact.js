import React from "react";
// import emailjs from 'emailjs-com';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact() {

  const form = useRef() ;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7k58x1w', 'template_i9hzzwj', form.current, 'lbO3SvpNqfeVuLEeA')
    
    e.target.reset() ;
      
  };

  return (
    <div>
      <Navbar/>
          <div className="contact-div"> 
            <div className="contact-div__text">
              <h1>Give us Feedback !! </h1>
              <p>
              "Short and sweet, your feedback's a treat. Help us grow,
               make our journey complete."
              </p>
            </div>

            <div className="contact-div__form">
               <form ref={form} onSubmit={sendEmail}>

                <div className="label" >Full Name <b>*</b></div>

                <input type="text" placeholder='E.g: "Samyak Agarwal"' name="full_name"></input>
  
                <div className="label" >Email <b>*</b></div>

                <input type="email" placeholder="youremail@example.com" name="email" ></input>
  
                <div className="label" >Tell us about it <b>*</b></div>

                <textarea placeholder="Write Here.." name="message"></textarea>
  
                <button type="submit">
                  {/* <IconMailOpened /> */}
                  &nbsp; Send Message
                </button>


              </form>
            </div>

          </div>
          <Footer/>
          </div>
  );
}

export default Contact;
