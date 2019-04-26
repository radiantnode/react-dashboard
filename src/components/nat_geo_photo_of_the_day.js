import React from 'react';
import Loader from 'react-loader-spinner';

import '../css/photo_of_the_day.scss';

class NatGeoPhotoOfTheDay extends React.Component {
  state = {
    loaded: false,
    backgroundUrl: null
  }

  constructor() {
    super();

    this.setPicture = this.setPicture.bind(this);
  }

  componentDidMount() {
    fetch('https://www.nationalgeographic.com/photography/photo-of-the-day/_jcr_content/.gallery.json')
      .then(response => response.json())
      .then(this.setPicture);
  }

  setPicture(response) {
    const picture = response.items[0];

    this.setState({
      loaded: true,
      backgroundUrl: picture.sizes[1024],
      title: picture.title,
      description: picture.altText
    });
  }

  render() {
    const style = {
      backgroundImage: `url(${this.state.backgroundUrl})`
    };
    
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

export default NatGeoPhotoOfTheDay;
