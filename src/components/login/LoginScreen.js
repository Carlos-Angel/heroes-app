import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth.hook';

export default function LoginScreen() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    login({ name: 'Batman' });
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
