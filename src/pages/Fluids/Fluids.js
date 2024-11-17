import React from 'react'
import LatheNav from '../../components/LatheNav/LatheNav' ;
import fluid1 from '../../assets/fluid1.jpeg';
import fluid2 from '../../assets/fluid2.jpeg';
import fluid3 from '../../assets/fluid3.jpeg';
import sso from '../../assets/sso.jpg'
import sco1 from '../../assets/sco1.jpg'
import sco2 from '../../assets/sco2.jpg'
import './Fluids.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Fluids = () => {
  return (
    <div>
      <Navbar/>
        <LatheNav/>

        <div className='fluids'>
            <div className='head'>
              <h1>Keeping it Cool: Understanding Cutting Fluids for Lathe Operations</h1>
              <p>We'll explore the different types of cutting fluids available, their specific benefits, and how to choose the right one for your lathe operations. By understanding cutting fluids, you can ensure smoother machining, extend tool life, and achieve optimal results on your lathe projects.</p>
            </div>
             {/* Soluble Cutting Oil */}
          <div id="solublecutting" className="type1">
                <div className="description1">
                    <h1>Soluble Cutting Oil</h1>
                    <div className='speed'>
                    <p>
                    Introduction / Specification :
Syn Gr Fluid 2, 5 & 12 are water soluble synthetic grinding fluid of solution type. They are supplied in a concentrated form and are to be diluted with water in a suitable ratio. They are free from any mineral oil or fatty matter. These products are economical with good cooling and remarkable antirust properties when applied in grinding and other high speed machining operations.
     </p>
     <img src={fluid3} alt="fluid3" />
     </div>
     <div className='speed'>
     <img src={sco1} alt="fluid2" />
<p>
Application / Composition :
Syn Gr Fluid 2, 5 & 12 are specially recommended for grinding of ferrous metals, specially for grinding of open grain cast irons which tends to rust quickly after Machining, high nickel and titanium alloys. Easto Syn Gr Fuids 2, 5 & 12 is recommended for grinding operations of Iron, Steel, Non-alloyed Steels and Nickel Chromium Steels. It should not be used for grinding aluminum, zinc, copper or magnesium alloys, tin or cadmium coated parts. Dilution range for the products varies from 1:40 min. to 1:100 max. Higher concentrations than required do not give production benefits but may lead to slight discolouration of workers skin.
</p>
</div>
<div className='speed'>

<p>
Performance Level :
Besides rendering remarkable antirust properties, Syn Gr Fuids 2, 5 & 12 give longer service life to grinding wheels and good ground finish. They do not emanate obnoxious odour even when machine is shut down and fluid is not kept in circulation as they are not attacked by bacteria. The solution maintains the clarity throughout the service period. They remove grinding debris quickly and keep the wheel exceptionally clean. They do not give skin irritation when used in proper dilution range

                    </p>
                    <img src={sco2} alt="fluid2" />
                    </div>
                </div>
            </div>

            {/* Semi Synthetic Oil  */}
          <div id="semisenthetic" className="type">
                <div className="description">
                    <h1>Semi Synthetic Oil</h1>
                    <div className='speed'>
                    <img src={fluid1} alt="fluid1" />
                    <p>
                    Specification:Ease to semi synthetic cutting oil is heavy duty high performance metal working fluid based on semi synthetic technology, formulated with latest chemical innovations for lubricity, wetting and corrosion prevention properties. It contains Extreme pressure additives and frictional modifier that offers extended tool life, improved surface finishing, heat dissipation and better emulsion service life. It provides extensive cooling for heavy machining operation. It is designed to prevent rusting by forming a thin coating layer on the finish component for relatively long period.
                      </p>
                      </div>
                      <div className='speed'>
                      <p>Application / Composition : It is recommended for the machining of ferrous and non ferrous metals and the applications include Grinding, Milling Drilling, Turning, Boring, Punching, Reaming, Broaching, Notching and Tapping. It is also used in machine tool industries, Radial drilling machine, Conventional lathe, CNC rotating tool holder, CNC machining centre, Milling machine, flat shearing, Angle shearing and vertical machining centres.</p>
                      <img src={sso} alt="fluid1" />
                      </div>
                      <div>
                      <p>Benefits:
                          <li style={{color: "#663300"}}>Free from Nitrites, Phenols and sulfurized EP additives.</li>
                          <li style={{color: "#663300"}}>Effective bactericidal and fungicidal system provides higher bio resistance to microbial degradation.</li>
                          <li style={{color: "#663300"}}>Compatible with a wide range of materials including ferrous, nonferrous and non metallic materials.</li>
                          <li style={{color: "#663300"}}>Excellent cooling properties and extreme pressure lubricity combines to provide extended tool life.</li>
                          <li style={{color: "#663300"}}>Improved surface finish.</li>
                          <li style={{color: "#663300"}}>Reduces friction and heat between tool and work piece.</li>
                          <li style={{color: "#663300"}}>Better operators acceptance.</li>
                          <li style={{color: "#663300"}}>Keeps machine and work environment clean even when machining or grinding of gray iron.</li>
                      </p>
                      </div>
                    
                </div>
            </div>

            {/* Straight Fluids */}
          <div id="straight" className="type1">
                <div className="description1">
                    <h1>Straight Fluids</h1>
                    <div className='speed'>
                    <img src={fluid2} alt="fluid2" />
                    <p>
                    Specification :
Straight Cutting Oils are blended from High Viscosity Index Base Stock containing Sulphurised Fat or Chlorinated Compound and Sulphur, either active or non active type depending upon type of Metal / Cutting Operation involved. Recommended for Cutting, Grinding, Milling, Deep Hole Boring, Drilling, Gear Shaving, Gear Hobbing, Screw Cutting etc. These Oils reduces tool wear and improves machinability.

                    </p>
                    </div>
                </div>
            </div>


           


        </div>

<Footer/>
    </div>
  )
}

export default Fluids ;