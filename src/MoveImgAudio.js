import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import Sound from 'react-sound';

class MoveImgAudio extends Component {
  render() {
    return (
            <Sound
                url="http://res.cloudinary.com/dnuwifia4/video/upload/v1525877498/244656__greenvwbeetle__pop-6.flac"
                playStatus={Sound.status.PLAYING}
                autoLoad="true"
                volume="50"
                onFinishedPlaying={this.props.audioOff}
                />
    )
  }
}

export default MoveImgAudio;