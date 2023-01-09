import React from 'react'
import "./project.css";

import BigCards from './BigCards';
function Projects() {
    const projects = [
        {key:1, title: "Zoom Clone", discription:"It is a realtime video call app where diffirent users can join by creating a room and sendling room url.",img:"/image/zoom.PNG",github:"https://github.com/arorajatin003/zoom-clone",project:"https://fierce-retreat-17828.herokuapp.com/", name: 'zoom'},
        {key:2, title: "WhatsApp Clone", discription:"It is realtime group chat app where anyone can create a public room and chat. It has a google authentication.",img:"/image/wp.PNG",github:"https://github.com/arorajatin003/WhatsApp-clone",project:"https://whatsapp-clone-e93bb.web.app/" },
        {key:3, title: "Chrome Extention", discription:"It is a chrome extention which uses api to featch on demand joke whenever user clicks on extention icon.",img:"/image/ex.PNG",github:"",project:""},
        {key:4, title: "Tesla Clone", discription:"It is a tesla clone website which uses styled Components for designing.",img:"/image/tesla.PNG",github:"https://github.com/arorajatin003/tesla-landing-page",project:"https://tesla-clone-aa597.web.app/#"},
        {key:5, title: "Virtual Color", discription:"It is based computer vision where user uses can color virtually using diffirent color pen.",img:"/image/openCV.PNG",github:"https://github.com/arorajatin003/virtual_color",project:""},
        {key:5, title: "More Projects", discription:"I have projests done in React, Java, Node, Network Design etc. They all are hosted on my github have a look on them as well.",img:"https://github-readme-stats.vercel.app/api?username=arorajatin003&show_icons=true&theme=blue-green",github:"https://github.com/arorajatin003",project:""}
    ]
    return (
        <div className="project" id='projects'>
            <h1 className="heading">Some Of My Projects</h1>
            <div className="projrcts_list">
                {
                    projects.map((project,index) =>{
                        // <h1 key={index}>{project.title}</h1>
                        return( <div className='bigCardWrapper'><BigCards p={project} /></div> )
                        // console.log(project);
                    })
                   
                }
                
            </div>
            
        </div>
    )
}

export default Projects
