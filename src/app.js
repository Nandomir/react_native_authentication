import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBhfnCJbXE9M1n5rljyNsGKEEKC3jjbtIQ',
      authDomain: 'authentication-af38a.firebaseapp.com',
      databaseURL: 'https://authentication-af38a.firebaseio.com',
      projectId: 'authentication-af38a',
      storageBucket: 'authentication-af38a.appspot.com',
      messagingSenderId: '742302730241'
    });
  } 

  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          <LoginForm />
        </View>
      );
  }
}


export default App;
