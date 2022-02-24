import React from 'react';
import ExploreBar from '../../components/ExploreBar/ExploreBar';
import ExploreStories from '../../components/ExploreStory/ExploreStories';

import './Explore.css';

const Explore = () => {
  return (
    <div>
      <ExploreBar />
      <ExploreStories />
    </div>
  );
};

export default Explore;
