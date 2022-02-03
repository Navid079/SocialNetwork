import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/UI/TextInput';

import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <h1 className='login__title'>Welcome to Picko</h1>
      <TextInput label='Username' placeholder='Enter username' />
      <TextInput label='Email' type='email' placeholder='Enter username' />
      <TextInput
        label='Password'
        type='password'
        placeholder='Enter username'
      />
      <Link to='/signup'>
        <p className='login__link'>Don't have an account?</p>
      </Link>
    </div>
  );
};

export default Login;
