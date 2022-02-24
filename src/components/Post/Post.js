import React from 'react';
import IconButton from '../UI/IconButton';

import './Post.css';

const Post = ({
  className,
  avatar,
  username,
  location,
  image,
  text,
  likes,
  comments,
}) => {
  let modifier;

  if (image && text) {
    modifier = '--both';
  } else if (image) {
    modifier = '--image';
  } else if (text) {
    modifier = '--text';
  }

  return (
    <div className={`post ${className || ''}`}>
      <div className='post__header'>
        <div className='post__profile'>
          <div className='post__avatar-container'>
            <img className='post__avatar' src={avatar} alt='avatar' />
          </div>
          <div className='post__title'>
            <h2 className='post__user'>{username}</h2>
            <h4 className='post__location'>{location}</h4>
          </div>
        </div>
        <IconButton className='post__menu' icon='charm:menu-kebab' />
      </div>
      <div className='post__container'>
        <img
          className={`post__image post__image${modifier}`}
          src={image}
          alt='post'
        />
        <p className={`post__text post__text${modifier}`}>{text}</p>
      </div>
      <div className='post__footer'>
        <div className='post__control'>
          <IconButton className='post__button' icon='icon-park-outline:like' />
          <span className='post__stat'>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
