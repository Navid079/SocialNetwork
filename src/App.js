import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './pages/Wrapper/Wrapper';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Wrapper />}>
            <Route exact path='home' element={<Home />} />
            <Route exact path='explore' element={<Explore />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
