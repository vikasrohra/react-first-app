import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from './components/Header';
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    // Note: /{path} means from root (absolute route), so if we write /profile the http://localhost:1234/profile but we want it inside about hence remove /
    children: [     
      {
        path: '/',
        element: <Body />
      }, 
      {
        path: '/about', // OR path: 'about' => converted to parentPath/{path} (http://localhost:1234/about)
        element: <About />,
        children: [{
          path: 'profile', // OR path: '/about/profile'
          element: <Profile />
        }]
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
