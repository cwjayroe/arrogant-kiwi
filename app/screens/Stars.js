import * as React from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import LogoTitle from '../components/LogoTitle'
import { FlatList } from 'react-native-gesture-handler';


class Stars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      repos: []
    };
  }

  componentDidMount() {
    this.fetchStarred()
  }

  fetchStarred = () => {
    fetch(`https://api.github.com/users/${this.props.user.email}/starred?page=${this.state.page}&per_page=10`)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          let responseJson = response.json();
          return responseJson;
        }

        throw {
          badCredentials: response.status == 401,
          unknownError: response.status != 401,
        };
      })
      .then(responseJson => {
        console.log('fetching.....')
        this.setState({ 
          repos:  [...this.state.repos, ...responseJson]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLoadMore = () => {
    this.setState({
      page: this.state.page + 1 
    }, () => {
      this.fetchStarred()
    }) 
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
        onPress={() => this.pressRow(rowData)}
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
          onEndReached={() => this.handleLoadMore()}
          onEndReachedThreshold={0.01}
        />
      </View>
    );
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

export default connect(mapStateToProps)(Stars);
