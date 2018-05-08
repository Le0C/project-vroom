import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';

import HomeSphere from './HomePageSphere'

class HomePage extends Component {

  render() {
    return (<Entity>
      <Entity primitive='a-plane'
        position='0.3 0.4 -0.1'
        opacity='0'
        height='0.1'
        width='0.5'>
        <Entity
          text={{
            value: 'Welcome to vRoom.',
            color: 'black',
            anchor: 'center',
          }} />
      </Entity>
      <Entity primitive='a-plane'
        position='0.3 0.33 -0.1'
        opacity='0'
        height='0.1'
        width='0.5'>
        <Entity
          text={{
            value: 'Please select a theme.',
            color: 'black',
            anchor: 'center',
          }} />
      </Entity>

      {this.props.panoBackgrounds.map((image, i) => {
        return <Entity>
          <HomeSphere url={image.url} index={i} setPanoImage={this.props.setPanoImage} />
        </Entity>
      })}

      <Entity
        visible={this.props.renderPreview}
        primitive='a-cylinder'
        radius='0.09'
        height='0.02'
        rotation='180 -90 90'
        src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525356822/like-outline.png'
        position={`0 -0.5 -0.5`}
        events={{
          mouseenter: this.loadConfirm
        }}
      />

    </Entity>)
  }
  loadConfirm = () => {
    console.log('confirmed')
    this.props.roomConfirmed()
  }
}

export default HomePage;