import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import AuthProvider from './provider/AuthProvider/AuthProvider'
import MainRouter from './routers/MainRouter/MainRouter'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='font-open-sans'>
          <RouterProvider router={MainRouter} />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
