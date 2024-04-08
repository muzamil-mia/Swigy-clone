import { useEffect, useState } from "react"
import { RESTAURANT_URL } from "./constants";
const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  useEffect(() => {
    fetchData();
  },[])

  async function fetchData() {
    const data  = await fetch(RESTAURANT_URL);
    const json = await data.json();
    setRestaurantList(json);
  }
  return restaurantList;
}

export default useRestaurantList;