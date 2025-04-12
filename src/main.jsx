import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import About from './Components/About/About';
import BannerService from './Components/Services/BannerService';
import Services from './Components/Services/Services';
import Expertise from './Components/Expertise/Expertise';
import CustomSoftware from './Components/ServiceRoutes/CustomSoftware';
import MobileApp from './Components/ServiceRoutes/MobileApp';
import UI from './Components/ServiceRoutes/UI';
import ContactUs from './Components/Contact Us/ContactUs';
import SayHelloLocations from './Components/Contact Us/SayHelloLocations';
import EstimateProject from './Components/Contact Us/EstimateProject';
import RequestSchedule from './Components/Contact Us/RequestSchedule';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/service",
        element: <Services></Services>
      },
      {
        path: "/services/custom-software",
        element: <CustomSoftware></CustomSoftware>
      },
      {
        path: "/services/mobile-app",
        element: <MobileApp></MobileApp>
      },
      {
        path: "/services/ui-ux",
        element: <UI></UI>
      },
      {
        path: "/expertise",
        element: <Expertise></Expertise>
      },
      {
        path: "/contact_us",
        element: <ContactUs></ContactUs>,
        children: [
          {
            path: "sayhello",
            element: <SayHelloLocations></SayHelloLocations>
          },
          {
            path: "estimateproject",
            element: <EstimateProject></EstimateProject>
          },
          {
            path: "schedule",
            element: <RequestSchedule></RequestSchedule>
          },
          {
            index: true,
            element: <SayHelloLocations></SayHelloLocations>
          }
        ]
      },

    ]
  },


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
