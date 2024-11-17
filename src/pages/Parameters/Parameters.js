import React from 'react'
import LatheNav from '../../components/LatheNav/LatheNav'
import cs from '../../assets/cs_formula.png'
import cs2 from '../../assets/cs_formula2.png'
import doc from '../../assets/doc_formula.png'
import mt from '../../assets/mt_formula.png'
import ss from '../../assets/ss_formula.png'
import mrr from '../../assets/mrr_formula.png'
import power from '../../assets/power.png'
import './Parameters.css'
import { BiColor } from 'react-icons/bi'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Parameters = () => {
  return (
    <div>
        <Navbar/>
        <LatheNav/>
        <div className='parametersoflathe'>
        <div className='head'>
        <h1>Mastering the Cut: Understanding Lathe Parameters</h1>
        <p>This page delves into the world of lathe parameters, explaining the critical factors that influence the machining process. We'll explore how parameters like cutting speed, feed rate, and depth of cut work together to determine the efficiency, surface finish, and overall success of your lathe operations. By understanding and controlling these parameters, you'll gain the power to fine-tune your lathe for exceptional results.</p>
        </div>

        <div id='cs' className='type1'>
            <div className='description1'>
                <h1>Cutting Speed</h1>
                <div className='speed'>
                <img src={cs} alt='cutting_speed'/>
                <p>The cutting speed (v) of a tool is the speed at which the metal is removed by the tool from the workpiece. In a lathe, it is the peripherical speed of the work past the cutting tool expressed in meters per minute.Where,
                        <li>d – is the diameter of the work in mm.</li>
                        <li>n – is the r.p.m of the work.</li>
                </p>
                </div>
                <div className='speed'>
                <p>In the British system, cutting speed is expressed in feet per minute and diameter of the work in inches. Where,
                        <li>d – is the diameter of the work in mm.</li>
                        <li>n – is the r.p.m of the work.</li> 
                </p>
                <img src={cs2} alt='cutting_speed'/>
                </div>
            </div>
        </div>
        <div id='doc' className='type'>
            <div className='description'>
                <h1>Depth of Cut</h1>
                <div className='speed'>
                <img src={doc} alt='depth of cut'/>
                <p>The depth of cut (t) is the perpendicular distance measured from the machined surface to the uncut surface of the workpiece. In a lathe machine, the depth of cut is shown as follows:Where,
                        <li style={{color: "#663300"}}>d1 - diameter of the workpiece surface before machining.</li>
                        <li style={{color: "#663300"}}>d2 – diameter of the machined surface.</li>
                </p>
                </div>
                <div className='speed'>
                <p>Another factor remaining fixed, the depth of cut changes inversely as the cutting speed. For general purpose, the ratio of the depth of cut to the feed varies from 10:1</p>
                </div>
            </div>
        </div>
        <div id='mt' className='type1'>
            <div className='description1'>
                <h1>Machine Time</h1>
                <div className='speed'>
                <p>The machining time in the lathe work can be calculated for a particular operation if the speed of the job, feed and length of the job is known.If “s” is the feed of the job per revolution expressed in mm per revolution and “l” the length of the job in mm, then a number of revolutions of the job required for a complete cut will be: l/s </p>
                <img src={mt} alt='machine time'/>
                </div>
            </div>
        </div>
        <div id='mrr' className='type'>
            <div className='description'>
                <h1>Metal removal rate Q (cm3/min)</h1>
                <img src={mrr} alt='metal removal'/>
            </div>
        </div>
        <div id='np' className='type1'>
            <div className='description1'>
                <h1>Net power Pc (kW)</h1>
                <img src={power} alt='power'/>
            </div>
        </div>
        </div>
        <Footer/>
    </div>

  )
}

export default Parameters