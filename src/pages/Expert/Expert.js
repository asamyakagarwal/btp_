import React, { useState } from 'react';
import './Expert.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const sampleData = [
  {
    question: "Can I use a lathe machine for 3D machining or contouring?",
    answer: "While lathes are primarily used for 2D machining operations such as turning and facing, some advanced CNC lathe models are equipped with additional axes and capabilities for 3D machining and contouring. These machines can perform complex operations such as profiling, engraving, and sculpting on curved or irregular surfaces."
  },
  {
    question: "What are the different types of lathes available?",
    answer: "There are several types of lathes, including engine lathes, turret lathes, CNC lathes, and automatic lathes. Engine lathes are manually operated and versatile, while CNC lathes are computer-controlled for precise and automated machining. Turret lathes have a rotating tool turret for quick tool changes, and automatic lathes are designed for high-volume production with automatic feeding and cutting mechanisms."
  }, {
    question: "How do I choose the right lathe for my needs?",
    answer: "When selecting a lathe, consider factors such as the type of materials you'll be working with, the size and weight of the pieces, the level of precision required, and your budget. Assess whether you need manual control or prefer the automation of CNC machines. It's also essential to evaluate the available space in your workshop and any specific features or accessories you might need for your projects."
  }, {
    question: "What are the different construction materials that can be used to build lathe machine tool?",
    answer: "Safety is paramount when operating a lathe machine. Always wear appropriate personal protective equipment (PPE) such as safety goggles, gloves, and ear protection. Ensure that the workpiece is securely held in place using clamps or a chuck, and never wear loose clothing or jewelry that could get caught in the machine. Familiarize yourself with the emergency stop button and always follow proper operating procedures to avoid accidents."
  }, {
    question: "How do I maintain my lathe machine?",
    answer: "Regular maintenance is essential to keep your lathe in optimal condition. This includes cleaning the machine after each use to remove debris and applying lubricants to moving parts to prevent corrosion and ensure smooth operation. Check and tighten any loose bolts or fasteners, and inspect belts and bearings for signs of wear. Additionally, schedule periodic inspections and alignments to keep the machine accurate and safe."
  }, {
    question: "Can I use a lathe for both metalworking and woodworking projects?",
    answer: "Yes, many lathes are designed to handle both metalworking and woodworking tasks. However, it's crucial to use the appropriate cutting tools and techniques for each material to achieve the best results. Metal lathe tools are typically made of high-speed steel or carbide for durability and precision, while woodworking tools may have different shapes and angles suited to woodturning applications. Always ensure that the lathe is properly set up and adjusted for the specific material you're working with to avoid damage to the machine or tools."
  },
  {
    question: "What are the different construction materials that can be used to build lathe machine tool?",
    answer: "Lathe machine tools can be constructed from a variety of materials, depending on factors such as the intended application, desired durability, and cost considerations. Some common materials used in the construction of lathe machine tools include: Gray Cast Iron , Mild Steel , Concrete , Aluminium , Bronze/Brass , Ceramics ,etc."
  },
  // Add more FAQ data as needed
];

const Expert = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div>
      <Navbar/>
    <div className="container">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <ul className="faq-list">
          {sampleData.map((item, index) => (
            <li key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleAnswer(index)}>
                {item.question}
              </button>
              <div className={`faq-answer ${openIndex === index ? 'active' : ''}`}>
                {item.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Expert;