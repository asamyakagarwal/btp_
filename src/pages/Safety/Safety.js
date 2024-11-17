import React from 'react'
import LatheNav from '../../components/LatheNav/LatheNav'
import safety1 from '../../assets/safety1.png'
import safety2 from '../../assets/safety2.png'
import './Safety.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Safety = () => {
    return (
        <div>
            <Navbar/>
            <LatheNav />

            <div className="safetywithlathe">
                <div className='head'>
                    <h1>Safety First: Essential Precautions for Lathe Operations</h1>
                    <p>This page serves as your guide to safe lathe operation, outlining essential precautions to prevent accidents and injuries. We'll explore key safety practices, from proper attire and personal protective equipment (PPE) to safe work habits and lathe maintenance procedures. By understanding and implementing these precautions, you can ensure a safe and productive environment in your workshop or machining area.</p>
                </div>
                <div className='type1'>
                <div className='description1'>
                <h1>Precaution and Safety</h1>
                <div className='speed'>
                <img src={safety1} alt=''/>
                <p>
                    Emery cloth should never be used with NC lathes. Employers should assess the need to use emery cloth on components rotating in a lathe. Such operations may not be necessary if:
                    The finish being sought is only cosmetic. For such finishes, the component may be held in one hand and polished by emery cloth held in the other. Alternatively, a finishing belt or machine may be used.
                    A sizing operation can be successfully performed either by turning or by further operations in a dedicated polishing, finishing, or grinding machine.
                </p>
                </div>
                <div className='speed'>
                    <p>
                        For polishing the ends of components, only very short lengths or pads of cloth, which are incapable of causing entanglements, should be used. Overall sleeves should be tight-fitting and gloves should never be worn.
                        Most accidents happen when each end of a strip of emery cloth is held in separate hands and passed around the back of the component being finished. If the cloth is wrapped around the fingers and/or becomes snagged on the component while it is tightly gripped, then a serious injury is the likely result.
                    </p>
                    <img src={safety2} alt=''/>
                    </div>
                    </div>
                    </div>
                    <div className='type'>
                        <div className='description'>
                    <div className='measures'>
                    <h2>Some important safety precautions to follow when using lathes are:</h2>
                    <p>
                            <li style={{color: "#663300"}}>Correct dress is important, remove rings and watches, roll sleeves above elbows.</li>
                            <li style={{color: "#663300"}}>Always stop the lathe before making adjustments.</li>
                            <li style={{color: "#663300"}}>Do not change spindle speeds until the lathe comes to a complete stop.</li>
                            <li style={{color: "#663300"}}>Always wear protective eye protection.</li>
                            <li style={{color: "#663300"}}>Never lay tools directly on the lathe ways. If a separate table is not available, use a wide board with a cleat on each side to lay on the ways.</li>
                            <li style={{color: "#663300"}}>Use two hands when sanding the workpiece. Do not wrap sandpaper or emery cloth around the workpiece.</li>
                    </p>
                    </div>
                    </div>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Safety ;