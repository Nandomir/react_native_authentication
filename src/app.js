import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBhfnCJbXE9M1n5rljyNsGKEEKC3jjbtIQ',
      authDomain: 'authentication-af38a.firebaseapp.com',
      databaseURL: 'https://authentication-af38a.firebaseio.com',
      projectId: 'authentication-af38a',
      storageBucket: 'authentication-af38a.appspot.com',
      messagingSenderId: '742302730241'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      } 
    });
  }


  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()} >Log out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner style={styles.spinnerStyle} />;
    }
  } 

  render() {
    return (
        <View>
          <Header headerText="Authentication" />
          {this.renderContent()}
        </View>
      );
  }
}

const styles = {
  spinnerStyle: {
    size: 'large',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
};


export default App;
