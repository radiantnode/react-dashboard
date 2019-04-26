import React from 'react';
import Loader from 'react-loader-spinner';

class SpotifyNowPlaying extends React.Component {
  state = {
    loaded: false
  }

  constructor() {
    super();

    this.updateNowPlaying = this.updateNowPlaying.bind(this);
  }
  
  componentDidMount() {
    this.updateNowPlaying();

    this.timer = setInterval(this.updateNowPlaying, 1000);
  }

  updateNowPlaying(playing) {
    fetch('https://api.spotify.com/v1/me/player?market=US', { 
      headers: new Headers({
        'Authorization': `Bearer ${process.env.REACT_APP_SPOTIFY_TOKEN}`
      })
    })
    .then(data => data.json())
    .then(playing => {
      this.setState({
        playing,
        loaded: !playing.error,
      });

    });

  }

  render() {
    if(this.state.loaded) {
      let playing = this.state.playing;

      return (
        <div className="now-playing">
          <img className="track-art" src={playing.item.album.images[1].url} alt={playing.item.album.name} />
          <div className="track-info">
            <div className="track-title">{playing.item.name}</div>
            <div className="track-album">{playing.item.album.name} &mdash; {playing.item.artists.map(artist => artist.name).join(', ')}</div>
            {/* <div className="track-device">Playing on {playing.device.name}</div> */}
          </div>
        </div>
      )
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

export default SpotifyNowPlaying;
