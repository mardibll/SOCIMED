import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DataStack} from './DbNavigations';

const Stack = createStackNavigator();
export default function StackNav(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {DataStack.map((x, i) => (
        <Stack.Screen key={i} name={x.name} component={x.component} />
      ))}
    </Stack.Navigator>
  );
}
