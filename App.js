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
import MainScreen from './src/screens/MainScreen';
import ChatScreen from './src/screens/ChatScreen';
//Redux
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers/rootReducer';
 const store = createStore(rootReducer);
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';




//#region use react-navigator to navigate
const AppNavigator = createStackNavigator({
  MainScreen : {screen : MainScreen},
  ChatScreen : {screen : ChatScreen}
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
        <AppContainer {...this.props} />
      </Provider>
    );
  }
}


