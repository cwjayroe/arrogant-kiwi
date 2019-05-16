// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
import env from '../config/RelayEnv'
import {
  createFragmentContainer,
  createPaginationContainer,
  graphql, QueryRenderer
} from 'react-relay';
import moment from 'moment';

class StarList extends React.Component {
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
          data={this.props.starredRepos.starredRepositories.nodes}
          renderItem = {({item}) => this.renderRow(item)}
          keyExtractor={(item, id) => id.toString()}
        />
      </View>
    );
  }
}

const StarListRenderer = createPaginationContainer(
  StarList, 
  {
    starredRepos: graphql`
      fragment StarsPage_starredRepos on User @argumentDefinitions (endCursor: {type: "String"}) {
        starredRepositories(first: 5 after:$endCursor) @connection(key: "StarsPage_starredRepositories") { 
          edges {
            cursor
            node {
              primaryLanguage {
                name
              }
              description
              name
              url
              createdAt
              id
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    `
},
{
  direction: 'forward',
  getConnectionFromProps(props) {
    return props.starredRepos && props.starredRepos.starredRepositories;
  },
  getVariables(props, paginationInfo, fragmentVariables) {
    return {
      after: paginationInfo.endCursor,
    }
  },
  getFragmentVariables(prevVars, totalCount) {
    return {
      ...prevVars,
      count: totalCount,
    };
  },
  query: graphql`
    query StarsPageForward_Query {
      starredRepos: viewer {
        ...StarsPage_starredRepos
      }
    }
  `
}
);

export default class StarredRepositoriesPage extends Component {
  render() {
    return (
      <QueryRenderer
        environment={env}
        query={graphql`
        query StarsPage_Query {
          starredRepos: viewer {
            ...StarsPage_starredRepos
          }
        }
        `}
        render={({error, props}) => {
          if (error) {
            console.log(error)
            return <Text>Error: {error.message}</Text>
          } else if (props) {
            return <StarListRenderer starredRepos={props.starredRepos} />
          }
          return <Text>Loading</Text>
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