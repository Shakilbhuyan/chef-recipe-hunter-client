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

const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: ( ) => fetch('http://localhost:4000/chef')
        }
      ]
    },
    {
    path:'chef',
    element:<DetailsLayout></DetailsLayout>,
    children:[
      {
        path:':id',
        element:<ViewDetails></ViewDetails>,
        loader: ({params})=>fetch(`http://localhost:4000/chef/${params.id}`)
      }
    ]
    },
    {
     path:'*',
     element:<Error></Error>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
