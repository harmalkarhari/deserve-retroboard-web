import React from 'react';
import { type RouteProps } from 'react-router';
import { Navigate, Outlet } from 'react-router-dom';
export type PrivateRouteProps = RouteProps;

export const PrivateRoute = ({ ...props }: PrivateRouteProps) => {
  const userData = localStorage.getItem('userData');
  if (userData) {
    return <Outlet />;
  }
  return <Navigate to={'/login'} />;
};
export default PrivateRoute;
