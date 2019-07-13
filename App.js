
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import SplashScreen from './src/screen/SplashScreen';
import createStore  from './src/redux/store/index';

import { connect } from 'react-redux';
import { Provider } from 'react-redux';

// const store = createStore();

const AppNavigator =createStackNavigator({

   Home : {screen : HomeScreen},
   Login : {screen : LoginScreen},
   Register : {screen : RegisterScreen},
    
    
})

const RootStack = createStackNavigator(

    
    {
        Splash : { screen : SplashScreen},
        Main: {
            screen: AppNavigator,
        },

    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

let Navigation =createAppContainer(RootStack);

export default class App extends React.Component {

    componentDidMount(){
    //  console.log(store.getState());
  
  } 

  render() {
    return (
      // <Provider store={store}>
        <Navigation />
        // </Provider>
    );
  }
}

// export default connect(mapStateToProps)(App)
// export default createAppContainer(RootStack);
