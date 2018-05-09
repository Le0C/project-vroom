import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component'
import { Entity } from 'aframe-react';
import ButtonHolder from './ButtonHolder';
import SearchBar from './SearchBar'

import ConditionalEntity from './ConditionalEntity'

class Canvas extends Component {
  state = {
    currentImages: []
  }
  render() {
    return (
      <Entity>
        <Entity>
          {this.state.currentImages.map((image, i) => {
            return <Entity >
              <ConditionalEntity primitive='a-box'
                isButtonVisible={this.state.currentImages[i].buttonVisible}
                likedVisible={this.state.currentImages[i].liked}
                confirmDelete={this.state.currentImages[i].confirmDelete}
                confirmLike={this.state.currentImages[i].confirmLike}
                confirmMove={this.state.currentImages[i].confirmMove}
                isMoving={this.state.currentImages[i].isMoving}
                imageXpos={image.xpos}
                imageYpos={image.ypos}
                position={`${image.xpos} ${image.ypos} ${-2}`}
                rotation={`${0} ${image.xrot} 0`}
                depth={0.025}
                id='conditional-box'
                src={image.url}
                animation__left={`property: position; to: ${image.xpos - 0.4} ${image.ypos} -2; dur: 500; startEvents: moved-left; easing: easeInOutQuad`}
                animation__right={`property: position; to: ${image.xpos + 0.4} ${image.ypos} -2; dur: 500; startEvents: moved-right; easing: easeInOutQuad`}
                // animation__delete={`property: scale; to: 0.1 0.1 0.1; dur: 490; startEvents: deleted`}
                animation__hover={`property: position; to: ${image.xpos} ${image.ypos + 0.025} -2; loop: true; dir: alternate; delay: ${Math.random() * 500} easing: easeInOutQuad`}>

                <Entity primitive='a-box'
                  depth='0.025'
                  id={i}
                  position='0 0 0.1'
                  width='1.3'
                  height='1.3'
                  opacity='0'
                  events={{
                    mouseenter: this.handleHover,
                  }} />

                <Entity primitive='a-box'
                  visible={this.state.currentImages[i].liked}
                  depth='0.01'
                  color='yellow'
                  width='1.1'
                  height='1.1'
                />

                <ButtonHolder
                  index={i}
                  isMoving={this.state.currentImages[i].isMoving}
                  visible={this.state.currentImages[i].buttonVisible}
                  confirmDelete={this.state.currentImages[i].confirmDelete}
                  confirmLike={this.state.currentImages[i].confirmLike}
                  confirmMove={this.state.currentImages[i].confirmMove}
                  handleLike={this.handleLike}
                  handleDelete={this.handleDelete}
                  handleMove={this.handleMove}
                  handleMoveLeft={this.handleMoveLeft}
                  handleMoveRight={this.handleMoveRight}
                  handleMoveUp={this.handleMoveUp}
                  handleMoveDown={this.handleMoveDown}
                  likeFunction={this.loadLikeButton}
                  deleteFunction={this.loadDeleteButton}
                  moveFunction={this.loadMoveButton} />

              </ConditionalEntity>


            </Entity>
          })}
          {this.renderSearchBar()}
        </Entity>
      </Entity>
    )
  }
  renderSearchBar = () => {
    if (this.props.queries.length === 0) {
      return null;
    } else {
      return <SearchBar
        queries={this.props.queries}
        addImage={this.addImage}
      />
    }
  }
  loadMoveButton = (e) => {
    let id = parseInt(e.target.id.slice(3))
    let confirmToggle = Object.assign({}, this.state.currentImages[id])
    confirmToggle.confirmMove = !this.state.currentImages[id].confirmMove
    confirmToggle.confirmLike = false;
    confirmToggle.confirmDelete = false;
    let ImgArray = this.state.currentImages
    ImgArray.map((image) => {
      return image.confirmMove = false
    })
    ImgArray[id] = confirmToggle
    if (confirmToggle.isMoving) { confirmToggle.isMoving = !confirmToggle.isMoving }
    this.setState({ currentImages: ImgArray })
  }

  loadDeleteButton = (e) => {
    let id = parseInt(e.target.id.slice(3))
    let confirmToggle = Object.assign({}, this.state.currentImages[id])
    confirmToggle.confirmDelete = !this.state.currentImages[id].confirmDelete
    confirmToggle.confirmLike = false;
    confirmToggle.confirmMove = false;
    confirmToggle.isMoving = false;
    let ImgArray = this.state.currentImages
    ImgArray.map((image) => {
      return image.confirmDelete = false
    })
    ImgArray[id] = confirmToggle
    this.setState({ currentImages: ImgArray })
  }

