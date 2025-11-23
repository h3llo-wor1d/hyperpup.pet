import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import './style/index.css';

// currently unused
import { ParallaxProvider } from 'react-scroll-parallax';
import Password from './pages/password';
import PianoPage from './pages/piano';
import WhoAmI from './pages/whoami';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/password",
    element: <Password />
  },
  {
    path: "/piano",
    element: <PianoPage />
  },
  {
    path: "/whoami",
    element: <WhoAmI />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
