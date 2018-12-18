import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './App/Containers/App'

export default class MettleSports extends Component {
  render() {
    return(
      <App />
    )
  }
}

AppRegistry.registerComponent('StepInsideStreetSoccerApp', () => MettleSports);