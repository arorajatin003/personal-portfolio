import React, { useState } from 'react'
import LoadingAnimation from '../LoadingAnimation'
import "./about.css"
function About() {
    const [show, setShow] = useState(false);
    console.log(show);
    return (
        <div className="about" id="about">
            <div className="wrapper">
                <div className="about__text__div">
                    <h1>Who I am?</h1>
                    <p>I attend SRM Institute of Science & Technology where I study computer science and engineering. being enthusiastic about AI/ML and web technology. I have expertise utilising JavaScript, React, Node, Express, MongoDb, Bootstrap, and other amazing libraries and frameworks to create stunning and engaging web applications.</p>
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
