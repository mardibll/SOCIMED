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
  const [selectindex, setselectindex] = useState({});
  // console.log('select', selectindex);
  const [ItemsData, setItemsData] = useState([]);
  // console.log(ItemsData);
  useEffect(() => {
    var newList = addList.map((x, i) => {
      x['selected'] = false;
      return x;
    });
    setItemsData(newList);
  }, []);

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
            <Image
              source={{
                uri: userprofil.profil,
              }}
              style={styles.story}
            />
            <Text style={{position: 'absolute', bottom: 40, left: 60}}>
              <Icons
                type={'Ionicons'}
                name={'ios-add-circle-sharp'}
                size={20}
                color={'blue'}
              />
              ,
            </Text>
          </View>
          {[...profileHistory, ...profileHistory, ...profileHistory].map(
            (item, index) => {
              return (
                <View
                  key={index}
                  style={{marginHorizontal: 8, alignItems: 'center'}}>
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
                  <Text style={{paddingVertical: 5}}>{item.name}</Text>
                </View>
              );
            },
          )}
        </ScrollView>

        <View>
          {ItemsData.map((items, index) => {
            return (
              <View key={index}>
                <View style={styles.getuser}>
                  {items.profil.map((p, pi) => {
                    return (
                      <View key={pi}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('LookUser', p)}
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',

                            width: 330,
                          }}>
                          <LinearGradient
                            colors={[
                              'white',
                              'blue',
                              'red',
                              'navy',
                              'yellow',
                              'red',
                            ]}
                            start={{x: 0.0, y: 1.0}}
                            end={{x: 1.0, y: 1.0}}
                            style={styles.gradiand}>
                            <Image
                              source={{uri: p.photo}}
                              style={styles.imguser}
                            />
                          </LinearGradient>
                          <Text style={{paddingLeft: 20}}>{p.name}</Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })}

                  <Text>{items.icons}</Text>
                </View>
                <View>
                  {items.ststus.map((sItem, sindex) => {
                    return (
                      <View key={sindex}>
                        <Image
                          source={{uri: sItem.picture}}
                          style={styles.picture}
                        />
                      </View>
                    );
                  })}
                </View>
                <View style={{paddingHorizontal: 17, marginRight: 30}}>
                  <View style={{paddingVertical: 7}}>
                    {items.character.map((i, x) => {
                      console.log(i);
                      return (
                        <View key={x} style={styles.character}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text>{i.icon2}</Text>
                            {/* <Text style={{paddingHorizontal: 15}}>
                              {i.icon2}
                            </Text> */}
                            {/* <Text style={{}}>{i.icon3}</Text> */}
                          </View>
                          {/* <Text style={{}}>{i.icon4}</Text> */}
                        </View>
                      );
                    })}
                  </View>
                  <View>
                    {items.moments.map((moment, mi) => {
                      return (
                        <View key={mi}>
                          <Text>{moment.others}</Text>
                          <View
                            style={
                              {
                                // backgroundColor: 'red',
                                // flexDirection: 'row',
                                // width: '100%',
                                // alignmoments: 'center',
                              }
                            }>
                            <Text
                              style={{flex: 1, textAlign: 'justify'}}
                              // numberOfLines={2}
                            >
                              <Text>
                                {items.selected
                                  ? moment.notif
                                  : moment.notif.substring(82, '')}
                              </Text>{' '}
                              <Text
                                onPress={() => onChangeIndex(items, index)}
                                style={{color: 'red'}}>
                                {items.selected ? ' Hidden' : 'View more'}
                              </Text>
                            </Text>
                          </View>
                          <Text>View all {moment.addcomend} comments</Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
                <View style={{padding: 15}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={{uri: userprofil.profil}}
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                      }}
                    />
                    <TextInput
                      placeholder="Tambahkan Komentar..."
                      style={{paddingLeft: 20}}
                      // onFocus={first(true)}
                    />
                  </View>
                  <Text>2 hari yang lalu</Text>
                </View>
              </View>
            );
          })}
        </View>
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
