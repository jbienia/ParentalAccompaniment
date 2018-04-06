import React, { Component } from 'react'
import {
    Text,
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native'

// import AppWithStore from './src/AppWithStore'
// import StatusBarSelect from './src/components/StatusBarSelect'

class test2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Page 2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default test2