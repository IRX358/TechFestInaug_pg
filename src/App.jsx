import React, { useState, useEffect } from 'react';
import LandingPage from './components/landingpg';
import MainEventPage from './components/maineventpage';
import './App.css';

function App() {
  const [pageState, setPageState] = useState('landing'); // 'landing', 'fading', 'main'

  const handleInaugurate = () => {
    setPageState('fading'); // Trigger the fade-out animation
  };

  useEffect(() => {
    if (pageState === 'fading') {
      const timer = setTimeout(() => {
        setPageState('main'); // Switch to main page after animation
      }, 800); // Must match the fadeOut animation duration
      return () => clearTimeout(timer);
    }
  }, [pageState]);

  return (
    <main>
      {pageState !== 'main' && (
        <div className={pageState === 'fading' ? 'landing-page fading-out' : 'landing-page'}>
          <LandingPage onInaugurate={handleInaugurate} />
        </div>
      )}
      {pageState === 'main' && <MainEventPage />}
    </main>
  );
}

export default App;