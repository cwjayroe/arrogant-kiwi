import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ListView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';


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

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     title: 'Home',
  //     headerRight: <LogoTitle navigation = {navigation} />,
  //   }
  // };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.user.email}/repos`)
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
        this.setState({ repos: this.state.repos.cloneWithRows(responseJson) });
        console.log(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderRow(rowData) {
    
    let description = <View />
    if (rowData.description == '') {
        description = <Text style={{ fontSize: 12}}>{rowData.description}</Text>
    } else {
       description = <Text style={{ fontSize: 12}}>No description</Text>
    }

    return (
      <TouchableHighlight
        onPress={() => this.pressRow(rowData)}
        underlayColor="#ddd">
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            borderColor: '#D7D7D7',
            borderBottomWidth: 1,
            backgroundColor: '#fff',
          }}>
          <View>
            <View style={{flex: 1, flexDirection:"column", justifyContent: "center", alignItems:"center" }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold'}}>{rowData.name}</Text>
              <Text style={{ fontSize: 13}}>{rowData.language}</Text>
              { description }      
            </View>
            
            <Text>Clone at: {rowData.html_url}</Text>
            <View style={{flexDirection:'row'}}>
              <Text>Last pushed to</Text>
              <Text style={{fontWeight: '700'}}> {moment(rowData.created_at).fromNow()}</Text>
            </View>
            <Text></Text>
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
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 20,
    fontSize: 26,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps)(Repos);
