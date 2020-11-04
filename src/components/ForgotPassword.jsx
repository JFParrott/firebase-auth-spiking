import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from '@reach/router';

export default function ForgotPassword() {
  const emailRef = useRef();
  const {currentUser, resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage('Check inbox for further instructions')
    } catch {
      setError('Failed to reset password');
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
      Password Reset
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" ref={emailRef}></input>
        <button disabled={loading}>Reset password</button>
      </form>
      <Link to="/login">Log In</Link>
    </div>
  );
}
