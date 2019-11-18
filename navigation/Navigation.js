import React from 'react';
import { View, Text } from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Splash from '../screens/Splash.js';
import SignIn from '../screens/SignIn.js';
import SignUp from '../screens/SignUp.js';
import Home from '../screens/Home.js';
import ShopCart from '../screens/ShopCart.js';
import Search from '../screens/Search.js';
import Profile from '../screens/Profile.js';
import { FontAwesome, Entypo } from "@expo/vector-icons";
import ShoppingCartIcon from '../components/ShoppingCartIcon'

const AuthStack = createStackNavigator({
    SignIn: SignIn,
    SignUp: SignUp
})
const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions : {
            title: 'Home',
            headerStyle: {
                backgroundColor: '#00a79d'
            },
            headerTintColor: '#fff',
            headerRight: (
                <ShoppingCartIcon />
            )
        }
    }, 
    ShopCart: {
        screen: ShopCart,
        navigationOptions : {
            title: 'My Cart',
            headerStyle: {
                backgroundColor: '#00a79d'
            },
            headerTintColor: '#fff'
        }
    }
})
const SearchStack = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions : {
            title: 'Search',
            headerStyle: {
                backgroundColor: '#eb8242'
            },
            headerTintColor: '#fff'
            }
    }
})
const ProfileStack = createStackNavigator({
    ProFile: {
        screen: Profile,
        navigationOptions : {
            title: 'Profile',
            headerStyle: {
                backgroundColor: '#be7575'
            },
            headerTintColor: '#fff'
            }
    }
})
const Main = createBottomTabNavigator({
    HomeStack: {
        screen: HomeStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="home" size={30} color={tintColor}/>
                )
        }
    },
    SearchStack: {
        screen: SearchStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="search" size={30} color={tintColor}/>
                )
        }
    },
    ProfileStack: {
        screen: ProfileStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <Entypo name="user" size={30} color={tintColor}/>
                )
        }
    }
},{
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
});
const Navigation = createSwitchNavigator({
    Splash: Splash,
    AuthStack: AuthStack,
    Main: Main
})
export default createAppContainer(Navigation);