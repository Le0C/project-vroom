import React, { Component } from 'react';
import 'aframe';
import { Entity } from 'aframe-react';


class HomeSphere extends Component {

  state = {
    previewButtonVisible: false
  }
  render() {
    const positions = [-1.16, -0.58, 0, 0.58, 1.16]
    return (
      <Entity
        primitive='a-cylinder'
        radius='0.2'
        height='1'
        opacity='0'
        position={`${positions[this.props.index]} 0 -0.8`}
        events={{
          mouseenter: this.loadConfirm,
          mouseleave: this.loadConfirm
        }}
        rotation={`0 ${positions[this.props.index] * -18} 0`}
      >
        <Entity
          primitive='a-sphere'
          src={this.props.image.preview}
          position='0 0 0'
          radius='0.2'
          animation='property: rotation; to: 0 360 0; dur: 7000; loop: true; easing: linear'
        />
        <Entity
          visible={this.state.previewButtonVisible}
          primitive='a-cylinder'
          radius='0.06'
          height='0.02'
          rotation='180 -90 90'
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525776321/question.png'
          position={`0 0.28 0.2`}
          events={{
            mouseenter: () => {
              this.props.setPanoImage(this.props.image)
            }
          }}
        />
      </Entity>
    )
  }
  loadConfirm = () => {
    this.setState({ previewButtonVisible: !this.state.previewButtonVisible })
  }
}

export default HomeSphere;