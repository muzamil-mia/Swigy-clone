import React from "react";
import ReactDOM from "react-dom/client"
import Corousel from "./Corousel";
import RestaurantList from "./RestaurantList"
const Body = () => {
  return(
    <>
      <Corousel/>
      <RestaurantList/>
    </>
  )
}
export default Body;