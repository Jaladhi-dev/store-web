import './index.css'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './utils/router/router.tsx'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)