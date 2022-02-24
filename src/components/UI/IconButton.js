import React from 'react';

import './IconButton.css';

import { Icon } from '@iconify/react';

const IconButton = ({ className, icon }) => {
  return (
    <button className={`icon-button ${className}`}>
      <Icon icon={icon} />
    </button>
  );
};

export default IconButton;
