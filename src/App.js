import React, { useState, useEffect } from 'react';
import JobList from './components/jobList/JobList';
import './App.css';

function App() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Listen for the 'beforeinstallprompt' event
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent the default install prompt
      setDeferredPrompt(event); // Store the event to trigger later
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (!deferredPrompt) return; // If there's no prompt, exit

    deferredPrompt.prompt(); // Show the install prompt

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      setDeferredPrompt(null); // Clear the deferred prompt
    });
  };
  

  return (
    <div className="App">
      <h1 className='Heading'>Jobs Finder </h1>
      <p className='details'>Jobs on swipe</p>
      
      <div className='items'><JobList />
      {deferredPrompt && (
        <button onClick={handleInstallClick}>Install App</button>
      )}
  
      </div>
    </div>
  );
}

export default App;


