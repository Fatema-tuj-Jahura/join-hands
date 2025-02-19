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
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddNeedPost from './components/AddNeedPost/AddNeedPost';
import AllNeedPost from './components/AllNeedPost/AllNeedPost';
import ManagePost from './components/ManagePost/ManagePost';
import ManageNeedPost from './components/ManageNeedPost/ManageNeedPost';
import UpdateNeedPost from './components/UpdateNeedPost/UpdateNeedPost';
import ManageRequestPost from './components/ManageRequestPost/ManageRequestPost';
import DetailsPostPage from './components/DetailsPostPage/DetailsPostPage';
import Volunteer from './components/Volunteer/Volunteer';
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
      },
      {
        path: '/allPost',
        element: <AllNeedPost></AllNeedPost>,
        
      },
      {
        path: '/addPost',
        element: <PrivateRoute>
          <AddNeedPost></AddNeedPost>
        </PrivateRoute>,
      },
      {
        path: '/managePost',
        element: <PrivateRoute>
          <ManagePost></ManagePost>
        </PrivateRoute>,
      },
      
      {
        path: '/manageNeedPost',
        element: <PrivateRoute>
          <ManageNeedPost></ManageNeedPost>
        </PrivateRoute>,
      },
      {
        path: '/manageRequestPost',
        element: <PrivateRoute>
          <ManageRequestPost></ManageRequestPost>
        </PrivateRoute>,
      },
      {
        path: '/updateNeedPost/:id',
        element: <PrivateRoute>
          <UpdateNeedPost></UpdateNeedPost>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`),
      },

      {
        path: '/detailsPost/:id',
        element: <PrivateRoute>
          <DetailsPostPage></DetailsPostPage>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`),
      },
      {
        path: '/volunteer/:id',
        element: <PrivateRoute>
          <Volunteer></Volunteer>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/volunteer/${params.id}`),
      },
    ],
  },  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <AuthProvider>
      <RouterProvider router={router} /> 
    </AuthProvider>  
  </StrictMode>,
)
