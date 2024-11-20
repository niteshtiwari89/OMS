import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider/AuthContext';

interface ProtectedRouteProps {
  allowedRoles: string[];
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, element }) => {
  const { isAuthenticated, user } = useAuth();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If user does not have the required role, redirect to a different page
  if (user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />; // Or to a specific page like '/unauthorized'
  }

  // If user is authenticated and has the correct role, render the element
  return <>{element}</>;
};

export default ProtectedRoute;
