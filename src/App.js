import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reservation from './pages/Reservation';
import Header from './components/Header/Header';
import './App.css'
import Footer from './components/Footer/Footer';
import MobileHeader from './components/MobileHeader/MobileHeader';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<div>
      <div className='header'><Header/></div>
      <Outlet />
      <Footer/>
      <div className='mobile-header'><MobileHeader/></div>
      </div>),
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