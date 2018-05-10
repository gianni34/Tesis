import React, {Component} from "react";
import {Animated, Dimensions, Platform, Text, View, StyleSheet, Image, Alert, TouchableHighlight} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import DrawerStack from './drawerStack.js'
import NewUserScreen from "./newUserScreen.js";

//import { MenuProvider } from 'react-native-popup-menu';


const Navigator = createStackNavigator({
    drawerStack: {screen: DrawerStack},
    newUser: {screen: NewUserScreen},
},{
    headerMode: 'none',
    initialRouteName: 'drawerStack'
});
/*
export const App = () => (
    <MenuProvider>
        {Navigator}
    </MenuProvider>
);
*/

export default Navigator;