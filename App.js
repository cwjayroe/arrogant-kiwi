import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import AppNavigator from './app/AppNavigator'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userReducer from './app/config/UserReducer';

const store = createStore(userReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    );
  }
}