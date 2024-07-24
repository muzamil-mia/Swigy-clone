import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
  //console.log(resData);
  //console.log(resData.data);
  const { name, cuisines, avgRating, costForTwo, sla, locality, cloudinaryImageId } =
    resData;
  return (
    <div className="card font-unique">
      <div className="image">
        <img src={CDN_URL + cloudinaryImageId} alt="" />
      </div>
      <div className="info">
        <h2>{costForTwo}</h2>
        <h2>{name}</h2>
        <p><span>{avgRating}</span><span>{sla.slaString}</span></p>
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
