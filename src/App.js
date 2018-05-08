import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';


import Cursor from './Cursor'
import Room from './Room'
import HomePage from './HomePage';

class App extends Component {
  state = {
    isOnHomePage: true,
    renderPreview: false,
    message: "Passive",
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

        </Entity>

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
    } else return <Room />
  }

}

export default App;

