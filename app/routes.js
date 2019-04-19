import React, { Component } from 'react';
import { Platform } from 'react-native';

import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation'

//Screens
import SignIn from './components/auth';
import Main from './components/main';
import Maps from './components/map';
// import Dj from './components/dj';

const AppStack = createBottomTabNavigator({
    Main: Main,
    Maps: Maps,
    // Dj: Dj
})

const AuthStack = createStackNavigator({
    SignIn: SignIn
}, {
        headerMode: 'none'
    })

export const RootNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App: AppStack,
        Auth: AuthStack
    }, {
            initialRouteName: 'Auth'
        }))


}