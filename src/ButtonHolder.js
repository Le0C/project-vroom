import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component'
import { Entity, Scene } from 'aframe-react';



class ButtonHolder extends Component {

  render() {
    const {
      handleMoveLeft,
      handleMoveRight,
      index,
      visible,
      likeFunction,
      deleteFunction,
      moveFunction,
      confirmDelete,
      confirmLike,
      handleDelete,
      confirmMove,
      handleLike,
      handleMove,
      isMoving } = this.props
    return (

      <Entity id={`button-holder${index}`} visible={visible}>

        <Entity
          primitive='a-cylinder'
          radius='0.18' height='0.04'
          rotation='180 -90 90'
          id={`fav${index}`}
          events={{ mouseenter: likeFunction }}
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525267134/heart.png'
          position='-0.5 0 0.11' />

        <Entity
          primitive='a-cylinder'
          radius='0.18' height='0.04'
          rotation='180 -90 90'
          id={`del${index}`}
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525267134/trash.png'
          events={{ mouseenter: deleteFunction }}
          position='0.5 0 0.11' />

        <Entity
          primitive='a-cylinder'
          radius='0.18' height='0.04'
          rotation='180 -90 90'
          id={`mov${index}`}
          events={{ mouseenter: moveFunction }}
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525267134/point.png'
          position='0 -0.5 0.11' />

        <Entity
          visible={confirmDelete}
          primitive='a-cylinder'
          color='yellow'
          position='0.5 0 0.1'
          radius='.22'
          height='0.04'
          rotation='180 -90 90' />
        <Entity
          visible={confirmLike}
          primitive='a-cylinder'
          color='yellow'
          position='-0.5 0 0.1'
          radius='.22'
          height='0.04'
          rotation='180 -90 90' />
        <Entity
          visible={confirmMove}
          primitive='a-cylinder'
          color='yellow'
          position='0 -0.5 0.1'
          radius='.22'
          height='0.04'
          rotation='180 -90 90' />
        <Entity
          visible={isMoving}
          primitive='a-cylinder'
          color='yellow'
          position='0 0.5 0.1'
          radius='.22'
          height='0.04'
          rotation='180 -90 90' />

        <Entity
          visible={confirmDelete}
          primitive='a-cylinder'
          radius='0.18'
          height='0.04'
          rotation='180 -90 90'
          id={`con${index}`}
          events={{
            mouseenter: handleDelete
          }}
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525356822/like-outline.png' position='0 0.5 0.11' />
        <Entity
          visible={confirmLike}
          primitive='a-cylinder'
          radius='0.18'
          height='0.04'
          rotation='180 -90 90'
          id={`con${index}`}
          events={{
            mouseenter: handleLike
          }}
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525356822/like-outline.png' position='0 0.5 0.11' />

        <Entity
          visible={confirmMove}
          primitive='a-cylinder'
          radius='0.18'
          height='0.04'
          rotation='180 -90 90'
          id={`con${index}`}
          events={{
            mouseenter: handleMove
          }}
          src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525356822/like-outline.png' position='0 0.5 0.11' />



        <Entity
          visible={isMoving}>
          <Entity
            primitive='a-cylinder'
            radius='0.18'
            height='0.04'
            rotation='180 90 90'
            id={`lef${index}`}
            src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525434525/arrow.png'
            position='-0.5 0 0.12'
            events={{
              mouseenter: handleMoveLeft
            }} />
          <Entity
            primitive='a-cylinder'
            radius='0.18'
            height='0.04'
            rotation='180 -90 90'
            id={`rig${index}`}
            src='https://res.cloudinary.com/dnuwifia4/image/upload/v1525434525/arrow.png'
            position='0.5 0 0.12'
            events={{
              mouseenter: handleMoveRight
            }} />

        </Entity>


      </Entity>
    )
  }
}


export default ButtonHolder;