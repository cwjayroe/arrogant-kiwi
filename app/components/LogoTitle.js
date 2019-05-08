import * as React from 'react'
import { Image,  TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux';

class LogoTitle extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
        <Image
          source={{
            uri: this.props.user.userDetails.avatar_url,
          }}
          style={{ width: 30, height: 30, marginRight: 10, borderRadius:20 }}
        />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => {
  const { user } = state
  return { user }
};
  
export default connect(mapStateToProps)(LogoTitle);