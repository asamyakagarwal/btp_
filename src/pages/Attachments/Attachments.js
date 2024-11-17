import React from 'react'
import LatheNav from '../../components/LatheNav/LatheNav' ;
import attachment1 from '../../assets/attachment1.jpeg';
import attachment2 from '../../assets/attachment2.jpeg';
import attachment3 from '../../assets/attachment3.jpeg';
import attachment4 from '../../assets/attachment4.jpeg';
import attachment5 from '../../assets/attachment5.jpeg';
import grinding2 from '../../assets/grinding2.jpg'
import milling2 from '../../assets/milling2.jpg'
import './Attachments.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const Attachments = () => {
  return (
    <div>

        <Navbar/>

        <LatheNav/>

        <div className='attachments'>
            <div className='head'>
                <h1>Expanding Lathe Capabilities: A Look at Attachments</h1>
                <p>This page dives into the world of lathe attachments, exploring the most common types and their applications. We'll unveil how these attachments transform a lathe into a more versatile machine, empowering you to take your projects to the next level.</p>
            </div>
          {/* gearcutting */}
          <div id="gearcutting" className="type1">
                <div className="description1">
                    <h1>Gear Cutting Attachment</h1>
                    <div className='speed'>
                    <img src={attachment1} alt="attachment1" />
                    <p>
                    Gear cutting attachments enhance the capabilities of a lathe by enabling the cutting of bevel gears and spur gears. Additionally, these attachments handle external keyway cutting, linear indexing, and slotting, facilitating a wide range of machining operations.
                    </p>
                    </div>
                </div>
            </div>

            {/* grinding */}
          <div id="grinding" className="type">
                <div className="description">
                    <h1>Grinding Attachment</h1>
                    <div className='speed'>
                    <p>
                    Similar in function to the milling attachment, the grinding attachment for lathe machines serves the purpose of sharpening milling cutters and reamers. To prevent dust accumulation, the lathe's bedways are covered with cloth, and a small pan holds water or oil to collect grit without affecting the bedways. 
                    </p>
                    <img src={attachment2} alt="attachment2" />
                    </div>
                    <div className='speed'>
                    <img src={grinding2} alt="attachment2" />
                    <p>External grinding employs a substantial grinder mounted on the lathe's compound rest, usually with a diameter of at least 100mm. This attachment handles tasks such as internal and external cylindrical grinding, splining, and finishing grooves.</p>
                    </div>
                </div>
            </div>

            {/* miling */}
          <div id="miling" className="type1">
                <div className="description1">
                    <h1>Milling Attachment</h1>
                    <div className='speed'>
                    <p>
                    Milling attachments for lathes serve a versatile role in machining operations. They are employed to create helical grooves, flat surfaces, deep screw threads, worms, keyways, Tee Slot cutting, and even perform thread milling, among other tasks. 
                    </p>
                    <img src={attachment3} alt="attachment3" />
                    </div>
                    <div className='speed'>
                    <img src={milling2} alt="attachment3" />
                    <p>
                    Typically, a milling attachment replaces the compound rest of the lathe and comprises a milling head with a spindle for mounting the milling cutter. This assembly often includes a motor to drive the milling machine.
                    </p>
                    </div>
                </div>
            </div>


            {/* sphericalturning */}
          <div id="sphericalturning" className="type">
                <div className="description">
                    <h1>Spherical Turning Attachment</h1>
                    <div className='speed'>
                    <p>
                    Spherical turning attachments are specifically designed for machining concave, convex, and spherical surfaces on centre lathes. Mounted on the cross slide, this attachment accommodates the positioning of the tool post at specific angles relative to the workpiece, allowing for the precise machining of complex components with spherical profiles.
                    </p>
                    <img src={attachment4} alt="attachment4" />
                    </div>
                </div>
            </div>


            {/* taperturning */}
          <div id="taperturning" className="type1">
                <div className="description1">
                    <h1>Taper Turning Attachment</h1>
                    <div className='speed'>
                    <img src={attachment5} alt="attachment5" />
                    <p>
                    The taper turning attachment enables the lathe machine to produce tapered workpieces. It allows the setting of various angles for the lathe spindle's axis. A linkage system connects a sliding block to the cross slide, which rides along a guide bar during turning operations in Lathe machine. When the top slide is swung 90 degrees to align perpendicularly with the work, it facilitates controlled depth of cut application.
                    </p>
                    </div>
                </div>
            </div>


        </div>

        <Footer/>

    </div>
  )
}

export default Attachments