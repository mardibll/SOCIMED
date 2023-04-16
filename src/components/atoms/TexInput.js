import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Icons from './Icons';
import Texts from './Texts';

export default function TextInputs({
  onPress,
  textColor,
  containerStyle,
  styles,
  typeicon,
  nameicon,
  icon,
  title,
  value,
  isSecurity,
  inputContainer,
  ...props
}) {
  const [securePassword, setsecurePassword] = useState(true);
  return (
    <View style={[style.containerInput, inputContainer]}>
      <View style={style.container}>
        <TextInput
          placeholderTextColor="grey"
          {...props}
          style={[styles, style.input]}
          value={value}
          secureTextEntry={isSecurity && securePassword}
        />
        {isSecurity && (
          <TouchableOpacity
            style={{paddingHorizontal: 10}}
            onPress={() => {
              setsecurePassword(!securePassword);
            }}>
            <Icons
              {...props}
              type={'FontAwesome'}
              name={securePassword ? 'eye-slash' : 'eye'}
              size={25}
              color={textColor ? textColor : 'grey'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    // backgroundColor:"red",
  },
  containerInput: {
    width: '85%',
    borderRadius: 5,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#ffffff',
    margin: 12,
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  icon: {
    marginHorizontal: 6,
    marginRight: 15,
  },
});
