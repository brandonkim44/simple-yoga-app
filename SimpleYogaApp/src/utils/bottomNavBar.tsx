import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Main from '../screens/Main/main';
import Profile from '../screens/Profile/profile';

export const bottomNavBar = createBottomTabNavigator({
    Profile: Profile,
    Main: Main
}, {
    initialRouteName: 'Main'
});