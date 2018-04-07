import React, { Component } from 'react'
import firebase from 'react-native-firebase';


import {
    Text,
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native'

//import AppWithStore from './src/AppWithStore'
//import StatusBarSelect from './src/components/StatusBarSelect'

class test1 extends Component {
  render() {
    console.log(firebase.database().ref('/users').push("Hey bean")); // '[DEFAULT]'
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress ={()=>{this.props.navigation.navigate("test2")}}>
        <Text>Page 1</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default test1