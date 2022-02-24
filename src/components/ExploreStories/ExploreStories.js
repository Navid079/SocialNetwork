import React from 'react';

import './ExploreStories.css';

const ExploreStories = ({ children }) => {
  return (
    <div className="explore-stories">
      <h2 className="explore-stories__heading">Stories</h2>
      <div className="explore-stories__body">{children}</div>
    </div>
  );
};

export default ExploreStories;
