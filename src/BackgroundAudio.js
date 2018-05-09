import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import Sound from 'react-sound';

class BackgroundAudio extends Component {

  render() {
    const audioSource = this.props.audioSource.audio;
    return (
      <Sound
        url={audioSource}
        playStatus={Sound.status.PLAYING}
        autoLoad="true"
        volume="15"
      />
    )
  }
}

export default BackgroundAudio;