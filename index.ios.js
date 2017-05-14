/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class AwesomeProject extends Component {
  constructor() {
    super()
    this.state = {
      username: 'Sean'
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={{width: 100, flexDirection: 'row'}}>
          <Image source={require('./Home Icon.png')}/>
          <Image source={require('./Calender_Icon.png')}/>
          <Image source={require('./Barbell_Icon.png')}/>
          <Image source={require('./HeartRate_Icon.png')}/>
          <Image source={require('./User_Icon.png')}/>
        </View>
        <Text>Welcome, {this.state.username}</Text>
      </ScrollView>
    );
  }
}
// const styles = StyleSheet.create({
//
// })

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
