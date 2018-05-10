import React, { Component } from 'react';
import 'aframe';
import Sound from 'react-sound';

class FavouriteAudio extends Component {
  render() {
    return (
      <Sound
        url="https://res.cloudinary.com/dnuwifia4/video/upload/v1525796261/51702__bristolstories__ping.mp3"
        playStatus={Sound.status.PLAYING}
        autoLoad="true"
        volume="50"
        onFinishedPlaying={this.props.audioOff}
      />
    )
  }
}

export default FavouriteAudio;