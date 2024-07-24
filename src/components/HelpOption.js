import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const HelpOption = ({ data, showItem, handleShowItem }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setIsVisible(!isVisible);
    handleShowItem();
  }
  console.log(data);
  return (
    <div className="w-3/4 shadow-lg mx-auto my-5 p-2">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="text-lg font-bold ">{data.title}</span>
        <span>
          {showItem && isVisible ? (
            <IoIosArrowUp onClick={handleClick} className="cursor-pointer" />
          ) : (
            <IoIosArrowDown onClick={handleClick} className="cursor-pointer" />
          )}
        </span>
      </div>
      {showItem && isVisible && <div>
        <p className="text-lg p-2 ">{data.description}</p>
      </div>}
    </div>
  );
};

export default HelpOption;
