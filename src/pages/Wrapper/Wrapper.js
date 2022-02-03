import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


import './Wrapper.css';

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <Navbar className='wrapper__nav' />
      <Outlet />
      <Footer className='wrapper__footer' />
    </div>
  );
};

export default Wrapper;
