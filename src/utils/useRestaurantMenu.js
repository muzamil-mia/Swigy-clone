import { useEffect, useState } from "react"
import { MENUAPI } from "./constants";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  },[])

  const fetchMenu = async () => {
    const data = await fetch(MENUAPI + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantMenu(json);
  }

  return restaurantMenu;
}

export default useRestaurantMenu;