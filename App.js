import React from 'react';
import { Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tab';
import FaceBookScreen from './Screens/fb';
import InstagramScreen from './Screens/in';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator=createBottomTabNavigator({
  FaceBook: {screen: FaceBookScreen},
  Instagram: {screen: InstagramScreen}
})

const AppContainer =createAppContainer(TabNavigator)