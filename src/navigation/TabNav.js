import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DataTab} from './DbNavigations';
import Icons from '../components/atoms/Icons';
import {TransitionPresets} from '@react-navigation/stack';
import AvatarUser from '../components/Image-Profil-User';

const Tab = createBottomTabNavigator();
export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
        headerMode: 'none',
        tabBarIcon: ({focused, color, size, Navigator}) => {
          let iconName;
          let iconType;
          if (route.name === 'Home') {
            iconName = 'home';
            iconType = 'Entypo';
          } else if (route.name === 'Search') {
            iconType = 'Feather';
            iconName = 'search';
          } else if (route.name === 'AddPosting') {
            iconType = 'Octicons';
            iconName = 'diff-added';
          } else if (route.name === 'Streaming') {
            iconType = 'MaterialIcons';
            iconName = 'video-library';
          } else if (route.name === 'Profile') {
            iconType = 'MaterialIcons';
            iconName = 'video-library';
          }
          return (
            <Icons
              type={iconType}
              name={iconName}
              size={22}
              color={focused ? '#278F02' : 'rgba(0,0,0,0.6)'}
            />
          );
        },
      })}>
      {DataTab.map((item, index) => {
        return (
          <Tab.Screen key={item} name={item.name} component={item.component} />
        );
      })}
    </Tab.Navigator>
  );
}
