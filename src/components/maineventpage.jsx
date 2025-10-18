import React from 'react';
import main from '../assets/imgs/main.jpg';
import PU from '../assets/imgs/PUlogo.jpg';
import ieeebg from '../assets/imgs/ieeebang.jpg';
import ieeelg from '../assets/imgs/ieeelogo.jpg';

const MainEventPage = () => {
  return (
    <div className="page-container main-event-page">
      <div className="main-page-layout">
        <div className="content-column"><img 
            src={PU}
            alt="PU Logo" 
            className="logo-placeholder" 
          />
          <p className="subheading">SOCSE & SOISE presents</p>
          <h1 className="main-heading">IEEE Tech Week 2025</h1>
          <img 
            src={ieeelg}
            alt="IEEE Logo" 
            className="logo-placeholder2" 
          />
           <img 
            src={ieeebg}
            alt="IEEE blore Logo" 
            className="logo-placeholder2 gap" 
          />
          <p className="quote">
            "Innovation for better tomorrow"
          </p>
        </div>
        <div className="image-column">
            <img 
            src={main}
            alt="IEEE Tech Week Event" 
            className="main-image-placeholder" 
          />
        </div>
      </div>
    </div>
  );
};

export default MainEventPage;