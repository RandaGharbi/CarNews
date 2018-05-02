import React, { Component } from 'react';
import { Text, View, ScrollView } from "react-native";
import { ListItem, Body } from 'native-base';
export default class MenuItems extends Component {
  render() {
    let items = [];
    menuItems.map((item, i) => {
      items.push(
        <ListItem
          last={menuItems.length === i+1}
          key={item.id}
          button={true}
          onPress={() => this.itemClicked(item)}
        >
          <Body>
            <Text>{item.title}</Text>
          </Body>
        </ListItem>
      );
    });
    return items;
  }
}
var menuItems = [
  {
    id: 1,
    title: 'Classic Car',
    subMenu: [
      {
        id: 5,
        title: 'Rolls-Royce'
      },
      {
        id: 6,
        title: 'Bentley'
      },
      {
        id: 7,
        title: 'Ferrari'
      },
      {
        id: 8,
        title: 'Lamborghini'
      },
      {
        id: 9,
        title: 'Maserati'
      },
      {
        id: 10,
        title: 'Aston Martin'
      },
      {
        id: 11,
        title: 'Bugatti'
      }
    ]
  },
  {
    id: 2,
    title: 'Sport Car',
    subMenu: [
      {
        id: 12,
        title: 'Pagani'
      },
      {
        id: 13,
        title: 'Koenigsegg'
      },
      {
        id: 14,
        title: 'Renault Eolab'
      },
      {
        id: 15,
        title: 'Mitsubishi Pajero'
      },
      {
        id: 16,
        title: 'Bmw'
      },
      {
        id: 17,
        title: 'Super Car'
      },
      {
        id: 18,
        title: 'Coupé'
      }
    ]
  },
  {
    id: 3,
    title: 'Top Cars'
  },
  {
    id: 4,
    title: 'ACCESORIES'
  }
];
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
};