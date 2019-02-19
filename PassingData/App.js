import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/Header';
import Presser from './src/Presser';

class App extends Component {

  constructor() {
    super();
    this.state = {
      text: 'Home'
    }
  }


  onChangeText(newText) {
    this.setState({
      text: newText
    });
}
      render() {
        return (
          <View>
            <Header text={this.state.text} />
            <Presser 
              changeText={this.onChangeText.bind(this)}
            />
          </View>
          );
      }
}

export default App;
