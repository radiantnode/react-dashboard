import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Clock from './clock';
import Calendar from './calendar';
import SpotifyNowPlaying from './spotify_now_playing';
import NASAPhotoOfTheDay from './nasa_photo_of_the_day';
import NatGeoPhotoOfTheDay from './nat_geo_photo_of_the_day';

import '../css/app.scss';

const colors = ['#000000', '#000003', '#00001C', '#000C36',
                '#00254F', '#083F69', '#215882', '#3B729C',
                '#548BB5', '#6EA5CF', '#87BEE8', '#EDFFFF'];

function App() {
  return (
    <div id="app-container">
      <CssBaseline />

      <Grid container spacing={0} className="grid-container">
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[0]}}>
          <Clock />
        </Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[1]}}>
          <Calendar />
        </Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[2]}}></Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[3]}}></Grid>

        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[4]}}>
          <SpotifyNowPlaying />
        </Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[5]}}></Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[6]}}></Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[7]}}>
          <NASAPhotoOfTheDay />
        </Grid>

        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[8]}}></Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[9]}}>
          <NatGeoPhotoOfTheDay />
        </Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[10]}}></Grid>
        <Grid item xs={3} className="grid-item" style={{backgroundColor: colors[11]}}></Grid>
      </Grid>
    </div>
  );
}

export default App;
