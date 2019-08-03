/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';


import MainScreen from './src/screens/MainScreen';
import ChatScreen from './src/screens/ChatScreen';

//#region use react-navigator to navigate
const AppNavigator = createStackNavigator({
  MainScreen : {screen : MainScreen},
  ChatScreen : {screen : ChatScreen}
});
const AppContainer = createAppContainer(AppNavigator);
//#endregion

const App = () => {


  return (
    <AppContainer></AppContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
