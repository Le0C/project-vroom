import React, { Component } from 'react';
import 'aframe';
import { Entity } from 'aframe-react';

import HomeSphere from './HomePageSphere'

class HomePage extends Component {

  render() {
    return (<Entity>
      <Entity primitive='a-plane'
        position='0 0.76 -0.9'
        transparent='true'
        height='1'
        width='2.2'
        src='http://res.cloudinary.com/dnuwifia4/image/upload/v1525873823/VROOM-1.png'
      />
      {this.props.panoBackgrounds.map((image, i) => {
        return <Entity>
          <HomeSphere image={image} index={i} setPanoImage={this.props.setPanoImage} />
        </Entity>
      })}

      <Entity
        visible={this.props.renderPreview}
        primitive='a-cylinder'
        radius='0.06'
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