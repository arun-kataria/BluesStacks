import React from 'react';
import Campagins from './components/campaigns';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div>
      <div className='header'></div>
      <div className='title-text'>Mange Campagins</div>
      <div className='camp-main-div'>
        <Campagins />
      </div>
    </div>
  );
}

export default App;
