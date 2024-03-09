import React from 'react';
import { RouterProvider, createBrowserRouter, type RouteObject } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/private-route/private-route.component';
import { HomePage } from './pages/home/home-page.component';

//TODO: add authenticated routes
export const authorizedRoutes = [

];
const routePaths: RouteObject[] = [
  // {
  //   path: '/',
  //   element: <PrivateRoute />,
  //   children: authorizedRoutes,
  // },
  {
    path: '/',
    element: <HomePage />,
  },
];
const router = createBrowserRouter(routePaths);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default App;
