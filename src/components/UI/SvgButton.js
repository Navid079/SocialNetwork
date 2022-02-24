import React from 'react';

import './SvgButton.css';

const IconButton = ({ className, children }) => {
  return <button className={`svg-button ${className}`}>{children}</button>;
};

export default IconButton;
