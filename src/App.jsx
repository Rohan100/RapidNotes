import './App.css'
import React from 'react';
import Home from './components/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UploadFile from './components/UploadFile';

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
