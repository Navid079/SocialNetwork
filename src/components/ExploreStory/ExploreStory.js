import React from 'react';

import './ExploreStory.css';

const ExploreStory = () => {
  return (
    <button className='explore-story'>
      <img
        className='explore-story__image'
        src={require('../../assets/post.jpg')}
      />
      <div className='explore-story__gradient' />
      <img
        className='explore-story__avatar'
        src={require('../../assets/pp4.jpg')}
      />
    </button>
  );
};

export default ExploreStory;
