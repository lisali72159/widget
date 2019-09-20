import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date()};
    this.tick = this.tick.bind(this);
  }
  
  tick() {
    this.setState({ time: new Date()});
  }

  componentDidMount() {
    this.tickInterval = setInterval(() => {this.tick()}, 1);
  }

  componentWillUnmount(){
    clearInterval(this.tickInterval);
  }
  
  render() {
    return (
    <>
    <div className="clock-box">
      <ul className="clock-box1">
        <li>Current Time</li>
            <li>{this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()} : {this.state.time.getMilliseconds()} EST</li>
      </ul>
      <ul className="clock-box2">
        <li>Date</li>
        <li>{this.state.time.toDateString()}</li>
      </ul>
    </div>
    </>
    )
  }
}

export default Clock;