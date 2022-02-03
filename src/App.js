import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wrapper from './pages/Wrapper/Wrapper';
import Home from './pages/Home/Home';
import Explore from './pages/Explore/Explore';

import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
