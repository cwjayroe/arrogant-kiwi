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
      navigationOptions: {
        title: "Repos"
      }
      
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile"
      }
    },
  },
  {
    initialRouteName: 'Repos',
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: <LogoTitle navigation={navigation} />
    })
  },
)

const starsScreens = createStackNavigator(
  {
    Stars: {
      screen: Stars,
      navigationOptions: {
        title: "Stars"
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile"
      }
    },
  },
  {
    initialRouteName: 'Stars',
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: <LogoTitle navigation={navigation} />
    })
  },
)

const relayScreens = createStackNavigator(
  {
    relayRepos: {
      screen: RelayViewer,
      navigationOptions: {
        title: "Relay Repos"
      }
    },
    repoDetails: {
      screen: RepoDetails,
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "Profile"
      }
    },
  },
  {
    initialRouteName: 'relayRepos',
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: <LogoTitle navigation={navigation} />
    })
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
          showIcon: true,
          showLabel: false
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
    }
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