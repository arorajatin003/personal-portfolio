import React, { useEffect, useState } from 'react'
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import LoadingAnimation from './components/LoadingAnimation';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import WorkExp from './components/WorkExperience/WorkExp';

const App = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handelScroll = () => {
    const pagePosition = window.pageYOffset;
    if(pagePosition>10){
      setIsScroll(true);
    }else{
      setIsScroll(false);
    }
    // console.log(pagePosition);
  }
  useEffect(() => {
    window.addEventListener('scroll', handelScroll);

    return (() => {
      window.removeEventListener('scroll', handelScroll);
    })
  }, [] )
  return (
    <div className="App">
      {/* <LoadingAnimation /> */}
      <Header isScroll={isScroll}/>
      <Intro />
      <About />
      <WorkExp />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
