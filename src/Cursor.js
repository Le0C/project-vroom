import React, { Component } from 'react';

import 'aframe';


class Cursor extends Component {

  render() {
    return (
      <a-entity camera look-controls>
        <a-entity cursor="fuse: true; fuseTimeout: 5000"
          position="0 0 -0.01"
          geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
          material="color: black; shader: flat">
        </a-entity>
      </a-entity>
    )
  }
}

export default Cursor;