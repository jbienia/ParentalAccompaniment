import React, { Component } from 'react'
import {
    Text,
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native'

// import AppWithStore from './src/AppWithStore'
// import StatusBarSelect from './src/components/StatusBarSelect'

class test3 extends Component {
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress ={()=>{this.props.navigation.navigate("test1")}}>
        <Text>Page 3</Text>
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

export default test3