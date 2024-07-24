import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import Search from "./Search";
import RestaurantCard from "./RestaurantCard";
import FilterTop from "./FilterTop";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import { RESTAURANT_URL } from "../utils/constants";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();
    const restaurantsArray =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;
    setRestaurants(restaurantsArray);
    setFilteredRestaurants(restaurantsArray);
  };

  return restaurants.length === 0 ? (
    <h1>loading...</h1>
  ) : (
    <>
      <div className="search-top">
          <button
            className="btn"
            onClick={() => {
              const filteredList = restaurants.filter((res) => {
                return res.info.avgRating > 4.3;
              });
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Restaurants
          </button>
        <div className="search">
          <div className="search-button">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Your Restaurant"
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurants.filter((res) => {
                // console.log(res)
                return res.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              //console.log(res.info.name)
              setFilteredRestaurants(filteredList);
              //console.log(filteredList)
            }}
          >
            Search
          </button>
          </div>
        </div>
      </div>
      <div className="restaurant-cards">
        {filteredRestaurants.map((res) => (
          // console.log(res.info.id)
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard resData={res.info} />
          </Link>
        ))}
      </div>
      <div className="help">
        <Link to = "/help"><button>Help</button></Link>
      </div>
    </>
  );
};

export default RestaurantList;
