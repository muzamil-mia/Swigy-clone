import { useState } from "react";
import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({ resData, showItems, handleCategoryClick }) => {
  const [isVisible, setIsvisible] = useState(false);
  
  const restArray = resData.itemCards;

  const toggleVies = () => {
    setIsvisible(!isVisible);
  }
  //console.log(resData);

  const handleClick = (event) => {
    event.stopPropagation();
    handleCategoryClick();
    setIsvisible(!isVisible);
  };
  return (
    <div className="w-3/4 shadow-lg p-4 my-5 mx-auto">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="text-lg font-bold">{resData?.title} ({resData.itemCards.length})</span>
        <span className="text-lg font-bold">
        {showItems && isVisible ? (
              <IoIosArrowUp onClick={handleClick} className="cursor-pointer" />
            ) : (
              <IoIosArrowDown onClick={handleClick} className="cursor-pointer" />
            )}
        </span>
      </div>
      {showItems && isVisible && restArray.map((item) => {
        return <div className="flex-flex-col justify-evenly">
          <RestaurantCategoryItems key = {item.card.info.id} item = {item.card.info}/>
        </div>
      })}
    </div>
  );
};

export default RestaurantCategory;
