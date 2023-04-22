import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';

export const Validasiregister = value => {
  // if (value['key'] === 'Username') {
  //  if (value.) {

  //  } else {

  //  }
  // }
  // return 'Valid';

  const RegisterRedux = useSelector(state => state.RegisterReducer);
  //   useEffect(() => {
  console.log(RegisterRedux, 'Regiter');
  //   }, []);

  //   const dispatch = useDispatch;

  // if (condition) {

  // } else {

  // }
};
