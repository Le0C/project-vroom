import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component'
import { Entity } from 'aframe-react';

import ConditionalEntity from './ConditionalEntity'


class SearchBar extends Component {

  state = {
    searchImages: [],
    searchVideos: [],
    counter: 1
  }

  componentWillReceiveProps(newProps) {

    if (newProps.queries[0].M.url.S.includes('.com/get/')) {
      this.setState({ searchImages: newProps.queries })
    } else this.setState({ searchVideos: newProps.queries })
  }

  render() {

    if (this.state.searchImages.length === 0 && this.state.searchVideos.length === 0) {
      console.log('into null block')
      return null;
    }
    if (this.state.searchImages.length > 0 && this.state.searchVideos.length === 0) {
      console.log('into imgae render block')
      return (
        <Entity>
          {this.state.searchImages.map((item, i) => {
            if (!item.rendered) return this.renderSearches(i, item, 'a-box')
          })}
        </Entity>
      )
    }
    if (this.state.searchVideos.length > 0) {
      console.log('into correct if block')
      return (<Entity>
        {this.state.searchVideos.map((item, i) => {
          console.log(item)
          return this.renderSearches(i, item, 'a-video')
        })}

      </Entity>)
    } else {
      console.log('last bloc')
      return null
    }
  }

  renderSearches = (i, item, type) => {
    console.log(this.state)
    const positions = [-1.16, -0.58, 0, 0.58, 1.16]
    return <Entity>
      <ConditionalEntity
        primitive={`${type}`}
        position={`${positions[i]} -0.5 0`}
        width='0.4'
        height='0.4'
        depth={0.025}
        rotation='-45 0 0'
        src={item.M.url.S}
      >
        <Entity
          primitive='a-cylinder'
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525447402/image_1.png'
          radius='0.09' height='0.03'
          rotation='180 -90 90'
          position='0 -0.25 0.01'
          events={{
            mouseenter: () => {
              let ImageArray = this.state.searchImages
              ImageArray[i].rendered = true
              this.props.addImage(this.state.searchImages[i].M.url.S)
              this.setState({ searchImages: ImageArray })
            }
          }}
        />
      </ConditionalEntity>
      <Entity
        primitive='a-cylinder'
        radius='0.09' height='0.03'
        rotation='315 -90 90'
        src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525447402/image_1.png'
        position='-0.2 -0.4 -1'
        events={{
          mouseenter: this.handleClearStorage
        }}
      />
      <Entity
        radius='0.09' height='0.03'
        rotation='180 -90 90'
        primitive='a-cylinder'
        position='0.2 -0.4 -1'
        src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525447402/image_1.png'
        events={{
          mouseenter: () => { this.scollImages() }
        }} />
    </Entity>
  }

  scollImages = (i) => {
    let ImageArray = this.state.searchImages

    let newImages = ImageArray.filter((image) => {
      if (!image.rendered) return image

    })

    this.setState({ searchImages: newImages })
  }


  handleClearStorage = () => {
    this.props.clearQueries()
    this.setState({ searchImages: [] })
    this.setState({ searchVideos: [] })
  }
}

export default SearchBar