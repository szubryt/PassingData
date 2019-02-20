import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";

class Presser extends Component {
  render() {
    return (
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          margin: 20
        }}
        onChangeText={text => {
          this.props.changeText(text);
        }}
      />
    );
  }
}

export default Presser;
