import React from 'react';

import './Story.css';

const Story = ({ you, username, avatar }) => {
  const image = you ? (
    <div className='story__avatar story__user-avatar'>+</div>
  ) : (
    <img className='story__avatar' src={avatar} />
  );

  return (
    <div className='story'>
      <div className='story__avatar-container'>{image}</div>
      <h6 className='story__username'>{you ? 'You' : username}</h6>
    </div>
  );
};

export default Story;
