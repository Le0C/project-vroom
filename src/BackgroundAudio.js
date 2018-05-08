import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

class BackgroundAudio extends Component {

  render() {
    return (
      <a-assets>
        <audio id="space-rumble" src={`${this.props.audioSource.audio}`}
          autoplay="true"
          type="audio/wav"
          crossorigin="anonymous"></audio>
      </a-assets>
    )
  }
}

export default BackgroundAudio;