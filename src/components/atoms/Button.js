import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Texts from './Texts';
import Icons from './Icons';

export default function Buttons({
  textStyle,
  title,
  type,
  bordered,
  styleBtn,
  bgColor,
  colors,
  icon,
  btnofStyle,
  onPress,
  btnofcolor,
  ...props
}) {
  var styledbtn = [
    styles.btn,
    styleBtn,

    type == 'small' && {width: '50%'},
    type == 'large' && {width: '100%'},
    bordered
      ? {
          //
          backgroundColor: bgColor ? bgColor : '#1677FF',
        }
      : {backgroundColor: bgColor ? bgColor : '#1877F2'},
    // colors?{
    //     backgroundColor: bgColor ? bgColor :'grey',
    //   }
    // : {backgroundColor: bgColor ? bgColor : 'red'},
    ,
  ];
  var styledbtntext = [styles.btnText, textStyle];
  return (
    <>
     
      {btnofStyle ? (
        <TouchableOpacity onPress={onPress}>
          <Texts style={[styledbtntext,{color:btnofcolor?btnofcolor:'black'}]}>{title}</Texts>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
        activeOpacity={0.7}
        style={styledbtn}
        {...props}
        onPress={onPress}>
        {icon ? (
          <Icons
            name={'facebook-f'}
            type={'FontAwesome'}
            size={20}
            color={'white'}
            style={{paddingRight: 15}}
          />
        ) : (
          false
        )}
        <Texts style={styledbtntext}>{title}</Texts>
      </TouchableOpacity>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    borderRadius: 5,
    padding: 13,
    justifyContent: 'center',
    margin: 10,
    flexDirection: 'row',
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
