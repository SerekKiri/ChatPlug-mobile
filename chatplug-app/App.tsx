import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import { Provider } from 'react-redux'
// Imports
import LandingScreen from './src/Components/LandingScreen/index'
import ThreadConnectionsScreen from './src/Components/ThreadConnectionsScreen/index'
import { rootReducer } from './src/reducers'
import axiosMiddleware from 'redux-axios-middleware'

const client = axios.create({
  baseURL: 'http://192.168.254.107:2137/api/v1',
  responseType: 'json'
}) 

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)))

const Stack = createStackNavigator(
  {
    Landing: { screen: LandingScreen, navigationOptions: { header: null } },
    Connections: ThreadConnectionsScreen,
  },
  {
    initialRouteName: 'Landing',  
  }  
)

export default () => {
  return(
    <Provider store={store}>
      <Stack/>
    </Provider>
  )
}