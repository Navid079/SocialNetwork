import React from 'react';
import Story from './Story';

import './StoryBar.css';

const StoryBar = ({ children }) => {
  return (
    <div className='story-bar'>
      <Story you />
      <div className='story__v-splitter' />
      {children}
    </div>
  );
};

export default StoryBar;
