import { CssBaseline } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Layout from "./Components/Layout/Layout";


const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/',
      },
    ],
  },
]);

const App = () => {

  return (
    <div>
      <RouterProvider router={router} />
      <CssBaseline />
    </div>
  );
};

export default App;