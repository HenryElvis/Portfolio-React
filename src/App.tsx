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
      errorElement: <ErrorPage />
    },
    {
      path: "/project",
      element: <Project />,
      errorElement: <ErrorPage />
    }
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

// let DataToFetch: string = "";

// export function SetData(data:string) : void
// {
//     DataToFetch = data;
// }

// export function GetData() : string
// {
//     if (!DataToFetch || DataToFetch === "")
//     {
//         console.log("Data not found");
      
//         return "";
//     }

//     return DataToFetch;
// }

export default App;