import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types';

export default function LoginScreen() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: {
        name: 'Carlos',
      },
    });
    navigate(lastPath, { replace: true });
  };

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleClick}>
        Login
      </button>
    </div>
  );
}
