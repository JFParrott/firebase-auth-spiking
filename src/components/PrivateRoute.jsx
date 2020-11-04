import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Redirect } from '@reach/router'

export default function PrivateRoute({ as: Component, ...props }) {
  const { currentUser } = useAuth();
  return currentUser ? <Component {...props} /> : <Redirect from="/home" to="/login" noThrow/>;
}
