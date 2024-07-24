import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { FaStar } from 'react-icons/fa'
import { addItem, removeItem } from '../features/cartSlice'
import { useState } from "react";

const RestaurantCategoryItems = ({ item }) => {
  const [itemCount, setItemsCount] = useState(0);
  const dispatch = useDispatch();
  const { id, name, description, price, imageId, defaultPrice } = item;
  const avgRating = item.ratings.aggregatedRating.rating;

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setItemsCount(itemCount + 1);
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    setItemsCount(itemCount - 1);
  }
  return (
    <div className="">
          <div
            key={id}
            className="p-2 m-2 border border-black-200 border-b-2 text-left ml-0 flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="text-lg font-bold">{name}</span>
                <p className="text-lg font-bold pt-3">
                  - ₹{" "}
                  {price / 100 || defaultPrice / 100}
                </p>
                {avgRating !== undefined ? ( // Conditionally render star icon and rating value
              <p className="flex items-start text-lg font-bold pt-3"> {/* Paragraph container */}
                <FaStar
                  className={avgRating > 4 ? "text-green-500 mr-1" : "text-red-500 mr-1"}
                />
                <span className="px-2">{avgRating}</span> {/* Display the rating value */}
              </p>
            ) : (
              <p className="text-gray-400">No rating available</p> // Display a message if rating is undefined
            )}
               
              </div>
              <p>{description}</p>
            </div>
            <div className="w-3/12 flex flex-col justify-center items-center">
              <img src={CDN_URL + imageId} className="w-[200px] h-[130px] rounded-lg mb-2.5 object-cover" />
              <div className="flex justify-evenly items-center w-[140px] h-[34px] mt-2.5 text-gray-count outline-none bg-white border border-gray hover:bg-black hover:text-white">
               <button className="p-2 text-lg font-bold " onClick={() => handleAddItem(item)}>Add To Cart</button>
              </div>
            </div>
          </div>
    </div>
  );
};

export default RestaurantCategoryItems;
