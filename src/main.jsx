import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Error from './Components/Error/Error';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      }
    ],
  },  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode> 
      <RouterProvider router={router} /> 
  </StrictMode>,
)
