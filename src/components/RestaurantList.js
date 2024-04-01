import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import FilterTop from "./FilterTop";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4375084&lng=78.4482441&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
     //console.log(json);
     const restaurantsArray =
     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;
    // console.log(restaurantsArray);
     setRestaurantList(restaurantsArray);
     setFilteredRestaurants(restaurantsArray);
  }

  return restaurantList.length === 0 ? (
    <h1>loading...</h1>
  ) : (
    <>
     <div className="search-top">
      <FilterTop data={filteredRestaurants}/>
      <Search/>
     </div>
     <div className="restaurant-cards">
      {filteredRestaurants.map((res) => {
        console.log(res.info);
        return <RestaurantCard key = {res.info.id} data = {res.info}/>
      })}
     </div>
    </>
  )

    //  return restaurantList.length === 0 ? (
    //   <h1>loading...</h1>
    //  ) : (
    //   <>
    //   <div className="filtertop">
    //     {filteredRestaurants.map((res) => {
    //       return <FilterTop key={res.info.id} resData={res.info} />;
    //     })}
    //   </div>
    //   <Search />
    //   <div className="restaurant-list">
    //     {filteredRestaurants.map((res) => {
    //       return <RestaurantCard key={res.info.id} resData={res.info} />;
    //     })}
    //   </div>
    //   <h2>this is restaurant</h2>
    // </>
    //  )
  }

export default RestaurantList;