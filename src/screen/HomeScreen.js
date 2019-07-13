  import React, { Component } from "react";
  import { Platform, StyleSheet, Text, View , Button} from "react-native";
  import DeviceInfo from "react-native-device-info";
  import axios from 'axios';
  // import store  from './../redux/store/index';
  import { changeFlag,isLogin, setUserToken } from "./../redux/actions/index";
  import { connect } from "react-redux";
  import {saveToken} from '../asyncstorage/usertoken.js'


  const version = DeviceInfo.getVersion();

  class HomeScreen extends Component {
    static navigationOptions = {
      title: "Home",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };

    constructor(props) {
      super(props);
      this.state = {
        flag: !props.flag,
        name: 'Guest'
      };
    }

    loginHandler = () =>{
      this.props.navigation.navigate('Login')

    }

    registerHandler = () =>{
      this.props.navigation.navigate('Register')

    }
    logOutHandler = () =>{
     
      this.props.dispatch(setUserToken(""));
      this.props.dispatch(isLogin(false));
      saveToken("");
      this.forceUpdate();
      

    }

    FlageChanger = () => {
      this.props.dispatch(changeFlag(!this.props.flag));
      this.setState({
        flag: this.props.flag
      });
    };

    getUserInfo = ()=>{
      axios.get('http://10.0.2.2:3002/api/users/'+this.props.userToken)
        .then(response =>{
          console.log(response)
          this.setState({
            name:response.data.name
          })

        })


    }
    componentWillUpdate(){
      this.getUserInfo();
    }
    renderHome = (isLogin) =>{

      if(isLogin){

        
          
        

        return(<View>
          <Text>{this.state.name}</Text>
          <Text>
            Logiiin
          </Text>
          <Button title = "Log Out" onPress = { this.logOutHandler }></Button>
        </View>);

      }else{

        return(
        <View>
          <Text>Guest</Text>
          <Button title = "Login" onPress = { this.loginHandler }></Button>
          <Button title = "Register" onPress = { this.registerHandler }></Button>
        </View>
        );

      }


      
    }

    componentDidUpdate() {

    }

    render() {
      return(
        <>
          
          {this.renderHome(this.props.isLogin)}
        </>
      )
    }




  }

  const mapStateToProps = state => {
    return {
      flag: state.flags.flag,
      isLogin: state.flags.isLogin,
      userToken: state.flags.userToken,
    };
  };

  export default connect(mapStateToProps)(HomeScreen);




  const styles = StyleSheet.create({
    text: {
      color: "#333"
    }
  });
