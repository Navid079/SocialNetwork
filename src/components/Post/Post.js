import React from 'react';

import './Post.css';

const Post = () => {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__profile'>
          <div className='post__avatar-container'>
            <img
              className='post__avatar'
              src={require('../../assets/pp1.jpg')}
              alt='avatar'
            />
          </div>
          <div className='post__title'>
            <h2 className='post__user'>Vivi.Barc</h2>
            <h4 className='post__location'>Vivian Brcenas</h4>
          </div>
        </div>
      </div>
      <div className='post__container'>
        <img
          className='post__image'
          src={require('../../assets/post.jpg')}
          alt='post'
        />
      </div>
      <div className='post__footer'></div>
    </div>
  );
};

export default Post;
