import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { loginUser } from '../config/UserActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BasicAuth from '../components/BasicAuth'

class Stars extends React.Component{
  constructor(props){
      super(props);

      this.state = {
          showProgress: false,
          password: '',
          email: ''
      }
  }

  render() {
    return (
        <View>
            <Text>Stars Page</Text>
        </View>  
    )
  }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      loginUser,
    }, dispatch)
  );
  const mapStateToProps = (state) => {
    const { user } = state
    return { user }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Stars);