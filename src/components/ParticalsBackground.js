import React from 'react'
import ParticalCongig from './config/Partical-config'
import Particals from "react-particles-js";
function ParticalsBackground() {
    return (
        <Particals params={ParticalCongig}/>
    )
}

export default ParticalsBackground
