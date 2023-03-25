import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Texts from '../../components/atoms/Texts';
import TextInputs from '../../components/atoms/TexInput';
import Buttons from '../../components/atoms/Button';
import SelectDropdown from 'react-native-select-dropdown';
export default function SignIn({navigation}) {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  return (
    <View style={styles.container}>
      {/* <SelectDropdown
        data={countries}
        // dropdownOverlayColor={'red'}
        // dropdownStyle={{backgroundColor:'navy',borderWidth:2}}
        // searchInputStyle={{backgroundColor:"red"}}
        // rowStyle={{backgroundColor:}}
        buttonStyle={{backgroundColor:'white',borderRadius:20}}
        // searchInputTxtStyle={{backgroundColor:'navy'}}
        search
        onSelect={(selectedItem, index) => { 
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      /> */}
      <View style={{paddingBottom: 40}}>
        <Texts style={{fontSize: 24, fontWeight: 'bold', letterSpacing: 0.5}}>
          SOCIMED
        </Texts>
      </View>
      <TextInputs placeholder="Phone number, email or username" />
      <TextInputs placeholder="Password" isSecurity />
      <Buttons
        title={'Sign In'}
        styleBtn={{width: '85%'}}
        onPress={() => navigation.navigate('Home')}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Texts style={{color: '#6D6D6D', fontSize: 13}}>
          Forget your loginn details?
        </Texts>
        <View style={{left: 5}}>
          <Buttons
            title={'Get help logging in.'}
            btnofStyle
            textStyle={{fontSize: 13}}
            btnofcolor={'#23244F'}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
      <Buttons
        title={'Sign In with Facebook'}
        styleBtn={{width: '85%', marginTop: 100}}
        icon
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f8f4f5',
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    paddingVertical: 30,
  },
});
