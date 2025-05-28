import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Shared/Root';
import AuthProviders from './Providers/AuthProviders';
import LogIn from './LogIn/LogIn';
import Register from './LogIn/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/login-techbazar-rifat",
        element:<LogIn></LogIn>
      },
      {
        path:"/register-techbazar-rifat",
        element:<Register></Register>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
