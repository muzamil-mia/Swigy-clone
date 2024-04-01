import React from "react";
import ReactDOM from "react-dom/client";

const RestaurantCard = (resData) => {
  console.log(resData.data);
  const {name, cuisines, avgRating, sla, locality} = resData.data;
  console.log(locality);
  return (
      <div className="card">
      <div className="image">
      </div>
      <div className="info">
      </div>
    </div>
  )
}
export default RestaurantCard;