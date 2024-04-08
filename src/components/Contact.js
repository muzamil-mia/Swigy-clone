import { useEffect } from "react";
const Contact = () => {
useEffect(() => {
  const timer = setInterval(() => {
    console.log("hello contacts")
  },1000);
  console.log("useeffect");
 
  return () => {
    console.log("useeffect return");
    clearInterval(timer);
  }
},[])
console.log("render");

  return(
    
    <div className="contact-details">
      <h2>Contact...</h2>
    </div>
  )
}

export default Contact;