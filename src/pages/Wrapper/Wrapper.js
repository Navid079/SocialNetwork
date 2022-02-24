import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';


import './Wrapper.css';

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <Outlet />
      <Footer className='wrapper__footer' />
    </div>
  );
};

export default Wrapper;
