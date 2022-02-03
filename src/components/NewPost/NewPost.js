import React from 'react';
import Button from '../UI/Button';

import './NewPost.css';

const NewPost = ({ onPost }) => {
  return (
    <div className='new-post'>
      <div className='new-post__body'>
        <div className='new-post__avatar-container'>
          <img
            className='new-post__avatar'
            src={require('../../assets/pp4.jpg')}
            alt='avatar'
          />
        </div>
        <textarea
          className='new-post__input'
          placeholder='Write Something...'
        />
      </div>
      <div className='new-post__splitter' />
      <div className='new-post__controls'>
        <div className='new-post__media'></div>
        <Button>Post</Button>
      </div>
    </div>
  );
};

export default NewPost;
