import React, { useState, useEffect, useMemo } from 'react'; 
import LandingPage from './components/landingpg';
import MainEventPage from './components/maineventpage';
import './App.css';
import bgMusic from './assets/background.mp3'; 

function App() {
  const [pageState, setPageState] = useState('landing'); 

  const audio = useMemo(() => {
    const a = new Audio(bgMusic);
    a.volume = 0.8; 
    a.loop = true;   
    return a;
  }, []); 

  const handleInaugurate = () => {
    audio.play().catch(e => console.error("Audio play failed:", e)); 
    setPageState('fading'); 
  };

  useEffect(() => {
    if (pageState === 'fading') {
      const timer = setTimeout(() => {
        setPageState('main'); 
      }, 800); 
      return () => clearTimeout(timer);
    }
  }, [pageState]);

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

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