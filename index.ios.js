import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';
import styles from './styles/styles'

export default class AwesomeProject extends Component {
  constructor() {
    super()
    this.state = {
      username: 'SEAN',
      steps: 1420
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.navbar}>
          <Image style={styles.button} source={require('./img/Home Icon.png')}/>
          <Image style={styles.button} source={require('./img/Calender_Icon.png')}/>
          <Image style={styles.button} source={require('./img/Barbell_Icon.png')}/>
          <Image style={styles.button} source={require('./img/HeartRate_Icon.png')}/>
          <Image style={styles.button} source={require('./img/User_Icon.png')}/>
        </View>
        <View style={styles.navbarSeperator}></View>
        <View style={styles.welcome}>
          <Image source={require('./img/profilePic.png')}/>
          <Text style={styles.welcomeText}>WELCOME, {this.state.username}</Text>
        </View>
        <View style={styles.seperator}></View>
        <View style={styles.data}>
          <Text style={styles.goals}>GOALS</Text>
          <Text style={styles.date}>TODAY'S</Text>
          <Text style={styles.steps}>STEPS</Text>
          <Text style={styles.stepsLarge}>{this.state.steps}</Text>
          <View style={styles.miniSeperator}></View>
          <Text style={styles.date}>PAST WEEK</Text>
          <Text style={styles.steps}>STEPS</Text>
          <Image style={styles.graph} source={require('./img/graph.png')}/>
        </View>
        <View style={styles.seperator}></View>
        <Text style={styles.today}>TODAY'S WORKOUT</Text>
        <Text style={styles.tan}>1. PULL UPS</Text>
        <Text style={styles.red}>2. PUSH UPS</Text>
        <Image source={require('./img/Bitmap.png')} style={styles.exercise}>
          <View style={styles.redOpacity}>
            <View>
              <Text style={styles.exerciseNumber}>EXERCISE 2</Text>
              <Text style={styles.exerciseTitle}>PUSHUPS</Text>
              <View style={styles.stepRows}>
                <Text style={styles.steps}>Step 1:</Text>
                <Image source={require('./img/pushup-1.png')}></Image>
              </View>
              <View style={styles.stepRows}>
                <Text style={styles.steps}>Step 2:</Text>
                <Image source={require('./img/pushup-2.png')}></Image>
              </View>
              <View style={styles.stepRows}>
                <Text style={styles.steps}>Step 3:</Text>
                <Image source={require('./img/pushup-3.png')}></Image>
              </View>
            </View>
          </View>
        </Image>
        <Text style={styles.tan}>3. SQUATS</Text>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
