import React from 'react'
import wotlineLogo from "../../accets/apple-icon-180.png"
import gatewayLogo from "../../accets/Group 26.png"
import "./style.css"
const WorkExp=() =>{
    return (
        <div className="workExp">
            <h1 className="heading">Work Experience</h1>
            <div className='experience'>
                <div className="details">
                    <div className="sub-heading">Wotline</div>
                    <div className='workExp-dec'>
                        I have done a 3 month Full stack web development. During this internship I developed Landing page and worked on the messageing feature with my team. I also work created whatsApp clone as a practice project using ReactJs and Firebase.
                    </div>    
                </div>
                <img className="wotline__logo" src={wotlineLogo}/>
            </div>
            <div className='experience'>
                <img className="gateway__logo" src={gatewayLogo}/>
                <div className="details">
                    <div className="sub-heading">Gateway</div>
                    <div className='workExp-dec'>I am a FullStack web intern in Gateway Dao, It is a US based startup. I have created multiple pages such as AboutUS, Quize, Commuity pages etc. I have learnd ReactJS, TypeScript, Styled-components, AWS etc. </div>   
                </div>
            </div>
        </div>
    )
}

export default WorkExp
