import React, { useState } from 'react'
import LoadingAnimation from '../LoadingAnimation'
import "./about.css"
function About() {
    const [show, setShow] = useState(false);
    console.log(show);
    return (
        <div className="about">
            <div className="wrapper">
                <div className="about__text__div">
                    <h1>Who I am?</h1>
                    <p>I am a Computer Science and Engineering student from SRM Institute of science & technology. Being passionate about web technology and AI/ML. I have experience in building beautiful and interactive web apps using JavaScript / Reactjs / Nodejs / Expressjs / MongoDb / Bootstrap and some other cool libraries and frameworks.</p>
                    <a target="_blank" href='/file/Jatin Arora_RA1911003010976 (1) (1).pdf' download>Resume</a> 
                </div>   
                <div className={`about_Sub_div ${show && `about_Sub_div_start`}`} onClick={()=>setShow(true)}>
                <LoadingAnimation />
                </div>     
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                {/* <div className="dot_div"><span className="dot"></span></div> */}
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                {/* <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div>
                <div className="dot_div"><span className="dot"></span></div> */}
            </div>
        </div>
    )
}

export default About
