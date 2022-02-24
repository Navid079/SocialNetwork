import React from 'react';

import './ExplorePost.css';

const ExplorePost = () => {
  return (
    <button className="explore-post">
      <img
        className="explore-post__image"
        src={require('../../assets/post.jpg')}
      />
    </button>
  );
};

export default ExplorePost;
