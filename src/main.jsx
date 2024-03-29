import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home.jsx';
import Signup from './Signup/Signup.jsx';
import Login from './Login/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/> ,
    loader: () =>fetch('books.json'),
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path:"login",
        element: <Login/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
