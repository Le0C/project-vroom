import React, { Component } from 'react';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

import AWS from 'aws-sdk';

import LexAudio from './utils/lexAudio';
import lex from './lex.png';


class Button extends Component {

  render() {
    return (
      <Entity primitive='a-sphere'
        color='yellow' radius='0.15'
        position='-0.5 -0 -0.5'
        events={{
          mouseenter: this.handleAudioControlClick,
        }} >
      </Entity>
    )
  }
  handleAudioControlClick = (e) => {
    const { bot, accessId, secretKey, changeMessageTo } = this.props;
    const that = this;
    AWS.config.credentials = new AWS.Credentials(accessId, secretKey, null);
    AWS.config.region = 'eu-west-1';

    const config = {
      lexConfig: {
        botName: bot
      }
    };

    this.conversation = new LexAudio.conversation(config, function (state) {
      changeMessageTo(state + '...');
      if (state === 'Listening') {
        console.log('listening')
      }
      if (state === 'Sending') {
        console.log('sending')
      }
    }, function (data) {
      console.log('Transcript: ', data.inputTranscript, ", Response: ", data.message);
    }, function (error) {
      changeMessageTo(error);
    });
    this
      .conversation
      .advanceConversation();
  }
}

export default Button;