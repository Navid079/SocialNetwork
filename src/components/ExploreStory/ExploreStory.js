import React from 'react';

import './ExploreStory.css';

const ExploreStory = ({storyImage, avatar}) => {
  return (
    <button className='explore-story'>
      <img
        className='explore-story__image'
        src={storyImage}
      />
      <div className='explore-story__gradient' />
      <img
        className='explore-story__avatar'
        src={avatar}
      />
    </button>
  );
};

export default ExploreStory;
