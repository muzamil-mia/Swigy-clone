import User from "./User";
//UserClass is imported to demonstrate the life cycle of class based component
import UserClass from "./UserClass";
import { Component } from "react";
import { useEffect } from "react";
//User is imported to demonstarte the life cycle methods of functional based components
import User from "./User";

/**
 In React, both class-based components and function-based (functional) components have their own lifecycle methods and hooks, respectively. Here’s a detailed explanation of the sequence of method executions for both types of components:

Class-Based Components
Class-based components in React have a lifecycle with several methods that are called at specific points during the component's life. The most relevant lifecycle methods include:

Constructor
getDerivedStateFromProps (rarely used)
render
componentDidMount
componentDidUpdate
componentWillUnmount
Here's the typical sequence of method execution for class-based components:

Constructor:
Called when the component is instantiated.
Good place to initialize state and bind methods.

getDerivedStateFromProps:
Called before rendering when new props or state are received.
Returns an object to update the state or null to update nothing.
Rarely used due to its specific use case.

Render:
Called to render the component's JSX.
Should be a pure function of props and state.

componentDidMount:
Called after the component is mounted (inserted into the tree).
Good place to perform side effects such as data fetching.

componentDidUpdate:
Called after the component updates (after re-render).
Receives previous props and state as arguments.

componentWillUnmount:
Called just before the component is unmounted and destroyed.
Good place to perform cleanup, such as removing event listeners or canceling network requests.
Example of Class-Based Component
 */

class About extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      showUser: false
    };

     console.log("parent constructor");
     this.handleToggleUser = this.handleToggleUser.bind(this);
  }
  
  
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleToggleUser (){
    this.setState(prevState => ({
      showUser: !prevState.showUser
    }))
  }
  render() {
    console.log("parent render");
    return (
      <>
      <div className=" border border-2 min-h-[450px] bg-orange-600">
        <img
          src={"https://careers.swiggy.com/assets/img/inverted-commas.png"}
          alt=""
          className="mt-10 ml-10"
        />
        <h3 className="text-4xl text-white ml-10">
          Our mission is to elevate the quality of life for the urban consumer <br />
          with unparalleled convenience. Convenience is what makes us tick. <br /> It's
          what makes us get out of bed and say, "Let's do this."
        </h3>
      </div>
      <div className="">
      <h1 className="text-center text-4xl m-4">The Swigy Journey</h1>
        <img src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg" alt=""  className="w-full"/>
      </div>
      {/* {this.state.showUser ? <UserClass/> : null}
      <br />
      <button className="p-2 bg-blue-600 text-white" onClick={this.handleToggleUser}>Show User</button> */}
      <UserClass/>
       {this.state.showUser ? <User/> : null}
      <br />
      <button className="p-2 bg-blue-600 text-white" onClick={this.handleToggleUser}>Show User</button> 
      </>
    );
  }
}

export default About;
