// TO DO
import React, { Component } from 'react';
import { Text } from 'react-native';

class Header extends Component {
      render() {
        return (
          <Text >{this.props.text}</Text>
          );
      }
}

export default Header;
