import React, { Component } from 'react';
import { Text, View, ScrollView } from "react-native";
import RenderMenu from '../RenderMenu/RenderMenu';
export default class SideMenu extends Component {
  render() {
    return(
          <ScrollView style={styles.container}>
              <RenderMenu />
          </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
};