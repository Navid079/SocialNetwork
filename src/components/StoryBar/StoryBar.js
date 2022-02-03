import React from 'react';

import './StoryBar.css';

const StoryBar = () => {
  return (
    <div className='story'>
      <div className='story__user'>
        <div className='story__avatar-container'>
          <span className='story__avatar story__user-avatar'>+</span>
        </div>
        <h6 className='story__username'>You</h6>
      </div>
      <div className='story__v-splitter' />
      <div className='story__user'>
        <div className='story__avatar-container'>
          <img
            className='story__avatar'
            src={require('../../assets/pp1.jpg')}
          />
        </div>
        <h6 className='story__username'>user.1</h6>
      </div>
      <div className='story__user'>
        <div className='story__avatar-container'>
          <img
            className='story__avatar'
            src={require('../../assets/pp2.jpg')}
          />
        </div>
        <h6 className='story__username'>user.2</h6>
      </div>
      <div className='story__user'>
        <div className='story__avatar-container'>
          <img
            className='story__avatar'
            src={require('../../assets/pp3.jpg')}
          />
        </div>
        <h6 className='story__username'>user.3</h6>
      </div>
      <div className='story__user'>
        <div className='story__avatar-container'>
          <img
            className='story__avatar'
            src={require('../../assets/pp4.jpg')}
          />
        </div>
        <h6 className='story__username'>user.4</h6>
      </div>
      <div className='story__user'>
        <div className='story__avatar-container'>
          <img
            className='story__avatar'
            src={require('../../assets/pp4.jpg')}
          />
        </div>
        <h6 className='story__username'>user.5</h6>
      </div>
    </div>
  );
};

export default StoryBar;
