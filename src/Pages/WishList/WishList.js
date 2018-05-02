/**
* This is the Search file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Alert, AsyncStorage } from 'react-native';
import { Container, Content, View, Header, Icon, Button, Left, Right, Body, Title, List, ListItem, Thumbnail, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../../Colors/Colors';
import Text from '../../Components/Text/Text';
import Navbar from '../../Components/Navbar/Navbar';
import ProductCar from '../../Components/ProductCar/ProductCar';

export default class WishList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: []
      };
  }


  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-close" size={38} style={{fontSize: 38}} />
        </Button>
      </Left>
    );
    return(
      <Container style={{backgroundColor: '#fdfdfd'}}>
          <Navbar left={left} title="MY WISHLIST" />
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon name="heart" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
              <Text style={{color: '#95a5a6'}}>Your wishlist is empty...</Text>
            </View>
      </Container>
    );
  }

  renderItems() {
    let items = [];
    this.state.items.map((item, i) => {
      items.push(
        <ListItem
          key={i}
          last={this.state.items.length === i+1}
        >
          <Thumbnail square style={{width: 110, height: 90}} source={{ uri: item.image }} />
          <Body style={{paddingLeft: 10}}>
            <Text style={{fontSize: 18}}>
              {item.title}
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>{item.price}</Text>
            <Text style={{fontSize: 14 ,fontStyle: 'italic'}}>{item.category}</Text>
          </Body>
        </ListItem>
      );
    });
    return items;
  }
}
