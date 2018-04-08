import React from 'react';
import { TabNavigator,StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';
//import {Icon} from 'react-native-vector-icons'
import IndividualGroup from '.././screens/IndividualGroup';
import Home from '.././screens/Home';
import test3 from '.././screens/test3';
import test4 from '.././screens/test4';
//import Icon from 'react-native-vector-icons/FontAwesome'

export const Tabs = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
       size:1,
        headerTintColor: 'black',
        headerStyle: {
          backgroundColor: '#e8edf3',
          // fontSize:38,
          // size:1,
        //fontSize:55,
        },  
      },
    },
    IndividualGroup: {
      screen: IndividualGroup,
      navigationOptions: {
        title: 'Group',
        
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
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'test1', 
                headerStyle: {
                  backgroundColor: 'red'
                }, 
              },
          },
          IndividualGroup: {
            screen: IndividualGroup,
            navigationOptions: {
                title: 'IS BEST',     
              },
          },
       
})