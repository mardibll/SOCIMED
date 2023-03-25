import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import ViewMoreText from 'react-native-view-more-text';
export default function LookUser({...props}) {
  // const data=props
  // console.log(props.route.params);
  // const [first, setfirst] = useState(props.route.params);
  // console.log(first);
  const renderViewMore = onPress => {
    return <Text onPress={onPress}> more</Text>;
  };
  function renderViewLess(onPress) {
    return <Text onPress={onPress}> less</Text>;
  }
  return (
    <View>
      {/* <Image source={{uri: first.photo}} style={{height: 100, width: 100}} />
      <Text style={{}}>{first.name}</Text> */}
      {/* <View style={styles.container}>
        <MarqueeText
        // membuat text bergerak
          style={{fontSize: 24}}
          speed={5}
          marqueeOnStart={true}
          loop={true}
          
          delay={1000}>
          Lorem Ipsum is simply
        </MarqueeText> */}
      {/* </View> */}
      <Text>ash</Text>
      <ViewMoreText
        numberOfLines={2}
        renderViewMore={renderViewMore}
        renderViewLess={renderViewLess}
        // textStyle={{textAlign: 'center'}}
      >
        <Text>
          Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri molestie
          constituto eu. Eum enim tantas sadipscing ne, ut omnes malorum nostrum
          cum. Errem populo qui ne, ea ipsum antiopam definitionem eos.
        </Text>
      </ViewMoreText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
  },
});
