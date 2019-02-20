import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';

class Presser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    onChangeText() {
        this.props.changeText(this.state.text)
    }

    render() {
      return (
          <View>
        <Button
        onPress={this.onChangeText.bind(this)}
        title="Change the TEXT"
        color="#841584"
        style={{
            width: 500,
            height: 40,
            margin: 20
            }}
      />
      <TextInput
        style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 20
            }}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>
        );
    }
}

export default Presser;
