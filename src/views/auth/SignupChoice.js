import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Texts from '../../components/atoms/Texts';
import TextInputs from '../../components/atoms/TexInput';
import Buttons from '../../components/atoms/Button';
export default function SignupChoice({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{paddingBottom: 40}}>
        <Texts style={{fontSize: 24, fontWeight: 'bold', letterSpacing: 0.5}}>
          SOCIMED
        </Texts>
      </View>
      <TextInputs placeholder="Phone number, email or username" />
      <TextInputs placeholder="Password" isSecurity />
      <Buttons title={'Sign Up'} styleBtn={{width: '85%'}} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Texts style={{color: '#6D6D6D', fontSize: 13}}>
          Already have an account?
        </Texts>
        <View style={{left: 5}}>
          <Buttons
            title={'Sign in'}
            btnofStyle
            btnofcolor={'#23244F'}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
      <View style={styles.or}>
        <View style={{borderWidth: 0.2, width: 135}} />
        <Texts style={{color: '#6D6D6D', fontWeight: 'bold'}}>OR</Texts>
        <View style={{borderWidth: 0.2, width: 135}} />
      </View>
      <Buttons title={'Sign Up with Facebook'} styleBtn={{width: '85%'}} icon />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    paddingVertical: 30,
  },
});
