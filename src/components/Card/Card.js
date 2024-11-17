import React from 'react';

const Card = ({ image, tagline, description, url }) => {
  const handleTagClick = () => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  return (
    <div className="news-card"  onClick={handleTagClick} >
      <img src={image} alt={tagline} />
      <h2 >{tagline}</h2>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;