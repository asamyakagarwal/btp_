// Home.js
import "./Home.css";
import React from 'react';
import Header from '../../components/Header/Header';
import Introduction from '../../components/Introduction/Introduction';
import Testimonial from '../../components/Testimonial/Testimonial';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";



function Home() {
  return (
    <div>
      <Navbar/>
              <Header/>
              <Introduction/>
              <Footer/>
    </div> 
  );
}


export default Home;
