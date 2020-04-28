import React from 'react';
import logo from './logo.svg';
import Content from './components/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Where is the International Space Station?
        </p>
      </header>
      <Content/>
    </div>
  );
}

export default App;
