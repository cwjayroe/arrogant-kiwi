import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Repos from './screens/Repos'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Stars from './screens/Stars'
import * as React from 'react'
import { Image,  TouchableOpacity, Text } from 'react-native'
import { FontAwesome, Octicons } from '@expo/vector-icons';

class LogoTitle extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileRT')}>
        <Image
          source={{
            uri: 'https://avatars3.githubusercontent.com/u/49823449?v=4',
          }}
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
      </TouchableOpacity>
    );
  }
}

const tabRoutes = createBottomTabNavigator(
  {
    Repos: { 
      screen: Repos,
      navigationOptions: {
        tabBarIcon: (
          <Octicons name="repo" size={25} style={{ marginTop: 10}} />
        ),
        tabBarOptions: {
          inactiveTintColor: 'gray',
          showIcon: true 
        }
      }
    },
    Stars: { 
      screen: Stars,
      navigationOptions: {
        tabBarIcon: (
          <FontAwesome name="star" size={25} style={{ marginTop: 10}} />
        ),
        tabBarOptions: {
          inactiveTintColor: 'gray',
          showIcon: true 
        }
      }
    },
  }, 
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerRight: <LogoTitle navigation={navigation} />
    })
  }
)

const Routes = createStackNavigator({
  HomeRT: { screen: tabRoutes },
  LoginRT: { screen: Login },
  ProfileRT: { screen: Profile },
  },
  {
    initialRouteName: 'LoginRT'
  }
)


const App = createAppContainer(Routes)

export default App