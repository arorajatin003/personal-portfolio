import React from 'react'
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import LoadingAnimation from './components/LoadingAnimation';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      {/* <LoadingAnimation /> */}
      <Header />
      <Intro />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
