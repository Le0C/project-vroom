import React, { Component } from 'react';
import annyang from 'annyang';
import 'aframe';
import { Entity, Scene } from 'aframe-react';

import AWS from 'aws-sdk';

import LexAudio from './utils/lexAudio';
import lex from './lex.png';


class Lex extends Component {

  handleBallColour = (message) => {
    return message === 'Passive...' ? 'red' : 'yellow'
  }

  componentDidMount() {
    const handleAudioControlClick = this.handleAudioControlClick

    if (annyang) {
      // Let's define a command.
      var commands = {
        'bananas': function () {
          handleAudioControlClick()
        }
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening.
      annyang.start();
    }
  }

  render() {

    return (
      null
    )
  }
  handleAudioControlClick = (e) => {
    annyang.pause()
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
    annyang.start()
  }
}

export default Lex;