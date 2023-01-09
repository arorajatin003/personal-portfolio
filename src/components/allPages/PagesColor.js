import React from "react";
import "./styles.css";
import About from '../about/About';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import WorkExp from '../WorkExperience/WorkExp';

const PagesColor = () => {
    return (
        <div className="colorPages">
            <About />
            <WorkExp />
            <Projects />
            <Skills />
        </div>
    );
};

export default PagesColor;