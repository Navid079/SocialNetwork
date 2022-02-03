import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import IconButton from '../UI/IconButton';

import './ExploreBar.css';

const ExploreBar = () => {
  return (
    <nav className='explore-nav'>
      <div className='explore-navbar'>
        <Link to='/home'>
          <IconButton
            className='explore-navbar__back'
            icon='eva:arrow-back-fill'
          />
        </Link>
        <h1 className='explore-navbar__title'>Explore</h1>
      </div>
      <SearchBar />
    </nav>
  );
};

export default ExploreBar;
