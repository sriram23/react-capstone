import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Reservation from './pages/Reservation';
import Header from './components/Header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<div><Header/>
      <Outlet></Outlet></div>),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/reservation",
          element: <Reservation />,
        },
      ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;