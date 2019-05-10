import React, { Component, Button } from 'react';

import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';

import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';

import Chat from './components/Chat Screen/chat';
import SignIn from './components/auth';
import Main from './components/main';
import Logo from './utils/logo';
import List from './components/ListComponent/list';
import ListTwo from './components/ListComponent/listTwo';
import DjArticle from './components/dj/article';
import DJCardShowcase from './components/dj/dj';
import Article from './components/main/article';
import Maps from './components/map/pickLocation';

// const headerConf = {
//     headerLayoutPreset: 'center',
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: '#fff'
//         },
//         headerTintColor: 'white',
//         headerTitle: Logo
//     }
// }


const NewsStack = createStackNavigator({
        Main: Main,
        Article: Article,
        Chat: Chat,
        List: List,
        ListTwo: ListTwo,
        DJCardShowcase: DJCardShowcase

    },
    // headerConf
);

const DjStack = createStackNavigator({
        Maps: Maps,
        Article: DjArticle
    },
    // headerConf
);




const AppStack = createBottomTabNavigator({
    Main: NewsStack,
    Maps: DjStack,
    Chat: Chat
}, {
    headerMode: 'none'
})

const AuthStack = createStackNavigator({
    SignIn: SignIn
}, {
    headerMode: 'none'
})

export const RootNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App: AppStack,
        Auth: AuthStack,

    }, {
            initialRouteName: 'Auth',
    }))


}