import React from 'react';
import Button from '../UI/Button';
import IconButton from '../UI/IconButton';

import './NewPost.css';

const NewPost = ({ className, avatar }) => {
  return (
    <div className={`new-post ${className || ''}`}>
      <div className='new-post__body'>
        <div className='new-post__avatar-container'>
          <img
            className='new-post__avatar'
            src={avatar}
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
        <div className='new-post__media'>
          <IconButton icon='ic:round-photo-filter' />
          <IconButton icon='akar-icons:video' />
          <IconButton icon='ic:outline-place' />
          <IconButton icon='fluent:emoji-24-regular' />
        </div>
        <Button>Post</Button>
      </div>
    </div>
  );
};

export default NewPost;
