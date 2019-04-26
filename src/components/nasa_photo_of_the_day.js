import React from 'react';
import Loader from 'react-loader-spinner';

import '../css/photo_of_the_day.scss';

class NASAPhotoOfTheDay extends React.Component {
  state = {
    loaded: false,
    backgroundUrl: null
  }

  constructor() {
    super();

    this.setPicture = this.setPicture.bind(this);
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=hQbASPwdHiHTZ8Grmp2vmClm3PZQ2Tc4q3bVdo0A')
      .then(response => response.json())
      .then(this.setPicture);
  }

  setPicture(picture) {
    this.setState({
      loaded: true,
      backgroundUrl: picture.hdurl,
      title: picture.title,
      description: picture.explanation.substring(0, 300)
    });
  }

  render() {
    const style = {
      backgroundImage: `url(${this.state.backgroundUrl})`
    }

    if(this.state.loaded) {
      return (
        <div className="photo-of-the-day">
          <div className="photo-container" style={style}></div>
          <div className="photo-description">
            <h3>{this.state.title}</h3>
            <p>{this.state.description}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loader">
          <Loader
            type="Grid"
            color="#ffffff"
            height="50"	
            width="50"
          /> 
        </div>
      );
    }
  }
}

export default NASAPhotoOfTheDay;
