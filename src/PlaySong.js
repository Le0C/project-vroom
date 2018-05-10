import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactPlayer from 'react-player'

class PlaySong extends Component {
  render() {
    const song = this.props.queryResults[0].M.link.S;
    return (
        <ReactPlayer url={song} playing width="0px" height="0px" onEnded={this.props.removeSong}/>
    )
  }
}

export default PlaySong;