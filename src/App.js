import './App.css';
import SignUp from './components/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import { Router } from '@reach/router';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute as={Home} path="/home" />
        <Login path="/login" />
        <SignUp path="/signup" />
        <ForgotPassword path="/forgot-password" />
      </Router>
    </AuthProvider>
  );
}

export default App;
