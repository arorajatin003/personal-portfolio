import React from 'react'
import ParticalsBackground from '../ParticalsBackground';

import "./intro.css";
// import image from ".../images/photo.png"
function Intro() {
    return (
        <div className="intro"> 
           <ParticalsBackground className="intro__particals"/>
            <div className="intro__text">
               <h3>
                   Hi I'm
               </h3>
               <h1>Jatin Arora</h1>
               <h4>I love to develope</h4>
               {/* <p>
               I am a Computer Science and Engineering student from SRM Institute of science & technology. Being passionate about web technology and AI/ML. I have experience in building beautiful and interactive web apps using JavaScript / Reactjs / Nodejs / Expressjs / MongoDb / Bootstrap and some other cool libraries and frameworks.
               </p> */}
            </div>
            
            <div className="intro__image__div">
                {/* <img src="../images/photo.png" alt="logo"></img> */}
            </div>
            <div class="waveWrapper waveAnimation">
                <div class="waveWrapperInner bgTop">
                    <div class="wave waveTop"></div>
                </div>
                <div class="waveWrapperInner bgMiddle">
                    <div class="wave waveMiddle" ></div>
                </div>
                <div class="waveWrapperInner bgBottom">
                    <div class="wave waveBottom" ></div>
                </div>
            </div>
            
        </div>
    )
}

export default Intro
