import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InsertEntry from './components/InsertEntry';
import ShowEntries from './components/ShowEntries';

function App() {


  return (
    
    
    <Router>
      <div className='App'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/insert-entry">Insert Entry</Nav.Link>
        </Nav>
        
      </Navbar>
        <Routes>
          <Route path="/" element={<ShowEntries/>} />
          <Route path="/insert-entry" element={<InsertEntry/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
