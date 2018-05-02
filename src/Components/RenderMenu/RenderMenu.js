import React, { Component } from 'react';
import { Item, Input, List, ListItem, Body } from 'native-base';
import { Text, View } from "react-native";
import { Actions } from 'react-native-router-flux';
import MenuItems from '../MenuItems/MenuItems';
import SecondryList from '../SecondryList/SecondryList';
class RenderMenu extends Component{
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchError: false,
    };
  }
  render(){
    return(
      <View>
      <View style={{paddingLeft: 15, paddingRight: 15}}>
      <Item error={this.state.searchError}>
      <Input
      placeholder='Search...'
      onChangeText={(text) => this.setState({search: text, searchError: false})}
      onSubmitEditing={() => this.search()}
    />
    </Item>
    </View>
    <View style={{paddingRight: 15}}>
       <List>
        <ListItem
          icon
          key={0}
          button={true}
          onPress={() => Actions.home()}
        >
        <Body>
          <Text>Home</Text>
        </Body>
        </ListItem>
        <MenuItems />
        </List>
        </View>
        <View style={styles.line} />
          <View style={{paddingRight: 15}}>
            <List>
            <SecondryList />
            </List>
          </View>
    </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
};
export default RenderMenu;