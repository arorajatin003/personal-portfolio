import React from 'react'
import './style.css';
const LoadingAnimation =()=> {
    return (
        <div className="loading-animation-page">
            <div className="submarine">
                <div className="top">
                    <div className="light"></div>
                    <div className="chimni"></div>
                </div>
                <div className="submarine-body">
                    <div className="pinkShadow"></div>
                    <div className="windows">
                        <div className="window"></div>
                        <div className="window "></div>
                    </div>
                    <div className="darkShadow"></div>
                    <div className="darkShadowCircle"></div>
                </div>
                <div class="submarine__propeller">
                    <div class="propeller__perspective">
                        <div class="submarine__propeller-parts darkOne"></div>
                        <div class="submarine__propeller-parts lightOne"></div>
                    </div>        
                </div>
        </div>
        <div class="bubbles__container">
            <span class="bubbles bubble-1"></span>
            <span class="bubbles bubble-2"></span>
            <span class="bubbles bubble-3"></span>
            <span class="bubbles bubble-4"></span>
        </div>
    
        </div>
    )
}

export default LoadingAnimation