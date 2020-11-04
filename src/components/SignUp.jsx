import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { navigate } from '@reach/router';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError('Passwords do not match');
    }

    if (passwordRef.current.value.length < 6) {
      return setError('Password should be 6 characters or more');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/home');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" ref={emailRef}></input>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" ref={passwordRef}></input>
        <label htmlFor="passwordConf">Confirm password:</label>
        <input id="passwordConf" type="password" ref={passwordConfRef}></input>
        <button disabled={loading}>Submit</button>
      </form>
    </div>
  );
}
