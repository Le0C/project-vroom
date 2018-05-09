import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import Canvas from './Canvas'
import Lex from './Lex'
import Cursor from './Cursor'
import { setPusherClient } from 'react-pusher'
import Pusher from 'pusher-js'
import BackgroundAudio from './BackgroundAudio';
import LexIcon from './LexIcon'

import { BOT, ACCESS_ID, SECRET_KEY } from './config/bot'
import { pusherConfig } from './config/pusherConfig'

let { app_id, key, secret, cluster, channel_name } = pusherConfig

if (!BOT && !ACCESS_ID && !SECRET_KEY) {
  let BOT = process.env.BOT
  let ACCESS_ID = process.env.ACCESS_ID
  let SECRET_KEY = process.env.SECRET_KEY
}
if (!app_id && !key && !secret && !cluster && !channel_name) {
  let app_id = process.env.app_id
  let key = process.env.key
  let secret = process.env.secret
  let cluster = process.env.cluster
  let channel_name = process.env.channel_name
}


class App extends Component {
  state = {
    isOnHomePage: true,
    renderPreview: false,
    message: "Passive",
    queryResults: [],
    panoBackgrounds: [
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525442332/MilleniumFalcon8K.jpg',
        name: 'Millenium Falcon',
        audio: 'https://res.cloudinary.com/dnuwifia4/video/upload/v1525792087/Star_Wars_A_New_Hope_Soundtrack_-_11._Cantina_Band.mp3',
        preview: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525854039/falcon_preview.jpg'

      },
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525351275/Heron_smaller.jpg',
        name: 'Underwater',
        audio: "https://res.cloudinary.com/dnuwifia4/video/upload/v1525786202/07074003.wav",
        preview: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525854039/underwater_preview.jpg'

      },
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525351271/johnstone-hanson-island-forest-360.jpg',
        name: 'Forest',
        audio: 'https://res.cloudinary.com/dnuwifia4/video/upload/v1525791588/07070192.wav',
        preview: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525854039/forest_preview.jpg'
      },
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525351274/Helvellyn_Striding_Edge_360_Panorama__Lake_District_-_June_09.jpg',
        name: 'Mountain',
        audio: 'https://res.cloudinary.com/dnuwifia4/video/upload/v1525792774/wind_edited.mp3',
        preview: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525854039/mountain_preview.jpg'

      },
      {
        url: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525351271/Venice.Still001.jpg',
        name: 'Venice',
        preview: 'https://res.cloudinary.com/dnuwifia4/image/upload/v1525854039/venice_preview.jpg',
        audio: 'https://res.cloudinary.com/dnuwifia4/video/upload/v1525797173/O_Sole_Mio_-_Gondola_in_Venice_on_the_Grand_Canal.mp3'
      },
    ],
    chosenBackgroundImage: {
      url: '',
      audio: ''
    }
  };

  componentDidMount() {
    const pusherClient = new Pusher(key, { cluster: cluster, encrypted: true })
    const channel = pusherClient.subscribe(channel_name)
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


        <BackgroundAudio audioSource={this.state.chosenBackgroundImage} />

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
          <LexIcon message={this.state.message} />
        </Entity >
        <Lex
          bot={BOT}
          accessId={ACCESS_ID}
          secretKey={SECRET_KEY}
          message={this.state.message}
          changeMessageTo={this.changeMessageTo} />
        {this.chooseRoom()}

      </Scene >
    );
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
      src={this.state.chosenBackgroundImage.url} />
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

