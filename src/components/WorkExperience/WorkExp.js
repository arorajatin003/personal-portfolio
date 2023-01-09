import React from 'react'
import wotlineLogo from "../../accets/apple-icon-180.png"
import gatewayLogo from "../../accets/Group 26.png"
import "./style.css"
const WorkExp=() =>{
    return (
        <div className="workExp" id="work">
            <h1 className="heading">Work Experience</h1>
            <div className='experience'>
                <div className="details">
                    <div className="sub-heading">Wotline</div>
                    <div className='workExp-dec'>
                        <li>It was a three-month internship in full-stack web development.</li>
                        <li>I created a landing page for this internship and collaborated with my team on the messaging feature.</li>
                        <li>As a practise project, I also developed a WhatsApp clone using ReactJs and Firebase.</li>
                    </div>    
                </div>
                <img className="wotline__logo" src={wotlineLogo}/>
            </div>
            <div className='experience'>
                <img className="gateway__logo" src={gatewayLogo}/>
                <div className="details">
                    <div className="sub-heading">Gateway</div>
                    <div className='workExp-dec'>
                        <li>I work as a FullStack web intern for the US-based firm Gateway Dao.</li>
                        <li>I've made a number of pages, including AboutUS, Quize, community pages, etc.</li>
                        <li>I've learned about ReactJS, TypeScript, Styled Components, AWS, and other things. </li>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default WorkExp
