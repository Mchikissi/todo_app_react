import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Error from './pages/Error.jsx'
import AppLayout from './pages/AppLayout.jsx'
import Homepage from './pages/Homepage.jsx'
import Pending from './pages/Pending.jsx'
import Completed from './pages/Completed.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path:'pending',
        element: <Pending/>
      },
      {
        path:'completed',
        element: <Completed/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </React.StrictMode>,
)
