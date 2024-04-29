import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import './scripts/Router';
import Home from './pages/home';
import Project from './pages/project';
import ErrorPage from './pages/error';

function App() {
  const router = createBrowserRouter([
        {
        path: "/",
        element: <Home />,
        children: [
          {
              path: "/project",
              element: <ErrorPage />
          }
        ],
        errorElement: <Project />
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App;