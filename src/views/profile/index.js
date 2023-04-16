import {
  View,
  Text,
  ToastAndroid,
  TouchableOpacity,
  Alert,
  Button,
  PermissionsAndroid,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import Icons from '../../components/atoms/Icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {uploadImage} from '../../components/Image-Profil-User';
import {useIsFocused} from '@react-navigation/native';
import ModalButtonSheet from '../../components/ModalButtonSheet';
import {addList, profileHistory, userprofil} from '../../Database';
import {NavigationProfil} from '../../navigation/MaterialTopNav';
const {height, width} = Dimensions.get('window');
export default function Profile({navigation}) {
  const isFocused = useIsFocused();

  const [profile, setprofile] = useState('');

  useEffect(() => {
    if (isFocused) {
      ambildata();
    }
  }, [isFocused]);

  const ambildata = async () => {
    const data = await AsyncStorage.getItem('setProfile');
    if (data) setprofile(data);
  };
  const remove = async () => {
    setprofile('');
    await AsyncStorage.removeItem('setProfile');
  };

  const onUplodaProfile = async () => {
    // var images = await uploadImage();
    let option = {
      mediatype: 'Phoyo',
      Qality: 1,
      includeBase64: true,
    };
    var images = await launchImageLibrary(option, response => {});
    if (images.didCancel) {
      console.log('canceled image select');
    } else if (images.errorCode == 'permission') {
      console.log('permission not satisfied');
    } else if (images.errorCode == 'others') {
      console.log(images.errorMessage);
    } else if (images.assets[0].fileSize > 2097152) {
      Alert.alert('Maximum image size 2Mb'[{text: 'ok'}]);
    } else {
      await AsyncStorage.setItem('setProfile', images.assets[0].base64);
      setprofile(images.assets[0].base64);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={style.title}>
        <ModalButtonSheet
          action={
            <View style={style.Stylename}>
              <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
                mardimbuulolo
              </Text>
              <Icons type={'Entypo'} name={'chevron-small-down'} size={30} />
            </View>
          }
          textItem1={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: 'data:image/png;base64,' + profile}}
                  style={{
                    height: 70,
                    width: 70,
                    backgroundColor: 'red',
                    borderRadius: 100,
                  }}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    fontWeight: '500',
                    left: 20,
                  }}>
                  mardimbuulolo
                </Text>
              </View>
              <Icons type={'FontAwesome'} name={'dot-circle-o'} size={30} />
            </View>
          }
          textItem2={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  elevation: 0.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icons type={'MaterialIcons'} name={'add'} size={50} />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  left: 20,
                }}>
                Tambahkan Akun
              </Text>
            </View>
          }
        />

        <View style={style.styleicon}>
          <TouchableOpacity style={{paddingHorizontal: 15}}>
            <Icons
              type={'Octicons'}
              name={'diff-added'}
              size={30}
              color={'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingHorizontal: 12}}>
            <Icons type={'Feather'} name={'menu'} size={30} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={{padding: 15, backgroundColor: 'white'}}>
          <View style={style.StyleUser}>
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity onPress={onUplodaProfile}>
                <Image
                  source={{uri: 'data:image/png;base64,' + profile}}
                  style={style.StyleImage}
                />
              </TouchableOpacity>
              <Text style={style.UserName}>Mardi M Buulolo</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: '500', color: 'black'}}>
                1
              </Text>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
                Postingan
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: '500', color: 'black'}}>
                9
              </Text>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
                Pengikut
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 25, fontWeight: '500', color: 'black'}}>
                9
              </Text>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
                Mengikuti
              </Text>
            </View>
          </View>
          <View style={style.ListAction}>
            <TouchableOpacity style={style.Action}>
              <Text style={style.textAction}>Edit profil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.Action}>
              <Text style={style.textAction}>Bagikan profil</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icons
                type={'FontAwesome5'}
                name={'user-plus'}
                size={20}
                color={'black'}
                style={[style.Action, {paddingHorizontal: 8}]}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 15,
            }}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 15}}>
              Temukan orang
            </Text>
            <Text style={{color: 'blue', fontWeight: '600', fontSize: 15}}>
              Lihat semua
            </Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {profileHistory.map((i, x) => {
              console.log('data item', i);
              return (
                <View key={x}>
                  <View style={style.CardList}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('LookUser', i)}>
                      <Image
                        source={{uri: i.profil}}
                        style={{
                          height: 90,
                          width: 90,
                          borderRadius: 100,
                          alignSelf: 'center',
                        }}
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: '600',
                          fontSize: 17,
                          color: 'black',
                        }}>
                        {i.name}
                      </Text>
                    </TouchableOpacity>
                    <Text>Disarankan Untuk Anda</Text>
                    <TouchableOpacity>
                      <Text style={style.StyleIkuti}>Ikuti</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            height: height / 2.5,
          }}>
          <NavigationProfil />
        </View>
      </ScrollView>
    </View>
  );
}
const style = StyleSheet.create({
  styleicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Stylename: {
    flexDirection: 'row',
    flex: 1,
    width: 250,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  StyleUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 7,
  },
  StyleImage: {
    height: 90,
    width: 90,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  UserName: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
    paddingTop: 8,
  },
  ListAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  Action: {
    backgroundColor: 'grey',
    padding: 7,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  textAction: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  CardList: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
    padding: 15,
    marginLeft: 5,
  },
  StyleIkuti: {
    backgroundColor: 'blue',
    padding: 6,
    paddingHorizontal: 45,
    marginTop: 35,
    borderRadius: 10,
  },
});
