// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./carousel.css";
import Image1 from "../../assets/Image1.jpg";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/Image3.jpeg";
import Image4 from "../../assets/Image4.PNG";
import Image5 from "../../assets/Image5.jpg";
import Image6 from "../../assets/Image6.jpg";
import Image7 from "../../assets/image7.jpg";
import Image8 from "../../assets/Image8.jpg";
import Image9 from "../../assets/Image9.jpg";
import Image10 from "../../assets/Image10.jpg";



import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./carousel.css";

const ImageData = [

  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },

  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },


  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },


  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },

  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },

  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },

  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },

  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },

  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },

  { src: Image1, alt: "Logo 1", name: "Capstan Lathe" },
  { src: Image2, alt: "Logo 2", name: "Horizontal Milling " },
  { src: Image3, alt: "Logo 3", name: "Centerless Grinding" },
  { src: Image4, alt: "Logo 3", name: "Center Lathe" },
  { src: Image5, alt: "Logo 3", name: "Radial Drill Machine" },
  { src: Image6, alt: "Logo 3", name: "Shaper Machine" },
  { src: Image7, alt: "Logo 3", name: "Verticle Milling" },
  { src: Image8, alt: "Logo 1", name: "Surface-grinder" },
  { src: Image9, alt: "Logo 2", name: "Bench Drill" },
  { src: Image10, alt: "Logo 3", name: "Cylindricle Grinding" },
 
];

const Carousel = () => {
  const navigation = useNavigate();

  return (

    <div className='logos'>
      <div className="logos-slide">
        {ImageData.map((image) => (
          <div className="logo">
            <img  src={image.src} alt={image.alt} />
            <span className="image-name">{image.name}</span>
          </div>
        ))}
      </div>


    </div>
  );
}

export default Carousel;
