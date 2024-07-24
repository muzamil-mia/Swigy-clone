import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
//import About from "./components/About";
import Error from "./components/Error";
import { lazy } from "react";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/useContext";
import { Provider } from "react-redux";
import store from "./features/store";
import Cart from "./components/Cart";
import Demo from "./components/Demo";
import Help from "./components/Help";
import Header from "./components/Header";

const AppLayout = () => {
  //lets say we have authentication code here
  const [userName, setUserName] = useState();

  //we will get login details using fetch then we will set the data to state variable
  //basically we are using context concept here
  useEffect(() => {
    const data = {
      name: "muzamil hussain",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div>
          <Header />
          {/* <Body/> */}
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About name={"muzamil"} />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/demo",
        element: <Demo />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
