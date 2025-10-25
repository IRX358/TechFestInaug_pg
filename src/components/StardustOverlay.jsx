import React from 'react';

// Helper function to get a random number
const random = (min, max) => Math.random() * (max - min) + min;

const StardustOverlay = () => {
  // Generate an array of 50 specks
  const specks = Array.from({ length: 50 }).map((_, i) => {
    const style = {
      // Random horizontal position (0% to 100%)
      left: `${random(0, 100)}%`,
      // Random animation duration (2s to 5s)
      animationDuration: `${random(2, 5)}s`,
      // Random delay so they don't all start at once (0s to 5s)
      animationDelay: `${random(0, 5)}s`,
    };
    return <div key={i} className="stardust-speck" style={style} />;
  });

  return (
    <div className="stardust-container" aria-hidden="true">
      {specks}
    </div>
  );
};

export default StardustOverlay;