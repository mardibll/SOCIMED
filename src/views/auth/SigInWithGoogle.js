import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const {idToken} = userInfo;
    console.log('sdhudhsiu', userInfo);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log(error);
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log(error);
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log(error);
      // play services not available or outdated
    } else {
      console.log(error);
      // some other error happened
    }
  }
};
export const constgetCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    console.log(userInfo);
    // this.setState({userInfo});
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // user has not signed in yet
    } else {
      // some other error
    }
  }
};
export const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    // this.setState({user: null}); // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};
export const isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  console.log(isSignedIn);
  // this.setState({isLoginScreenPresented: !isSignedIn});
};
export const getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  console.log(currentUser);
  // this.setState({currentUser});
};
export const revokeAccess = async () => {
  try {
    await GoogleSignin.revokeAccess();
    // console.log(tab);
    // Google Account disconnected from your app.
    // Perform clean-up actions, such as deleting data associated with the disconnected account.
  } catch (error) {
    console.error(error);
  }
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // google services are available
  } catch (err) {
    console.error('play services are not available');
  }
};
