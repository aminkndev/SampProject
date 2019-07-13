import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, Button } from "react-native";
import axios from 'axios'
import { changeFlag, isLogin, setUserToken } from "./../redux/actions/index";
import { connect } from "react-redux";
import { saveToken } from '../asyncstorage/usertoken'


class LoginScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    handleLogin = () => {


        axios.post('http://10.0.2.2:3002/api/users/login', {
            username: this.state.username,
            password: this.state.password
        }).then(Response => {
            console.log(Response)
            this.setState({ token: Response.data.userID }, () => {
                saveToken(this.state.token)
                    .then(res => {
                        this.props.dispatch(isLogin(true));
                        this.props.dispatch(setUserToken(this.state.token));
                        this.props.navigation.navigate("Home");
                    })
                    .catch(err => alert(err))

            });


        }).catch(err => {
            alert(err)
        })


        //set user token to store
        //set flag
        //nav to Home

    }

    render() {
        return (
            <View>

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
                        this.handleLogin();
                    }}
                    title="Login"
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

export default connect(mapStateToProps)(LoginScreen);