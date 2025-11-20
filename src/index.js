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

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
      <RouterProvider router={router} />
  </React.StrictMode>
);
