import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from '../../components/atoms/Icons';
import {addList, profileHistory, userprofil} from '../../Database';
import LinearGradient from 'react-native-linear-gradient';
import ViewMoreText from 'react-native-view-more-text';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {uploadImage} from '../../components/Image-Profil-User';
import {useIsFocused} from '@react-navigation/native';
const icon = [
  <Icons type={'Octicons'} name={'diff-added'} size={20} color={'black'} />,
  <Icons type={'AntDesign'} name={'hearto'} size={20} color={'black'} />,
  <Icons
    type={'MaterialCommunityIcons'}
    name={'facebook-messenger'}
    size={20}
    color={'black'}
  />,
];
export default function Home({navigation}) {
  const isFocused = useIsFocused();
  const [profiles, setprofile] = useState('');
  const [selectindex, setselectindex] = useState({});
  const [ItemsData, setItemsData] = useState([]);

  useEffect(() => {
    if (isFocused) {
      ambildata();
    }
  }, [isFocused]);

  const ambildata = async () => {
    const data = await AsyncStorage.getItem('setProfile');
    setprofile(data);
  };

  const remove = async () => {
    setprofile('');
    await AsyncStorage.removeItem('setProfile');
  };

  const onUplodaProfile = async () => {
    var images = await uploadImage();
    console.log('images', images);
    await AsyncStorage.setItem('setProfile', images.assets[0].base64);
    setprofile(images.assets[0].base64);
  };

  // useEffect(() => {
  //   var newList = addList.map((x, i) => {
  //     x['selected'] = false;
  //     return x;
  //   });
  //   setItemsData(newList);
  // }, []);

  const onChangeIndex = (items, index) => {
    var newadata = [...ItemsData];
    // console.log('data yang di klik ', items);
    // console.log('data array yang sama dengan yang  di klik ', newadata);

    // //check item yang di klik sama dengan salah satu item didalam array divalidasinya dengan index yang di klik
    if (items.icons === newadata[index].icons) {
      newadata[index].selected = !newadata[index].selected;
    }
    //  else {
    //   newadata[index].selected = false;
    // }
    setItemsData(newadata);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          backgroundColor: 'red',
        }}>
        <View style={styles.title}>
          <Text>SOCIMED</Text>
          <View style={{flexDirection: 'row'}}>
            {icon.map((i, x) => (
              <View key={x}>
                <Text style={{marginHorizontal: 10}}>{i}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          style={styles.scrolhorizontal}
          showsHorizontalScrollIndicator={false}>
          <View style={{}}>
            <TouchableOpacity onPress={onUplodaProfile}>
              <Image
                source={{uri: 'data:image/png;base64,' + profiles}}
                style={{
                  height: 85,
                  width: 85,
                  borderRadius: 100,
                  backgroundColor: 'red',
                }}
              />
            </TouchableOpacity>

            {/* <AvatarUser
              atas={
                <Icons
                  type={'Ionicons'}
                  name={'ios-add-circle-sharp'}
                  size={25}
                  color={'blue'}
                />
              }
              style={styles.story}
              styleIconAdd={{position: 'absolute', bottom: 5, left: 20}}
              source={{uri: 'data:image/png;base64,' + profiles}}
            /> */}
            {/* <Image
              source={{
                uri: userprofil.profil,
              }}
              style={styles.story}
            /> */}
            <Text style={{paddingTop: 10}}>Cerita Anda</Text>
            {/* <Text style={{position: 'absolute', bottom: 40, left: 60}}>
              <Icons
                type={'Ionicons'}
                name={'ios-add-circle-sharp'}
                size={20}
                color={'blue'}
              />
              ,
            </Text> */}
          </View>
          {profileHistory.map((item, index) => {
            return (
              <View
                key={index}
                style={{marginHorizontal: 8, alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('StatusFolowers', item)}>
                  <LinearGradient
                    colors={['white', 'blue', 'red', 'navy', 'yellow', 'red']}
                    start={{x: 0.0, y: 1.0}}
                    end={{x: 1.0, y: 1.0}}
                    style={{
                      padding: 5,
                      borderRadius: 100,
                    }}>
                    <Image source={{uri: item.profil}} style={styles.profil} />
                  </LinearGradient>
                </TouchableOpacity>
                <Text style={{paddingVertical: 5}}>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>
        {profileHistory.map((item, index) => {
          return (
            <View key={index} style={{marginBottom: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('LookUser', item)}>
                    <LinearGradient
                      colors={['white', 'blue', 'red', 'navy', 'yellow', 'red']}
                      start={{x: 0.0, y: 1.0}}
                      end={{x: 1.0, y: 1.0}}
                      style={{
                        borderRadius: 100,
                        height: 72,
                        width: 72,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={{uri: item.profil}}
                        style={[styles.profil, {height: 65, width: 65}]}
                      />
                    </LinearGradient>
                  </TouchableOpacity>
                  <Text style={{left: 20}}>{item.name}</Text>
                </View>
                <Icons
                  type={'Entypo'}
                  name={'dots-three-vertical'}
                  color={'black'}
                  size={20}
                />
              </View>
              <Image
                source={{uri: item.status.image}}
                style={{height: 400, width: '100%', resizeMode: 'stretch'}}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 15,
    width: 200,
  },
  title: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  scrolhorizontal: {
    flexDirection: 'row',
    paddingLeft: 17,
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  story: {
    height: 80,
    width: 80,
    marginTop: 5,
    borderRadius: 100,
    borderColor: 'white',
    resizeMode: 'center',
  },
  profil: {
    height: 80,
    width: 80,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
    resizeMode: 'center',
  },
  getuser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 15,
  },
  gradiand: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  imguser: {
    height: 60,
    width: 60,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: 'white',
  },
  picture: {
    height: 350,
    width: '100%',
    resizeMode: 'stretch',
  },
  character: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
