import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';

class Profile extends React.Component{
  constructor(props){
      super(props);

      this.state = {
      }
  }

  render() {
    let userBio = <Text style={styles.paragraph}>{this.props.user.userDetails.bio}</Text>

    if (this.props.user.userDetails.bio == undefined){
      userBio = <Text style={styles.paragraph}>You should really write your bio...</Text>
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
        <View style={styles.icon_container}>
          <FontAwesome name="users" size={15} style={ styles.icon }/>
          <Text style={styles.icon_title}>Company</Text>
        </View>
        <View style={styles.icon_container}>
          <FontAwesome name="map-pin" size={15} style={ styles.icon }/>
          <Text style={styles.icon_title}>Location</Text>
        </View>
        <View style={styles.icon_container}>
          <FontAwesome name="globe" size={15} style={ styles.icon }/>
          <Text style={styles.icon_title}>Website</Text>
        </View>
        <View style={styles.bio}>
          <Text style={styles.subheading}>Your Bio</Text>

          { userBio }
        </View>
      </View>  
    )
  }
}
const styles = StyleSheet.create({
  icon_container: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 0,
    paddingBottom: 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  paragraph: {
    marginTop: 5
  },
  image: { 
    width: 120, 
    height: 120,
    borderRadius: 50
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 10
  },
  subheading: {
    fontSize: 22,
    fontWeight: '600',
  },
  bio: {
    marginTop: 20,
    alignSelf: 'stretch',
    marginLeft: 30,
    marginRight: 30
  },
  icon_title: {
    marginLeft: 4
  }
})
const mapStateToProps = (state) => {
  const { user, repos } = state
  return { user, repos }
};
  
export default connect(mapStateToProps)(Profile);