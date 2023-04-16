import {
  View,
  Text,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icons from '../../components/atoms/Icons';
import ModalButtonSheet from '../../components/ModalButtonSheet';
const windowHeight = Dimensions.get('window').height;
export default function StatusFolowers({navigation, ...props}) {
  const tampung = props.route.params;
  const icon = () => {
    return (
      <View>
        <Text>sjjhs</Text>
      </View>
    );
  };
  const [first, setfirst] = useState(props.route.params);
  console.log(first);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
      }}>
      <View style={{position: 'absolute', zIndex: 99999}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 12,
          }}>
          <TouchableOpacity
            style={{width: '90%'}}
            onPress={() => navigation.navigate('LookUser', tampung)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  source={{uri: first.profil}}
                  style={{height: 50, width: 50, borderRadius: 100}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  left: 20,
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 500,
                }}>
                {first.name}
              </Text>
            </View>
          </TouchableOpacity>
          <ModalButtonSheet
            action={
              <Icons
                type={'Entypo'}
                name={'dots-three-vertical'}
                color={'white'}
                size={20}
              />
            }
            height={145}
            textItem1={'Laporkan'}
            StyletextItem1={{color: 'red', fontSize: 19}}
            textItem2={'Senyapkan'}
            StyletextItem2={{
              color: 'black',
              fontSize: 19,
              // backgroundColor: 'red',
              top: 20,
            }}
            // textItem1={
            //   <View>
            //     <Text>jijiji</Text>
            //   </View>
            // }
            // textItem1={true ? 'Laporkan' : false}
            // textItem2={'Senyapkan'}
          />
        </View>
      </View>

      <View style={{paddingTop: 170}}>
        <Image
          source={{uri: first.status.image}}
          style={{
            height: 400,
            width: '100%',
            resizeMode: 'stretch',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            padding: 12,
            alignSelf: 'flex-end',
          }}>
          <Icons
            type={'AntDesign'}
            name={'hearto'}
            size={25}
            color={'white'}
            right={15}
          />
          <Icons type={'Feather'} name={'send'} size={25} color={'white'} />
        </View>
      </View>
    </View>
  );
}
