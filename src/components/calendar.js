import React from 'react';

class Calendar extends React.Component {
  state = {};

  constructor() {
    super();

    fetch('/calendar')
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="calendar"></div>
    )
  }
}

export default Calendar;
