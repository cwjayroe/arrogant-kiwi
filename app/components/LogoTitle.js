import * as React from 'react'
import { Image,  TouchableOpacity, Text } from 'react-native'

class LogoTitle extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileRT')}>
        <Image
          source={{
            uri: "https://avatars3.githubusercontent.com/u/49823449?v=4",
          }}
          style={{ width: 30, height: 30, marginRight: 10, borderRadius:20 }}
        />
        <Text>{this.props.navigation.getParam('title')}</Text>
      </TouchableOpacity>
    );
  }
}


export default LogoTitle