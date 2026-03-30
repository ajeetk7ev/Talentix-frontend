import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ children }) => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background text-primary font-heading font-black text-2xl animate-pulse tracking-widest uppercase">
                Verifying Session...
            </div>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PublicRoute;
