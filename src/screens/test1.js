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
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>April 4</Text>
        </View>
        <View style={styles.discussionContainer}>
          <Text style={styles.subHeading}>DISCUSSION TOPIC</Text>
            <View  style={styles.tester}>
            </View>
            <View style={styles.todaysConcept}>
              <Text style={styles.informationText} >What can you and your friends do to care for planet earth?</Text>
            </View>
        </View>
        <View  style={styles.memorizationContainer}>
          <Text style={styles.subHeading}>MEMORIZATION</Text>
          <View  style={styles.tester2}>
          </View>
            <View style={styles.todaysConcept}>
              <Text style={styles.informationText}>"Let your heart burn with loving kindness for all who may cross your path."</Text>
            </View>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //margin:20,
    backgroundColor:'white'
  },
  button:{
    borderWidth:1,
    padding:10,
    width:55,
    borderRadius:10,
    backgroundColor:'blue'
  },
  tester:{
    borderBottomColor: 'white',
    borderBottomWidth:0.5,
    width:70
  },
  tester2:{
    borderBottomColor: 'white',
    borderBottomWidth:0.5,
    width:70
  },
  subHeading:{
    fontSize:20,
    marginTop:20,
    margin:10,
    fontWeight:'bold',
    color:'white',
    // borderWidth:1,
    // borderColor:'black',
    // borderBottomColor: 'black',
    // borderBottomWidth:1,

  },
  informationText:{
    fontSize:30,
    marginTop:10,
    marginBottom: 10,
    color:'white'
  },
  memorizationContainer:{
    alignItems:'center',
    marginHorizontal:20,
    backgroundColor:'#22264b',
    borderRadius:5,
    padding:10,
    marginTop:20
  },
  discussionContainer:{
    marginHorizontal:20,
    backgroundColor:'#b56969',
    borderRadius:5,
    alignItems:'center',
    padding:10
  },
  heading:{
    fontSize:30,
    margin:0,
    color:'#4a4a4a',
   
    //borderWidth:1,
   // borderColor:'black',
    //backgroundColor:'red',
  },
  headerContainer:{
      // borderRadius:5,
      // backgroundColor:'#e6cf8b',
      
    marginHorizontal:20,
    marginVertical:20
  },
  todaysConcept:{
    padding:10
  }
})

export default test1