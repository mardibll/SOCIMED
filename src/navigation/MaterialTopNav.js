import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SemuaPostingan from '../views/profile/SemuaPostingan';
import PostinganAnda from '../views/profile/PostinganAnda';
import FollowPosting from '../views/profile/FollowPosting';
import {Text, View} from 'react-native';
import Icons from '../components/atoms/Icons';
import {TransitionPresets} from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
export const NavigationProfil = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        headerMode: 'none',
        tabBarStyle: {
          zIndex: 0,
          borderBottomWidth: 0.6,
          borderColor: 'grey',
          justifyContent: 'center',
          // backgroundColor: 'blue',
        },
        tabBarIconStyle: {
          // backgroundColor: 'red',
          height: 40,
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
          top: 20,
          // padding: 10,
        },
        tabBarLabel: '',
        tabBarIcon: ({focused, color, size, Navigator}) => {
          let iconName;
          let iconType;
          if (route.name === 'Semua') {
            iconName = 'table-large';
            iconType = 'MaterialCommunityIcons';
          } else if (route.name === 'Posting') {
            iconType = 'MaterialIcons';
            iconName = 'photo-camera-front';
          } else if (route.name === 'Follow') {
            iconType = 'Octicons';
            iconName = 'diff-added';
          }
          return (
            <Icons
              type={iconType}
              name={iconName}
              size={35}
              color={focused ? 'black' : 'grey'}
            />
          );
        },
      })}>
      <Tab.Screen name="Semua" component={SemuaPostingan} />
      <Tab.Screen name="Posting" component={PostinganAnda} />
    </Tab.Navigator>
  );
};
