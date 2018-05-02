/**
* This is the Home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Button, Left, Right, Icon, Card, CardItem, cardBody } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../../Components/Text/Text';
import Navbar from '../../Components/Navbar/Navbar';
import SideMenu from '../../Components/SideMenu/SideMenu'
import SideMenuDrawer from '../../Components/SideMenuDrawer/SideMenuDrawer';
import CategoryBlock from '../../Components/CategoryBlock/CategoryBlock';

export default class Home extends Component {
  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
        <Button onPress={() => Actions.search()} transparent>
        <Icon name='ios-search-outline' />
        </Button>
        <Button onPress={() => Actions.cart()} transparent>
        <Icon name='ios-cart' />
        </Button>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="News" />
            <Content>
              {this.renderCategories()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderCategories() {
    let cat = [];
    for(var i=0; i<categories.length; i++) {
      cat.push(
        <CategoryBlock 
        key={categories[i].id} 
        id={categories[i].id} 
        image={categories[i].image} 
        title={categories[i].title} 
        />
      );
    }
    return cat;
  }

}

var categories = [
  {
    id: 1,
    title: 'Range Rover',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7Yy_vQs1fW2T4Q9GtWwEYvoquSatwKGeztuHrw4MJLido-ir'
  },
  {
    id: 2,
    title: 'Mercedes',
    image: 'https://img.sm360.ca/ir/w500c/images/newcar/2017/mercedes-benz/classe-c/amg-63-s/sedan/exteriorColors/2017_mercedes-benz_berline_amg-c-63-s_blanc-polaire_032.png'
  },
  {
    id: 3,
    title: 'Golf',
    image: 'http://www.autospies.com/images/users/turbox/main/MTM%20Golf%20VI%20GTD%205.jpg'
  },
  {
    id: 4,
    title: 'Audi',
    image: 'https://images.elite-auto.fr/visuel/AUDI/audi_17a5sportback5ha2b_angularfront.png'
  }
];
