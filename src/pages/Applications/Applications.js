import React from 'react' ;
import LatheNav from '../../components/LatheNav/LatheNav' ;
import application1 from '../../assets/application1.jpeg';
import application2 from '../../assets/application2.jpeg';
import application3 from '../../assets/application3.jpeg';
import application4 from '../../assets/application4.jpeg';
import application5 from '../../assets/application5.jpeg';
import application6 from '../../assets/application6.jpeg';
import './Applications.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';




const Applications = () => {
    return (
        <div>
            <Navbar/>
            <LatheNav />

            <div className="applications">
                <div className='head'>
                    <h1>Shaping Our World: The Diverse Applications of Lathes</h1>
                    <p>This page explores the vast applications of lathes, highlighting their role in various fields. We'll delve into how lathes create everything from everyday objects to complex engineering marvels. From crafting intricate wooden bowls to machining critical engine components, you'll discover the remarkable versatility of this essential machine tool.</p>
                </div>
                {/* woodturning */}
                <div id="woodturning" className="type1">
                    <div className="description1">
                        <h1>Wood Turning</h1>
                        <div className='speed'>
                        <img src={application1 } alt="application1" />
                        <p>
                        Used to make wooden objects such as ornate table legs, baseball bats, wooden bowl, and platters; operators use a variety of tools to form.
                        </p>
                        </div>
                    </div>
                </div>

                {/* metalworking */}
                <div id="metalworking" className="type">
                    <div className="description">
                        <h1>Metal Working</h1>
                        <div className='speed'>
                        <p>
                        Used to create precision parts; most often associated with a multistep process requiring different tools for each step.
                        </p>
                        <img src={application2} alt="application2" />
                        </div>
                    </div>
                </div>



                {/* metalspinning */}
                <div id="metalspinning" className="type1">
                    <div className="description1">
                        <h1>Metal Spinning</h1>
                        <div className='speed'>
                        <img src={application3} alt="application3" />
                        <p>
                        A process where metal spins on a spindle, while the operator works it with tools; an automated process.
                        </p>
                        </div>
                    </div>
                </div>


                {/* acrylicspinning */}
                <div id="acrylicspinning" className="type">
                    <div className="description">
                        <h1>Acrylic Spinning</h1>
                        <div className='speed'>
                        <p>
                        Involves spinning acrylic on a spindle to form items from acrylic; most often used in the making of the top pieces for trophies.
                        </p>
                        <img src={application4} alt="application4" />
                        </div>
                    </div>
                </div>





                {/* thermalspraying */}
                <div id="thermalspraying" className="type1">
                    <div className="description1">
                        <h1>Thermal Spraying</h1>
                        <div className='speed'>
                        <img src={application5} alt="application5" />
                        <p>
                        Combines the rotating spindle with the painting process; the paint sticks to the stock via processes involving heating the paint materials.
                        </p>
                        </div>
                    </div>
                </div>






                {/* pottery */}
                <div id="pottery" className="type">
                    <div className="description">
                        <h1>Pottery</h1>
                        <div className='speed'>
                        <p>
                        By using a potter’s wheel, artisans can make a variety of pottery pieces; though formed mainly by hand, craftspersons also use tools.
                        </p>
                        <img src={application6} alt="application6" />
                        </div>
                    </div>
                </div>


            </div>

            <Footer/>

        </div>
    )
}

export default Applications