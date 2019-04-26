import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  state = {};

  constructor() {
    super();

    this.updateTime = this.updateTime.bind(this);
    this.timer = setInterval(this.updateTime, 1000);
  }

  updateTime() {
    const m = moment();

    this.setState({
      loaded: true,
      date: m.format('dddd, MMMM Do YYYY'),
      time: m.format('h:mm'),
      seconds: m.format('ss a')
    });
  }

  render() {
    return (
      <div className="clock">
        <img className="moon" src="https://api.usno.navy.mil/imagery/moon.png" alt="Moon Phase" />
        <div className="date">{this.state.date}</div>
        <div className="time">
          {this.state.time}
          <span className="seconds">:{this.state.seconds}</span>
        </div>
      </div>
    )
  }
}

export default Clock;
