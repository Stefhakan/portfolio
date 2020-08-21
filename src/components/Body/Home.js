import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='hero'>
            <div className='center'>
                <h2 className='f1'>Hi I’m Stefan Hakansson, <br /> 
                a <span className='grow'>Freelance Web Developer.</span></h2>
                <p className='f4'>See my work below. Contact me get in touch.
                </p>
            </div>
            <div className='buttons'>
                <button className=' button w-10 f5 grow link br-pill ba bw1 ph4 pv3 mb2 dib black pointer'>Projects</button>
                <button className=' button w-10 f5 grow link br-pill ba bw1 ph4 pv3 mb2 dib black pointer'>Contact</button>
            </div>
        </div>
    )
}

export default Home;