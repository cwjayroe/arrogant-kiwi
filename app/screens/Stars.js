import * as React from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { FlatList } from 'react-native-gesture-handler';
import { QueryRenderer, graphql } from "react-relay";
import env from '../config/RelayEnv';

const starsQuery = graphql`
query StarsQuery($endCursor: String!) {
  viewer {
    starredRepositories(first: 5 after:$endCursor) {
      nodes {
        primaryLanguage {
          name
        }
        description
        name
        url
        createdAt
        id
      }
      pageInfo {
        endCursor
        startCursor
      }
    }
  }
}
`

class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      repos: []
    };
  }
  
  componentDidMount() {
    this.loadStars()
  }

  loadStars() {
    this.setState({
      repos: [...repos, ...this.props.viewer.starredRepositories.nodes]
    })
  }

  loadMoreStars() {
    this.setState({
      endCursor: this.props.pageInfo.endCursor
    })
    console.log('ennnnnnd')
  }

  renderRow(rowData) {
    
    let description = <View />
    let language = <View />

    description = <Text style={{ fontSize: 12}}>No description</Text>
    language = <Text style={styles.language}>No language</Text>

    if (rowData.description !== null) {
        description = <Text style={{ fontSize: 12}}>{rowData.description}</Text>
    } 

    if ( rowData.language !== null) {
      language = <Text style={styles.language}>{rowData.language}</Text>
    }

    return (
      <TouchableHighlight
        underlayColor="#ddd">
    
        <View style = {styles.row}>
          <Text style={styles.repo_name}>{rowData.name}</Text>
          { language }
          { description }
          <Text>{rowData.url}</Text>
          <View style={styles.flex_direction}>
            <Text>Last pushed at</Text>
            <Text style={styles.bold_font}> {moment(rowData.created_at).fromNow()}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Stars</Text>
        <FlatList
          data={this.state.repos}
          renderItem = {({item}) => this.renderRow(item)}
          keyExtractor={(item, id) => id.toString()}
          onEndReached={() => this.loadMoreStars()}
          onEndReachedThreshold={0.01}
        />
      </View>
    );
  }
}

class StarsViewer extends React.Component {
  render() {
    let navigation = this.props.navigation
    let pageInfo = this.props.pageInfo
    return (
      <QueryRenderer
        environment={env}
        query={starsQuery}
        variables={{endCursor: this.state.endCursor}}
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
          return <Stars {...props} navigation={navigation} pageInfo={pageInfo} />;
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

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(StarsViewer);
