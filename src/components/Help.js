import { FAQ } from "../utils/constants";
import HelpOption from "./HelpOption";
import { useState } from "react";

const Help = () => {
const [showIndex, setShowIndex] = useState(-1);


const handleShowItem = (index) => {
  if(index === showIndex){
    setShowIndex(-1)
  }else{
    setShowIndex(index);
  }
}


  return (
    <div>
      {FAQ.map((item, index) => {
        return <HelpOption data = {item} key = {index} showItem = {index === showIndex ? true : false} handleShowItem = {() => setShowIndex(index)}/>
      })}
    </div>
  )
}

export default Help;