import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './pages/Wrapper/Wrapper';
import Home from './pages/Home/Home';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Wrapper />}>
            <Route exact path='home' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
