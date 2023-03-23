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
import About from "./Components/Pages/About/About";



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
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <SignIn />,
      },
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