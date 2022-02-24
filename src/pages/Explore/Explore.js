import React from 'react';
import ExploreBar from '../../components/ExploreBar/ExploreBar';
import ExploreStory from '../../components/ExploreStory/ExploreStory';

import './Explore.css';

const Explore = () => {
  return (
    <div>
      <ExploreBar />
      <ExploreStory />
      <ExploreStory />
      <ExploreStory />
    </div>
  );
};

export default Explore;
