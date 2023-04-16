import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function ModalButtonSheet({
  action,
  height,
  textItem1,
  StyletextItem1,
  textItem2,
  StyletextItem2,
  styles,
}) {
  const refRBSheet = useRef();
  return (
    <View>
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={styles}>
        <Text>{action}</Text>
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        minClosingHeight={10}
        height={height}
        customStyles={{
          container: {
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            padding: 10,
            paddingHorizontal: 20,
          },
          wrapper: {
            backgroundColor: 'transparent',
          },

          draggableIcon: {
            backgroundColor: 'grey',
          },
        }}>
        <View>
          <TouchableOpacity style={StyletextItem1}>
            {textItem1}
          </TouchableOpacity>
          <TouchableOpacity style={StyletextItem2}>
            {textItem2}
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
}
