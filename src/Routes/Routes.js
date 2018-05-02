/**
* This is the Main file
* This file contains the routes of all the pages
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';


// Our custom files and classes import
import Home from '../Pages/HomePage/Home';
import Search from '../Pages/Search/Search';
import Cart from '../Pages/Cart/Cart';
import WishList from '../Pages/WishList/WishList';
import Maps from '../Pages/Map/Map';
import Contact from '../Pages/Contact/Contact';
import Newsletter from '../Pages/Newsletter/Newsletter';
import Category from '../Pages/Category/Category';
import Product from '../Pages/Product/Product';
import ImageGallery from '../Pages/ImageGallery/ImageGallery';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Signup/Signup';
import Checkout from '../Pages/Checkout/Checkout';


export default class Routes extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return(
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={Home} hideNavBar />
            <Scene key="search" component={Search} modal hideNavBar />
            <Scene key="cart" component={Cart} modal hideNavBar />
            <Scene key="wishlist" component={WishList} modal hideNavBar />
            <Scene key="map" component={Map} modal hideNavBar />
            <Scene key="contact" component={Contact} modal hideNavBar />
            <Scene key="newsletter" component={Newsletter} modal hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="product" component={Product} hideNavBar />
            <Scene key="imageGallery" component={ImageGallery} modal hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} hideNavBar />
            <Scene key="checkout" component={Checkout} hideNavBar />
          </Scene>
        </Router>
      </Root>
    );
  }

}