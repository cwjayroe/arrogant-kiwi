import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { loginUser } from '../config/UserActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WebClient from '../components/WebHelper'

class Login extends React.Component{
  constructor(props){
      super(props);

      this.state = {
          showProgress: false,
          password: '',
          email: ''
      }
  }

  loginPressed = async () => {
    this.setState({showProgress: true})

    let currentState = this.state
    delete currentState.badCredentials
    delete currentState.unknownError
    currentState.showProgress = false

    const results = await WebClient.authenticate({
      email: this.state.email,
      password: this.state.password
    })

    this.setState({ ...currentState, ...results })

    if ('userDetails' in this.state) {
      this.props.loginUser(this.state)
      this.props.navigation.navigate('HomeRT')
    }
  }

  render() {
    var errorCtrl = <View />

    if(!this.state.success && this.state.badCredentials){
        errorCtrl = 
        <Text style={styles.error}>
            Incorrect username and password
        </Text>;
    }

    if(!this.state.success && this.state.unknownError){
        errorCtrl = 
        <Text style={styles.error}>
            We experienced an unexpected issue
        </Text>
    }

    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.inputboxes}
            onChangeText={(text)=> this.setState({email: text})}
            placeholder="Email Address"
            placeholderTextColor="#c4c4c4"
          />
          <TextInput 
            style={styles.inputboxes}
            onChangeText={(text)=> this.setState({password: text})}
            placeholder="Password"
            placeholderTextColor="#c4c4c4"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.buttoncontainer} onPress={this.loginPressed}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>

          {errorCtrl}
        </View>
        <ActivityIndicator
          animating={this.state.showProgress}
          size="large"
          style={styles.loader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    marginBottom: 15
  },
  buttoncontainer: {
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: '#1984ff',
    borderRadius: 3,
    height: 45,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttontext: {
    color: 'white',
    fontSize: 22,
    fontWeight:'500'
  },
  inputContainer: {
    marginTop: 25
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 75
  },
  inputboxes: {
    width: 300,
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: "#c4c4c4",
    color: "black",
    fontSize: 17
  },
  loader: {
    marginTop: 10
  },
  error: {
    marginTop: 10,
    width: 300
  }
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loginUser,
  }, dispatch)
);
const mapStateToProps = (state) => {
  const { user } = state
  return { user }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);