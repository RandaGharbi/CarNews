import React, { Component } from 'react';
import { Text, View, ScrollView } from "react-native";
import { ListItem, Body, Left, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class SecondryList extends Component {
  render() {
    let secondaryItems = [];
    menusSecondaryItems.map((item, i) => {
      secondaryItems.push(
        <ListItem
          last
          icon
          key={item.id}
          button={true}
          onPress={Actions[item.key]}
        >
          <Left>
            <Icon style={{fontSize: 18}} name={item.icon}  />
          </Left>
          <Body style={{marginLeft: -15}}>
            <Text style={{fontSize: 16}}>{item.title}</Text>
          </Body>
        </ListItem>
      );
    });
    return secondaryItems;
  }
}
const menusSecondaryItems = [
  {
    id: 190,
    title: 'Login',
    icon: 'ios-person',
    key: 'login'
  },
  {
    id: 519,
    title: 'Signup',
    icon: 'ios-person-add',
    key: 'signup'
  },
  {
    id: 19,
    title: 'Wish List',
    icon: 'heart',
    key: 'wishlist'
  },
  {
    id: 20,
    key: 'map',
    title: 'Store Finder',
    icon: 'ios-pin',
    key: 'map'
  },
  {
    id: 21,
    key: 'contact',
    title: 'Contact Us',
    icon: 'md-phone-portrait',
    key: 'contact'
  },
  {
    id: 23,
    key: 'newsletter',
    title: 'Newsletter',
    icon: 'md-paper',
    key: 'newsletter'
  }
];
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
};