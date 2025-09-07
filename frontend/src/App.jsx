import Navbar from "./components/Navbar"
import Home from "./components/Home";

import {createBrowserRouter, RouterProvider} from "react-router-dom"
const router = createBrowserRouter(
    [  
       {
        path: "/",
        element: 
        <div className="w-[90%] md:max-w-[800px]">
            This is / route
        </div>
      },
      { 
        path: "/home",
        element:
        <div className=" w-[90%] md:max-w-[800px] flex flex-col">
            <Navbar></Navbar>
            <Home></Home>
        </div>
      },
      {
        path: "/history",
        element: 
        <div className="w-[90%] md:max-w-[800px]">
           <Navbar></Navbar>
        </div>
      },
     
      
      
    ]
);



function App() {
  return (
    <div className=" bg-neutral-800 text-black w-full flex justify-center min-h-screen">
          <RouterProvider router={router}>

          </RouterProvider>
    </div>
  )
}

export default App
