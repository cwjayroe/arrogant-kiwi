import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Repos from './screens/Repos'
import Login from './screens/Login'
import Profile from './screens/Profile'
import Stars from './screens/Stars'
import * as React from 'react'
import LogoTitle from './components/LogoTitle'
import { FontAwesome, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import RelayViewer from './screens/Relay'
import RepoDetails from './screens/RepoDetails'


const repoScreens = createStackNavigator(
  {
    Repos: {
      screen: Repos,
      // navigationOptions: ({ navigation }) => ({
      //   headerRight: <LogoTitle navigation={navigation} />
      // })
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Repos'
  },
)

const starsScreens = createStackNavigator(
  {
    Stars: {
      screen: Stars,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Stars'
  },
)

const relayScreens = createStackNavigator(
  {
    relayRepos: {
      screen: RelayViewer,
    },
    repoDetails: {
      screen: RepoDetails
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'relayRepos'
  },
)

const tabRoutes = createBottomTabNavigator(
  {
    Repos: { 
      screen: repoScreens,
      navigationOptions: {
        tabBarIcon: (
          <FontAwesome name="book" size={25} style={{ marginTop: 10}} />
        ),
        tabBarOptions: {
          inactiveTintColor: 'gray',
          showIcon: true,
          showLabel: false
        }
      }
    },
    Stars: { 
      screen: starsScreens,
      navigationOptions: {
        tabBarIcon: (
          <FontAwesome name="star" size={25} style={{ marginTop: 10}} />
        ),
        tabBarOptions: {
          inactiveTintColor: 'gray',
          showIcon: true,
          showLabel: false
        }
      }
    },
    Relay: { 
      screen: relayScreens,
      navigationOptions: {
        tabBarIcon: (
          <MaterialCommunityIcons name="graphql" size={25} style={{ marginTop: 10}} />
        ),
        tabBarOptions: {
          inactiveTintColor: 'gray',
          showIcon: true
        }
      }
    }
  }
)

const Routes = createStackNavigator({
  HomeRT: { 
    screen: tabRoutes,
  },
  LoginRT: { 
    screen: Login
  },
  RepoDetailsRT: {
    screen: RepoDetails
  },
  ProfileRT: { screen: Profile },
  },
  {
    initialRouteName: 'LoginRT',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
)


const App = createAppContainer(Routes)

export default App