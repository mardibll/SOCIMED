import {
  ToastAndroid,
  Alert,
  PermissionsAndroid,
  View,
  Text,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const takePicture = async camera => {
  const options = {quality: 0.5, base64: true};
  const data = await camera.takePictureAsync(options);
};

export const setdata = msg => {
  ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
};
export const requestCameraPermission = async () => {
  let isPermition = false;
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // console.log('You can use the camera');
      isPermition = true;
    } else {
      // console.log('Camera permission denied');
      isPermition = false;
    }
  } catch (err) {
    isPermition = false;
    // console.warn(err);
  }
  return isPermition;
};

export const uploadImage = async () => {
  let option = {
    mediatype: 'Phoyo',
    Qality: 1,
    includeBase64: true,
  };
  var status = await requestCameraPermission();
  if (status) {
    return launchImageLibrary(option, response => {
      // if (response.didCancel) {
      //   setdata('canceled image select');
      // } else if (response.errorCode == 'permission') {
      //   setdata('permission not satisfied');
      // } else if (response.errorCode == 'others') {
      //   setdata(response.errorMessage);
      // } else if (response.assets[0].fileSize > 2097152) {
      //   Alert.alert('Maximum image size 2Mb'[{text: 'ok'}]);
      // } else {
      //   // images = response;
      // }
    });
  }
};
export const removeImage = () => {
  setdata('remove Provile');
};
