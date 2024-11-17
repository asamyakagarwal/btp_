import React from 'react'
import LatheNav from '../../components/LatheNav/LatheNav'
import LatheHome from '../../components/LatheHome/LatheHome'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


const Lathe = () => {
  return ( 
    <div>
      <Navbar/>
        <LatheNav/>
        <LatheHome/>
        <Footer/>
    </div>
  )
}

export default Lathe