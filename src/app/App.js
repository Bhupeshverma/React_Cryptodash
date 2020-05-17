import React from 'react';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';


class App extends React.Component {
  render() {
    return (
      <AppLayout className="App">
        <AppProvider>
          <AppBar />
          <WelcomeMessage />
        </AppProvider>
      </AppLayout>
    )
  }
}

export default App;
