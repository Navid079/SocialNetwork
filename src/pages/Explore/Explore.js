import React from 'react';
import ExploreBar from '../../components/ExploreBar/ExploreBar';
import ExplorePost from '../../components/ExplorePost/ExplorePost';
import ExploreStories from '../../components/ExploreStories/ExploreStories';
import ExploreStory from '../../components/ExploreStory/ExploreStory';

import './Explore.css';

const Explore = () => {
  return (
    <div>
      <ExploreBar />
      <ExploreStories>
        <ExploreStory
          avatar={require('../../assets/pp1.jpg')}
          storyImage={require('../../assets/post.jpg')}
        />
        <ExploreStory
          avatar={require('../../assets/pp1.jpg')}
          storyImage={require('../../assets/post.jpg')}
        />
        <ExploreStory
          avatar={require('../../assets/pp1.jpg')}
          storyImage={require('../../assets/post.jpg')}
        />
      </ExploreStories>
      <ExplorePost />
      <ExplorePost />
      <ExplorePost />
    </div>
  );
};

export default Explore;
