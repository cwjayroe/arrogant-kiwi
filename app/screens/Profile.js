import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

class Profile extends React.Component{
  constructor(props){
      super(props);

      this.state = {
      }
  }
  componentDidMount(){
    console.log(this.props.user)
  }

  render() {
    let userBio = <Text>{this.props.user.userDetails.bio}</Text>

    if (this.props.user.userDetails.bio == undefined){
      userBio = <Text>You should really write your bio</Text>
    }
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: this.props.user.userDetails.avatar_url 
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{this.props.user.userDetails.login}</Text>
        <Text>Joined {moment(this.props.user.userDetails.created_at).fromNow()}</Text>

        <View style={styles.bio}>
          <Text style={styles.subheading}>Your Bio</Text>

          { userBio }
        </View>
      </View>  
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
  },
  image: { 
    width: 120, 
    height: 120,
    borderRadius: 50
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600'
  },
  bio: {
    marginTop: 20
  }
})
const mapStateToProps = (state) => {
  const { user } = state
  return { user }
};
  
export default connect(mapStateToProps)(Profile);