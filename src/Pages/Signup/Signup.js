/**
* This is the Signup Page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, View, Left, Right, Button, Icon, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../../Colors/Colors';
import Text from '../../Components/Text/Text';
import Navbar from '../../Components/Navbar/Navbar';

export default class Signup extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        name: '',
        username: '',
        password: '',
        rePassword: '',
        hasError: false,
        errorText: ''
      };
  }


  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => Actions.pop()} transparent>
          <Icon name='ios-arrow-back' />
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
      <Container 
      style={{backgroundColor: '#fdfdfd'}}
      >
        <Navbar 
        left={left} 
        right={right} 
        title="SIGN UP" 
        />
        <ScrollView 
        contentContainerStyle={{flexGrow: 1}}
        >
          <View 
          style={{flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 50, paddingRight: 50}}
          >
            <View 
            style={{marginBottom: 35, width: '100%'}}
            >
              <Text 
              style={{fontSize: 24, fontWeight: 'bold', textAlign: 'left', width: '100%', color: Colors.navbarBackgroundColor}}>
              Create your account, 
              </Text>
              <Text 
              style={{fontSize: 18, textAlign: 'left', width: '100%', color: '#687373'}}>
              Signup to continue 
              </Text>
            </View>
            <Item>
                <Icon 
                active 
                name='ios-mail' 
                style={{color: '#687373'}} 
                />
                <Input 
                placeholder='Email' 
                onChangeText={(text) => this.setState({email: text})} 
                keyboardType="email-address" 
                placeholderTextColor="#687373" 
                />
            </Item>
            <Item>
                <Icon 
                active 
                name='ios-man' 
                style={{color: '#687373'}} 
                />
                <Input 
                placeholder='Name' 
                onChangeText={(text) => this.setState({name: text})} 
                placeholderTextColor="#687373" 
                />
            </Item>
            <Item>
                <Icon 
                active 
                name='ios-person' 
                style={{color: '#687373'}} 
                />
                <Input 
                placeholder='Username' 
                onChangeText={(text) => this.setState({username: text})} 
                placeholderTextColor="#687373" 
                />
            </Item>
            <Item>
                <Icon 
                active 
                name='ios-lock' 
                style={{color: '#687373'}} 
                />
                <Input 
                placeholder='Password' 
                onChangeText={(text) => this.setState({password: text})} 
                secureTextEntry={true} placeholderTextColor="#687373" 
                />
            </Item>
            <Item>
                <Icon 
                active 
                name='ios-lock' 
                style={{color: '#687373'}} 
                />
                <Input 
                placeholder='Repeat your password' 
                onChangeText={(text) => this.setState({rePassword: text})} 
                secureTextEntry={true} 
                placeholderTextColor="#687373" 
                />
            </Item>
            {this.state.hasError?<Text style={{color: "#c0392b", textAlign: 'center', marginTop: 10}}>{this.state.errorText}</Text>:null}
            <View 
            style={{alignItems: 'center'}}
            >
              <Button 
              onPress={() => this.signup()} 
              style={{backgroundColor: Colors.navbarBackgroundColor, marginTop: 20}}
              >
                <Text 
                style={{color: '#fdfdfd'}}>
                Signup</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }

}
