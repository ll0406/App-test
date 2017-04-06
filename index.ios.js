/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { AppRegistry, Alert } from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React, { Component } from 'react'

//Import reducer and create a store
import {reducer} from './sampleRedux'
const store = createStore(reducer)

//Import App Container
import App from './app'

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('nativeBaseTest', () => AppWithStore);
