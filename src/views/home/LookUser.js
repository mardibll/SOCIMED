import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icons from '../../components/atoms/Icons';

export default function LookUser({...props}) {
  const [first, setfirst] = useState(props.route.params);
  console.log('ini data saya', first);
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icons
              type={'AntDesign'}
              name={'arrowleft'}
              size={35}
              color={'black'}
            />
            <Text
              style={{
                left: 20,
                fontSize: 23,
                color: 'black',
                fontWeight: 'bold',
              }}>
              {first.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              right: 8,
              alignItems: 'center',
            }}>
            <Icons
              type={'Ionicons'}
              name={'notifications-outline'}
              size={33}
              color={'black'}
              right={20}
            />
            <Icons
              type={'MaterialCommunityIcons'}
              name={'dots-vertical'}
              size={35}
              color={'black'}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingTop: 20,
          }}>
          <LinearGradient
            colors={['white', 'blue', 'red', 'navy', 'yellow', 'red']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={{
              borderRadius: 100,
              height: 107,
              width: 107,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: first.profil}}
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: 'white',
              }}
              resizeMode={'center'}
            />
          </LinearGradient>
          <View style={{alignItems: 'center'}}>
            <Text>20</Text>
            <Text>Postingan</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>25</Text>
            <Text>Pengikut</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>15</Text>
            <Text>Mengikuti</Text>
          </View>
        </View>
        <Text>{first.name}</Text>
      </ScrollView>
    </View>
  );
}
// import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import ViewMoreText from 'react-native-view-more-text';
// import LinearGradient from 'react-native-linear-gradient';
// import Icons from '../../components/atoms/Icons';
// export default function LookUser({navigation, ...props}) {
//   // const data=props
//   // console.log(props.route.params);
//   const [datausers, setdatausers] = useState(props.route.params);
//   console.log(datausers);
//   const renderViewMore = onPress => {
//     return <Text onPress={onPress}> more</Text>;
//   };
//   function renderViewLess(onPress) {
//     return <Text onPress={onPress}> less</Text>;
//   }
//   return (
//     <View style={{}}>
//       <View
//         style={{
//           // backgroundColor: 'red',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           padding: 10,
//         }}>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Icons name={'arrowleft'} type={'AntDesign'} size={35} />
//           </TouchableOpacity>
//           <Text style={{left: 25}}>{datausers.name}</Text>
//         </View>
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Icons
//             name={'notifications-outline'}
//             type={'Ionicons'}
//             size={35}
//             right={20}
//           />
//           <Icons
//             name={'dots-vertical'}
//             type={'MaterialCommunityIcons'}
//             size={35}
//           />
//         </View>
//       </View>
//       <View
//         style={{
//           // backgroundColor: 'green',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           padding: 15,
//           alignItems: 'center',
//         }}>
//         <LinearGradient
//           colors={['white', 'blue', 'red', 'navy', 'yellow', 'red']}
//           start={{x: 0.0, y: 1.0}}
//           end={{x: 1.0, y: 1.0}}
//           style={{
//             height: 102,
//             width: 102,
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: 100,
//           }}>
//           <Image
//             source={{uri: datausers.photo}}
//             style={{
//               height: 95,
//               width: 95,
//               borderRadius: 100,
//               resizeMode: 'center',
//               borderWidth: 5,
//               borderColor: 'white',
//             }}
//           />
//         </LinearGradient>
//         <View style={{alignItems: 'center'}}>
//           <Text>30</Text>
//           <Text>Postingan</Text>
//         </View>
//         <View style={{alignItems: 'center'}}>
//           <Text>25</Text>
//           <Text>Pengikut</Text>
//         </View>
//         <View style={{alignItems: 'center'}}>
//           <Text>200</Text>
//           <Text>Mengikuti</Text>
//         </View>
//       </View>

//       <Text style={{}}>{datausers.name}</Text>
//       <View style={styles.container}>
//         {/* <MarqueeText
//         // membuat text bergerak
//         style={{fontSize: 24}}
//           speed={5}
//           marqueeOnStart={true}
//           loop={true}

//           delay={1000}>
//           Lorem Ipsum is simply
//         </MarqueeText> */}
//       </View>
//       <Text>ash</Text>
//       <ViewMoreText
//         numberOfLines={2}
//         renderViewMore={renderViewMore}
//         renderViewLess={renderViewLess}
//         // textStyle={{textAlign: 'center'}}
//       >
//         <Text>
//           Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie
//           constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum
//           cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
//         </Text>
//       </ViewMoreText>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: 'center',
//   },
// });
