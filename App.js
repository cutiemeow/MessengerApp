/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, AppRegistry} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import MainScreen from './src/components/screens/MainScreen';
import ChatScreen from './src/components/screens/ChatScreen';
import {MainScreenContainer} from './src/containers/screens/MainScreenContainer';
import {ChatScreenContainer} from './src/containers/screens/ChatScreenContainer';
//Redux
//import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import store from './src/store';

//#region use react-navigator to navigate
const AppNavigator = createStackNavigator({
  MainScreen : {screen : MainScreenContainer},
  ChatScreen : {screen : ChatScreenContainer}
});
const AppContainer = createAppContainer(AppNavigator);
//#endregion

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}


