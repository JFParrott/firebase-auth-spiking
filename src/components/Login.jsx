import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { navigate, Link } from '@reach/router';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/home');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  }

  return (
    <div>
      {currentUser && JSON.stringify(currentUser)} <br />
      <br />
      {currentUser && currentUser.email} <br />
      <br />
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" ref={emailRef}></input>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" ref={passwordRef}></input>
        <button disabled={loading}>Log In</button>
      </form>
      <Link to="/forgot-password">Forgot password?</Link>
    </div>
  );
}
