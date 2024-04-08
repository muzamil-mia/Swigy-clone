import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header/>
      {/* <Body/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About name = {"muzamil mia"}/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>,
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);