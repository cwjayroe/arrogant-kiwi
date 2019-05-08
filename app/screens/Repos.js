import * as React from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import LogoTitle from '../components/LogoTitle'
import moment from 'moment';
import WebClient from '../components/WebHelper'


class Repos extends React.Component {
  constructor(props) {
    super(props);
    
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2,
    });

    this.state = {
      repos: ds,
    };
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Repos',
    headerRight: (
      <LogoTitle navigation={navigation} />
    ),
  });

  componentDidMount() {
    WebClient.get_request(`https://api.github.com/users/${this.props.user.email}/repos`)
      .then(responseJson => {
        this.setState({ repos: this.state.repos.cloneWithRows(responseJson) });
        }
      ) 
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
        <Text style={styles.title}>Your Repos</Text>
        <ListView
          dataSource={this.state.repos}
          renderRow={this.renderRow.bind(this)}
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

export default connect(mapStateToProps)(Repos);
