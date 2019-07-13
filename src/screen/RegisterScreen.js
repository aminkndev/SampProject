import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button } from "react-native";
import axios from 'axios'

import { changeFlag,isLogin, setUserToken } from "./../redux/actions/index";
import { connect } from "react-redux";


class RegisterScreen extends Component {

    handleRegister = () => {
        axios.post('http://10.0.2.2:3002/api/users/', {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
        }).then(Response => {
            this.setState({ token: Response.data.id }, () => {
                this.props.dispatch(isLogin(true));
                this.props.dispatch(setUserToken(this.state.token));
                this.props.navigation.navigate("Home");
            });


        }).catch(err => {
            console.log(err)
            alert("Username is exist")
        })

    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Name"
                    multiline={false}
                    onChangeText={(text) => this.setState({ name: text })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Username"
                    onChangeText={(text) => this.setState({ username: text })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder="password"
                    multiline={false}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                
                <Button
                    onPress={() => {
                        this.handleRegister();
                    }}
                    title="Register"
                />

            </View>
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

  export default connect(mapStateToProps)(RegisterScreen);