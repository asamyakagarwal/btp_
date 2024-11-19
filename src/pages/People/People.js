import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './People.css';

import Person1 from "../../assets/my-imgae.png";
import Person2 from "../../assets/my-imgae.png";
import Person3 from "../../assets/my-imgae.png";
 

const People = () => {
  const teamPpl = [
    { img: Person1, name: "Harshit Tripathi", job: "Salesman" },
    { img: Person2, name: "Samyak Agarwal", job: "Business Owner" },
    { img: Person3, name: "Harshit Chicholikar", job: "Photographer" },
  ];

  return (
    <>
      <Navbar />


      <section className="team-page">
        <div className="container">
          <h2 className='topic'>Our Team</h2>
          <div className="team-container">
            {teamPpl.map((ppl, id) => (

              <div key={id} className="team-container__box">

                <div className="peopleImg">
                  <img src={ppl.img} alt={`${ppl.name}'s profile`} />
                </div>

                <div className="description">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default People;
