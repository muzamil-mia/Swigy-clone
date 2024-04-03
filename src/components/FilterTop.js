import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";


const FilterTop = () => {
  return(
    <div className="button">
      <button className="btn" onClick={() => {
        const filteredRestaurants = restaurantList.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setRestaurantList(filteredRestaurants);
      }}>Top Restaurants</button>
    </div>
  )
}

export default  FilterTop;