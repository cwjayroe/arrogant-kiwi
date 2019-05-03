import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Repos from './screens/Repos'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Stars from './screens/Stars'
import * as React from 'react'
import LogoTitle from './components/LogoTitle'
import { FontAwesome, Octicons } from '@expo/vector-icons';


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
  }
)

const Routes = createStackNavigator({
  HomeRT: { 
    screen: tabRoutes,
    navigationOptions: ({ navigation }) => ({
      headerRight: <LogoTitle navigation={navigation}/>
    })
  },
  LoginRT: { 
    screen: Login
  },
  ProfileRT: { screen: Profile },
  },
  {
    initialRouteName: 'LoginRT'
  }
)


const App = createAppContainer(Routes)

export default App