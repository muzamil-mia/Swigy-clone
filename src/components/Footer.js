import React, { useContext } from "react";
import ReactDOM from "react-dom/client"
import UserContext from "../utils/useContext";
const Footer = () => {

  const data = useContext(UserContext);
  console.log(data);
  return(
    <div className="border border-black-border-2 min-h-20">
      <h1 className="text-center my-5 text-lg font-bold">made with ❤️ by {data.loggedInUser}</h1>
    </div>
  )
}

export default Footer;