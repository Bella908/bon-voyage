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
import ViewDetailes from './pages/All Tourists Spot/ViewDetailes.jsx';
import Update from './pages/Show List/Update.jsx';
import ProtectedRout from './pages/Provider/ProtectedRout.jsx';
import ErrorPage from './ErrorPage.jsx';
import Countries from './pages/Home/Countries/Countries.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
      element: <ProtectedRout>
        <AddTouristsSpot></AddTouristsSpot>,
      </ProtectedRout>
    },
    {
      path: "/showList",
      element:
      <ProtectedRout>
<ShowList></ShowList>,
      </ProtectedRout> 
    },
    {
      path: "/logIn",
      element: <LogIn></LogIn>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/viewDetails/:id",
      element:<ProtectedRout>
        <ViewDetailes></ViewDetailes>,
      </ProtectedRout> 
    },
    {
      path: "/showList/update/:id",
      element: <ProtectedRout>
        <Update></Update>,
      </ProtectedRout>
    },
    {
      path: "/contries",
      element: <Countries></Countries>,
      loader: () => fetch('http://localhost:5000/contries')
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
