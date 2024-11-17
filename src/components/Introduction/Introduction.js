import React from 'react';
import secImg from '../../assets/Image1.jpg';
import './Introduction.css';

const Introduction = () => {
  return (
    <div className='information'>
      <div className='about'>
        <h2 className='topic'>About Our Expert System for Machine Tools</h2>
        <p className='subtopic'>
      Welcome to our platform dedicated to advancing your understanding and utilization of machine tools through cutting-edge technology and comprehensive resources. Our mission is to empower individuals and industries alike in harnessing the full operational potential of mechanical machineries.
    </p>
      </div>
      <div className='infodiv'>
      <div className='info'>
        <div className='content'>
        <h2>Our Vision</h2>
        <p>We envision a future where every operator, technician, and engineer can confidently optimize machine tool performance to drive efficiency, innovation, and productivity in their respective domains. Through our expert system, we aim to democratize access to specialized knowledge and streamline the learning curve for mastering these intricate technologies.</p>
        </div>
        <img src='https://images.unsplash.com/photo-1589320011103-48e428abcbae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D' alt="imagee" />
      </div>
      </div>
      <div className='infodiv2'>
      <div className='info2'>
      <img src='https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVjaGFuaWNhbHxlbnwwfHwwfHx8MA%3D%3D' alt="imagee" />
        <div className='content'>
        <h2>What Sets Us Apart</h2>
        <p>At the core of our platform lies an innovative expert system designed to provide tailored guidance and insights for users across all proficiency levels. Unlike traditional resources, our system leverages advanced algorithms and machine learning techniques to analyse user requirements and deliver personalized recommendations in real-time.</p>
        </div>
      </div>
      </div>
      
      <div className='infodiv3'>
      <div className='info3'>
        <div className='content'>
        <h2>Join Us in Shaping the Future</h2>
        <p>Whether you're a seasoned professional or a curious enthusiast, we invite you to embark on this journey of exploration and mastery with us. Together, let's unlock the full potential of machine tools and revolutionize the way we work, create, and innovate.</p>
        </div>
        <img src='https://media.istockphoto.com/id/1312448469/photo/business-woman-at-office-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=LfekTsxnEepoE7pCL2zIxc-ewwltttdjHWAmK_t3Bcg=' alt="imagee" />
      </div>
      </div>
      
      </div>
  );
};

export default Introduction;
