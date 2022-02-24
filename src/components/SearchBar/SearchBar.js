import React from 'react';
import { Icon } from '@iconify/react';

import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className='search-bar__search'>
        <Icon className='search-bar__icon' icon='fe:search' />
        <input
          className='search-bar__input'
          type='search'
          placeholder='Search'
        />
      </div>
    </div>
  );
};

export default SearchBar;
