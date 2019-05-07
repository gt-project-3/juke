import React, { Component } from 'react';

import { Platform } from 'react-native';

import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import SignIn from './components/auth';
import Main from './components/main';
import Logo from './utils/logo';
import DjArticle from './components/dj/article';
import Article from './components/main/article';
import Maps from './components/map/pickLocation';

const headerConf = {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerTintColor: 'white',
        headerTitle: Logo
    }
}

const NewsStack = createStackNavigator({
    Main: Main,
    Article: Article
}, headerConf);

const DjStack = createStackNavigator({
        Maps: Maps,
        Article: DjArticle
    },
    headerConf
);


const AppStack = createBottomTabNavigator({
    Main: NewsStack,
    Maps: DjStack,
    // Dj: Dj
}, {
    tabBarOptions: {
        activeTintColor: '#fff',
        showLabel: false,
        activeBackgroundColor: '#db3b3b',
        inactiveBackgroundColor: '#bf2d2d',
        // style: {
        //     backgroundColor: '#bf2d2d'
        // }
    }
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