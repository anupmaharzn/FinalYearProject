import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { loading, isAuthenticated } = useSelector((state) => state.user);
    return (
        <React.Fragment>
            {!loading && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (!isAuthenticated) {
                            return <Navigate to="/login" />;
                        }
                        return <Component {...props} />
                    }}
                />
            )}
        </React.Fragment>
    );
};

export default ProtectedRoute;