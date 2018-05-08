import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';

import HomeSphere from './HomePageSphere'

class HomePage extends Component {

  render() {



    return (<Entity>

      <Entity
        text={{
          value: 'Welcome to vRoom.',
          color: 'black',
          anchor: 'align'
        }} />


      {this.props.panoBackgrounds.map((image, i) => {
        return <Entity>
          <HomeSphere url={image.url} index={i} setPanoImage={this.props.setPanoImage} />
        </Entity>
      })}

      <Entity
        primitive='a-box'
        depth='0.025'
        width='1.5'
        color='yellow'
        height='0.5'
        position='0 -1.5 -2'
      />

    </Entity>)
  }
  loadConfirm = () => {

  }
}

export default HomePage;