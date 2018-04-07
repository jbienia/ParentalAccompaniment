import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';

import test1 from '.././screens/test1';
import test2 from '.././screens/test2';
import test3 from '.././screens/test3';
import test4 from '.././screens/test4';

export const Tabs = TabNavigator({
    test1: {
      screen: test1,
      navigationOptions: {
        title: 'JY',
        
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
              },
          },
          test2: {
            screen: test2,
            navigationOptions: {
                title: 'IS BEST',     
              },
          },
       
})