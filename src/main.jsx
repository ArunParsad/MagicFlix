import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  RootLayout,
  HomeRoute,
  SearchRoute,
  MoviesRoute,
  ShowsRoute,
} from './routes'
import './index.css'
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomeRoute />,
      },
      {
        path: '/search',
        element: <SearchRoute />,
      },
      {
        path: '/movies',
        element: <MoviesRoute />,
      },
      {
        path: '/shows',
        element: <ShowsRoute />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
