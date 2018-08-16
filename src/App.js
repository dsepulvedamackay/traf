import * as firebase from 'firebase';
import React, {Component} from 'react';
import {Platform, StatusBar} from 'react-native';
import {StackNavigator, SwitchNavigator, TabNavigator} from 'react-navigation';
import LoginScreen from './components/Login';
import HomeScreen from './components/Home';
import ProfileScreen from "./components/Profile";
import {FontAwesome} from "react-native-vector-icons";

const firebaseConfig = {
  apiKey: "AIzaSyBmgqLrNp3X_qUGewwSt7ZkNph8k70woIQ",
  authDomain: "trafapp-c9c42.firebaseapp.com",
  projectId: "trafapp-c9c42",
  databaseURL: "https://trafapp-c9c42.firebaseio.com",
  storageBucket: "trafapp-c9c42.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Pantallas para usuario autetificado
export const UserAuth = TabNavigator(
  {
      Home: {
          screen: HomeScreen,
          navigationOptions: {
              tabBarLabel: "Inicio",
              tabBarIcon: ({tintColor}) => (
                  <FontAwesome name="home" size={30} color={tintColor}/>
              )
          }
      },
      Profile: {
          screen: ProfileScreen,
          navigationOptions: {
              tabBarLabel: "Perfil",
              tabBarIcon: ({tintColor}) => (
                  <FontAwesome name="user" size={30} color={tintColor}/>
              )
          }
      }
  },
  {
      tabBarOptions: {
          style: {
              paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
          }
      }
  }
);

// Pantallas para usuarios visitantes
const UserGuest = StackNavigator(
  {
      Login: {
          screen: LoginScreen
      }
  },
  {
      initialRouteName: 'Login',
  }
);

const RootNavigator = SwitchNavigator(
  {
      Guest: {
          screen: UserGuest
      },
      User: {
          screen: UserAuth
      }
  },
  {
      initialRouteName: "Guest"
  }
);

export default class App extends React.Component {
  render() {
      return <RootNavigator/>
  }
}
