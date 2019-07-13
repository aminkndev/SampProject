import React, { Component } from "react";
import axios from 'axios';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { connect } from 'react-redux'

const i = 1;

class DetailsScreen extends Component {
  static navigationOptions = {
    title: "Details",
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
      Alert_Visibility: false
    };
  }

  Show_Custom_Alert(visible) {
    this.setState({ Alert_Visibility: visible });
  }

  ok_Button = () => {
    Alert.alert("OK Button Clicked.");
  };
  componentDidMount() {
    // console.log(store.getState());
  }

  handleRegister = () => {

   
      axios.post('http://10.0.2.2:3002/api/users/', {
        username: this.state.username,
        password: this.state.password
      }).then(Response =>{
        console.log(Response)
      }).catch(err =>{
        console.log(err)
      })
      
  }

  handleLogin = async () => {

    let result = await axios.post('http://localhost:3002/api/users/login', {
      username: this.state.username,
      password: this.state.password
    })
    alert(result);

  }

  render() {
    if (this.props.flag) {
      return (
        <View style={styles.MainContainer}>
          <Modal
            visible={this.state.Alert_Visibility}
            transparent={true}
            animationType={"fade"}
            onRequestClose={() => {
              this.Show_Custom_Alert(!this.state.Alert_Visibility);
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View style={styles.Alert_Main_View}>
                <Text style={styles.Alert_Title}>ورژن جدید </Text>

                <View
                  style={{ width: "100%", height: 2, backgroundColor: "#fff" }}
                />

                <Text style={styles.Alert_Message}>
                  {" "}
                  ورژن جدید قابل دسترس است{" "}
                </Text>

                <View
                  style={{ width: "100%", height: 1, backgroundColor: "#fff" }}
                />

                <View style={{ flexDirection: "row", height: "30%" }}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.ok_Button}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.TextStyle}> بروز رسانی</Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      width: 1,
                      height: "100%",
                      backgroundColor: "#fff"
                    }}
                  />

                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                      this.Show_Custom_Alert(!this.state.Alert_Visibility);
                    }}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.TextStyle}> الان نه </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <Button
            onPress={() => {
              this.Show_Custom_Alert(true);
            }}
            title="Custom Alert "
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Username"
            // multiline={false}
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
      );
    } else if (!this.props.flag) {
      return (
        <View>
          <Text>riiidiiiii</Text>
        </View>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    flag: state.flags.flag
  };
};

export default connect(mapStateToProps)(DetailsScreen);




const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS == "ios" ? 20 : 0,
    backgroundColor: "#fffafe"
  },

  Alert_Main_View: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(50,50,50,0.95)",
    height: 200,
    width: "90%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 7
  },

  Alert_Title: {
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    padding: 10,
    height: "28%"
  },

  Alert_Message: {
    fontSize: 22,
    color: "#fff",
    textAlign: "center",
    padding: 10,
    height: "42%"
  },

  buttonStyle: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    marginTop: -5
  }
});
