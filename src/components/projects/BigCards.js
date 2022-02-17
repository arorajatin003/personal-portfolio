import React,{useEffect, useRef} from 'react'
import './project.css';
import VanillaTilt from 'vanilla-tilt';
import {AiFillGithub} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'

const BigCards=(props) =>{
    const project = props.p;
    const name = project.name;
    // console.log(props);
    const options={
        speed: 1000,
        max:20,
        glare:false       
    }

    const tilt = useRef(null);
    
    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    console.log(project);
    // element.addEventListener("tiltChange", callback);
    return (
        <div ref={tilt} className="glassmorfism bigCard">
            <img className="card__img" src={project.img} />
            <div className="wrapper">
                <h1>{project.title}</h1>
                <p>{project.discription}</p>
                <div className="card__icons">
                    <a href={project.github} target="_blank"><AiFillGithub className="icon"/></a>
                    {
                        project.project!=""?
                            <a href={project.project} target="_blank">
                                <CgWebsite className="icon" />
                            </a>
                            :
                            ''
                    }
                </div>
            </div>
            
            
        </div>
    )
}

export default BigCards
