import React, { Component } from 'react';
import { Button } from 'react-native';

class Presser extends Component {

    constructor(props) {
        super();
        this.state = {
            text: "Text has been changed !"
        };
    }

    onChangeText() {
        this.props.changeText(this.state.text)
    }

    render() {
      return (
        <Button
        onPress={this.onChangeText.bind(this)}
        title="Change the TEXT"
        color="#841584"
      />
        );
    }
}

export default Presser;
