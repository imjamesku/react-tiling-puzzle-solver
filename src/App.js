import React from 'react';
import './App.css';
import Solver from './components/solver/Solver'
import AppBar from '@material-ui/core/AppBar'

function App() {
  return (
    <>
      <AppBar position="static">
        <h1 style={{ marginLeft: '25px' }}>Tiling Puzzle Solver</h1>
      </AppBar>
      <Solver />
    </>
  );
}

export default App;
