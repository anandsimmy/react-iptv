import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='*' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
