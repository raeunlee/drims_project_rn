import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
 
class Input extends Component {
  state = {
    travelName: "",
  };
 
  handletravelName = text => {
    this.setState({ travelName: text });
  };
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="여행의 이름을 설정해주세요"
          placeholderTextColor="#000000"
          autoCapitalize="none"
          onChangeText={this.handletravelName}
        />
      </View>
    );
  }
}
 
export default Input;
 
const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#000000",
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40
  },
  submitButtonText: {
    color: "white"
  }
});
 