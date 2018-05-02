/**
* This is the Text component used in the app
* We need to use this component which heritate from native-base text component to have more control on its font
**/

import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Text extends Component {
  render() {
    return (
      <Text style={[styles.font, this.props.style]} {...this.props}> 
        {this.props.children}
      </Text>
    )
  }
}
const styles = {
  font: {
    fontFamily: 'Roboto'
  }
};
