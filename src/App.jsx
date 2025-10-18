import React, { useState, useEffect } from 'react';
import LandingPage from './components/landingpg';
import MainEventPage from './components/maineventpage';
import './App.css';

function App() {
  const [pageState, setPageState] = useState('landing'); // 'landing', 'fading', 'main'

  const handleInaugurate = () => {
    setPageState('fading'); // Trigger the fade-out of the landing page
  };

  useEffect(() => {
    if (pageState === 'fading') {
      const timer = setTimeout(() => {
        setPageState('main'); // Switch to main page after animation
      }, 800); // Duration of the fadeOut animation
      return () => clearTimeout(timer);
    }
  }, [pageState]);

  // We use CSS classes on a container div to control the fade
  return (
    <main>
      {pageState !== 'main' && (
        <div className={pageState === 'fading' ? 'landing-container fading-out' : 'landing-container'}>
          <LandingPage onInaugurate={handleInaugurate} />
        </div>
      )}
      {pageState === 'main' && <MainEventPage />}
    </main>
  );
}

export default App;