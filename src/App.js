import React from 'react'
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import LoadingAnimation from './components/LoadingAnimation';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import WorkExp from './components/WorkExperience/WorkExp';

function App() {
  return (
    <div className="App">
      {/* <LoadingAnimation /> */}
      <Header />
      <Intro />
      <About />
      <WorkExp />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
