import React from 'react';
import './App.css';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';
import Settings from '../Settings';
import Content from '../Shared/Content';
import DashBoard from '../DashBoard';


class App extends React.Component {
  render() {
    return (
      <AppLayout className="App">
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <DashBoard />
          </Content>
        </AppProvider>
      </AppLayout>
    )
  }
}

export default App;
