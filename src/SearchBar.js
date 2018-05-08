import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component'
import { Entity } from 'aframe-react';

import ConditionalEntity from './ConditionalEntity'


class SearchBar extends Component {

  state = {
    searchImages: [{
      url: 'https://pixabay.com/get/e833b3082bf6033ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
    },
    {
      url: 'https://pixabay.com/get/e833b3082bf6033ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
    },
    {
      url: 'https://pixabay.com/get/ea34b10a20f4033ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.png',
    }, {
      url: 'https://pixabay.com/get/ea34b10a20f4033ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.png',
    }, {
      url: 'https://pixabay.com/get/ea37b80b28f1023ed1584d05fb1d4e9ee172e0d119ac104497f5c771afe4bcbf_1280.jpg',
    }]
  }
  render() {

    const positions = [-1.16, -0.58, 0, 0.58, 1.16]
    return (
      <Entity>
        {this.state.searchImages.map((image, i) => {
          if (i >= 5) return
          return <Entity>
            <ConditionalEntity

              primitive='a-box'
              position={`${positions[i]} -0.5 0`}
              width='0.4'
              height='0.4'
              depth={0.025}
              rotation='-45 0 0'
              src={image.url}
            >

              <Entity

                primitive='a-cylinder'
                src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525447402/image_1.png'
                radius='0.09' height='0.03'
                rotation='180 -90 90'
                position='0 -0.25 0.01'
                events={{
                  mouseenter: () => {
                    this.props.addImage(this.state.searchImages[i].url)
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