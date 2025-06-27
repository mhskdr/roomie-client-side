import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Loading from '../components/loading/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoutes;