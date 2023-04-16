import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function PostinganAnda() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Foto dan Video Tentang Anda</Text>
      <Text style={style.text}>
        ketika orang menandai Anda dalam foto dan video, mereka akan muncul di
        sini
      </Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    width: 235,
    textAlign: 'center',
    letterSpacing: 1,
  },
  text: {
    fontSize: 16,
    letterSpacing: 1,
    width: 290,
    textAlign: 'center',
  },
});
