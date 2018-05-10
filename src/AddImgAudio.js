import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import Sound from 'react-sound';

class AddImgAudio extends Component {
  render() {
    return (
            <Sound
                url="http://res.cloudinary.com/dnuwifia4/video/upload/v1525876054/394671__mattleschuck__magic-twinkle.wav"
                playStatus={Sound.status.PLAYING}
                autoLoad="true"
                volume="50"
                onFinishedPlaying={this.props.audioOff}
                />
    )
  }
}

export default AddImgAudio;