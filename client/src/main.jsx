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
console.log('%cStop! This console is primarily used by developers to fix bugs', 'font-size: 32pt; font-weight: bold; color: red; border: 2px solid black; text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);');
console.log('%cThis is a browser feature intended for developers. If someone told you to copy-paste something here to enable a feature or "hack" someone\'s account, it is a scam and will give them access to your account.', 'font-size: 18pt; font-weight: bold; color: #808080; ');

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
