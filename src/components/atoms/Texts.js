import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Texts(props) {
  const incStyle = Array.isArray(props.style) ? props.style : [props.style];

  return <Text {...props} style={[styles.defStyle, ...incStyle]} />;
}
const styles = StyleSheet.create({
  defStyle: {
    fontSize: 14,
    color: '#000',
    fontFamily:"Inter",
    
  },
});