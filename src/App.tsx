// import { useState } from 'react'
import './App.css'
import './scripts/Router';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App

const router = createBrowserRouter([
    {
        path: "/",
        // element: <div>Acceuil</div>
    },
    {
        path: "/about",
        // element: <div>About</div>
    },
    {
        path: "/contact",
        // element: <div>Contact</div>
    }
]);