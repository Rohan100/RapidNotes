import './App.css'
import React from 'react';
import Home from './components/js/home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UploadFile from './components/js/UploadFile';
import { AuthContextProvider } from './store/AuthContext.jsx';
import { FileContextProvider } from './store/FileContext.jsx';
import { ViewPdf } from './components/js/ViewPdf.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/upload",
    element: <UploadFile />
  },{
    path : "/view/:id",
    element : <ViewPdf/>
  }
]);
function App() {

  return (
    <React.StrictMode>
      <AuthContextProvider>
        <FileContextProvider>
          <RouterProvider router={router} />
        </FileContextProvider>
      </AuthContextProvider>
    </React.StrictMode>
  )
}

export default App
