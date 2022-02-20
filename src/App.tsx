import React from 'react';
import logo from './logo.svg';
import './App.css';
import Leaderboard from './Leaderboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Rock - Paper - Scissors - Lizard - Spock
      </header>
      
      <Leaderboard />
    </div>
  );
}

export default App;
