import React, { Component } from "react";

export default class ClassBased extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>This is CLass Based</button>
        {this.state.show ? (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            nisi
          </p>
        ) : null}
      </div>
    );
  }
}
