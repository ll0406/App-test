import React, { Component } from 'react'
import {Router} from 'react-native-router-flux';
import scenes from './scenes'
console.log("HELLO")
console.log(scenes)

export default class extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}
