import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';

import './style/index.css';
import Links from './pages/links';
import { ParallaxProvider } from 'react-scroll-parallax';
import Release from './pages/releasepage';
import NotFound from './pages/404';
import Tickets from './pages/tickets';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Redirect from './pages/redirect';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/links",
    element: <Links />
  },
  {
    path: "/r/:title",
    element: <Release />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/t/:event",
    element: <Tickets />
  },
  {
    path: "/redirect",
    element: <Redirect />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
  </React.StrictMode>
);
