import React from "react";
import { ReactDOM, useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENUAPI } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //calling the custom hook and passing the resId as parameter
  const restaurantMenu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(-1);

  const handleCategoryClick = (index) => {
    if(index === showIndex) {
      setShowIndex(-1)
    }else
    setShowIndex(index)
  }

    if (restaurantMenu === null) {
      return <Shimmer />;
    }
    const { itemCards } = restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards);
    if(itemCards.length == 0) {
      return <Shimmer/>
    }

    const resCategories = restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(resCategories);

    return (
      <div className="border-2">
      <h2 className="text-3xl font-bold underline text-center m-2">Roti wala</h2>
      {resCategories.map((restaurant, index) => {
        return <RestaurantCategory resData = {restaurant?.card?.card} showItems = {index === showIndex ? true : false}
          handleCategoryClick = {() => setShowIndex(index)}
        />
      })}
        {}
      </div>
    );
  };
;
export default RestaurantMenu;
