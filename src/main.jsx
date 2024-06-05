import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Error from './pages/Error.jsx'
import AppLayout from './ui/AppLayout.jsx'
import Homepage from './pages/Homepage.jsx'
import Pending from './pages/Pending.jsx'
import Completed from './pages/Completed.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
    <Toaster position='top-center'/>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
