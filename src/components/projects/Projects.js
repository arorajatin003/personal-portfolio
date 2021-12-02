import React from 'react'
import "./project.css";
import BigCards from './BigCards';
function Projects() {
    const projects = [
        {key:1, title: "Zoom Clone", discription:"It is a realtime video call app where diffirent users can join by creating a room and sendling room url.",img:"../images/zoom.PNG",github:"https://github.com/arorajatin003/zoom-clone",project:"https://fierce-retreat-17828.herokuapp.com/"},
        {key:2, title: "WhatsApp Clone", discription:"It is realtime group chat app where anyone can create a public room and chat. It has a google authentication.",img:"",github:"https://github.com/arorajatin003/WhatsApp-clone",project:"https://whatsapp-clone-e93bb.web.app/" },
        {key:3, title: "Chrome Extention", discription:"It is a chrome extention which uses api to featch on demand joke whenever user clicks on extention icon.",img:"",link:""},
        {key:4, title: "Tesla Clone", discription:"It is a tesla clone website which uses styled Components for designing.",img:"",link:""},
        {key:5, title: "Virtual Color", discription:"It is based computer vision where user uses can color virtually using diffirent color pen.",img:"",link:""},
    ]
    return (
        <div className="project">
            <h1 className="heading">Some Of My Projects</h1>
            <div className="projrcts_list">
                {
                    projects.map((project,index) =>{
                        // <h1 key={index}>{project.title}</h1>
                        return <BigCards p={project} /> 
                        // console.log(project);
                    })
                   
                }
            </div>
        </div>
    )
}

export default Projects
