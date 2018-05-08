import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';


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
          src={this.props.url}
          position='0 0 0'
          radius='0.2'
        />
        <Entity
          visible={this.state.previewButtonVisible}
          primitive='a-cylinder'
          radius='0.09'
          height='0.02'
          rotation='180 -90 90'
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525776321/question.png'
          position={`0 0.35 0.2`}
          events={{
            mouseenter: () => {
              this.props.setPanoImage(this.props.url)
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