import React from 'react'
import hss from '../../assets/hss.jpg'
import carbide from '../../assets/carbide.jpg'
import diamond from '../../assets/diamond.jpg'
import cbn from '../../assets/cbn.jpg'
import turning from '../../assets/turning.jpg'
import chamfering from '../../assets/chamfering.jpg'
import tct from '../../assets/tct.jpg'
import facing from '../../assets/facing.jpg'
import forming from '../../assets/forming.jpg'
import grooving from '../../assets/grooving.jpg'
import boring from '../../assets/boring.jpg'
import knurling from '../../assets/knurling.jpg'
import LatheNav from '../../components/LatheNav/LatheNav'
import './CuttingTools.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const CuttingTools = () => {
  return (
    <div>
        <Navbar/>
        <LatheNav/>
        <div className='ctools'>
            <div className='head'>
            <h1>The Cutting Edge: Exploring Lathe Cutting Tools</h1>
           <p>This page dives into the fascinating world of lathe cutting tools, exploring their types, functions, and importance in achieving desired results. We'll unveil the various cutting tool geometries, materials, and how they influence the machining process. By understanding these vital components, you'll gain the knowledge to select the right cutting tool for your project and ensure optimal performance on your lathe.</p>
            </div>
        <div id='material' className='type1'>
            <div className='description1'>
            <h1>Material Based Cutting Tools</h1>
            <div className='speed'>
            <img src={hss} alt='high speed steel'/>
                <p>
                <h2>High-speed Steel(HSS)</h2>
                <p>HSS Lathe Cutting Tool. Known for its dimensional accuracy and high tensile strength, these products are tested in terms of quality in order to ensuring the faultlessness.</p>
                </p>
                </div>
                <div className='speed'>
                    <p>
                <h2>Carbide</h2>
                <p>Carbide lathe cutting tools are hard and brittle. Therefore, they are compatible with virtually all materials. However, they are expensive, making their use limited in part manufacturing.</p>
                </p>
                <img src={carbide} alt='carbide'/>
                </div>
                <div className='speed'>
                <img src={diamond} alt='diamond'/>
                    <p>
                    <h2>Diamond</h2>
                <p>Lathe cutting tools made from diamonds are very hard. As a result, they are suitable for working with all materials. Nevertheless, like carbide tools, they are costly, which limits their industrial application.</p>
                    </p>
                </div>
                <div className='speed'>
                    <p>
                <h2>Cubic Boron Nitride</h2>
                <p>Cubic Boron Nitride is the next in line in terms of hardness. They are durable, abrasion resistant, and suitable for rough machining and intermittent cutting, especially workpiece cast iron.</p>
                </p>
                <img src={cbn} alt='cubic boron nitride'/>
        </div>
        </div>
        </div>
        <div id='operation' className='type'>
            <div className='description'>
            <h1>Operations Based Cutting Tools</h1>
            <div className='speed'>
            <img src={turning} alt='turning tools'/>
                <p>
                <h2>Turning tools</h2>
                <p>Turning tools are applicable in removing materials along the length of a workpiece. Consequently, it leads to a reduction in the diameter of the workpiece. There are two types:</p>
                <p>
                        <li>Rough turning tools: Rough turning tools are those that are used to remove large amounts of material from a workpiece in a single pass. Therefore, they are typically used to create rough shapes or to prepare surfaces for subsequent finishing operations.</li>
                        <li>Finish turning tools: Finish turning tools are used to remove small amounts of material from a workpiece in order to create a smooth, finished surface.</li>
                </p>
                </p>
        </div>
            <div className='speed'>
                <p>
                <h2>Chamfering tools</h2>
                <p>These lathes’ cutting tools are suitable for chamfering, i.e., producing a slanting edge. Turning tools are also suitable for chamfering. However, they must be set at the right angle to the workpiece. Moreover, they become obsolete when the inclination angle is high.</p>
                </p>
                <img src={chamfering} alt='chamfering'/>
            </div>
            <div className='speed'>
            <img src={tct} alt='thread cutting tools'/>
                <p>
                <h2>Thread Cutting tools</h2>
                <p>Thread cutting tools are suitable for making spiral thread patterns on cylindrical parts. Generally, they have a nose angle that depends on the intending thread angle. Furthermore, the tool’s cross-section will affect the thread’s pitch.</p>
                </p>
        </div>
            <div className='speed'>
                <p>
                <h2>Facing tools</h2>
                <p>Facing tools utilizes the side cutting edge to remove the thin layer of materials and produce a smooth surface.</p>
                </p>
                <img src={facing} alt='facing tools'/>
        </div>
            <div className='speed'>
            <img src={forming} alt='forming tools'/>
                <p>
                <h2>Forming tools</h2>
                <p>A forming tool combines a turning and grooving tool applicable in making complex shapes at a go. While the turning tool will do the same job, a forming tool is ideal as it increases accuracy and reduces cycle time.</p>
                </p>
        </div>
            <div className='speed'>
                <p>
                <h2>Grooving tools</h2>
                <p>These tools are applicable in making grooves on a workpiece with cylindrical surfaces. There are several shapes of grooves determined by the lathes machine tool shape. Common ones are V-shaped and square cutting tools.</p>
                </p>
                <img src={grooving} alt='grooving tools'/>
        </div>
            <div className='speed'>
            <img src={boring} alt='boring tools'/>
                <p>
                <h2>Boring tools</h2>
                <p>A boring tool is a cutting tool characterized by a boring bar with a cutting tool at its end. So, it is applicable in working and increasing the diameter of a hole.</p>
                </p>
        </div>
            <div className='speed'>
                <p>
                <h2>Knurling tools</h2>
                <p>Knurling tools have two or more metal rolling wheels with embossed patterns. Usually, they are applicable in making indents on a workpiece to increase its grips.</p>
                </p>
                <img src={knurling} alt='knurling tools'/>
        </div>
        </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default CuttingTools