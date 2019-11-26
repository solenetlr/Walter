import React from 'react';
import './App.css';
import Timer from './counter/Timer';

function App() {
  return (
    <div>
      <Timer seconds={40}/>
      <Timer seconds={45}/>
      <Timer seconds={50}/>
    </div>
      )
    }

export default App;
