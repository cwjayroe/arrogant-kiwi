import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { QueryRenderer, graphql } from "react-relay";
import LogoTitle from '../components/LogoTitle'
import env from '../config/RelayEnv';
import moment from 'moment';

const repoDetailsQuery = graphql`
query RepoDetailsQuery($repoName: String!) {
  viewer {
		repository(name: $repoName) {
      id
      name
      createdAt
      pushedAt
      url
    }
  }
}
`

class RepoDetails extends React.Component{
  constructor(props){
      super(props);
  }

  render() {
    repoInfo = this.props.viewer.repository

    return (
      <View style={styles.container}>
        <View style = {styles.row}>
          <Text style={styles.repo_name}>{repoInfo.name}</Text>
          <View style={styles.flex_direction}>
            <Text>Last pushed at</Text>
            <Text style={styles.bold_font}> {moment(repoInfo.pushedAt).fromNow()}</Text>
          </View>
          <Text>{repoInfo.createdAt}</Text>
          <Text>{repoInfo.url}</Text>
        </View>
      </View>  
    )
  }
}

class RepoDetailsViewer extends React.Component {
  static navigationOptions = ({navigation, props}) => ({
    title: navigation.state.params.repoName,
  });

  render() {
    const repoName = this.props.navigation.state.params.repoName

    return (
      <QueryRenderer
        environment={env}
        query={repoDetailsQuery}
        variables= {{repoName:repoName}}
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
          return <RepoDetails {...props} />;
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
  }
})
const mapStateToProps = (state) => {
  const { user, repos } = state
  return { user, repos }
};
  
export default connect(mapStateToProps)(RepoDetailsViewer);