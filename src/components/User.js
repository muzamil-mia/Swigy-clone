import { useState, useEffect } from "react";

const User = (props) => {
  //this example is used to demonstrate the lifecycle of functional based components
  const [count, setCount] = useState(0);
  console.log('Function execution (render)');

  useEffect(() => {
    console.log('useEffect (componentDidMount)');

    return () => {
      console.log('useEffect cleanup (componentWillUnmount)');
    };
  }, []);

  useEffect(() => {
    console.log('useEffect (componentDidUpdate)', count);
  }, [count]);

  return(
    <div className="user-card">
    <h1>{count}</h1>
      <h2>{props.name}</h2>
      <h3>Kashmir</h3>
    </div>
  )
}

export default User;