import React , {useEffect,useRef} from 'react';
import Image2 from "../../assets/apj.webp" ;
import Image3 from "../../assets/vikramsarabai.webp" ;
import Image1 from "../../assets/cvraman.webp" ;
import Image4 from "../../assets/jcbose.webp" ;
import Image5 from "../../assets/vishvesariya.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { IoMdArrowBack , IoMdArrowForward  } from "react-icons/io";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoMdArrowBack style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <IoMdArrowForward  style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const Testimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Assuming your slider library provides a method to go to the next slide
      }
    }, 5000); // Move to next slide every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className='division'>
      <div className="testimonial" style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <div style={{ width: "50%", textAlign: "center" }}>
          <Slider ref={sliderRef} prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}>
          <Card img={Image5} info={"“The way to build a nation is to build a good citizen. The majority of the citizens should be efficient, of good character and possess a reasonable high sense of duty.”"} name={"Sir M Visvesvaraya"} work={"1st Engineer of India"} />
            <Card img={Image1} info={" “Success can come to you by courageous devotion to the task lying in front of you.”"} name={"CV Raman"} work={"Indian scientist"} />
            <Card img={Image2} info={"“Never stop fighting until you arrive at your destined place — that is, the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realize the great life.”"} name={"APJ Abdul Kalam"} work={"Indian scientist and Former Indian President"} />
            <Card img={Image3} info={"“ He who can listen to the music in the midst of noise can achieve great things.”"} name={"Vikram Sarabhai"} work={"Indian scientist and innovator"} />
            <Card img={Image4} info={"“If there has been any success in my life, that was built on the unshakable foundation of failure…”"} name={"Sir Jagadish Chandra Bose"} work={"Physicist, Biologist and Archaeologist"} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

const Card = ({ img, info, name, work }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "lightblue",
        fontSize: "28px",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
      }}
    >
      <img
        src={img}
        alt={name}
        style={{
          width: 200,
          height: 200,
          border: "1px solid lightgray",
          borderRadius: "50%",
          marginBottom: 20,
        }}
      />
      <p>{info}</p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "lightgreen" }}>{name}</span>, {work}
      </p>
    </div>
  );
};

