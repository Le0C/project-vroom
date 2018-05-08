import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';

import Canvas from './Canvas'
import Button from './Button'

import { BOT, ACCESS_ID, SECRET_KEY } from './config/bot'

class Room extends Component {



  render() {


    return (<Entity>
      <Canvas />
      <Button
        bot={BOT}
        accessId={ACCESS_ID}
        secretKey={SECRET_KEY}
        changeMessageTo={this.changeMessageTo} />
    </Entity>)
  }
}


export default Room;