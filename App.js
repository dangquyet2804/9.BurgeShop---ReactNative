import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import * as Font from 'expo-font';
import Navigation from './navigation/Navigation.js';
import myReducer from './redux/reducers/index';
import { createStore } from 'redux'; 
import {Provider} from 'react-redux';
const store = createStore(myReducer);

import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBAM5O4HLV2vuQ4dk8je65cqKPehV-jVzc",
    authDomain: "foodapp-25879.firebaseapp.com",
    databaseURL: "https://foodapp-25879.firebaseio.com",
    projectId: "foodapp-25879",
    storageBucket: "foodapp-25879.appspot.com",
    messagingSenderId: "161241853994",
    appId: "1:161241853994:web:d4d1cf24bf0ca871039353",
    measurementId: "G-MRLD28JB2N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
      'OpenSans-Light': require('./assets/Fonts/OpenSans-Light.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

