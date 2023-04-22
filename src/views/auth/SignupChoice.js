import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Texts from '../../components/atoms/Texts';
import TextInputs from '../../components/atoms/TexInput';
import Buttons from '../../components/atoms/Button';
import {useDispatch, useSelector} from 'react-redux';
import {SetRegist} from '../../redux/TypeRedux';
import {Validasiregister} from './Validasi';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {
  constgetCurrentUserInfo,
  getCurrentUser,
  googleLogin,
  isSignedIn,
  revokeAccess,
  signOut,
} from './SigInWithGoogle';

export default function SignupChoice({navigation}) {
  useEffect(() => {
    GoogleSignin.configure({
      // webClientId: 'YOUR_WEB_CLIENT_ID_HERE',
      // offlineAccess: true,
      // scopes: [
      //   'https://www.googleapis.com/auth/userinfo.email',
      //   'https://www.googleapis.com/auth/userinfo.profile',
      //   'https://www.googleapis.com/auth/contacts.readonly',
      // ],
    });
  }, []);
  const [first, setfirst] = useState([]);
  const [arry, setarry] = useState([]);
  // console.log('first', arry);
  const RegisterRedux = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(RegisterRedux, 'data redux');
  }, [RegisterRedux]);
  const passwordValid = '^(?=.{5,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$';
  const SignUp = () => {
    // Validasiregister();
    // console.log(Validasiregister());
    // if (RegisterRedux.form.Username === '') {
    //   Alert.alert('isi data');
    // }
    // console.log('ini data', RegisterRedux.form);
    setfirst([RegisterRedux.form]);
    const tampung = [];
    first.forEach((items, index) => {
      // console.log('forech', items);
      // return;
      tampung.push(items);
    });
    setarry(tampung);
  };

  const oninputChange = (value, input) => {
    dispatch({type: SetRegist, inputType: input, inputValue: value});
  };

  return (
    <View style={styles.container}>
      <View style={{paddingBottom: 40}}>
        {/* <View>{tampung}</View> */}
        <Texts style={{fontSize: 24, fontWeight: 'bold', letterSpacing: 0.5}}>
          SOCIMED
        </Texts>
        {arry.map((i, x) => {
          console.log('ini', i);
          return (
            <View key={x}>
              <Text>{i.Password}</Text>
              <Text>{i.Username}</Text>
            </View>
          );
        })}
      </View>
      <TextInputs
        placeholder="Phone number, email or username"
        value={RegisterRedux.form.Username}
        onChangeText={value => oninputChange(value, 'Username')}
      />
      <TextInputs
        placeholder="Password"
        isSecurity
        value={RegisterRedux.form.Password}
        onChangeText={value => oninputChange(value, 'Password')}
      />
      <Buttons
        title={'Sign Up'}
        styleBtn={{width: '85%'}}
        onPress={() => SignUp()}
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Texts style={{color: '#6D6D6D', fontSize: 13}}>
          Already have an account?
        </Texts>
        <View style={{left: 5}}>
          <Buttons
            title={'Sign in'}
            btnofStyle
            btnofcolor={'#23244F'}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
      <View style={styles.or}>
        <View style={{borderWidth: 0.2, width: 135}} />
        <Texts style={{color: '#6D6D6D', fontWeight: 'bold'}}>OR</Texts>
        <View style={{borderWidth: 0.2, width: 135}} />
      </View>
      <Buttons
        title={'Sign Up with Facebook'}
        styleBtn={{width: '85%'}}
        icon
        onPress={googleLogin}
      />
      <Buttons
        title={'isSignedIn'}
        styleBtn={{width: '85%'}}
        onPress={isSignedIn}
      />
      <Buttons
        title={'getCurrentUser'}
        styleBtn={{width: '85%'}}
        onPress={getCurrentUser}
      />
      <Buttons
        title={'SignOut Gmail'}
        styleBtn={{width: '85%'}}
        onPress={signOut}
      />
      <Buttons
        title={'revokeAccess'}
        styleBtn={{width: '85%'}}
        onPress={revokeAccess}
      />
      <Buttons
        title={'constgetCurrentUserInfo'}
        styleBtn={{width: '85%'}}
        onPress={constgetCurrentUserInfo}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    paddingVertical: 30,
  },
});
