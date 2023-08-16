import React from 'react';
import { useNavigate, Route } from 'react-router-dom'; // Import useNavigate and Route
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { state } = useAuth();
  const navigate = useNavigate();

  if (state.isAuthenticated) {
    return <Component {...rest} />;
  } else {
    navigate('/login'); // Redirect to login if not authenticated
    return null; // Return null since the component won't be rendered
  }
};

export default ProtectedRoute;
