import React, { Component } from "react";

function NewDate(props) {
  return <h2> {props.date.toLocaleTimeString()}.</h2>;
}

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <NewDate date={this.state.date} />
      </div>
    );
  }
}
setInterval(Clock, 1000);
