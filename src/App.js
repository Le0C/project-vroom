import React, { Component } from 'react';

import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';

import Canvas from './Canvas'
import Button from './Button'
import Cursor from './Cursor'
import { BOT, ACCESS_ID, SECRET_KEY } from './config/bot'


class App extends Component {
  state = {
    message: "Passive",
  };

  componentWillReceiveProps() {

  }
  render() {
    return (
      <Scene events={{
        mousemove: this.moveMouse
      }}>
        <Entity primitive='a-camera'
          position='0 0 0.5' >
          <Entity
            primitive='a-cursor'

            position='0 0 -0.5'
            geometry={{
              primitive: 'ring',
              radiusInner: 0.005,
              radiusOuter: 0.01,
            }}
            material={{ color: 'white', shader: 'flat' }}
          />
        </Entity>
        <Canvas />
        <Button
          bot={BOT}
          accessId={ACCESS_ID}
          secretKey={SECRET_KEY}
          changeMessageTo={this.changeMessageTo} />
        <Entity primitive='a-sky' rotation='0 33 0'
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525442332/MilleniumFalcon8K.jpg' />
      </Scene >
    );
  }
  changeMessageTo = message => {
    this.setState({ message });
  };
}


export default App;

