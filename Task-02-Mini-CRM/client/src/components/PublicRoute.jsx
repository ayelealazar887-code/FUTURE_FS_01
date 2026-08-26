import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PublicRoute() {
    
    const token = localStorage.getItem('token');

    if (token) {
        return <Navigate to="/salesoverview" replace />;
    }
    return <Outlet />
}

export default PublicRoute