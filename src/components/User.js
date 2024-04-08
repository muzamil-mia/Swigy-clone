import { useState } from "react";

const User = (props) => {
  const[count] = useState(0);
  return(
    <div className="user-card">
    <h1>{count}</h1>
      <h2>{props.name}</h2>
      <h3>Kashmir</h3>
    </div>
  )
}

export default User;