  loadLikeButton = (e) => {
    let id = parseInt(e.target.id.slice(3))
    let confirmToggle = Object.assign({}, this.state.currentImages[id])
    confirmToggle.confirmLike = !this.state.currentImages[id].confirmLike
    confirmToggle.confirmDelete = false;
    confirmToggle.confirmMove = false;
    confirmToggle.isMoving = false;

    let ImgArray = this.state.currentImages
    ImgArray.map((image) => {
      return image.confirmLike = false
    })
    ImgArray[id] = confirmToggle
    this.setState({ currentImages: ImgArray })
  }
  handleMove = (e) => {
    let id = parseInt(e.target.id.slice(3))
    let ImgArray = this.state.currentImages.map((image) => {
      if (image === this.state.currentImages[id]) {
        image.isMoving = !image.isMoving
        return image
      }
      image.isMoving = false;
      return image
    })
    this.setState({ currentImages: ImgArray })
  }
  handleDelete = (e) => {

    let id = parseInt(e.target.id.slice(3))
    document.getElementById(id).nextSibling.emit(`deleted`)
    console.log(document.getElementById(id).nextSibling)
    let ImgArray = this.state.currentImages.filter((image) => {
      if (image.uuid !== this.state.currentImages[id].uuid) return image
    })
    this.setState({ currentImages: ImgArray })
  }
  handleLike = (e) => {
    let id = parseInt(e.target.id.slice(3))
    let ImgArray = this.state.currentImages.map((image) => {
      if (image === this.state.currentImages[id]) {
        image.liked = !image.liked
        image.confirmLike = false
        return image
      } return image
    })
    this.setState({ currentImages: ImgArray })
  }

  handleMoveLeft = (e) => {
    let id = parseInt(e.target.id.slice(3))
    document.getElementById(id).parentElement.emit('moved-left')
    let ImgArray = this.state.currentImages
    let ImgToMove = Object.assign({}, this.state.currentImages[id])
    ImgToMove.xpos = Number((ImgToMove.xpos - 0.4).toFixed(2))
    ImgToMove.xrot = ImgToMove.xpos * -12
    ImgArray[id] = ImgToMove
    setTimeout(() => { this.setState({ currentImages: ImgArray }) }, 550)
  }
  handleMoveRight = (e) => {
    let id = parseInt(e.target.id.slice(3))
    document.getElementById(id).parentElement.emit('moved-right')
    let ImgArray = this.state.currentImages
    let ImgToMove = Object.assign({}, this.state.currentImages[id])
    ImgToMove.xpos = Number((ImgToMove.xpos + 0.4).toFixed(2))
    ImgToMove.xrot = ImgToMove.xpos * -12
    ImgArray[id] = ImgToMove
    setTimeout(() => { this.setState({ currentImages: ImgArray }) }, 550)

  }

  handleMoveUp = (e) => {
    let id = parseInt(e.target.id.slice(3))
    let ImgArray = this.state.currentImages
    let ImgToMove = Object.assign({}, this.state.currentImages[id])
    ImgToMove.ypos = Number((ImgToMove.ypos + 0.4).toFixed(2))
    ImgArray[id] = ImgToMove
    this.setState({ currentImages: ImgArray })
  }
  handleMoveDown = (e) => {
    let id = parseInt(e.target.id.slice(3))
    let ImgArray = this.state.currentImages
    let ImgToMove = Object.assign({}, this.state.currentImages[id])
    ImgToMove.ypos = Number((ImgToMove.ypos - 0.4).toFixed(2))
    ImgArray[id] = ImgToMove
    this.setState({ currentImages: ImgArray })
  }

  handleHover = (e) => {
    let id = e.target.id
    this.toggleVisibilty(id)
  }
  toggleVisibilty = (id) => {
    let imgToToggle = Object.assign({}, this.state.currentImages[id])
    imgToToggle.buttonVisible = true
    let ImgArray = this.state.currentImages
    ImgArray.map((image) => {
      image.confirmLike = false
      image.confirmDelete = false
      image.buttonVisible = false
      return image
    })
    ImgArray[id] = imgToToggle
    this.setState({ currentImages: ImgArray })
  }
  buttonHover = () => {
    this.addImage()
  }
  addImage = (url) => {
    const uuid = require('uuid/v1')
    let xpos, ypos, xrot, yrot;
    let i = this.state.currentImages.length + 1
    if (i % 2 > 0) {
      if (Math.random() > 0.5) {
        xpos = Math.random() * -3
      } else xpos = Math.random() * 3
      ypos = Math.random() * 2
    } else {
      if (Math.random() > 0.5) {
        xpos = Math.random() * -3
      } else xpos = Math.random() * 3
      ypos = Math.random() * -1
    }
    xrot = xpos * -12
    let imgObj = {
      url,
      xpos,
      ypos,
      xrot,
      buttonVisible: false,
      confirmDelete: false,
      confirmLike: false,
      liked: false,
      isMoving: false,
      uuid: uuid()
    }
    this.setState({ currentImages: [...this.state.currentImages, imgObj] })
  }
}
export default Canvas;

