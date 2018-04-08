import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
//import {Icon} from 'react-native-vector-icons'
import test1 from '.././screens/test1';
import test2 from '.././screens/test2';
import test3 from '.././screens/test3';
import test4 from '.././screens/test4';
//import Icon from 'react-native-vector-icons/FontAwesome'

export const Tabs = TabNavigator({
    test1: {
      screen: test1,
      navigationOptions: {
        title: 'Junior Youth Companion',
       size:1,
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: '#e8edf3',
          fontSize:38,
          size:1,
        //fontSize:55,
        },  
      },
    },
    test2: {
      screen: test2,
      navigationOptions: {
        title: 'CC',
        
      },
    },
    test3: {
      screen: test3,
      navigationOptions: {
        title: 'SC',
        
      },
    },
    test4: {
      screen: test4,
      navigationOptions: {
        title: 'DG',
        
      },
    },
  });

export const Routes = StackNavigator({
        Tabs:{
            screen:Tabs
        },
        test1: {
            screen: test1,
            navigationOptions: {
                title: 'test1', 
                headerStyle: {
                  backgroundColor: 'red'
                }, 
              },
          },
          test2: {
            screen: test2,
            navigationOptions: {
                title: 'IS BEST',     
              },
          },
       
})