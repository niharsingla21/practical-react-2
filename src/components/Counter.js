import { Component } from "react";
import React from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  handleButtonClick = () => {
    console.log("Increment");
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleButtonClick2 = () => {
    console.log("Decrement");
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <div>Count: {this.state.count}</div>
        <button onClick={this.handleButtonClick}>Increment</button>
        <button onClick={this.handleButtonClick2}>Decrement</button>
      </div>
    );
  }
}
