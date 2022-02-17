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
                    <div className='workExp-dec'>Its a description</div>    
                </div>
                <img className="wotline__logo" src={wotlineLogo}/>
            </div>
            <div className='experience'>
                <img className="gateway__logo" src={gatewayLogo}/>
                <div className="details">
                    <div className="sub-heading">Gateway</div>
                    <div className='workExp-dec'>Its a description</div>   
                </div>
            </div>
        </div>
    )
}

export default WorkExp
