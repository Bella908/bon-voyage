import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'
import Home from './pages/Home/Home.jsx';
import Root from './layout/Root.jsx';
import AllTouristsSpot from './pages/All Tourists Spot/AllTouristsSpot.jsx';
import AddTouristsSpot from './pages/Add Tourists Spot/AddTouristsSpot.jsx';
import ShowList from './pages/Show List/ShowList.jsx';
import LogIn from './pages/Log-in/LogIn.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './pages/Provider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/allTouristsSpot",
      element: <AllTouristsSpot></AllTouristsSpot>,
      loader: () => fetch('http://localhost:5000/newSpot')
    },
    {
      path: "/addTouristsSpot",
      element: <AddTouristsSpot></AddTouristsSpot>,
    },
    {
      path: "/showList",
      element: <ShowList></ShowList>,
    },
    {
      path: "/logIn",
      element: <LogIn></LogIn>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
