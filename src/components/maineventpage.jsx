import React, { useState, useEffect } from 'react';
import main from '../assets/imgs/main2.jpg';
import PU from '../assets/imgs/PUlogo.jpg';
import ieeebg from '../assets/imgs/ieeebang.jpg';
import ieeelg from '../assets/imgs/ieeelogo.jpg';

import transitionGif from '../assets/imgs/curtain-open.gif'; 

const MainEventPage = () => {
  const [isImageRevealed, setIsImageRevealed] = useState(false);
  
  const GIF_DURATION_MS = 5000; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsImageRevealed(true); 
    }, GIF_DURATION_MS);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className="page-container main-event-page">
      <div className="main-page-layout">
        <div className="content-column">
          <img src={PU} alt="PU Logo" className="logo-placeholder" />
          <p className="subheading">SOCSE & SOISE presents</p>
          <h1 className="main-heading">IEEE Tech Week 2025</h1>
          <p className="quote">"Innovation for better tomorrow"</p>
          <img src={ieeelg} alt="IEEE Logo" className="logo-placeholder2" />
          <img src={ieeebg} alt="IEEE Bangalore Logo" className="logo-placeholder2 gap" />
        </div>
        <div className="image-column">
          <div className="main-image-placeholder">
            {isImageRevealed ? (
              <img src={main} alt="IEEE Tech Week Event" className="revealed-image" />
            ) : (
              <img src={transitionGif} alt="Revealing animation" className="reveal-gif" />
            )}
          </div>  
        </div>
      </div>
    </div>
  );
};

export default MainEventPage;