/**
* This is the Main file
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Container, Content, View, Left, Right, Button, Icon, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../../Colors/Colors';
import Text from '../../Components/Text/Text';
import Navbar from '../../Components/Navbar/Navbar';
import SideMenu from '../../Components/SideMenu/SideMenu';
import SideMenuDrawer from '../../Components/SideMenuDrawer/SideMenuDrawer';
import Product from '../../Components/ProductCar/ProductCar';


export default class Category extends Component {
  constructor(props) {
      super(props);
      this.state = {
        items: []
      };
  }

  componentWillMount() {
    var products = [
      {id: 1, title: 'Black Hat', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'http://st.motortrend.com/uploads/sites/10/2016/10/2017-Land-Rover-Range-Rover-Evoque-Convertible-front-three-quarter-in-motion-05-1.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 2, title: 'Range rover', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'https://img.autoplus.fr/news/2015/02/23/1491455/1200%7C800%7C94467b5ee2517df3f3c3eeac.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 10, title: 'Black Leather Hat', categoryId: 1, categoryTitle: 'KIDS', price: '2$', image: 'https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/range-rover-evoque-convertible-hse-si4-%282%29.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 15, title: 'Long Sleeves T-Shirt', categoryId: 5, categoryTitle: 'MEN', price: '120$', image: 'https://www.outdoortoys.co.uk/media/catalog/product/cache/1/image/1560x/040ec09b1e35df139433887a97daa66f/h/l/hl1618-pink03.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 11, title: 'Pink Diamond Watch', categoryId: 5, categoryTitle: 'MEN', price: '22$', image: 'https://images.elite-auto.fr/visuel/LANDROVER/landrover_17evoquecabriohse4wdod1bc_frontview.png', description: "Hello there, i'm a cool product with a heart of gold."},
      {id: 22, title: 'Golden Tie', categoryId: 2, categoryTitle: 'WOMEN', price: '12$', image: 'http://www.venteauto42.com/images/Image/LAND-ROVER-EVOQUE.jpg', description: "Hello there, i'm a cool product with a heart of gold."},
    ];
    this.setState({items: products});
  }

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
          <Container style={{backgroundColor: '#fdfdfd'}}>
            <Navbar left={left} right={right} title={this.props.title} />
            <Content padder>
              {this.renderProducts()}
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }

  renderProducts() {
    let items = [];
    let stateItems = this.state.items
    for(var i=0; i<stateItems.length; i+=2 ) {
      if(stateItems[i+1]) {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Product key={stateItems[i+1].id} product={stateItems[i+1]} isRight />
          </Grid>
        );
      }
      else {
        items.push(
          <Grid key={i}>
            <Product key={stateItems[i].id} product={stateItems[i]} />
            <Col key={i+1} />
          </Grid>
        );
      }
    }
    return items;
  }
}
