import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Layout from './layouts/Layout'
import Home from '../src/pages/Home'
import Cities from '../src/pages/Cities'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[{
      path:'/', element: <Home/>
    }]
  },
  {
    path: '/cities',
    element: <Layout/>,
    children:[{
      path:'/cities', element: <Cities/>
    }]
  }
]);

function App() {
  

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
