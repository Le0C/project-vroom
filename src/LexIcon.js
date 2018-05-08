import React, { Component } from "react";
import blueLex from "./lex.png";
import greenLex from "./lex-green.png";
import { Entity } from "aframe-react";

class LexIcon extends Component {
  getIconColour(props) {
    return props.message.includes("Passive") ? blueLex : greenLex;
  }

  render() {
    return (
      <Entity
        primitive="a-plane"
        material={{ transparent: true }}
        height="0.075"
        width="0.075"
        src={this.getIconColour(this.props)}
        position="0 0.75 -1"
      />
    );
  }
}

export default LexIcon;
