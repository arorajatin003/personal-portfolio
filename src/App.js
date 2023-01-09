import React, { useEffect, useState } from 'react'
import './App.css';

import Header from './components/header/Header';
import PagesColor from './components/allPages/PagesColor';
import Intro from './components/intro/Intro';
import LoadingAnimation from './components/LoadingAnimation';


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
      <PagesColor />
    </div>
  );
}

export default App;
