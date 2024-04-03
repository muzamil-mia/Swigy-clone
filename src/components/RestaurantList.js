import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import FilterTop from "./FilterTop";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
  //console.log(filteredRestaurants);

  return restaurantList.length === 0 ? (
    <h1>loading...</h1>
  ) : (
    <>
     <div className="search-top">
     <div className="button">
      <button className="btn" onClick={() => {
        const filteredList = restaurantList.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setFilteredRestaurants(filteredList);
      }}>Top Restaurants</button>
      </div>
      <div className="search">
      <input type="text" value = {searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search Your Restaurant"/>
      <button className="search-btn" onClick={() => {
            const filteredList = restaurantList.filter((res) => {
              console.log(res)
              return res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
            });
            //console.log(res.info.name)
            setFilteredRestaurants(filteredList);
            console.log(filteredList)
          }}>Search</button>
    </div>
     </div>
     <div className="restaurant-cards">
     {filteredRestaurants.map((res) => (
        // console.log(res.info.id)
        <Link key={res.info.id} to={"/restaurants/" + res.info.id}><RestaurantCard resData={res.info} /></Link>
        ))}
     </div>
    </>
  )
  }

export default RestaurantList;