import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component'
import { Entity, Scene } from 'aframe-react';


function withCondition(WrappedComponent, conditions) {



  return class extends Component {


    shouldComponentUpdate(newProps) {

      return conditions.some((condition) => { return newProps[condition] !== this.props[condition] })

    }
    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}


export default withCondition(Entity, ['isButtonVisible', 'likedVisible', 'imageXpos', 'imageYpos', 'confirmLike', 'confirmDelete', 'confirmMove', 'isMoving', 'src'])