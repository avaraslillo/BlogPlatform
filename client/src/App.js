import './App.css';

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InsertEntry from './components/InsertEntry';
import ShowEntries from './components/ShowEntries';

function App() {


  return (
    
    
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<ShowEntries/>} />
          <Route path="/insert-entry" element={<InsertEntry/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
