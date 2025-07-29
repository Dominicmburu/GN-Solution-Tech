import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Dummy authentication check (replace with real logic)
const isAuthenticated = () => {
    // e.g., check localStorage, context, or redux store
    return !!localStorage.getItem('authToken');
};

const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;