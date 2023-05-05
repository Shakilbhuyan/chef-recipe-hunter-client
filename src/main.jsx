import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout.jsx';
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import DetailsLayout from './Components/Layout/DetailsLayout.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginLayout from './Components/Layout/LoginLayout.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Login/Register.jsx';
import PrivateRoute from './Components/route/PrivateRoute.jsx';
import Blog from './Components/Blog/Blog.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chef-hunter-server-shakilbhuyan.vercel.app/chef')
      }
    ]
  },
  {
    path: 'chef',
    element: <DetailsLayout></DetailsLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://chef-hunter-server-shakilbhuyan.vercel.app/chef/${params.id}`)
      }
    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
