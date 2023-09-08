import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NoMatch from './Component/NoMatch';
import Certifcation from './Component/Certifcation';
import Education from './Component/Education'
import Project from './Component/Project'
import Technical from './Component/Technical'
import Contact from './Component/Contact';
import ProjectDetails from './Component/ProjectDetails';
import CsharpProjectDetails from './Component/CsharpProjectDetails';
import AndroidProjectDetails from './Component/AndroidProjectDetails';
import Php_projectDetails from './Component/PhP_projectDetails';
import Other from './Component/Other';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path:"Other",
    element:<Other/>,
  },
  {
    path:"Contact",
    element:<Contact/>,
  },
  {
    path:"Certifcation",
    element:<Certifcation/>
  },
  {
    path:"Education",
    element:<Education/>,
  },
  {
    path:"Project",
    element:<Project/>,
   
   
  },
  {
    path:"/Project/ProjectDetails",
    element:<ProjectDetails/>
  },
  {
    path:"/Project/CsharpProjectDetails",
    element:<CsharpProjectDetails/>,
  },
  
  {
    path:"/Project/Php_projectDetails",
    element:<Php_projectDetails/>,
  },
  {
    path:"/Project/AndroidProjectDetails",
    element:<AndroidProjectDetails/>,
  },

  {
    path:"Technical",
    element:<Technical/>,
    
  },
  











  {
    path:"*",
    element:<NoMatch/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
