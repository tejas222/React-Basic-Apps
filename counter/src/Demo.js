import React, { Component } from "react";

export default class Demo extends Component {
  state = {
    count1: 0,
    count2: 0,
  };

  handleClick = () => {
    this.setState({
      count1: this.state.count1 + 1,
    });
  };

  handleClick2 = () => {
    this.setState({
      count1: this.state.count1 - 1,
    });
  };

  increamentAll = () => {
    this.setState({
      count2: this.state.count2 - 1,
      count1: this.state.count1 - 1,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.count1}</p>
        <p>{this.state.count2}</p>
        <button onClick={this.handleClick}>+</button>
        <button onClick={this.handleClick2}>-</button>
        <button onClick={this.increamentAll}>All +</button>
      </div>
    );
  }
}
