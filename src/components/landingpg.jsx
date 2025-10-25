import React from 'react';
import PU from '../assets/imgs/PUlogo.jpg';
import ieeebg from '../assets/imgs/ieeebang.jpg';
import ieeelg from '../assets/imgs/ieeelogo.jpg';

const LandingPage = ({ onInaugurate }) => {
  return (
    <div className="page-container landing-page">
      <img src={PU} alt="PU Logo" className="logo-placeholder-top" />
      <div className="landing-main-content">
        <img src={ieeelg} alt="IEEE Bangalore Logo" className="logo-placeholder-side left" />
        <div className="landing-text-button">
          <h1 className="title">
            Let's enter into the IEEE Tech Week
          </h1>
          <button onClick={onInaugurate} className="inaugurate-btn">
            Inaugurate
          </button>
        </div>
        <img src={ieeebg} alt="IEEE Bangalore Logo" className="logo-placeholder-side right" />
      </div>
    </div>
  );
};

export default LandingPage;