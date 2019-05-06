import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { QueryRenderer, graphql } from "react-relay";
import env from '../config/relayEnv';


class RelayView extends Component {
  render() {
    const { name, login } = this.props.viewer
    return (
      <View>
        <Text>{name}</Text>
        <Text>{login}</Text>
      </View>
    );
  }
}


export default class RelayViewer extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={env}
        query={graphql`
          query relayQuery {
                viewer {
                  name
                  login
                }
            }
        `}
        variables={}
        render={({error, props}) => {
          if (error) {
            return console.log('errors...');
          }
          if (!props) {
            return console.log('loading..');
          }
          return <RelayView {...props} />;
        }}
      />
    )
  }
}