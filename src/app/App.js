import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';


function App() {
  return (
    <AppLayout className="App">
      <WelcomeMessage />
    </AppLayout>
  );
}

export default App;
