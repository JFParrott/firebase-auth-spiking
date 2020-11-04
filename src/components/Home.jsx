import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, navigate } from '@reach/router';

export default function Home() {
  const [error, setError] = useState();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div>
      Welcome home <br />
      Email: {currentUser.email}
  {error && <p>{error}</p>}
      <button type="link" onClick={handleLogout}>
        Log Out
      </button>
      {/* <Link to="/update-profile">Update Profile</Link> */}
    </div>
  );
}
