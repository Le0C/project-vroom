import React, { Component } from 'react';
import blueLex from './lex.png'
import greenLex from './lex-green.png';

import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';


import HomePage from './HomePage';

import Canvas from './Canvas'
import Lex from './Lex'
import Cursor from './Cursor'
import { BOT, ACCESS_ID, SECRET_KEY } from './config/bot'
import { setPusherClient } from 'react-pusher'
import Pusher from 'pusher-js'
import { pusherConfig } from './config/pusherConfig'
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    isOnHomePage: true,
    renderPreview: false,
    message: "Passive",
    queryResults: [],
    panoBackgrounds: [
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525442332/MilleniumFalcon8K.jpg',
        name: 'Millenium Falcon'
      },
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525351275/Heron_smaller.jpg',
        name: 'Underwater'
      },
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525351271/johnstone-hanson-island-forest-360.jpg',
        name: 'Forest'
      },
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525351274/Helvellyn_Striding_Edge_360_Panorama__Lake_District_-_June_09.jpg',
        name: 'Mountain'
      },
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525351271/Venice.Still001.jpg',
        name: 'Venice'
      },
    ],
    chosenBackgroundImage: ''
  };

  componentDidMount() {
    const pusherClient = new Pusher(pusherConfig.key, { cluster: pusherConfig.cluster, encrypted: true })
    const channel = pusherClient.subscribe(pusherConfig.channel_name)
    channel.bind('my-event', data => {
      let queryResults = Object.entries(data)[0][1][0].dynamodb.NewImage.message.L
      this.setState({ queryResults })
      console.log(this.state.queryResults)
    })
  }

  render() {
    return (
      <Scene events={{
        mousemove: this.moveMouse
      }}>

        {this.renderWire()}

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
          <Entity
            primitive='a-plane'
            material={{ transparent: true }}
            height='0.15'
            width='0.15'
            src={this.changeIconColour(this.state.message)}
            position='0 0.75 -1'
          />
        </Entity>
        <Lex
          bot={BOT}
          accessId={ACCESS_ID}
          secretKey={SECRET_KEY}
          message={this.state.message}
          changeMessageTo={this.changeMessageTo} />
        {this.chooseRoom()}

        {/* { return null? SearchBar : <SearchBar
          images={this.state.queryResults}
        />} */}
      </Scene >
    );
  }
  changeIconColour = (message) => {
    return message === 'Passive' ? blueLex : greenLex;
  }
  setPanoImage = (image) => {

    this.setState({ chosenBackgroundImage: image })
    this.setState({ renderPreview: true })
  }

  renderWire = () => {
    if (!this.state.renderPreview) {
      return <Entity primitive='a-sky' rotation='0 33 0'
        wireframe={true} color='green' />
    } else return <Entity primitive='a-sky' rotation='0 33 0'
      src={this.state.chosenBackgroundImage} />
  }

  roomConfirmed = () => {
    this.setState({ isOnHomePage: !this.state.isOnHomePage })
  }
  changeMessageTo = message => {
    this.setState({ message });
  };
  chooseRoom = () => {
    if (this.state.isOnHomePage) {
      return <HomePage panoBackgrounds={this.state.panoBackgrounds}
        setPanoImage={this.setPanoImage}
        renderPreview={this.state.renderPreview}
        roomConfirmed={this.roomConfirmed} />
    } else return <Canvas images={this.state.queryResults} />
  }

}

export default App;

