import React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight, ActivityIndicator } from 'react-native'
import { QueryRenderer, graphql } from "react-relay";
import { connect } from 'react-redux';
import { storeRepos } from '../config/RepoActions'
import { bindActionCreators } from 'redux';
import LogoTitle from '../components/LogoTitle'
import env from '../config/RelayEnv';
import moment from 'moment';

const relayQuery = graphql`
query RelayQuery {
  viewer {
    repositories(first:10 ownerAffiliations:OWNER) {
      nodes {
        id
        name
        description
        url
        pushedAt
        primaryLanguage {
          name
        }
      }
    }
  }
}
`
const mapStateToProps = (state) => {
  const { user } = state
  return { user }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    storeRepos,
  }, dispatch)
);


class RelayView extends Component {
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2,
    });

    this.state = {
      repos: ds
    };
  }

  componentDidMount() {
    this.props.storeRepos(this.props.viewer)
    this.setState({ repos: this.state.repos.cloneWithRows(this.props.viewer.repositories.nodes) });
  }

  pressRow(repoName) {
    this.props.navigation.navigate('repoDetails', { repoName: repoName })
  }

  renderRow(rowData) {
    let description = <View />
    let language = <View />
    
    description = <Text style={{ fontSize: 12}}>No description</Text>
    language = <Text style={styles.language}>No language</Text>

    if (rowData.description !== null) {
      description = <Text style={{ fontSize: 12}}>{rowData.description}</Text>
    } 

    if ( rowData.primaryLanguage !== null && rowData.primaryLanguage.name !== null ) {
      language = <Text style={styles.language}>{rowData.primaryLanguage.name}</Text>
    }

    return (
      <TouchableHighlight
        onPress={() => this.pressRow(rowData.name)}
        underlayColor="#ddd">

        <View style = {styles.row}>
          <Text style={styles.repo_name}>{rowData.name}</Text>
          { language }
          { description }
          <Text>{rowData.url}</Text>
          <View style={styles.flex_direction}>
            <Text>Last pushed at</Text>
            <Text style={styles.bold_font}> {moment(rowData.pushedAt).fromNow()}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Repos</Text>
        <ListView
          dataSource={this.state.repos}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

class RelayViewer extends React.Component {
  render() {
    let storeRepos = this.props.storeRepos
    let navigation = this.props.navigation
    return (
      <QueryRenderer
        environment={env}
        query={relayQuery}
        render={({error, props}) => {
          if (error) {
            console.log(error)
            return console.log('errors...');
          }
          if (!props) {
            return <ActivityIndicator
                    animating={true}
                    size="large"
                    style={styles.loader}
                  />
          }
          return <RelayView {...props} storeRepos={storeRepos} navigation={navigation} />;
        }}
      />
    )
  }
}
const styles = StyleSheet.create({
  flex_direction: {
    flexDirection: 'row'
  },
  bold_font: {
    fontWeight: '700'
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  row: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    padding: 15,
    marginBottom: 5
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  language: {
    fontSize: 12,
    paddingBottom:10
  },
  repo_name: {
    paddingTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RelayViewer);
