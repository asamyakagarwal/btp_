import React from 'react';
import Card from './../../components/Card/Card'; // Import the Card component
import './News.css';
import news1 from '../../assets/news1.png';
import news2 from '../../assets/news2.png';
import news3 from '../../assets/news3.png';
import news4 from '../../assets/news4.png';
import news5 from '../../assets/news5.jpeg';
import news6 from '../../assets/news6.jpg';
import news7 from '../../assets/news7.jpg';
import news8 from '../../assets/news8.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const articles = [ // Define your news data directly within the component
  {
    image: news6,
    tagline: `Underwater welder says there's always risk when training new divers`,
    description: `So you could have, you know, 60-70 pounds on you, when youre on the surface,” he said. “You dont really feel it as much when youre underwater.....`,
    url: 'https://www.news4jax.com/news/local/2022/04/17/underwater-welder-says-theres-always-risk-when-training-new-divers/', // Redirect URL for tagline click
  },
  {
    image: news1,
    tagline: 'Artificial Intelligence - Makes Machines Smarter',
    description: 'Have you heard about artificial intelligence (AI)? It refers to computer systems that can perform tasks ......',
    url: 'https://rathinamtechnicalcampus.com/the-future-of-mechanical-engineering-trends-to-watch-in-2024/', // Redirect URL for tagline click
  }, {
    image: news2,
    tagline: 'Advanced Robotics - Lead to Greater Automation',
    description: 'Robots can now take on all sorts of jobs that are too dull, dirty or dangerous for people. Robots are working on assembly lines, exploring harsh environments, handling.....',
    url: 'https://rathinamtechnicalcampus.com/the-future-of-mechanical-engineering-trends-to-watch-in-2024/', // Redirect URL for tagline click
  }, {
    image: news3,
    tagline: '3D Printing - Open Up New Design Possibilities',
    description: '3D printing, also called additive manufacturing, is an incredible technology that builds objects layer by layer from digital models.It lets engineers quickly.....',
    url: 'https://rathinamtechnicalcampus.com/the-future-of-mechanical-engineering-trends-to-watch-in-2024/', // Redirect URL for tagline click
  }, {
    image: news4,
    tagline: 'Electric Vehicles - The future of automobiles',
    description: 'Replacing gasoline-powered cars and trucks with electric vehicles (EVs) powered by renewable energy is key to reducing emissions from transportation. Mechanical engineers.....',
    url: 'https://rathinamtechnicalcampus.com/the-future-of-mechanical-engineering-trends-to-watch-in-2024/', // Redirect URL for tagline click
  }, {
    image: news5,
    tagline: 'From entrepreneurship to design, mechanical engineering provides multiple opportunities',
    description: 'As a mechanical engineer seeking to enhance human ability, the first requirement is to have social skills such as interpersonal abilities and empathy,.....',
    url: 'https://indianexpress.com/article/education/from-entrepreneurship-to-design-mechanical-engineering-provides-multiple-opportunities-writes-iit-delhi-professor-jee-main-jee-advanced-lesson-from-iit-8863799/', // Redirect URL for tagline click
  }, {
    image: news7,
    tagline: 'Training manufacturing technologists to be future shop floor leaders',
    description: 'New curriculum from MIT and collaborating institutions aims to give technicians a ladder to become shop-floor leaders .....',
    url: 'https://news.mit.edu/2024/training-manufacturing-technologists-future-shop-floor-leaders-0402', // Redirect URL for tagline click
  }, {
    image: news8,
    tagline: 'Method rapidly verifies that a robot will avoid collisions ',
    description: 'Faster and more accurate than some alternatives, this approach could be useful for robots that interact with humans or work in tight spaces......',
    url: 'https://news.mit.edu/2024/method-rapidly-verifies-robot-will-avoid-collisions-0307', // Redirect URL for tagline click
  },
];

const News = () => {
  return (
    <>
    <Navbar/>
    <div className="news-container">
      <div className="grid-container">
        {articles.map((article, index) => (
          <Card
            key={index}
            image={article.image}
            tagline={article.tagline}
            description={article.description}
            url={article.url}
          />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );

};

export default News;