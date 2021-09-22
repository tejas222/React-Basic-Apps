import React, { Component } from "react";

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      timeOn: false,
      timeOff: true,
    };
  }

  handleClickStart = () => {
    if (this.state.timeOff) {
      this.myInterval = setInterval(() => {
        this.setState((prevTime) => ({
          time: prevTime.time + 10,
          timeOn: true,
          timeOff: false,
        }));
      }, 10);
    }
  };

  handleClickStop = () => {
    clearInterval(this.myInterval);
    this.setState({ timeOn: false, timeOff: true });
    console.log(this.state.timeOn + " " + this.state.timeOff);
  };

  handleClickReset = () => {
    this.setState({ time: 0 });
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>
          {time > 60000 && (
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}: </span>
          )}
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}s : </span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)} </span>
        </h1>

        <button
          onClick={
            this.state.timeOff ? this.handleClickStart : this.handleClickStop
          }
        >
          {this.state.timeOn === true ? "Stop" : "Start"}
        </button>

        {/* <button onClick={this.handleClickStop.bind(this)}>Stop</button> */}
        <button onClick={this.handleClickReset}> Reset</button>
      </div>
    );
  }
}
