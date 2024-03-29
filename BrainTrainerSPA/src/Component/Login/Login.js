import React, { useState } from 'react';
import './Login.css';

const Login = ({ isLogin, toggleLogin, login, register}) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  return (
    <div className='root-container'>
      <div className='box-container'>
        <div className='inner-container'>
          <div className='header'>{isLogin ? 'Login' : 'Register'}</div>
          <div className='box'>
            <div className='input-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                name='username'
                className='login-input'
                placeholder='Username'
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className='input-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                className='login-input'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button className='already-a-member' onClick={toggleLogin}>
              {isLogin ? 'Not a member yet?' : 'Already a member?'}
            </button>

            <button
              type='button'
              className='login-btn'
              onClick={() => isLogin ? login(username,password) : register(username,password)}
            >
              {isLogin ? 'Login' : 'Sign up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
