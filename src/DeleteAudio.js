import React, { Component } from 'react';
import 'aframe';
import Sound from 'react-sound';

class DeleteAudio extends Component {
  render() {
    return (
      <Sound
        url="https://res.cloudinary.com/dnuwifia4/video/upload/v1525796279/62139__tkshredder__zoomin.wav"
        playStatus={Sound.status.PLAYING}
        autoLoad="true"
        volume="50"
        onFinishedPlaying={this.props.audioOff}
      />
    )
  }
}

export default DeleteAudio;