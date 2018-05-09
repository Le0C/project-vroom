import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component'
import { Entity } from 'aframe-react';

import ConditionalEntity from './ConditionalEntity'


class SearchBar extends Component {

  state = {
    searchImages: []
  }
  render() {

    const positions = [-1.16, -0.58, 0, 0.58, 1.16]
    if (this.props.images.length === 0) {
      return null;
    } else return (
      <Entity>
        {this.props.images.map((image, i) => {
          if (i >= 5) return
          return <Entity>
            <ConditionalEntity

              primitive='a-box'
              position={`${positions[i]} -0.5 0`}
              width='0.4'
              height='0.4'
              depth={0.025}
              rotation='-45 0 0'
              src={image.M.url.S}
            >

              <Entity

                primitive='a-cylinder'
                src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525447402/image_1.png'
                radius='0.09' height='0.03'
                rotation='180 -90 90'
                position='0 -0.25 0.01'
                events={{
                  mouseenter: () => {
                    this.props.addImage(this.props.images[i].M.url.S)
                  }
                }}
              />
            </ConditionalEntity>
          </Entity>
        })}
      </Entity>
    )
  }
}

export default SearchBar