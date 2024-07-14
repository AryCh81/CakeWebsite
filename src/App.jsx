import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import './App.css'

function App() {
 
  //creates Routes
  const router=createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path:"/cart",
      element: <><Navbar/><Cart/></>
    }

  ]);

  return (
    <>
    <div className=' bg-[url("/images/bg.png")] min-h-screen bg-cover bg-no-repeat overflow-x-hidden'>
     <RouterProvider router={router}/>
   </div>
    </>
  )
}

export default App
