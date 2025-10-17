import React, { useState, useEffect } from 'react';
import LandingPage from './components/landingpg';
import MainEventPage from './components/maineventpage';
import './App.css';

// Import your GIF asset
import transitionSparkleGif from './assets/imgs/curtain-open.gif'; 

function App() {
  const [pageState, setPageState] = useState('landing'); // 'landing', 'showingGif', 'main'
  
  // Estimate or know your GIF's duration in seconds.
  // Adjust this value to match your actual GIF's playback time.
  const GIF_PLAY_DURATION_SECONDS = 5; // Example: 2.5 seconds

  const handleInaugurate = () => {
    setPageState('showingGif'); // Start showing the GIF
  };

  useEffect(() => {
    if (pageState === 'showingGif') {
      const gifTimer = setTimeout(() => {
        setPageState('main'); // Switch to main page after GIF plays
      }, GIF_PLAY_DURATION_SECONDS * 1000); // Convert seconds to milliseconds
      return () => clearTimeout(gifTimer);
    }
  }, [pageState, GIF_PLAY_DURATION_SECONDS]);

  return (
    <main>
      {/* Conditionally render landing page or main page */}
      {pageState === 'main' ? <MainEventPage /> : <LandingPage onInaugurate={handleInaugurate} />}

      {/* Render the GIF transition overlay */}
      {pageState === 'showingGif' && (
        <div 
          className="gif-transition-overlay"
          // Set CSS custom property for the animation delay
          style={{ '--gif-duration': `${GIF_PLAY_DURATION_SECONDS}s` }}
        >
          <img src={transitionSparkleGif} alt="Transition Animation" />
        </div>
      )}
    </main>
  );
}

export default App;