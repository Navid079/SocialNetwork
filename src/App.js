import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './logic/context/UserContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Singup/Signup';

import './App.css';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
