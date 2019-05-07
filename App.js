import * as React from 'react';
import AppNavigator from './app/AppNavigator'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './app/config/reducers';

const store = createStore(combineReducers);

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