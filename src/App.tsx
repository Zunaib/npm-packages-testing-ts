import React from 'react';
import logo from './logo.svg';
import './App.css';
import Reactnpmpackage from './components/reactnpmpackage/reactnpmpackage';
import { Button } from '@geneecode/geneeui'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button variant="primary" >I am a button</Button>
      </header>
    </div>
  );
}

export default App;
