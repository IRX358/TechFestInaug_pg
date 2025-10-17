import React from 'react';

const MainEventPage = () => {
  return (
    <div className="page-container main-event-page">
      <div className="main-page-layout">
        <div className="content-column"><img 
            src="/imgs/PUlogo.jpg" 
            alt="PU Logo" 
            className="logo-placeholder" 
          />
          <p className="subheading">SOCSE & SOISE presents</p>
          <h1 className="main-heading">IEEE Tech Week 2025</h1>
          <p className="quote">
            "Innovation distinguishes between a leader and a follower."
          </p>
        </div>
        <div className="image-column">
         
            <img 
            src="/imgs/main.jpg" 
            alt="IEEE Tech Week Event" 
            className="main-image-placeholder" 
          />
        </div>
      </div>
    </div>
  );
};

export default MainEventPage;