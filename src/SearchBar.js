import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component'
import { Entity } from 'aframe-react';

import ConditionalEntity from './ConditionalEntity'


class SearchBar extends Component {

  state = {
    searchImages: [],
    searchVideos: [],
    page: 1
  }

  componentWillReceiveProps(newProps) {

    if (newProps.queries[0].M.url.S.includes('.com/get/')) {
      this.setState({ searchImages: newProps.queries })
    } else this.setState({ searchVideos: newProps.queries })
  }

  render() {

    if (this.state.searchImages.length === 0 && this.state.searchVideos.length === 0) {
      return null;
    } else if (this.state.searchImages.length > 0 && this.state.searchVideos.length === 0) return (
      <Entity>
        {this.state.searchImages.map((image, i) => {
          if (this.state.page === 1) {
            if (i >= 5)
              return
          } else if (this.state.page === 2) {
            i = 5
          }
          return this.renderSearches(i, image)
          // return <Entity>
          //   <ConditionalEntity

          //     primitive='a-box'
          //     position={`${positions[i]} -0.5 0`}
          //     width='0.4'
          //     height='0.4'
          //     depth={0.025}
          //     rotation='-45 0 0'
          //     src={image.M.url.S}
          //   >

          //     <Entity
          //       primitive='a-cylinder'
          //       src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525447402/image_1.png'
          //       radius='0.09' height='0.03'
          //       rotation='180 -90 90'
          //       position='0 -0.25 0.01'
          //       events={{
          //         mouseenter: () => {
          //           this.props.addImage(this.state.searchImages[i].M.url.S)
          //         }
          //       }}
          //     />
          //   </ConditionalEntity>


          // </Entity>
        })}

        {/* <Entity
          primitive='a-cylinder'
          color='red'
          radius='0.09' height='0.03'
          rotation='180 -90 90'
          position='0 0 -1'
          events={{
            mouseenter: this.handleClearStorage
          }}
        />
        <Entity
          radius='0.09' height='0.03'
          rotation='180 -90 90'
          primitive='a-cylinder'
          position='0.2 -0.3 -1'
          color='green'
          events={{
            mouseenter: this.scollImages
          }} /> */}
      </Entity>
    )
  }
  renderSearches = (i, image) => {
    const positions = [-1.16, -0.58, 0, 0.58, 1.16]
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
              this.props.addImage(this.state.searchImages[i].M.url.S)
            }
          }}
        />
      </ConditionalEntity>
      <Entity
        primitive='a-cylinder'
        color='red'
        radius='0.09' height='0.03'
        rotation='180 -90 90'
        position='0 0 -1'
        events={{
          mouseenter: this.handleClearStorage
        }}
      />
      <Entity
        radius='0.09' height='0.03'
        rotation='180 -90 90'
        primitive='a-cylinder'
        position='0.2 -0.3 -1'
        color='green'
        events={{
          mouseenter: this.scollImages
        }} />
    </Entity>
  }

  scollImages = () => {


    this.setState({ page: this.state.page + 1 })
  }


  handleClearStorage = () => {
    this.props.clearQueries()
    this.setState({ searchImages: [] })
    this.setState({ searchVideos: [] })
  }
}

export default SearchBar