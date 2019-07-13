import React ,{Component} from "react";
import {Platform, StyleSheet, Text, View} from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';
import {getToken} from '../asyncstorage/usertoken';
import { changeFlag, isLogin, setUserToken } from "./../redux/actions/index";
import { connect } from "react-redux";


class SplashScreen extends Component {

    static navigationOptions = {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }

    };
    componentDidMount(){

        getToken()
            .then(res =>{
                if(res){this.props.dispatch(isLogin(true));
                    this.props.dispatch(setUserToken(res));
                }
                
                console.log(res);
            })
            .catch(err => console.log(err));
        //set token to store
        //set flag to store
        this.resetNavigation("Main")
    }

    resetNavigation(targetRoute) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: targetRoute })],
        });
        this.props.navigation.dispatch(resetAction);
    }



    render() {
        return (
            <View style={{width:'100%',height:'100%',backgroundColor:'red'}}>


            </View>
        );
    }
}


const styles = StyleSheet.create({

    text:{
        color:'#333'
    }



})

const mapStateToProps = state => {
    return {
      flag: state.flags.flag,
      isLogin: state.flags.isLogin,
      userToken: state.flags.userToken,

    };
  };

export default connect(mapStateToProps)(SplashScreen);