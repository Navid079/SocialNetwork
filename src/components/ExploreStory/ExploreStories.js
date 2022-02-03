import React from 'react';
import ExploreStory from './ExploreStory';

import './ExploreStories.css';

const ExploreStories = () => {
  return (
    <div className='explore-stories'>
      <h2 className='explore-stories__title'>Stories</h2>
      <div className='explore-stories__body'>
        <ExploreStory className='explore-stories__story' />
        <ExploreStory className='explore-stories__story' />
        <ExploreStory className='explore-stories__story' />
      </div>
    </div>
  );
};

export default ExploreStories;
