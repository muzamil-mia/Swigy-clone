import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import { useEffect } from "react";

class About extends Component {

  
  constructor(props) {
    console.log(props);
    super(props);

   // console.log("parent constructor");
  }
  componentDidMount() {
    //console.log("parent component did mount");
  }
  render() {
    //console.log("parent render");
    return (
      <div className="about">
        <h1>About class Component</h1>
        <UserClass name={"Muzamil Hussain (class)"} location={"Hyderabad"} />
        {/* <h3>hello react</h3>
        <UserClass name={"Sabit Ali (class)"} location={"Hyderabad"} /> */}
      </div>
    );
  }
}

export default About;
