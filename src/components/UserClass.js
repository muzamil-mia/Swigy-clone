//creating class based component
import React from "react";
import { Component } from "react";

class UserClass extends Component {
  //to receive props we use constructor here
  constructor(props) {
    super(props);
    // console.log(props);
    //console.log("child constructor");

    //we can create a state variable also here there was no useState before functional component
    this.state = {
      //first state variable
      //count: 0,
      //creating multiple state variables inside class based components
      //state variable 2
     // count2: 2,
     userInfo: {
      nam: "dummy",
      location: "default"
     }
    };
  }
  // componentDidMount() {
  //   console.log("child component did mount");
  // }

  async componentDidMount() {
    this.timer = setInterval(() =>{
      console.log("hello");
    },1000)
    // console.log("child component didMount called");
    const data = await fetch("https://api.github.com/users/muzamil-mia");
    const json = await data.json();
    //console.log(json);
    
    
    this.setState({
      userInfo:json,
    })

  }

  
  
  componentDidUpdate() {
    console.log("child component didUpdate called");
  }
  
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("componentWillUnMount called");
  }
  //how to control the componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if(
      this.state.count != prevState.count || this.state.count2 != prevState.count2
    ){
      {
        console.log("do something");
      }
    }
  }
  //with the help of extends keyword our class behaves as a component which comes form React
  //class based component has a render method which returns some jsx
  render() {
   // console.log("child render");
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
         {/* <h1>Count: {this.state.count}</h1>
        <h1>{count}</h1> */}
        <h2>{name}</h2>
        <h3>{location}</h3>
        <img src={avatar_url} alt="" /> 
        {/* <h2>{name}</h2>
        <h3>{count2}</h3> */}
        {/* <button
          style={{ padding: "5px", fontSize: "16px" }}
          onClick={() => {
            //never update state variables directly
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count + 1,
            });
          }}
        >
          increment
        </button> */}
      </div>
    );
  }
}

export default UserClass;
