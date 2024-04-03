import React from "react";
import { ReactDOM, useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENUAPI } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENUAPI + resId);
      const json = await data.json();
      console.log(json);
      setRestaurantMenu(json);
    };
    if (restaurantMenu === null) {
      return <Shimmer />;
    }
    // console.log(restaurantMenu);
    const { itemCards } = restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    // if(itemCards.length() == 0) {
    //   return <Shimmer/>
    // }

    return (
      <div className="restaurant-menu">
        {itemCards.map((item) => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)}
      </div>
    );
  };
;
export default RestaurantMenu;
