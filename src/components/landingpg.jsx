import React from 'react';

const LandingPage = ({ onInaugurate }) => {
  return (
    <div className="page-container landing-page">
      <h1 className="title">
        Let's enter into the IEEE Tech Week
      </h1>
      <button onClick={onInaugurate} className="inaugurate-btn">
        Inaugurate
      </button>
    </div>
  );
};

export default LandingPage;