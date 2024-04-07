import './App.css'
import React from 'react';
import Home from './components/js/home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UploadFile from './components/js/UploadFile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/upload",
    element : <UploadFile/>
  }
]);
function App() {

  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
