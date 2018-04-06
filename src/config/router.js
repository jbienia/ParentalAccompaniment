import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';

import test1 from '.././screens/test1';
import test2 from '.././screens/test2';

export const Tabs = TabNavigator({
    test1: {
      screen: test1,
      navigationOptions: {
        title: 'test1',
        
      },
    },
    test2: {
      screen: test2,
      navigationOptions: {
        title: 'test2',
        
      },
    },
  });

export const Stack = StackNavigator({
    test1: {
        screen: test1,
        navigationOptions: {
            title: 'test1',
            
          },
      },
      test2: {
        screen: test2,
        navigationOptions: {
            title: 'test2',
            
          },
      },
})

export const Routes = StackNavigator({
        Tabs:{
            screen:Tabs
        },
        Stack:{
            screen:Stack
        }
       
})