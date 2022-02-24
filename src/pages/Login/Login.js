import React from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button'

import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <h1 className='login__title'>Welcome to Picko</h1>
      <TextInput label='Username' placeholder='Enter username' />
      <TextInput
        label='Password'
        type='password'
        placeholder='Enter password'
      />
      <Link to='/signup'>
        <p className='login__link'>Don't have an account?</p>
      </Link>
      <Button className='login__button'>Login</Button>
    </div>
  );
};

export default Login;
