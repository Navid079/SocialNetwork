import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import TextInput from '../../components/UI/TextInput';

import './Signup.css';

const Signup = () => {
  return (
    <div className='signup'>
      <h1 className='signup__title'>Welcome to Picko</h1>
      <TextInput label='Username' placeholder='Enter username' />
      <TextInput label='Email' type='email' placeholder='user@email.com' />
      <TextInput
        label='Password'
        type='password'
        placeholder='at least 6 characters'
      />
      <Link to='/login'>
        <p className='signup__link'>Already have an account?</p>
      </Link>
      <Button className='signup__button'>Signup</Button>
    </div>
  );
};

export default Signup;
