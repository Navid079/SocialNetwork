import React from 'react';

import './TextInput.css';

const TextInput = ({ className, type, placeholder, label }) => {
  return (
    <>
      <h3 className='text-input__label'>{label}</h3>
      <input
        className={`text-input ${className || ''}`}
        type={type || 'text'}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextInput;
