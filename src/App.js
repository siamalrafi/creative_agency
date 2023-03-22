import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Layout from "./Components/Layout/Layout";
import { theme } from "./Components/theme/theme";
import Register from "./Components/Pages/SignUp/Register";
import SignIn from "./Components/Pages/SignIn/SignIn";
import Contact from './Components/Pages/Contact/Contact';
import Services from './Components/Pages/Home/Services/Services';

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/',
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <SignIn />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      }.element,
      {
        path: "Services",
        element: <Services />,
      }
    ],
  },
]);

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;